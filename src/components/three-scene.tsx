
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
    cameraState: programmaticCameraState, // Renomeado para clareza interna
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
    equipmentMeshesRef,
    isSceneReady: isSceneReady && isControlsReady,
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef,
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
  });

  const startCameraAnimation = useCallback((targetPos: THREE.Vector3, targetLookAt: THREE.Vector3, onComplete?: () => void) => {
    console.log('[ThreeScene] startCameraAnimation called. Target Pos:', targetPos, 'Target LookAt:', targetLookAt);
    if (!cameraRef.current || !controlsRef.current) return;

    animationStartPosRef.current = cameraRef.current.position.clone();
    animationStartLookAtRef.current = controlsRef.current.target.clone();
    animationTargetPosRef.current = targetPos;
    animationTargetLookAtRef.current = targetLookAt;
    animationStartTimeRef.current = performance.now();
    isAnimatingRef.current = true;
    animationOnCompleteCallbackRef.current = onComplete || null;

    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  }, [cameraRef, controlsRef]);

  // useEffect para aplicar mudanças de câmera programáticas (e.g., de undo/redo ou foco inicial)
  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);

      // Só inicia a animação se o estado programático for DIFERENTE do estado atual da câmera.
      // Isso evita que a animação seja acionada por atualizações de estado que refletem
      // a posição para a qual a câmera acabou de se mover manualmente ou por uma animação anterior.
      const isAlreadyAtTarget = cameraRef.current.position.equals(targetPosition) && controlsRef.current.target.equals(targetLookAt);

      if (!isAlreadyAtTarget) {
        console.log('[ThreeScene] Programmatic camera state change detected AND camera is not already at target. Starting animation.', programmaticCameraState);
        startCameraAnimation(targetPosition, targetLookAt);
      } else {
        // console.log('[ThreeScene] Programmatic camera state change detected BUT camera is already at target. Skipping animation.', programmaticCameraState);
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, startCameraAnimation, cameraRef, controlsRef]);


  // Efeito para lidar com o foco em um sistema específico
  useEffect(() => {
    if (!targetSystemToFrame || !sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady || !equipmentMeshesRef.current || equipmentMeshesRef.current.length === 0) {
      if (targetSystemToFrame && typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
      return;
    }

    const systemMeshes = equipmentMeshesRef.current.filter(
        (mesh) => mesh.userData.sistema === targetSystemToFrame.systemName && mesh.visible
    );

    if (systemMeshes.length === 0) {
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

      const targetPositionVec = new THREE.Vector3(selectedView.position.x, selectedView.position.y, selectedView.position.z);
      const targetLookAtVec = new THREE.Vector3(selectedView.lookAt.x, selectedView.lookAt.y, selectedView.lookAt.z);

      startCameraAnimation(targetPositionVec, targetLookAtVec, () => {
        if (typeof onCameraChangeRef.current === 'function') {
          onCameraChangeRef.current(selectedView);
        }
        if (typeof onSystemFramedRef.current === 'function') {
          onSystemFramedRef.current();
        }
      });
    } else {
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
    }
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef, startCameraAnimation ]);


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
        if (controlsRef.current) controlsRef.current.enabled = true;

        if (animationOnCompleteCallbackRef.current) {
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

    