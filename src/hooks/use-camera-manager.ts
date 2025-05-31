
/**
 * ```mermaid
 *   classDiagram
 *     class UseCameraManagerReturn {
 *       +currentCameraState: CameraState | undefined
 *       +targetSystemToFrame: TargetSystemInfo | null
 *       +focusedSystemName: string | null // Estado React para UI
 *       +currentViewIndex: number // Estado React para UI
 *       +handleSetCameraViewForSystem(systemName: string): void
 *       +handleCameraChangeFromScene(newSceneCameraState: CameraState): void
 *       +onSystemFramed(): void
 *       +defaultInitialCameraPosition: Point3D
 *       +defaultInitialCameraLookAt: Point3D
 *     }
 *     class Point3D {
 *       +x: number
 *       +y: number
 *       +z: number
 *     }
 *     class CameraState {
 *     }
 *     class TargetSystemInfo {
 *        +systemName: string
 *        +viewIndex: number
 *     }
 *     class Command {
 *     }
 *     UseCameraManagerReturn --> CameraState
 *     UseCameraManagerReturn --> TargetSystemInfo
 *     UseCameraManagerReturn --> Point3D
 *     class useCameraManager {
 *     }
 *     useCameraManager ..> Command : uses (via executeCommand)
 * ```
 *
 */
"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import type { CameraState, Command, TargetSystemInfo } from '@/lib/types';

/** Posição inicial padrão da câmera: { x: 25, y: 20, z: 25 }. */
export const defaultInitialCameraPosition = { x: 25, y: 20, z: 25 };
/** Ponto de observação (lookAt) inicial padrão da câmera: { x: 0, y: 2, z: 0 }. */
export const defaultInitialCameraLookAt = { x: 0, y: 2, z: 0 };

const NUMBER_OF_VIEWS = 3; // 0: default, 1: topDown, 2: isometric

/**
 * Props para o hook `useCameraManager`.
 * @interface UseCameraManagerProps
 * @property {(command: Command) => void} executeCommand - Função para executar comandos (e.g., movimento de câmera)
 *                                                        e adicioná-los ao histórico de undo/redo.
 */
export interface UseCameraManagerProps {
  executeCommand: (command: Command) => void;
}

/**
 * Retorno do hook `useCameraManager`.
 * @interface UseCameraManagerReturn
 * @property {CameraState | undefined} currentCameraState - O estado atual da câmera (posição e ponto de observação).
 *                                                       Pode ser `undefined` antes da inicialização completa.
 * @property {TargetSystemInfo | null} targetSystemToFrame - Informações sobre o sistema alvo e a visão desejada.
 *                                                Null se nenhum sistema estiver sendo focado.
 * @property {string | null} focusedSystemName - O nome do sistema que está atualmente em foco para ciclo de visões (estado React para UI).
 * @property {number} currentViewIndex - O índice da visão atual para o `focusedSystemName` (estado React para UI).
 * @property {(systemName: string) => void} handleSetCameraViewForSystem - Função para definir o sistema alvo e ciclar pelas visões.
 * @property {(newSceneCameraState: CameraState) => void} handleCameraChangeFromScene - Manipula mudanças de câmera provenientes da cena 3D
 *                                                                                    e as registra no histórico de comandos.
 * @property {() => void} onSystemFramed - Callback para ser chamado pela `ThreeScene` após o enquadramento do sistema ser concluído.
 *                                       Reseta o `targetSystemToFrame`.
 * @property {typeof defaultInitialCameraPosition} defaultInitialCameraPosition - Exporta a posição inicial padrão da câmera.
 * @property {typeof defaultInitialCameraLookAt} defaultInitialCameraLookAt - Exporta o ponto de observação inicial padrão da câmera.
 */
export interface UseCameraManagerReturn {
  currentCameraState: CameraState | undefined;
  targetSystemToFrame: TargetSystemInfo | null;
  focusedSystemName: string | null; // Estado React para UI, pode ser usado por outros componentes
  currentViewIndex: number;      // Estado React para UI
  handleSetCameraViewForSystem: (systemName: string) => void;
  handleCameraChangeFromScene: (newSceneCameraState: CameraState) => void;
  onSystemFramed: () => void;
  defaultInitialCameraPosition: { x: number; y: number; z: number };
  defaultInitialCameraLookAt: { x: number; y: number; z: number };
}

/**
 * Hook customizado para gerenciar o estado e as interações da câmera 3D.
 * Responsável pelo estado da câmera, foco em sistemas e integração com o histórico de comandos.
 * @param {UseCameraManagerProps} props As props do hook, incluindo `executeCommand` para integração com o histórico.
 * @returns {UseCameraManagerReturn} Um objeto contendo o estado da câmera e funções para interagir com ela.
 */
