

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
 * - Utilizar `useAnimationLoop` para o loop de renderização.
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
    cameraState: programmaticCameraState, // Estado da câmera vindo de comandos (undo/redo, foco em sistema)
    onCameraChange, // Callback para notificar mudanças de câmera iniciadas na cena (OrbitControls)
    initialCameraPosition,
    initialCameraLookAt,
    colorMode,
    targetSystemToFrame,
    onSystemFramed,
  } = props;


  const mountRef = useRef<HTMLDivElement>(null);

  // Hook para setup inicial da cena (cena, câmera, renderizadores, controles básicos)
  const {
    sceneRef,
    cameraRef,
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady, // Flag que indica se a infraestrutura básica da cena está pronta
    isControlsReady, // Flag que indica se OrbitControls estão prontos
  }: UseSceneSetupReturn = useSceneSetup({
    mountRef,
    initialCameraPosition,
    initialCameraLookAt,
    onCameraChange, // Passa o callback para useSceneSetup, que o atachará ao 'end' do OrbitControls
  });


  // Refs para os callbacks para garantir que as versões mais recentes sejam usadas dentro de useEffects
  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

  // Callback para criar um mesh de equipamento individual, dependente do colorMode
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
    mesh.visible = true; // Visibilidade inicial, pode ser alterada por camadas
    return mesh;
  }, [colorMode]); // Recriar esta função se colorMode mudar

  // Hook para gerenciar a renderização dos meshes de equipamentos
  const equipmentMeshesRef = useEquipmentRenderer({
    sceneRef,
    isSceneReady,
    equipmentData: equipment, // Lista filtrada de equipamentos
    layers,
    colorMode,
    createSingleEquipmentMesh,
    groundMeshRef,
  });

  // Hook para gerenciar a renderização dos pins de anotação
  useAnnotationPinRenderer({
    sceneRef,
    labelRendererRef,
    isSceneReady,
    annotations,
    allEquipmentData: allEquipmentData, // Lista completa para posicionamento correto dos pins
    layers,
  });

  // Hook para gerenciar interações do mouse (clique para seleção, movimento para hover)
  useMouseInteractionManager({
    mountRef,
    cameraRef,
    equipmentMeshesRef, // Ref para os meshes atualmente na cena
    isSceneReady: isSceneReady && isControlsReady, // Interação só quando tudo estiver pronto
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  // Hook para gerenciar o efeito de contorno (outline)
  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef,
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
  });

  // Efeito para aplicar mudanças de câmera programáticas (e.g., de undo/redo ou foco inicial)
  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;

      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);

      const positionChanged = !camera.position.equals(targetPosition);
      const lookAtChanged = !controls.target.equals(targetLookAt);

      if (positionChanged || lookAtChanged) {
        const oldEnabled = controls.enabled;
        controls.enabled = false; // Desabilita controles durante a mudança programática para evitar conflitos
        if (positionChanged) camera.position.copy(targetPosition);
        if (lookAtChanged) controls.target.copy(targetLookAt);
        controls.update(); // Necessário para que o target dos controles seja efetivado
        controls.enabled = oldEnabled; // Reabilita os controles
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, cameraRef, controlsRef]);


  // Efeito para lidar com o foco em um sistema específico
  useEffect(() => {
    if (!targetSystemToFrame || !sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady || !equipmentMeshesRef.current || equipmentMeshesRef.current.length === 0) {
      if (targetSystemToFrame && typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current(); // Limpa o target se não puder processar
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

    // Calcula as diferentes opções de visualização para os meshes do sistema
    const viewOptions: SystemViewOptions | null = calculateViewForMeshes(systemMeshes, cameraRef.current);
    
    if (viewOptions && typeof onCameraChangeRef.current === 'function') {
      let selectedView: SystemView;
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
      // Notifica o `useCameraManager` (via `onCameraChange`) sobre a nova visão calculada.
      // O `useCameraManager` então decidirá se cria um comando de undo/redo para esta mudança.
      // E `previousCameraStateRef` em `useCameraManager` será atualizado.
      onCameraChangeRef.current(selectedView); 
    }

    if (typeof onSystemFramedRef.current === 'function') {
      onSystemFramedRef.current(); // Notifica que o processo de enquadramento (tentativa) foi concluído
    }
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef ]); // Removido onCameraChangeRef e onSystemFramedRef das dependências, pois já usamos refs para eles.

  // Hook para gerenciar o loop de animação principal (requestAnimationFrame)
  useAnimationLoop({
    isSceneReady,
    isControlsReady, // Passa a flag de prontidão dos controles
    sceneRef,
    cameraRef,
    controlsRef,
    composerRef,
    labelRendererRef,
  });

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;

