
"use client";

import type * as THREE from 'three';
import { useEffect, useRef } from 'react';
import type { Equipment, Layer, ColorMode } from '@/lib/types';
import { updateEquipmentMeshesInScene } from '@/core/three/scene-elements-setup';
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js'; // Importação correta

/**
 * Custom hook to manage the rendering of equipment meshes in the 3D scene.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação, atualização e remoção dos meshes 3D que representam
 * os equipamentos. Observa mudanças nos dados dos equipamentos (filtrados), camadas de visibilidade
 * e modo de colorização, e atualiza a cena Three.js de acordo.
 * Utiliza `updateEquipmentMeshesInScene` de `scene-elements-setup.ts` para a lógica de sincronização
 * dos meshes e do plano de chão com base na visibilidade das camadas.
 * ```mermaid
 *   classDiagram
 *     class UseEquipmentRendererProps {
 *       +sceneRef: RefObject_Scene_
 *       +cameraRef: RefObject_PerspectiveCamera_
 *       +controlsRef: RefObject_OrbitControls_
 *       +isSceneReady: boolean
 *       +isControlsReady: boolean // Adicionado
 *       +equipmentData: Equipment[]  // Filtered list
 *       +layers: Layer[]
 *       +colorMode: ColorMode
 *       +createSingleEquipmentMesh(item: Equipment): Object3D
 *       +groundMeshRef: RefObject_Mesh_
 *     }
 *     class useEquipmentRenderer {
 *
 *     }
 *     class ReactFCHook {
 *
 *     }
 *     class scene_elements_setup {
 *
 *     }
 *     class Equipment {
 *
 *     }
 *     class Layer {
 *
 *     }
 *     class ColorMode {
 *
 *     }
 *     class RefObject_Scene_ {
 *
 *     }
 *     class RefObject_PerspectiveCamera_ {
 *     }
 *     class RefObject_OrbitControls_ {
 *     }
 *     class RefObject_Mesh_ {
 *
 *     }
 *     useEquipmentRenderer --|> ReactFCHook
 *     useEquipmentRenderer ..> scene_elements_setup : uses updateEquipmentMeshesInScene
 *     UseEquipmentRendererProps ..> Equipment
 *     UseEquipmentRendererProps ..> Layer
 *     UseEquipmentRendererProps ..> ColorMode
 *     UseEquipmentRendererProps ..> RefObject_Scene_
 *     UseEquipmentRendererProps ..> RefObject_Mesh_
 *     UseEquipmentRendererProps ..> RefObject_PerspectiveCamera_
 *     UseEquipmentRendererProps ..> RefObject_OrbitControls_
 * ```
 *
 */
export interface UseEquipmentRendererProps {
  sceneRef: React.RefObject<THREE.Scene | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  controlsRef: React.RefObject<OrbitControlsType | null>; // Corrigido para OrbitControlsType
  isSceneReady: boolean;
  isControlsReady: boolean; 
  equipmentData: Equipment[];
  layers: Layer[];
  colorMode: ColorMode;
  createSingleEquipmentMesh: (item: Equipment) => THREE.Object3D;
  groundMeshRef: React.RefObject<THREE.Mesh | null>;
}

/**
 * Hook customizado para gerenciar a renderização (criação, atualização, remoção)
 * dos meshes de equipamentos na cena Three.js.
 *
 * @param {UseEquipmentRendererProps} props As props do hook.
 * @returns {React.RefObject<THREE.Object3D[]>} Ref para a lista de meshes de equipamentos atualmente na cena.
 *          Este ref é gerenciado internamente pelo hook mas retornado para que outros hooks
 *          (e.g., para raycasting) possam acessá-lo.
 */
export function useEquipmentRenderer({
  sceneRef,
  cameraRef,
  controlsRef,
  isSceneReady,
  isControlsReady, 
  equipmentData,
  layers,
  colorMode,
  createSingleEquipmentMesh,
  groundMeshRef,
}: UseEquipmentRendererProps): React.RefObject<THREE.Object3D[]> {
  const equipmentMeshesRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    console.log(`[useEquipmentRenderer] useEffect triggered. 
      isSceneReady: ${isSceneReady}, 
      isControlsReady: ${isControlsReady},
      sceneRef.current (exists?): ${!!sceneRef.current}, 
      cameraRef.current (exists?): ${!!cameraRef.current}, 
      controlsRef.current (exists?): ${!!controlsRef.current}, 
      equipmentData.length: ${Array.isArray(equipmentData) ? equipmentData.length : 'not an array'}, 
      Layers: ${JSON.stringify(layers.map(l => ({id: l.id, type: l.equipmentType, visible: l.isVisible})))}`);

    if (cameraRef.current && controlsRef.current) {
      console.log(`[useEquipmentRenderer] INSIDE useEffect - Camera Pos: ${cameraRef.current.position.toArray().join(',')}, Target: ${controlsRef.current.target.toArray().join(',')}, Zoom: ${cameraRef.current.zoom}`);
    } else {
      console.log('[useEquipmentRenderer] INSIDE useEffect - Camera or controls refs not ready for detailed logging.');
    }

    // Condição principal para renderizar
    if (!isSceneReady || !isControlsReady || !sceneRef.current || !cameraRef.current || !controlsRef.current || !Array.isArray(equipmentData)) {
      console.log(`[useEquipmentRenderer] Skipping update. Conditions:
        isSceneReady: ${isSceneReady}
        isControlsReady: ${isControlsReady}
        sceneRef.current: ${!!sceneRef.current}
        cameraRef.current: ${!!cameraRef.current}
        controlsRef.current: ${!!controlsRef.current}
        Array.isArray(equipmentData): ${Array.isArray(equipmentData)}`);

      // Se a cena não está pronta ou os dados são inválidos, mas temos meshes, limpamos os meshes.
      // Isso garante que a cena não mostre meshes antigos se as condições de renderização mudarem para inválidas.
      if (equipmentMeshesRef.current.length > 0 && sceneRef.current) {
         console.log('[useEquipmentRenderer] Conditions not met, but meshes exist in ref. Clearing them.');
         updateEquipmentMeshesInScene({
            scene: sceneRef.current,
            equipmentMeshesRef: equipmentMeshesRef,
            newEquipmentData: [], // Força a remoção de todos os meshes
            layers,
            colorMode,
            createSingleEquipmentMesh,
            groundMeshRef,
         });
      }
      return;
    }
    
    console.log('[useEquipmentRenderer] Conditions MET. Calling updateEquipmentMeshesInScene.');
    updateEquipmentMeshesInScene({
      scene: sceneRef.current,
      equipmentMeshesRef: equipmentMeshesRef,
      newEquipmentData: equipmentData,
      layers,
      colorMode,
      createSingleEquipmentMesh,
      groundMeshRef,
    });
    console.log(`[useEquipmentRenderer] Updated. Meshes in ref after update: ${equipmentMeshesRef.current.length}`);
  }, [equipmentData, layers, colorMode, isSceneReady, isControlsReady, sceneRef, createSingleEquipmentMesh, groundMeshRef, cameraRef, controlsRef]);

  return equipmentMeshesRef;
}
