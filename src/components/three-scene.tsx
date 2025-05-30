
/**
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
import { useSceneSetup } from '@/hooks/use-scene-setup';
import { useEquipmentRenderer } from '@/hooks/use-equipment-renderer';
import { useAnnotationPinRenderer } from '@/hooks/use-annotation-pin-renderer';
import { useMouseInteractionManager } from '@/hooks/use-mouse-interaction';
import { useSceneOutline } from '@/hooks/use-scene-outline';
import { useAnimationLoop } from '@/hooks/use-animation-loop';

// Types & Utils
import type { Equipment, Layer, CameraState, Annotation, ColorMode, TargetSystemInfo, SystemViewOptions } from '@/lib/types';
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
  /** O estado atual da câmera (posição, lookAt). */
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
  } = useSceneSetup({
    mountRef,
    initialCameraPosition,
    initialCameraLookAt,
    onCameraChange, 
  });
  
  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

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
    isSceneReady,
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

  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);
      
      const positionChanged = !camera.position.equals(targetPosition);
      const lookAtChanged = !controls.target.equals(targetLookAt);

      if (positionChanged || lookAtChanged) {
        const oldEnabled = controls.enabled;
        controls.enabled = false; 
        if (positionChanged) camera.position.copy(targetPosition);
        if (lookAtChanged) controls.target.copy(targetLookAt);
        controls.update(); 
        controls.enabled = oldEnabled;
      }
    }
  }, [programmaticCameraState, isSceneReady, cameraRef, controlsRef]);


  useEffect(() => {
    if (!targetSystemToFrame || !sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !equipmentMeshesRef.current || equipmentMeshesRef.current.length === 0) {
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

    if (viewOptions && typeof onCameraChangeRef.current === 'function') {
      let selectedView: CameraState;
      switch (targetSystemToFrame.viewIndex) {
        case 1: // topDown
          selectedView = viewOptions.topDown;
          break;
        case 2: // isometric
          selectedView = viewOptions.isometric;
          break;
        case 0: // default
        default:
          selectedView = viewOptions.default;
          break;
      }
      onCameraChangeRef.current(selectedView);
    }
    if (typeof onSystemFramedRef.current === 'function') {
      onSystemFramedRef.current(); 
    }
  }, [targetSystemToFrame, isSceneReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef]); 

  useAnimationLoop({
    isSceneReady,
    sceneRef,
    cameraRef,
    controlsRef,
    composerRef,
    labelRendererRef,
  });

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
