
"use client";

import type * as THREE from 'three';
import { useEffect, useRef } from 'react';
import type { Equipment, Layer, ColorMode } from '@/lib/types';
import { updateEquipmentMeshesInScene } from '@/core/three/scene-elements-setup';

/**
 * @fileOverview Custom hook to manage the rendering of equipment meshes in the 3D scene.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação, atualização e remoção dos meshes 3D que representam
 * os equipamentos. Observa mudanças nos dados dos equipamentos (filtrados), camadas de visibilidade
 * e modo de colorização, e atualiza a cena Three.js de acordo.
 * Utiliza `updateEquipmentMeshesInScene` de `scene-elements-setup.ts` para a lógica de sincronização
 * dos meshes e do plano de chão com base na visibilidade das camadas.
 *
 * @mermaid
 *   classDiagram
 *     UseEquipmentRendererProps {
 *       +sceneRef: RefObject_Scene_
 *       +isSceneReady: boolean
 *       +equipmentData: Equipment[]  // Filtered list
 *       +layers: Layer[]
 *       +colorMode: ColorMode
 *       +createSingleEquipmentMesh(item: Equipment): Object3D
 *       +groundMeshRef: RefObject_Mesh_
 *     }
 *     useEquipmentRenderer --|> React.FC_Hook
 *     useEquipmentRenderer ..> scene_elements_setup : uses updateEquipmentMeshesInScene
 *     UseEquipmentRendererProps ..> Equipment
 *     UseEquipmentRendererProps ..> Layer
 *     UseEquipmentRendererProps ..> ColorMode
 *     UseEquipmentRendererProps ..> RefObject_Scene_
 *     UseEquipmentRendererProps ..> RefObject_Mesh_
 *
 *     class RefObject_Scene_ { current: Scene | null }
 *     class RefObject_Mesh_ { current: Mesh | null }
 */
export interface UseEquipmentRendererProps {
  sceneRef: React.RefObject<THREE.Scene | null>;
  isSceneReady: boolean;
  equipmentData: Equipment[]; // Typically the filtered list of equipment to be rendered
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
  isSceneReady,
  equipmentData,
  layers,
  colorMode,
  createSingleEquipmentMesh,
  groundMeshRef,
}: UseEquipmentRendererProps): React.RefObject<THREE.Object3D[]> {
  const equipmentMeshesRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    // console.log(`[useEquipmentRenderer] useEffect triggered. isSceneReady: ${isSceneReady}, equipmentData count: ${equipmentData.length}`);
    if (!isSceneReady || !sceneRef.current || !Array.isArray(equipmentData)) {
      // console.log('[useEquipmentRenderer] Skipping update: Scene not ready or equipmentData invalid.');
      // If scene is not ready, but we have meshes, ensure they are removed if equipmentData is empty or layers hide them
      if (sceneRef.current && equipmentMeshesRef.current.length > 0 && (!Array.isArray(equipmentData) || equipmentData.length === 0) ) {
         updateEquipmentMeshesInScene({
            scene: sceneRef.current,
            equipmentMeshesRef: equipmentMeshesRef,
            newEquipmentData: [], // Force removal if equipmentData is empty
            layers,
            colorMode,
            createSingleEquipmentMesh,
            groundMeshRef,
          });
      }
      return;
    }
    updateEquipmentMeshesInScene({
      scene: sceneRef.current,
      equipmentMeshesRef: equipmentMeshesRef,
      newEquipmentData: equipmentData,
      layers,
      colorMode,
      createSingleEquipmentMesh,
      groundMeshRef,
    });
    // Cleanup of individual meshes (geometry, material) is handled by updateEquipmentMeshesInScene
    // when they are removed from the scene.
  }, [equipmentData, layers, colorMode, isSceneReady, sceneRef, createSingleEquipmentMesh, groundMeshRef]);

  return equipmentMeshesRef;
}
