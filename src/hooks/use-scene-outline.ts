
/**
 * @fileOverview Custom hook para gerenciar o efeito de contorno (OutlinePass) na cena 3D.
 *
 * Principal Responsabilidade:
 * Observar mudanças nos equipamentos selecionados (`selectedEquipmentTags`) e no equipamento
 * em hover (`hoveredEquipmentTag`), e atualizar o `OutlinePass` para destacar visualmente
 * os objetos 3D correspondentes na cena. Utiliza `updateOutlineEffect` de
 * `postprocessing-utils.ts` para aplicar os estilos de contorno corretos.
 * O efeito só é aplicado quando a cena (`isSceneReady`) e os refs necessários estão prontos.
 *
 * ```mermaid
 * classDiagram
 *   UseSceneOutlineProps {
 *     +outlinePassRef: RefObject_OutlinePass_
 *     +equipmentMeshesRef: RefObject_Object3D_Array_
 *     +selectedEquipmentTags: string[] | undefined
 *     +hoveredEquipmentTag: string | null | undefined
 *     +isSceneReady: boolean
 *   }
 *   RefObject_OutlinePass_ { +current: OutlinePass | null }
 *   RefObject_Object3D_Array_ { +current: THREE.Object3D[] | null }
 *   useSceneOutline ..> postprocessing_utils : uses updateOutlineEffect
 * ```
 */
"use client";

import type * as THREE from 'three';
import { useEffect } from 'react';
import type { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { updateOutlineEffect } from '@/core/three/postprocessing-utils';

/**
 * Props para o hook useSceneOutline.
 * @interface UseSceneOutlineProps
 * @property {React.RefObject<OutlinePass | null>} outlinePassRef - Ref para a instância do OutlinePass.
 * @property {React.RefObject<THREE.Object3D[]>} equipmentMeshesRef - Ref para o array de meshes de equipamentos na cena.
 * @property {string[] | undefined} selectedEquipmentTags - Array de tags dos equipamentos selecionados.
 * @property {string | null | undefined} hoveredEquipmentTag - Tag do equipamento atualmente em hover.
 * @property {boolean} isSceneReady - Flag indicando se a cena 3D está pronta.
 */
interface UseSceneOutlineProps {
  outlinePassRef: React.RefObject<OutlinePass | null>;
  equipmentMeshesRef: React.RefObject<THREE.Object3D[]>;
  selectedEquipmentTags: string[] | undefined;
  hoveredEquipmentTag: string | null | undefined;
  isSceneReady: boolean;
}

/**
 * Hook customizado para gerenciar e aplicar o efeito de contorno (OutlinePass)
 * aos equipamentos selecionados ou em hover na cena 3D.
 *
 * @param {UseSceneOutlineProps} props - As props para o hook.
 */
export function useSceneOutline({
  outlinePassRef,
  equipmentMeshesRef,
  selectedEquipmentTags,
  hoveredEquipmentTag,
  isSceneReady,
}: UseSceneOutlineProps): void {
  useEffect(() => {
    if (!isSceneReady || !outlinePassRef.current || !equipmentMeshesRef.current) {
      if(outlinePassRef.current) {
        // Ensure outline is off if we skip
        updateOutlineEffect(outlinePassRef.current, [], [], null);
      }
      return;
    }

    // Trata casos onde props podem ser undefined inicialmente
    const effectiveSelectedTags = selectedEquipmentTags ?? [];
    const effectiveHoveredTag = hoveredEquipmentTag === undefined ? null : hoveredEquipmentTag;

    updateOutlineEffect(
      outlinePassRef.current,
      equipmentMeshesRef.current,
      effectiveSelectedTags,
      effectiveHoveredTag
    );
  }, [
    isSceneReady,
    selectedEquipmentTags,
    hoveredEquipmentTag,
    equipmentMeshesRef,
    outlinePassRef,
  ]);
}

