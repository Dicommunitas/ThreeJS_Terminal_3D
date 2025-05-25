
/**
 * @fileOverview Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 * ATUALIZADO: Este componente foi refatorado para atuar como um "condutor", delegando a maior
 * parte de suas responsabilidades anteriores para hooks customizados especializados.
 * Ele agora foca em:
 * - Utilizar `useSceneSetup` para a infraestrutura básica da cena (cena, câmera, renderizadores, etc.).
 * - Utilizar `useEquipmentRenderer` para gerenciar os meshes dos equipamentos.
 * - Utilizar `useAnnotationPinRenderer` para gerenciar os pins de anotação.
 * - Utilizar `useMouseInteractionManager` para processar interações do mouse.
 * - Utilizar `useSceneOutline` para aplicar efeitos de contorno.
 * - Utilizar `useAnimationLoop` para o loop de renderização.
 * - Aplicar estados de câmera programáticos e lidar com o enquadramento de sistemas.
 * - Renderizar o elemento de montagem (`div`) para a cena.
 *
 * Principal Responsabilidade (Pós-Refatoração):
 * Orquestrar os diversos hooks que gerenciam aspectos específicos da cena 3D,
 * passar props e refs entre eles, e fornecer o ponto de montagem no DOM.
 *
 * @mermaid
 *   classDiagram
 *     ThreeSceneProps {
 *       +equipment: Equipment[]  // Filtered list
 *       +allEquipmentData: Equipment[] // Full list for annotation context
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
 *       +targetSystemToFrame: string | null
 *       +onSystemFramed(): void
 *     }
 *     Point3D {
 *       +x: number
 *       +y: number
 *       +z: number
 *     }
 *     ThreeSceneProps ..> Equipment
 *     ThreeSceneProps ..> Layer
 *     ThreeSceneProps ..> Annotation
 *     ThreeSceneProps ..> CameraState
 *     ThreeSceneProps ..> ColorMode
 *     ThreeSceneProps ..> Point3D
 *     ThreeScene ..> useSceneSetup : uses
 *     ThreeScene ..> useEquipmentRenderer : uses
 *     ThreeScene ..> useAnnotationPinRenderer : uses
 *     ThreeScene ..> useMouseInteractionManager : uses
 *     ThreeScene ..> useSceneOutline : uses
 *     ThreeScene ..> useAnimationLoop : uses
 */
"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three'; // Kept for Vector3 and potential direct THREE access if needed

// Hooks
import { useSceneSetup } from '@/hooks/use-scene-setup';
import { useEquipmentRenderer } from '@/hooks/use-equipment-renderer';
import { useAnnotationPinRenderer } from '@/hooks/use-annotation-pin-renderer';
import { useMouseInteractionManager } from '@/hooks/use-mouse-interaction';
import { useSceneOutline } from '@/hooks/use-scene-outline';
import { useAnimationLoop } from '@/hooks/use-animation-loop';

// Types & Utils
import type { Equipment, Layer, CameraState, Annotation, ColorMode } from '@/lib/types';
import { getEquipmentColor } from '@/core/graphics/color-utils';
import { createGeometryForItem } from '@/core/three/equipment-geometry-factory';
import { calculateViewForMeshes } from '@/core/three/camera-utils';


export interface ThreeSceneProps {
  equipment: Equipment[]; // Filtered list for rendering meshes
  allEquipmentData: Equipment[]; // Full list, needed for annotations context
  layers: Layer[];
  annotations: Annotation[];
  selectedEquipmentTags: string[] | undefined;
  onSelectEquipment: (tag: string | null, isMultiSelectModifierPressed: boolean) => void;
  hoveredEquipmentTag: string | null | undefined;
  setHoveredEquipmentTag: (tag: string | null) => void;
  
  cameraState: CameraState | undefined; // Current desired camera state from useCameraManager
  onCameraChange: (cameraState: CameraState) => void; // Callback for OrbitControls and programmatic changes
  
  initialCameraPosition: { x: number; y: number; z: number };
  initialCameraLookAt: { x: number; y: number; z: number };
  colorMode: ColorMode;
  
