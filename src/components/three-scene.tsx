
/**
 * Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 *
 * Principal Responsabilidade:
 * Orquestrar os diversos hooks especializados que gerenciam aspectos específicos da cena 3D,
 * passar props e refs entre eles, e fornecer o ponto de montagem no DOM para a cena.
 * As responsabilidades detalhadas incluem:
 * 1.  **Configuração da Cena Base:** Utiliza `useSceneSetup` para criar a cena, câmera, renderizadores, controles de órbita, pipeline de pós-processamento, iluminação e plano de chão.
 * 2.  **Renderização de Equipamentos:** Utiliza `useEquipmentRenderer` para gerenciar a criação, atualização e remoção dos meshes 3D que representam os equipamentos, com base nos dados filtrados, camadas e modo de colorização.
 * 3.  **Renderização de Pins de Anotação:** Utiliza `useAnnotationPinRenderer` para gerenciar os pins de anotação (`CSS2DObject`) sobrepostos à cena.
 * 4.  **Gerenciamento de Interação do Mouse:** Utiliza `useMouseInteractionManager` para processar cliques e movimentos do mouse, detectando seleções e hovers em equipamentos.
 * 5.  **Efeito de Contorno:** Utiliza `useSceneOutline` para aplicar e atualizar o efeito de contorno (OutlinePass) nos equipamentos selecionados ou em hover.
 * 6.  **Loop de Animação:** Utiliza `useAnimationLoop` para o loop de renderização contínuo da cena, incluindo a atualização dos controles e dos renderizadores.
 * 7.  **Animação de Câmera para Foco:** Implementa a lógica para animar suavemente a câmera ao focar em um sistema de equipamentos específico, utilizando `calculateViewForMeshes` para determinar as posições alvo.
 * 8.  **Interrupção de Animação:** Permite que interações do usuário (como scroll do mouse) interrompam animações de câmera em andamento.
 * 9.  **Comunicação de Estado da Câmera:** Responde a mudanças programáticas no estado da câmera (via props) e notifica o estado da câmera quando o usuário a manipula ou quando uma animação de foco é concluída.
 *
 * ```mermaid
 * classDiagram
 *   class ThreeSceneProps {
 *     +equipment: Equipment[]
 *     +allEquipmentData: Equipment[]
 *     +layers: Layer[]
 *     +annotations: Annotation[]
 *     +selectedEquipmentTags: string[] | undefined
 *     +onSelectEquipment(tag: string | null, isMultiSelect: boolean): void
 *     +hoveredEquipmentTag: string | null | undefined
 *     +setHoveredEquipmentTag(tag: string | null): void
 *     +cameraState: CameraState // Não mais undefined
 *     +onCameraChange(cameraState: CameraState, actionDescription?: string): void
 *     +initialCameraPosition: Point3D
 *     +initialCameraLookAt: Point3D
 *     +colorMode: ColorMode
 *     +targetSystemToFrame: TargetSystemInfo | null
 *     +onSystemFramed(): void
 *   }
 *   class Point3D {
 *     +x: number
 *     +y: number
 *     +z: number
 *   }
 *   class Equipment {
 *   }
 *   class Layer {
 *   }
 *   class Annotation {
 *   }
 *   class CameraState {
 *   }
 *   class ColorMode {
 *   }
 *   class TargetSystemInfo {
 *      +systemName: string
 *      +viewIndex: number
 *   }
 *   ThreeSceneProps ..> Equipment
 *   ThreeSceneProps ..> Layer
 *   ThreeSceneProps ..> Annotation
 *   ThreeSceneProps ..> CameraState
 *   ThreeSceneProps ..> ColorMode
 *   ThreeSceneProps ..> Point3D
 *   ThreeSceneProps ..> TargetSystemInfo
 *   class ThreeScene {
 *   }
 *   class ReactFC {
 *   }
 *   ThreeScene --|> ReactFC
 *   ThreeScene ..> useSceneSetup : uses
 *   ThreeScene ..> useEquipmentRenderer : uses
 *   ThreeScene ..> useAnnotationPinRenderer : uses
 *   ThreeScene ..> useMouseInteractionManager : uses
 *   ThreeScene ..> useSceneOutline : uses
 *   ThreeScene ..> useAnimationLoop : uses
 * ```
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

const ANIMATION_DURATION_MS = 700; // Duração da animação de câmera em milissegundos

/**
 * Compara duas posições de vetores com uma tolerância.
 * @param {THREE.Vector3} v1 - Primeiro vetor.
 * @param {THREE.Vector3} v2 - Segundo vetor.
 * @param {number} [epsilon=0.001] - Tolerância para a comparação.
 * @returns {boolean} True se os vetores forem iguais dentro da tolerância, false caso contrário.
 */
