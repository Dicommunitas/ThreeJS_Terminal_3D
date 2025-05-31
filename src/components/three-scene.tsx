
"use client";

import React, { useRef, useEffect, useCallback } from 'react';
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
  cameraState: CameraState | undefined; // This is the programmaticCameraState
  onCameraChange: (cameraState: CameraState) => void;
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

  useEffect(() => {
    // console.log('[ThreeScene] Props received:', {
    //   equipmentCount: equipment.length,
    //   allEquipmentDataCount: allEquipmentData.length,
    //   layers: layers.map(l => ({ id: l.id, visible: l.isVisible })),
    //   programmaticCameraState,
    //   targetSystemToFrame,
    // });
  }, [equipment, allEquipmentData, layers, programmaticCameraState, targetSystemToFrame]);


  const mountRef = useRef<HTMLDivElement>(null);

  const {
    sceneRef,
    cameraRef,
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady,
    isControlsReady,
  }: UseSceneSetupReturn = useSceneSetup({
    mountRef,
    initialCameraPosition,
    initialCameraLookAt,
    onCameraChange,
  });

  useEffect(() => {
    // console.log('[ThreeScene] Readiness state:', { isSceneReady, isControlsReady });
  }, [isSceneReady, isControlsReady]);


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
      color: finalColor,
      metalness: 0.3,
      roughness: 0.6,
      transparent: false,
      opacity: 1.0,
    });
    const geometry = createGeometryForItem(item);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(item.position.x, item.position.y, item.position.z);
    if (item.rotation) {
      mesh.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
    }
    mesh.userData = { tag: item.tag, type: item.type, sistema: item.sistema };
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.visible = true;
    return mesh;
  }, [colorMode]);

  const equipmentMeshesRef = useEquipmentRenderer({
    sceneRef,
    cameraRef,
    controlsRef,
    isSceneReady,
    equipmentData: equipment,
    layers,
    colorMode,
    createSingleEquipmentMesh,
    groundMeshRef,
  });

  useAnnotationPinRenderer({
    sceneRef,
    labelRendererRef,
    isSceneReady,
    annotations,
    allEquipmentData: allEquipmentData,
    layers,
  });

  useMouseInteractionManager({
    mountRef,
    cameraRef,
    equipmentMeshesRef: equipmentMeshesRef, // Corrigido: Passando a ref obtida
    isSceneReady: isSceneReady && isControlsReady,
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef: equipmentMeshesRef, // Corrigido: Passando a ref obtida
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
  });


  const startCameraAnimation = useCallback((targetPos: THREE.Vector3, targetLookAt: THREE.Vector3, onComplete?: () => void) => {
    console.log('[ThreeScene] startCameraAnimation. Current Camera - Pos:', cameraRef.current?.position.clone(), 'Target:', controlsRef.current?.target.clone());
    console.log('[ThreeScene] startCameraAnimation. Animation Target - Pos:', targetPos, 'LookAt:', targetLookAt);

    if (!cameraRef.current || !controlsRef.current) {
      // console.log('[ThreeScene] startCameraAnimation: camera or controls not ready, aborting.');
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

    if (controlsRef.current) {
      controlsRef.current.enabled = false;
      console.log('[ThreeScene] OrbitControls disabled for animation. controls.enabled:', controlsRef.current?.enabled);
    }
  }, [cameraRef, controlsRef]);

  // useEffect para aplicar mudanças de câmera programáticas (e.g., de undo/redo ou foco inicial)
  // Este useEffect foi restaurado na iteração anterior para corrigir o sumiço dos objetos.
  // A verificação !isAlreadyAtTarget é importante.
  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);

      const isAlreadyAtTarget = positionEqualsWithTolerance(cameraRef.current.position, targetPosition) && positionEqualsWithTolerance(controlsRef.current.target, targetLookAt);

      if (!isAlreadyAtTarget) {
        // console.log('[ThreeScene] Programmatic camera state change detected AND camera is not already at target. Starting animation.', programmaticCameraState);
        startCameraAnimation(targetPosition, targetLookAt);
      } else {
        // console.log('[ThreeScene] Programmatic camera state change detected BUT camera is already at target. Skipping animation.', programmaticCameraState);
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, startCameraAnimation, cameraRef, controlsRef]);


  // Efeito para lidar com o foco em um sistema específico
  useEffect(() => {
    if (!targetSystemToFrame) {
      return;
    }
    // console.log('[ThreeScene] targetSystemToFrame changed:', targetSystemToFrame);

    if (!sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady) {
      // console.log('[ThreeScene] targetSystemToFrame: Dependencies not ready, calling onSystemFramed early.');
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
      return;
    }

    const equipmentMeshesToConsider = equipmentMeshesRef.current; // Usa a ref já obtida

    if (!equipmentMeshesToConsider || (equipmentMeshesToConsider.length === 0 && targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM')) {
        // console.log('[ThreeScene] targetSystemToFrame: No equipment meshes to frame for system', targetSystemToFrame.systemName,'. Calling onSystemFramed.');
        if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
        return;
    }


    let systemMeshes: THREE.Object3D[] = [];
    if (targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM') {
         systemMeshes = equipmentMeshesToConsider.filter(
            (mesh) => mesh.userData.sistema === targetSystemToFrame.systemName && mesh.visible
        );

        if (systemMeshes.length === 0) {
          // console.log('[ThreeScene] targetSystemToFrame: No visible meshes found for system', targetSystemToFrame.systemName,'. Calling onSystemFramed.');
          if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
          return;
        }
    } else {
        // console.log('[ThreeScene] targetSystemToFrame: Initial load, no specific system to frame. Using default view or current camera state.');
        if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
        return;
    }


    const viewOptions: SystemViewOptions | null = calculateViewForMeshes(systemMeshes, cameraRef.current);

    if (viewOptions) {
      let selectedView: SystemView;
      switch (targetSystemToFrame.viewIndex) {
        case 1:
          selectedView = viewOptions.topDown;
          break;
        case 2:
          selectedView = viewOptions.isometric;
          break;
        case 0:
        default:
          selectedView = viewOptions.default;
          break;
      }
      console.log('[ThreeScene] Calculated view for system:', targetSystemToFrame.systemName, 'View Index:', targetSystemToFrame.viewIndex, 'Selected View:', selectedView);

      const targetPositionVec = new THREE.Vector3(selectedView.position.x, selectedView.position.y, selectedView.position.z);
      const targetLookAtVec = new THREE.Vector3(selectedView.lookAt.x, selectedView.lookAt.y, selectedView.lookAt.z);

      startCameraAnimation(targetPositionVec, targetLookAtVec, () => {
        // console.log('[ThreeScene] Animation complete for system focus:', targetSystemToFrame.systemName);
        if (typeof onCameraChangeRef.current === 'function') {
          // console.log('[ThreeScene] Calling onCameraChange after system focus animation.');
          onCameraChangeRef.current(selectedView);
        }
        if (typeof onSystemFramedRef.current === 'function') {
          // console.log('[ThreeScene] Calling onSystemFramed after system focus animation.');
          onSystemFramedRef.current();
        }
      });
    } else {
      // console.log('[ThreeScene] Could not calculate view for system', targetSystemToFrame.systemName, '. Calling onSystemFramed.');
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
    }
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef, startCameraAnimation]);


  const handleFrameUpdate = useCallback(() => {
    if (isAnimatingRef.current && cameraRef.current && controlsRef.current && animationStartPosRef.current && animationStartLookAtRef.current && animationTargetPosRef.current && animationTargetLookAtRef.current) {
      const elapsedTime = performance.now() - animationStartTimeRef.current;
      let alpha = Math.min(elapsedTime / ANIMATION_DURATION_MS, 1);

      // Easing function (ease-out-quart)
      alpha = 1 - Math.pow(1 - alpha, 4);

      cameraRef.current.position.lerpVectors(animationStartPosRef.current, animationTargetPosRef.current, alpha);
      controlsRef.current.target.lerpVectors(animationStartLookAtRef.current, animationTargetLookAtRef.current, alpha);
      controlsRef.current.update();

      if (alpha >= 1) {
        isAnimatingRef.current = false;
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
          console.log('[ThreeScene] OrbitControls re-enabled after animation. controls.enabled:', controlsRef.current?.enabled);
          console.log('[ThreeScene] Animation complete. Final Camera - Pos:', cameraRef.current?.position.clone(), 'Target:', controlsRef.current?.target.clone());
        }

        if (animationOnCompleteCallbackRef.current) {
          // console.log('[ThreeScene] Executing animationOnCompleteCallback.');
          animationOnCompleteCallbackRef.current();
          animationOnCompleteCallbackRef.current = null;
        }
      }
    }
  }, [cameraRef, controlsRef]);


  useAnimationLoop({
    isSceneReady: isSceneReady && isControlsReady,
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

