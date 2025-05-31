
/**
 * Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 * ATUALIZADO: Este componente foi refatorado para atuar como um "condutor", delegando a maior
 * parte de suas responsabilidades anteriores para hooks customizados especializados.
 * Ele agora foca em:
 * - Utilizar `useSceneSetup` para a infraestrutura básica da cena (cena, câmera, renderizadores, etc.).
 * - Utilizar `useEquipmentRenderer` para gerenciar os meshes dos equipamentos.
 * - Utilizar `useAnnotationPinRenderer` para gerenciar os pins de anotação.
 * - Utilizar `useMouseInteractionManager` para processar interações do mouse.
 * - Utilizar `useSceneOutline` para aplicar efeitos de contorno.
 * - Utilizar `useAnimationLoop` para o loop de renderização, incluindo lógica de tweening da câmera.
 * - Aplicar estados de câmera programáticos e lidar com o enquadramento de sistemas.
 * - Renderizar o elemento de montagem (`div`) para a cena.
 *
 * Principal Responsabilidade (Pós-Refatoração):
 * Orquestrar os diversos hooks que gerenciam aspectos específicos da cena 3D,
 * passar props e refs entre eles, e fornecer o ponto de montagem no DOM.
 *
 * ```mermaid
 *   classDiagram
 *     class ThreeSceneProps {
 *       +equipment: Equipment[]
 *       +allEquipmentData: Equipment[]
 *       +layers: Layer[]
 *       +annotations: Annotation[]
 *       +selectedEquipmentTags: string[] | undefined
 *       +onSelectEquipment(tag: string | null, isMultiSelect: boolean): void
 *       +hoveredEquipmentTag: string | null | undefined
 *       +setHoveredEquipmentTag(tag: string | null): void
 *       +cameraState: CameraState | undefined
 *       +onCameraChange(cameraState: CameraState): void
 *       +initialCameraPosition: Point3D
 *       +initialCameraLookAt: Point3D
 *       +colorMode: ColorMode
 *       +targetSystemToFrame: TargetSystemInfo | null
 *       +onSystemFramed(): void
 *     }
 *     class Point3D {
 *       +x: number
 *       +y: number
 *       +z: number
 *     }
 *     class Equipment {
 *     }
 *     class Layer {
 *     }
 *     class Annotation {
 *     }
 *     class CameraState {
 *     }
 *     class ColorMode {
 *     }
 *     class TargetSystemInfo{
 *        +systemName: string
 *        +viewIndex: number
 *     }
 *     class ThreeScene {
 *     }
 *     class ReactFC {
 *     }
 *
 *     ThreeScene --|> ReactFC
 *     ThreeSceneProps ..> Equipment
 *     ThreeSceneProps ..> Layer
 *     ThreeSceneProps ..> Annotation
 *     ThreeSceneProps ..> CameraState
 *     ThreeSceneProps ..> ColorMode
 *     ThreeSceneProps ..> Point3D
 *     ThreeSceneProps ..> TargetSystemInfo
 *     ThreeScene ..> useSceneSetup : uses
 *     ThreeScene ..> useEquipmentRenderer : uses
 *     ThreeScene ..> useAnnotationPinRenderer : uses
 *     ThreeScene ..> useMouseInteractionManager : uses
 *     ThreeScene ..> useSceneOutline : uses
 *     ThreeScene ..> useAnimationLoop : uses
 * ```
 *
 */
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
  /** Lista de equipamentos filtrados a serem renderizados na cena. */
  equipment: Equipment[];
  /** Lista completa de todos os equipamentos, para contexto (e.g., anotações no `ThreeScene`). */
  allEquipmentData: Equipment[];
  /** Configuração das camadas de visibilidade. */
  layers: Layer[];
  /** Lista de anotações a serem exibidas. */
  annotations: Annotation[];
  /** Tags dos equipamentos atualmente selecionados. */
  selectedEquipmentTags: string[] | undefined;
  /** Callback para quando um equipamento é selecionado/deselecionado. */
  onSelectEquipment: (tag: string | null, isMultiSelectModifierPressed: boolean) => void;
  /** Tag do equipamento atualmente sob o cursor. */
  hoveredEquipmentTag: string | null | undefined;
  /** Callback para definir o equipamento em hover. */
  setHoveredEquipmentTag: (tag: string | null) => void;
  /** O estado atual da câmera (posição, lookAt). Esta prop é usada para aplicar estados de câmera de forma programática. */
  cameraState: CameraState | undefined;
  /** Callback para quando o estado da câmera muda devido à interação do usuário na cena. */
  onCameraChange: (cameraState: CameraState) => void;
  /** Posição inicial da câmera. */
  initialCameraPosition: { x: number; y: number; z: number };
  /** Ponto de observação (lookAt) inicial da câmera. */
  initialCameraLookAt: { x: number; y: number; z: number };
  /** O modo de colorização atual para os equipamentos. */
  colorMode: ColorMode;
  /** Informações sobre o sistema e visão a serem enquadrados pela câmera (se houver). */
  targetSystemToFrame: TargetSystemInfo | null;
  /** Callback chamado após a câmera terminar de enquadrar um sistema. */
  onSystemFramed: () => void;
}

const ANIMATION_DURATION_MS = 700; // Duração da animação em milissegundos

/**
 * Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 * Atua como um orquestrador de hooks especializados que gerenciam diferentes aspectos da cena.
 *
 * @param {ThreeSceneProps} props As props do componente.
 * @returns {JSX.Element} O elemento div que serve como contêiner para a cena 3D.
 */
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
    onCameraChange,
  });

  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

  // Refs para a animação da câmera
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
    isSceneReady: isSceneReady && isControlsReady, // Garante que ambos estejam prontos
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

