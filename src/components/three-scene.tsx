
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
  cameraState: CameraState; // Agora não é mais undefined
  onCameraChange: (cameraState: CameraState, actionDescription?: string) => void; // Adicionado actionDescription
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
    onCameraChange, // Passando onCameraChange para o useSceneSetup para o evento 'end' dos OrbitControls
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
    cameraRef,
    controlsRef,
    isSceneReady,
    isControlsReady,
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
    equipmentMeshesRef: equipmentMeshesRef,
    isSceneReady: isSceneReady && isControlsReady,
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef: equipmentMeshesRef,
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
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

    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  }, [cameraRef, controlsRef]);


  useEffect(() => {
    // Este useEffect responde a mudanças no programmaticCameraState (currentCameraState do useCameraManager)
    // que pode ter sido alterado por um comando undo/redo ou foco inicial que já definiu o estado.
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);

      const isAlreadyAtTarget = positionEqualsWithTolerance(cameraRef.current.position, targetPosition) && positionEqualsWithTolerance(controlsRef.current.target, targetLookAt);

      if (!isAlreadyAtTarget && !isAnimatingRef.current) {
        startCameraAnimation(targetPosition, targetLookAt, () => {
          // NÃO chamar onCameraChange aqui, pois o estado já foi definido pelo comando.
          // Isso evita criar um novo comando para um estado já comandado.
        });
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, startCameraAnimation, cameraRef, controlsRef]);


  useEffect(() => {
    // Este useEffect lida com o FOCO em um sistema específico.
    if (!targetSystemToFrame) {
      return;
    }

    if (!sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady) {
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
      return;
    }

    const equipmentMeshesToConsider = equipmentMeshesRef.current;

    if (!equipmentMeshesToConsider || (equipmentMeshesToConsider.length === 0 && targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM')) {
        if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
        return;
    }

    let systemMeshes: THREE.Object3D[] = [];
    if (targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM') {
         systemMeshes = equipmentMeshesToConsider.filter(
            (mesh) => mesh.userData.sistema === targetSystemToFrame.systemName && mesh.visible
        );

        if (systemMeshes.length === 0) {
          if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
          return;
        }
    } else {
        // Não faz nada para INITIAL_LOAD_NO_SYSTEM aqui, apenas chama onSystemFramed.
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
        // APÓS a animação de foco, obter o estado final e chamar onCameraChange para registrar o comando.
        if (cameraRef.current && controlsRef.current && typeof onCameraChangeRef.current === 'function') {
          const finalStateAfterFocus: CameraState = {
            position: cameraRef.current.position.clone(),
            lookAt: controlsRef.current.target.clone(),
          };
          onCameraChangeRef.current(finalStateAfterFocus, `Foco no sistema ${targetSystemToFrame.systemName} (visão ${targetSystemToFrame.viewIndex})`);
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
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef, startCameraAnimation]);


  const handleFrameUpdate = useCallback(() => {
    if (isAnimatingRef.current && cameraRef.current && controlsRef.current && animationStartPosRef.current && animationStartLookAtRef.current && animationTargetPosRef.current && animationTargetLookAtRef.current) {
      const elapsedTime = performance.now() - animationStartTimeRef.current;
      let alpha = Math.min(elapsedTime / ANIMATION_DURATION_MS, 1);

      alpha = 1 - Math.pow(1 - alpha, 4); // Ease-out quart

      cameraRef.current.position.lerpVectors(animationStartPosRef.current, animationTargetPosRef.current, alpha);
      controlsRef.current.target.lerpVectors(animationStartLookAtRef.current, animationTargetLookAtRef.current, alpha);
      controlsRef.current.update();

      if (alpha >= 1) {
        isAnimatingRef.current = false;
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
        }
        if (animationOnCompleteCallbackRef.current) {
          animationOnCompleteCallbackRef.current();
          animationOnCompleteCallbackRef.current = null;
        }
      }
    }
  }, [cameraRef, controlsRef]);

  useEffect(() => {
    const currentMount = mountRef.current;
    const handleWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) {
        isAnimatingRef.current = false;
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
        }
        if (animationOnCompleteCallbackRef.current) {
          animationOnCompleteCallbackRef.current();
          animationOnCompleteCallbackRef.current = null;
        }
      }
    };

    if (currentMount && isSceneReady && isControlsReady) {
      currentMount.addEventListener('wheel', handleWheel, { passive: true });
      return () => {
        currentMount.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isSceneReady, isControlsReady, controlsRef]);


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