  targetSystemToFrame: string | null; // From useCameraManager, triggers framing
  onSystemFramed: () => void; // Callback to useCameraManager after framing
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
    cameraState: programmaticCameraState, // This is the desired state from the parent
    onCameraChange, // This callback is used by OrbitControls (via useSceneSetup) AND for programmatic changes
    initialCameraPosition,
    initialCameraLookAt,
    colorMode,
    targetSystemToFrame,
    onSystemFramed,
  } = props;

  const mountRef = useRef<HTMLDivElement>(null);

  // 1. Scene Setup Hook: Initializes core Three.js elements (scene, camera, renderers, controls, etc.)
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
    onCameraChange, // Pass down for OrbitControls to report changes
  });
  
  // Refs for callbacks to ensure latest versions are used in effects
  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

  // 2. Callback to create a single equipment mesh (passed to useEquipmentRenderer)
  const createSingleEquipmentMesh = useCallback((item: Equipment): THREE.Object3D => {
    const finalColor = getEquipmentColor(item, colorMode);
    const material = new THREE.MeshStandardMaterial({
      color: finalColor,
      metalness: 0.3,
      roughness: 0.6,
      transparent: false, // Ensure opacity is handled if needed elsewhere
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
    mesh.visible = true; // Initial visibility, will be managed by layers
    return mesh;
  }, [colorMode]);

  // 3. Equipment Renderer Hook: Manages equipment meshes in the scene
  const equipmentMeshesRef = useEquipmentRenderer({
    sceneRef,
    isSceneReady,
    equipmentData: equipment, // Filtered list for rendering
    layers,
    colorMode,
    createSingleEquipmentMesh,
    groundMeshRef,
  });

  // 4. Annotation Pin Renderer Hook: Manages annotation pins
  useAnnotationPinRenderer({
    sceneRef,
    labelRendererRef,
    isSceneReady,
    annotations,
    allEquipmentData: allEquipmentData, // Full list for correct pin positioning
    layers,
  });

  // 5. Mouse Interaction Hook: Handles mouse clicks and hovers
  useMouseInteractionManager({
    mountRef,
    cameraRef,
    equipmentMeshesRef, // Ref from useEquipmentRenderer
    isSceneReady,
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  // 6. Scene Outline Hook: Applies outline effect to selected/hovered equipment
  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef, // Ref from useEquipmentRenderer
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
  });

  // 7. Effect to apply programmatic camera state changes
  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);
      
      // Check if update is actually needed to prevent unnecessary control disabling/enabling
      const positionChanged = !camera.position.equals(targetPosition);
      const lookAtChanged = !controls.target.equals(targetLookAt);

      if (positionChanged || lookAtChanged) {
        const oldEnabled = controls.enabled;
        controls.enabled = false; // Temporarily disable controls during programmatic update to prevent conflicts
        if (positionChanged) camera.position.copy(targetPosition);
        if (lookAtChanged) controls.target.copy(targetLookAt);
        controls.update(); // Important to apply changes to controls target
        controls.enabled = oldEnabled;
      }
    }
  }, [programmaticCameraState, isSceneReady, cameraRef, controlsRef]);


  // 8. Effect to handle framing a target system
  useEffect(() => {
    if (!targetSystemToFrame || !sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !equipmentMeshesRef.current || equipmentMeshesRef.current.length === 0) {
      if (targetSystemToFrame && typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current(); // Ensure callback is called if we bail early
      }
      return;
    }

    // equipmentMeshesRef.current contains meshes derived from the 'equipment' (filtered) prop.
    // The userData.sistema is set on these meshes.
    const systemMeshes = equipmentMeshesRef.current.filter(
        (mesh) => mesh.userData.sistema === targetSystemToFrame && mesh.visible
    );

    if (systemMeshes.length === 0) {
      if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
      return;
    }

    const newView = calculateViewForMeshes(systemMeshes, cameraRef.current);

    if (newView && typeof onCameraChangeRef.current === 'function') {
      // This calculated view becomes the new "programmatic camera state"
      // So, we call onCameraChange to update the state in useCameraManager.
      onCameraChangeRef.current({
        position: {x: newView.position.x, y: newView.position.y, z: newView.position.z },
        lookAt: {x: newView.lookAt.x, y: newView.lookAt.y, z: newView.lookAt.z },
      });
    }
    if (typeof onSystemFramedRef.current === 'function') {
      onSystemFramedRef.current(); // Signal that framing attempt is complete
    }
  }, [targetSystemToFrame, isSceneReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef]); // Dependencies for system framing

  // 9. Animation Loop Hook: Drives the continuous rendering of the scene
  useAnimationLoop({
    isSceneReady,
    sceneRef,
    cameraRef,
    controlsRef,
    composerRef,
    labelRendererRef,
  });

  // Render the div element that Three.js will use to mount the canvas
  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
