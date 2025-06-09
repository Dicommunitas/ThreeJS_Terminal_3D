
/**
 * @fileOverview Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 *
 * Responsabilidades (Pós-Refatoração de useSceneSetup):
 * - Utilizar o hook orquestrador `useSceneSetup` para obter refs para os componentes da cena (cena, câmera, renderizadores, controles) e flags de prontidão.
 * - Utilizar `useEquipmentRenderer` para gerenciar os meshes dos equipamentos.
 * - Utilizar `useAnnotationPinRenderer` para gerenciar os pins de anotação.
 * - Utilizar `useMouseInteractionManager` para processar interações do mouse.
 * - Utilizar `useSceneOutline` para aplicar efeitos de contorno.
 * - Utilizar `useAnimationLoop` para o loop de renderização, passando uma flag de prontidão combinada.
 * - Aplicar estados de câmera programáticos e lidar com o enquadramento de sistemas.
 * - Renderizar o elemento de montagem (`div`) para a cena.
 *
 * ```mermaid
 * classDiagram
 *   class ThreeSceneProps {
 *     +equipment: Equipment[]
 *     +allEquipmentData: Equipment[]
 *     +layers: Layer[]
 *     +annotations: Annotation[]
 *     +selectedEquipmentTags: string[] | undefined
 *     +onSelectEquipment(tag: string | null, isMultiSelect: boolean): void
 *     +hoveredEquipmentTag: string | null | undefined
 *     +setHoveredEquipmentTag(tag: string | null): void
 *     +cameraState: CameraState
 *     +onCameraChange(cameraState: CameraState, actionDescription?: string): void
 *     +initialCameraPosition: Point3D
 *     +initialCameraLookAt: Point3D
 *     +colorMode: ColorMode
 *     +targetSystemToFrame: TargetSystemInfo | null
 *     +onSystemFramed(): void
 *   }
 *   class Point3D {
 *     +x: number
 *     +y: number
 *     +z: number
 *   }
 *   class Equipment, Layer, Annotation, CameraState, ColorMode, TargetSystemInfo {
 *   }
 *   ThreeSceneProps ..> Equipment
 *   ThreeSceneProps ..> Layer
 *   ThreeSceneProps ..> Annotation
 *   ThreeSceneProps ..> CameraState
 *   ThreeSceneProps ..> ColorMode
 *   ThreeSceneProps ..> Point3D
 *   ThreeSceneProps ..> TargetSystemInfo
 *   class ThreeScene {
 *   }
 *   class ReactFC {
 *   }
 *   ThreeScene --|> ReactFC
 *   ThreeScene ..> useSceneSetup : (Orchestrator Hook)
 *   ThreeScene ..> useEquipmentRenderer
 *   ThreeScene ..> useAnnotationPinRenderer
 *   ThreeScene ..> useMouseInteractionManager
 *   ThreeScene ..> useSceneOutline
 *   ThreeScene ..> useAnimationLoop
 * ```
 */
"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';

// Hooks
import { useSceneSetup, type UseSceneSetupReturn } from '@/hooks/use-scene-setup';
import { useEquipmentRenderer } from '@/hooks/use-equipment-renderer';
import { useAnnotationPinRenderer } from '@/hooks/use-annotation-pin-renderer';
import { useMouseInteractionManager } from '@/hooks/use-mouse-interaction';
import { useSceneOutline } from '@/hooks/use-scene-outline';
import { useAnimationLoop } from '@/hooks/use-animation-loop';

// Types & Utils
import type { Equipment, Layer, CameraState, Annotation, ColorMode, TargetSystemInfo, SystemViewOptions, SystemView } from '@/lib/types';
import { getEquipmentColor } from '@/core/graphics/color-utils';
import { createGeometryForItem } from '@/core/three/equipment-geometry-factory';
import { calculateViewForMeshes } from '@/core/three/camera-utils';


export interface ThreeSceneProps {
  equipment: Equipment[];
  allEquipmentData: Equipment[];
  layers: Layer[];
  annotations: Annotation[];
  selectedEquipmentTags: string[] | undefined;
  onSelectEquipment: (tag: string | null, isMultiSelectModifierPressed: boolean) => void;
  hoveredEquipmentTag: string | null | undefined;
  setHoveredEquipmentTag: (tag: string | null) => void;
  cameraState: CameraState;
  onCameraChange: (cameraState: CameraState, actionDescription?: string) => void;
  initialCameraPosition: { x: number; y: number; z: number };
  initialCameraLookAt: { x: number; y: number; z: number };
  colorMode: ColorMode;
  targetSystemToFrame: TargetSystemInfo | null;
  onSystemFramed: () => void;
}