export function useCameraManager({ executeCommand }: UseCameraManagerProps): UseCameraManagerReturn {
  const [currentCameraState, setCurrentCameraState] = useState<CameraState | undefined>({
    position: defaultInitialCameraPosition,
    lookAt: defaultInitialCameraLookAt,
  });
  const [targetSystemToFrame, setTargetSystemToFrame] = useState<TargetSystemInfo | null>(null);
  
  // Estados React para UI, se necessário para outros componentes lerem
  const [focusedSystemNameUI, setFocusedSystemNameUI] = useState<string | null>(null);
  const [currentViewIndexUI, setCurrentViewIndexUI] = useState<number>(0);
  
  // Refs para o estado lógico interno e persistente do ciclo
  const focusedSystemRef = useRef<string | null>(null);
  const currentViewIndexRef = useRef<number>(0);
  
  const previousCameraStateRef = useRef<CameraState | undefined>(currentCameraState);

  useEffect(() => {
    previousCameraStateRef.current = currentCameraState;
  }, [currentCameraState]);

  const handleSetCameraViewForSystem = useCallback((systemName: string) => {
    console.log(`[useCameraManager] handleSetCameraViewForSystem CALLED with systemName: ${systemName}, current focusedSystem (from ref): ${focusedSystemRef.current}`);
    
    let nextViewIndex: number;
    
    if (systemName === focusedSystemRef.current) {
      // Mesmo sistema - avançar para próxima visualização
      nextViewIndex = (currentViewIndexRef.current + 1) % NUMBER_OF_VIEWS;
      console.log(`[useCameraManager] SAME system. Current viewIndex (from ref): ${currentViewIndexRef.current}, nextViewIndex: ${nextViewIndex}`);
    } else {
      // Novo sistema - resetar para visualização padrão
      nextViewIndex = 0;
      console.log(`[useCameraManager] NEW system (Incoming: ${systemName}, Current focused from ref: ${focusedSystemRef.current}). Resetting view index to: ${nextViewIndex}`);
    }
    
    // Atualizar refs imediatamente para a lógica interna
    focusedSystemRef.current = systemName;
    currentViewIndexRef.current = nextViewIndex;
    
    // Atualizar estados React para UI, se necessário por outros componentes
    setFocusedSystemNameUI(systemName);
    setCurrentViewIndexUI(nextViewIndex);
    
    // Disparar a mudança de visualização
    const newTargetSystemInfo: TargetSystemInfo = { 
      systemName, 
      viewIndex: nextViewIndex 
    };
    
    console.log(`[useCameraManager] Setting targetSystemToFrame:`, newTargetSystemInfo);
    setTargetSystemToFrame(newTargetSystemInfo);
  }, [setTargetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]); // Depende apenas das funções set estáveis
  

  /**
   * Manipula as mudanças de câmera provenientes da cena 3D (e.g., órbita do usuário).
   * Registra a mudança no histórico de comandos se o novo estado for significativamente
   * diferente do estado atual, evitando registros duplicados para movimentos triviais.
   * Também reseta o foco do sistema se a câmera for movida manualmente.
   * @param {CameraState} newSceneCameraState O novo estado da câmera da cena.
   */
  const handleCameraChangeFromScene = useCallback((newSceneCameraState: CameraState) => {
    const oldCameraStateSnapshot = previousCameraStateRef.current ? {
      position: { ...previousCameraStateRef.current.position },
      lookAt: { ...previousCameraStateRef.current.lookAt }
    } : undefined;

    console.log('[useCameraManager] handleCameraChangeFromScene. New state:', newSceneCameraState, 'Old snapshot:', oldCameraStateSnapshot);

    // Resetar o foco do sistema e o índice da visão se a câmera for movida manualmente
    // e a mudança não for trivial (comparado com o estado que seria definido por targetSystemToFrame)
    if (targetSystemToFrame === null) { // Só reseta se não estiver no meio de um enquadramento programático
        focusedSystemRef.current = null;
        currentViewIndexRef.current = 0;
        setFocusedSystemNameUI(null);
        setCurrentViewIndexUI(0);
        console.log('[useCameraManager] Manual camera move detected, resetting focused system and view index.');
    }


    if (oldCameraStateSnapshot &&
        Math.abs(oldCameraStateSnapshot.position.x - newSceneCameraState.position.x) < 0.001 &&
        Math.abs(oldCameraStateSnapshot.position.y - newSceneCameraState.position.y) < 0.001 &&
        Math.abs(oldCameraStateSnapshot.position.z - newSceneCameraState.position.z) < 0.001 &&
        Math.abs(oldCameraStateSnapshot.lookAt.x - newSceneCameraState.lookAt.x) < 0.001 &&
        Math.abs(oldCameraStateSnapshot.lookAt.y - newSceneCameraState.lookAt.y) < 0.001 &&
        Math.abs(oldCameraStateSnapshot.lookAt.z - newSceneCameraState.lookAt.z) < 0.001) {
      console.log('[useCameraManager] Camera change too small, not creating command.');
      // Mesmo que pequeno, atualizamos o estado para refletir a posição exata da cena
      setCurrentCameraState(newSceneCameraState); 
      return;
    }

    const command: Command = {
      id: `orbit-camera-${Date.now()}`,
      type: 'CAMERA_MOVE',
      description: 'Câmera movimentada pelo usuário',
      execute: () => setCurrentCameraState(newSceneCameraState),
      undo: () => setCurrentCameraState(oldCameraStateSnapshot),
    };
    console.log('[useCameraManager] Executing CAMERA_MOVE command.');
    executeCommand(command);
  }, [executeCommand, targetSystemToFrame]); // Adicionado targetSystemToFrame como dependência

  /**
   * Callback para ser chamado pela ThreeScene após o enquadramento do sistema ser concluído.
   * Reseta o `targetSystemToFrame` para `null`.
   */
  const onSystemFramed = useCallback(() => {
    console.log('[useCameraManager] onSystemFramed called. Clearing targetSystemToFrame.');
    setTargetSystemToFrame(null);
  }, [setTargetSystemToFrame]);

  return {
    currentCameraState,
    targetSystemToFrame,
    focusedSystemName: focusedSystemNameUI, // Expõe o estado React para a UI
    currentViewIndex: currentViewIndexUI,    // Expõe o estado React para a UI
    handleSetCameraViewForSystem,
    handleCameraChangeFromScene,
    onSystemFramed,
    defaultInitialCameraPosition,
    defaultInitialCameraLookAt,
  };
}

      
      