const positionEqualsWithTolerance = (v1: THREE.Vector3, v2: THREE.Vector3, epsilon: number = 0.001): boolean => {
  return (
    Math.abs(v1.x - v2.x) < epsilon &&
    Math.abs(v1.y - v2.y) < epsilon &&
    Math.abs(v1.z - v2.z) < epsilon
  );
};

/**
 * Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
 * Atua como um orquestrador de hooks especializados que gerenciam diferentes aspectos da cena.
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
    cameraState: programmaticCameraState, // Estado da câmera vindo das props (controlado por useCameraManager)
    onCameraChange,
    initialCameraPosition,
    initialCameraLookAt,
    colorMode,
    targetSystemToFrame, // Sistema alvo para focar a câmera
    onSystemFramed,      // Callback após o foco no sistema
  } = props;

  const mountRef = useRef<HTMLDivElement>(null); // Ref para o elemento DOM onde a cena será montada

  // Hook para configuração inicial da cena (cena, câmera, renderizadores, controles, etc.)
  const {
    sceneRef,
    cameraRef,
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady,      // Flag: indica se a configuração básica da cena está pronta
    isControlsReady,   // Flag: indica se os OrbitControls estão prontos
  }: UseSceneSetupReturn = useSceneSetup({
    mountRef,
    initialCameraPosition,
    initialCameraLookAt,
    onCameraChange, // Passado para useSceneSetup para ser chamado no evento 'end' dos OrbitControls
  });

  // Refs para callbacks para garantir que as versões mais recentes sejam usadas nos event listeners e animações
  const onCameraChangeRef = useRef(onCameraChange);
  const onSystemFramedRef = useRef(onSystemFramed);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);
  useEffect(() => { onSystemFramedRef.current = onSystemFramed; }, [onSystemFramed]);

  // Refs para controlar o estado e os parâmetros da animação da câmera
  const isAnimatingRef = useRef(false); // Flag: indica se uma animação de câmera está em andamento
  const animationStartTimeRef = useRef(0);
  const animationStartPosRef = useRef<THREE.Vector3 | null>(null);
  const animationStartLookAtRef = useRef<THREE.Vector3 | null>(null);
  const animationTargetPosRef = useRef<THREE.Vector3 | null>(null);
  const animationTargetLookAtRef = useRef<THREE.Vector3 | null>(null);
  const animationOnCompleteCallbackRef = useRef<(() => void) | null>(null); // Callback a ser chamado ao final da animação

  /**
   * Cria uma malha (mesh) 3D para um único item de equipamento.
   * @param {Equipment} item - O objeto de equipamento.
   * @returns {THREE.Object3D} A malha 3D criada.
   */
  const createSingleEquipmentMesh = useCallback((item: Equipment): THREE.Object3D => {
    const finalColor = getEquipmentColor(item, colorMode); // Determina a cor com base no modo de colorização
    const material = new THREE.MeshStandardMaterial({
      color: finalColor,
      metalness: 0.3,
      roughness: 0.6,
      transparent: false,
      opacity: 1.0,
    });
    const geometry = createGeometryForItem(item); // Cria a geometria apropriada para o tipo de equipamento
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(item.position.x, item.position.y, item.position.z);
    if (item.rotation) {
      mesh.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
    }
    mesh.userData = { tag: item.tag, type: item.type, sistema: item.sistema }; // Armazena metadados no mesh
    mesh.castShadow = false; // Sombras desabilitadas para performance
    mesh.receiveShadow = false;
    mesh.visible = true; // Garante que o mesh seja visível por padrão
    return mesh;
  }, [colorMode]); // Recria a função se o modo de colorização mudar

  // Hook para renderizar os meshes dos equipamentos na cena
  const equipmentMeshesRef = useEquipmentRenderer({
    sceneRef,
    cameraRef,
    controlsRef,
    isSceneReady,
    isControlsReady,
    equipmentData: equipment, // Lista de equipamentos filtrados a serem renderizados
    layers,
    colorMode,
    createSingleEquipmentMesh,
    groundMeshRef,
  });

  // Hook para renderizar os pins de anotação (rótulos HTML)
  useAnnotationPinRenderer({
    sceneRef,
    labelRendererRef,
    isSceneReady,
    annotations,
    allEquipmentData: allEquipmentData, // Usa a lista completa para posicionamento correto dos pins
    layers,
  });

  // Hook para gerenciar interações do mouse (clique para seleção, movimento para hover)
  useMouseInteractionManager({
    mountRef,
    cameraRef,
    equipmentMeshesRef: equipmentMeshesRef, // Passa a ref dos meshes renderizados
    isSceneReady: isSceneReady && isControlsReady, // Interação só é possível se tudo estiver pronto
    onSelectEquipment,
    setHoveredEquipmentTag,
  });

  // Hook para aplicar o efeito de contorno (OutlinePass) aos equipamentos selecionados/em hover
  useSceneOutline({
    outlinePassRef,
    equipmentMeshesRef: equipmentMeshesRef,
    selectedEquipmentTags: selectedEquipmentTags,
    hoveredEquipmentTag: hoveredEquipmentTag,
    isSceneReady,
  });

  /**
   * Inicia uma animação suave da câmera para uma nova posição e alvo.
   * @param {THREE.Vector3} targetPos - A posição alvo da câmera.
   * @param {THREE.Vector3} targetLookAt - O ponto alvo para o qual a câmera deve olhar.
   * @param {() => void} [onComplete] - Callback opcional a ser executado ao final da animação.
   */
  const startCameraAnimation = useCallback((targetPos: THREE.Vector3, targetLookAt: THREE.Vector3, onComplete?: () => void) => {
    if (!cameraRef.current || !controlsRef.current) {
      onComplete?.(); // Chama o callback se a câmera/controles não estiverem prontos
      return;
    }
    // console.log("[ThreeScene] startCameraAnimation. Current Camera - Pos:", cameraRef.current.position.clone(), "Target:", controlsRef.current.target.clone());
    // console.log("[ThreeScene] startCameraAnimation. Animation Target - Pos:", targetPos.clone(), "LookAt:", targetLookAt.clone());

    animationStartPosRef.current = cameraRef.current.position.clone();
    animationStartLookAtRef.current = controlsRef.current.target.clone();
    animationTargetPosRef.current = targetPos;
    animationTargetLookAtRef.current = targetLookAt;
    animationStartTimeRef.current = performance.now();
    isAnimatingRef.current = true; // Sinaliza que uma animação está em andamento
    animationOnCompleteCallbackRef.current = onComplete || null;

    // Desabilita os OrbitControls durante a animação para evitar conflitos
    if (controlsRef.current) {
      controlsRef.current.enabled = false;
      // console.log("[ThreeScene] OrbitControls disabled for animation. controls.enabled:", controlsRef.current.enabled);
    }
  }, [cameraRef, controlsRef]);


  // Efeito para responder a mudanças programáticas no estado da câmera (e.g., via undo/redo)
  useEffect(() => {
    if (programmaticCameraState && cameraRef.current && controlsRef.current && isSceneReady && isControlsReady) {
      const targetPosition = new THREE.Vector3(programmaticCameraState.position.x, programmaticCameraState.position.y, programmaticCameraState.position.z);
      const targetLookAt = new THREE.Vector3(programmaticCameraState.lookAt.x, programmaticCameraState.lookAt.y, programmaticCameraState.lookAt.z);

      // Verifica se a câmera já está no estado alvo para evitar animações desnecessárias
      const isAlreadyAtTarget = positionEqualsWithTolerance(cameraRef.current.position, targetPosition) && positionEqualsWithTolerance(controlsRef.current.target, targetLookAt);

      if (!isAlreadyAtTarget && !isAnimatingRef.current) {
        // console.log("[ThreeScene] Programmatic camera state change detected AND camera is not already at target. Starting animation.", programmaticCameraState);
        startCameraAnimation(targetPosition, targetLookAt, () => {
          // NÃO chamar onCameraChange aqui, pois o estado da câmera já foi definido pelo comando de undo/redo.
          // Isso evita criar um novo comando para um estado que já foi restaurado/aplicado.
        });
      }
    }
  }, [programmaticCameraState, isSceneReady, isControlsReady, startCameraAnimation, cameraRef, controlsRef]);


  // Efeito para focar a câmera em um sistema alvo quando `targetSystemToFrame` muda
  useEffect(() => {
    if (!targetSystemToFrame) {
      return;
    }

    if (!sceneRef.current || !cameraRef.current || !controlsRef.current || !isSceneReady || !isControlsReady) {
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current(); // Notifica que o "enquadramento" (ou tentativa) terminou
      }
      return;
    }

    const equipmentMeshesToConsider = equipmentMeshesRef.current;

    // Se não há meshes (e não é o caso especial de carregamento inicial sem sistema)
    if (!equipmentMeshesToConsider || (equipmentMeshesToConsider.length === 0 && targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM')) {
        if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
        return;
    }

    let systemMeshes: THREE.Object3D[] = [];
    // Não calcula meshes para a visão inicial sem sistema, pois pode ser uma visão geral
    if (targetSystemToFrame.systemName !== 'INITIAL_LOAD_NO_SYSTEM') {
         systemMeshes = equipmentMeshesToConsider.filter(
            (mesh) => mesh.userData.sistema === targetSystemToFrame.systemName && mesh.visible
        );

        if (systemMeshes.length === 0) { // Se nenhum mesh do sistema estiver visível ou existir
          if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
          return;
        }
    } else {
        // Para INITIAL_LOAD_NO_SYSTEM, apenas chama onSystemFramed, pois a câmera já deve estar na posição inicial.
        if (typeof onSystemFramedRef.current === 'function') onSystemFramedRef.current();
        return;
    }

    const viewOptions: SystemViewOptions | null = calculateViewForMeshes(systemMeshes, cameraRef.current);
    // console.log(`[ThreeScene] Calculated view for system: ${targetSystemToFrame.systemName} View Index: ${targetSystemToFrame.viewIndex}`, viewOptions ? `Selected View: ` : "No view options calculated.", viewOptions ? (targetSystemToFrame.viewIndex === 1 ? viewOptions.topDown : targetSystemToFrame.viewIndex === 2 ? viewOptions.isometric : viewOptions.default) : "");

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
        // APÓS a animação de foco, obter o estado final e chamar onCameraChange para registrar o comando de movimento.
        if (cameraRef.current && controlsRef.current && typeof onCameraChangeRef.current === 'function') {
          const finalStateAfterFocus: CameraState = {
            position: cameraRef.current.position.clone(),
            lookAt: controlsRef.current.target.clone(),
          };
          // Passa uma descrição clara para o comando de histórico
          onCameraChangeRef.current(finalStateAfterFocus, `Foco no sistema ${targetSystemToFrame.systemName} (visão ${targetSystemToFrame.viewIndex})`);
        }
        if (typeof onSystemFramedRef.current === 'function') {
          onSystemFramedRef.current(); // Notifica que o enquadramento foi concluído
        }
      });
    } else { // Se não foi possível calcular a visão (e.g., nenhum mesh visível no sistema)
      if (typeof onSystemFramedRef.current === 'function') {
        onSystemFramedRef.current();
      }
    }
  }, [targetSystemToFrame, isSceneReady, isControlsReady, equipmentMeshesRef, sceneRef, cameraRef, controlsRef, startCameraAnimation]);


  /**
   * Função chamada a cada frame pela animação para interpolar a câmera.
   */
  const handleFrameUpdate = useCallback(() => {
    if (isAnimatingRef.current && cameraRef.current && controlsRef.current && animationStartPosRef.current && animationStartLookAtRef.current && animationTargetPosRef.current && animationTargetLookAtRef.current) {
      const elapsedTime = performance.now() - animationStartTimeRef.current;
      let alpha = Math.min(elapsedTime / ANIMATION_DURATION_MS, 1); // Progresso da animação (0 a 1)

      // Aplica uma função de easing (ease-out quart) para suavizar o final da animação
      alpha = 1 - Math.pow(1 - alpha, 4);

      cameraRef.current.position.lerpVectors(animationStartPosRef.current, animationTargetPosRef.current, alpha);
      controlsRef.current.target.lerpVectors(animationStartLookAtRef.current, animationTargetLookAtRef.current, alpha);
      controlsRef.current.update(); // Necessário para aplicar as mudanças no target dos OrbitControls

      if (alpha >= 1) { // Animação concluída
        isAnimatingRef.current = false;
        if (controlsRef.current) {
          controlsRef.current.enabled = true; // Reabilita os OrbitControls
        }
        if (animationOnCompleteCallbackRef.current) {
          animationOnCompleteCallbackRef.current(); // Chama o callback de conclusão
          animationOnCompleteCallbackRef.current = null;
        }
      }
    }
  }, [cameraRef, controlsRef]); // Dependências estáveis

  // Efeito para interromper a animação de câmera se o usuário usar o scroll (zoom)
  useEffect(() => {
    const currentMount = mountRef.current;
    const handleWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) {
        // console.log("[ThreeScene] Wheel event during animation. Stopping animation.");
        isAnimatingRef.current = false;
        if (controlsRef.current) {
          controlsRef.current.enabled = true; // Reabilita os controles imediatamente
        }
        if (animationOnCompleteCallbackRef.current) {
          // Chama o callback, pois a animação foi "concluída" pela interrupção do usuário
          animationOnCompleteCallbackRef.current();
          animationOnCompleteCallbackRef.current = null;
        }
        // Importante: Não chamar onCameraChange aqui, pois o scroll do mouse
        // já acionará o evento 'end' dos OrbitControls, que chamará onCameraChange.
      }
    };

    if (currentMount && isSceneReady && isControlsReady) {
      currentMount.addEventListener('wheel', handleWheel, { passive: true });
      return () => {
        currentMount.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isSceneReady, isControlsReady, controlsRef]); // Apenas essas dependências


  // Hook para o loop principal de animação/renderização da cena
  useAnimationLoop({
    isSceneReady: isSceneReady && isControlsReady, // Passa a flag combinada de prontidão
    sceneRef,
    cameraRef,
    controlsRef,
    composerRef,
    labelRendererRef,
    onFrameUpdate: handleFrameUpdate, // Passa a função de atualização de frame para a animação da câmera
  });

  // Renderiza o div que servirá como contêiner para a cena Three.js
  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