const ANIMATION_DURATION_MS = 700;

const positionEqualsWithTolerance = (v1: THREE.Vector3, v2: THREE.Vector3, epsilon: number = 0.001): boolean => {
  return (
    Math.abs(v1.x - v2.x) < epsilon &&
    Math.abs(v1.y - v2.y) < epsilon &&
    Math.abs(v1.z - v2.z) < epsilon
  );
};

const ThreeScene: React.FC<ThreeSceneProps> = (props) => {
  const {
    equipment,
    allEquipmentData,
    layers,
    annotations,
    selectedEquipmentTags,
    onSelectEquipment,
    hoveredEquipmentTag,
    setHoveredEquipmentTag,
    cameraState: programmaticCameraState,
    onCameraChange,
    initialCameraPosition,
    initialCameraLookAt,
    colorMode,
    targetSystemToFrame,
    onSystemFramed,
  } = props;

  const mountRef = useRef<HTMLDivElement>(null);

  const {
    sceneRef,
    cameraRef,
    rendererRef, // Added from new useSceneSetup
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady,      // Represents readiness of core, renderers, elements
    isControlsReady,   // Specific readiness for OrbitControls
  }: UseSceneSetupReturn = useSceneSetup({ // Now the orchestrator
    mountRef,
    initialCameraPosition,
    initialCameraLookAt,
    onCameraChange,
  });

  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

  const isAnimatingRef = useRef(false);
  const animationStartTimeRef = useRef(0);
  const animationStartPosRef = useRef<THREE.Vector3 | null>(null);
  const animationStartLookAtRef = useRef<THREE.Vector3 | null>(null);
  const animationTargetPosRef = useRef<THREE.Vector3 | null>(null);
  const animationTargetLookAtRef = useRef<THREE.Vector3 | null>(null);
  const animationOnCompleteCallbackRef = useRef<(() => void) | null>(null);

  const createSingleEquipmentMesh = useCallback((item: Equipment): THREE.Object3D => {
    const finalColor = getEquipmentColor(item, colorMode);
    const material = new THREE.MeshStandardMaterial({
      color: finalColor, metalness: 0.3, roughness: 0.6, transparent: false, opacity: 1.0,
    });
    const geometry = createGeometryForItem(item);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(item.position.x, item.position.y, item.position.z);
    if (item.rotation) mesh.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
    mesh.userData = { tag: item.tag, type: item.type, sistema: item.sistema };
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.visible = true;
    return mesh;
  }, [colorMode]);

  const equipmentMeshesRef = useEquipmentRenderer({
    sceneRef,
    cameraRef, // Passed for potential future use, not strictly needed by current useEquipmentRenderer
    controlsRef, // Passed for potential future use
    isSceneReady, // Base scene components must be ready
    isControlsReady, // Controls must be ready if renderer depends on them for some logic (currently not)
    equipmentData: equipment,
    layers,
    colorMode,
    createSingleEquipmentMesh,
    groundMeshRef,
  });

  useAnnotationPinRenderer({
    sceneRef,
    labelRendererRef,
    isSceneReady, // Pins need renderers and scene to be ready
    annotations,
    allEquipmentData,
    layers,
  });

  useMouseInteractionManager({
    mountRef,
    cameraRef,
    equipmentMeshesRef,
    isSceneReady: isSceneReady && isControlsReady, // Interaction needs everything ready
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef,
    selectedEquipmentTags,
    hoveredEquipmentTag,
    isSceneReady, // Outline pass needs renderers to be ready
  });

  const startCameraAnimation = useCallback((targetPos: THREE.Vector3, targetLookAt: THREE.Vector3, onComplete?: () => void) => {
    if (!cameraRef.current || !controlsRef.current) {
      onComplete?.();
      return;
    }
    animationStartPosRef.current = cameraRef.current.position.clone();
    animationStartLookAtRef.current = controlsRef.current.target.clone();
    animationTargetPosRef.current = targetPos;
    animationTargetLookAtRef.current = targetLookAt;
    animationStartTimeRef.current = performance.now();
    isAnimatingRef.current = true;
    animationOnCompleteCallbackRef.current = onComplete || null;
    if (controlsRef.current) controlsRef.current.enabled = false;
  }, [cameraRef, controlsRef]);

  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);
      const isAlreadyAtTarget = positionEqualsWithTolerance(cameraRef.current.position, targetPosition) && positionEqualsWithTolerance(controlsRef.current.target, targetLookAt);
      if (!isAlreadyAtTarget && !isAnimatingRef.current) {
        startCameraAnimation(targetPosition, targetLookAt);
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, startCameraAnimation, cameraRef, controlsRef]);

  useEffect(() => {
    if (!targetSystemToFrame) return;
    if (!sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady) {
      onSystemFramedRef.current?.();
      return;
    }
    const equipmentMeshesToConsider = equipmentMeshesRef.current;
    if (!equipmentMeshesToConsider || (equipmentMeshesToConsider.length === 0 && targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM')) {
      onSystemFramedRef.current?.();
      return;
    }
    let systemMeshes: THREE.Object3D[] = [];
    if (targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM') {
      systemMeshes = equipmentMeshesToConsider.filter(mesh => mesh.userData.sistema === targetSystemToFrame.systemName && mesh.visible);
      if (systemMeshes.length === 0) {
        onSystemFramedRef.current?.();
        return;
      }
    } else {
      onSystemFramedRef.current?.();
      return;
    }
    const viewOptions: SystemViewOptions | null = calculateViewForMeshes(systemMeshes, cameraRef.current);
    if (viewOptions) {
      let selectedView: SystemView;
      switch (targetSystemToFrame.viewIndex) {
        case 1: selectedView = viewOptions.topDown; break;
        case 2: selectedView = viewOptions.isometric; break;
        default: selectedView = viewOptions.default; break;
      }
      const targetPositionVec = new THREE.Vector3(selectedView.position.x, selectedView.position.y, selectedView.position.z);
      const targetLookAtVec = new THREE.Vector3(selectedView.lookAt.x, selectedView.lookAt.y, selectedView.lookAt.z);
      startCameraAnimation(targetPositionVec, targetLookAtVec, () => {
        if (cameraRef.current && controlsRef.current && onCameraChangeRef.current) {
          const finalStateAfterFocus: CameraState = {
            position: cameraRef.current.position.clone(),
            lookAt: controlsRef.current.target.clone(),
          };
          onCameraChangeRef.current(finalStateAfterFocus, `Foco no sistema ${targetSystemToFrame.systemName} (visão ${targetSystemToFrame.viewIndex})`);
        }
        onSystemFramedRef.current?.();
      });
    } else {
      onSystemFramedRef.current?.();
    }
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef, startCameraAnimation]);

  const handleFrameUpdate = useCallback(() => {
    if (isAnimatingRef.current && cameraRef.current && controlsRef.current && animationStartPosRef.current && animationStartLookAtRef.current && animationTargetPosRef.current && animationTargetLookAtRef.current) {
      const elapsedTime = performance.now() - animationStartTimeRef.current;
      let alpha = Math.min(elapsedTime / ANIMATION_DURATION_MS, 1);
      alpha = 1 - Math.pow(1 - alpha, 4); // ease-out quart
      cameraRef.current.position.lerpVectors(animationStartPosRef.current, animationTargetPosRef.current, alpha);
      controlsRef.current.target.lerpVectors(animationStartLookAtRef.current, animationTargetLookAtRef.current, alpha);
      controlsRef.current.update();
      if (alpha >= 1) {
        isAnimatingRef.current = false;
        if (controlsRef.current) controlsRef.current.enabled = true;
        animationOnCompleteCallbackRef.current?.();
        animationOnCompleteCallbackRef.current = null;
      }
    }
  }, [cameraRef, controlsRef]);

  useEffect(() => {
    const currentMount = mountRef.current;
    const handleWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) {
        isAnimatingRef.current = false;
        if (controlsRef.current) controlsRef.current.enabled = true;
        animationOnCompleteCallbackRef.current?.(); // Call completion if animation was interrupted
        animationOnCompleteCallbackRef.current = null;
        // No onCameraChange here, OrbitControls 'end' event will handle it
      }
    };
    if (currentMount && (isSceneReady && isControlsReady)) { // Ensure controls are ready too
      currentMount.addEventListener('wheel', handleWheel, { passive: true });
      return () => currentMount.removeEventListener('wheel', handleWheel);
    }
  }, [isSceneReady, isControlsReady, controlsRef]); // Added isControlsReady

  // Combined readiness for the animation loop
  const overallReadyForAnimation = isSceneReady && isControlsReady;

  useAnimationLoop({
    isSceneReady: overallReadyForAnimation, // Use combined readiness
    sceneRef,
    cameraRef,
    controlsRef,
    composerRef,
    labelRendererRef,
    onFrameUpdate: handleFrameUpdate,
  });

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
