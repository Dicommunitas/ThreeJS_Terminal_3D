
"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import type { CameraState, Command, TargetSystemInfo } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

// Número de visualizações disponíveis (default, topDown, isometric)
const NUMBER_OF_VIEWS = 3;

/** Posição inicial padrão da câmera: { x: 25, y: 20, z: 25 }. */
export const defaultInitialCameraPosition = { x: 25, y: 20, z: 25 };
/** Ponto de observação (lookAt) inicial padrão da câmera: { x: 0, y: 2, z: 0 }. */
export const defaultInitialCameraLookAt = { x: 0, y: 2, z: 0 };

export interface UseCameraManagerProps {
  executeCommand: (command: Command) => void;
  onCameraChangeFromCommand?: (newState: CameraState) => void; // Callback para aplicar mudanças de câmera vindas de comandos
}

export interface UseCameraManagerReturn {
  currentCameraState: CameraState | undefined; // O estado atual da câmera a ser aplicado pela ThreeScene
  targetSystemToFrame: TargetSystemInfo | null;
  focusedSystemNameUI: string | null; // Para UI, se necessário
  currentViewIndexUI: number; // Para UI, se necessário
  handleSetCameraViewForSystem: (systemName: string) => void;
  handleCameraChangeFromScene: (newSceneCameraState: CameraState) => void;
  onSystemFramed: () => void;
  defaultInitialCameraPosition: { x: number; y: number; z: number };
  defaultInitialCameraLookAt: { x: number; y: number; z: number };
}

export function useCameraManager({ executeCommand, onCameraChangeFromCommand }: UseCameraManagerProps): UseCameraManagerReturn {
  const [targetSystemToFrame, setTargetSystemToFrame] = useState<TargetSystemInfo | null>(null);
  
  // Estados para refletir o sistema focado e o índice da visão na UI, se necessário.
  // A lógica principal usará refs para evitar problemas com closures em callbacks.
  const [focusedSystemNameUI, setFocusedSystemNameUI] = useState<string | null>(null);
  const [currentViewIndexUI, setCurrentViewIndexUI] = useState<number>(0);

  // Refs para manter o estado "verdadeiro" e persistente entre renderizações e chamadas de callback
  const focusedSystemRef = useRef<string | null>(null);
  const currentViewIndexRef = useRef<number>(0);
  
  // Ref para o último estado conhecido da câmera, usado para calcular o "undo" de movimentos manuais
  const previousCameraStateRef = useRef<CameraState | undefined>({
    position: { ...defaultInitialCameraPosition },
    lookAt: { ...defaultInitialCameraLookAt },
  });

  // Ref para o callback onCameraChangeFromCommand para garantir que a versão mais recente seja usada
  const onCameraChangeFromCommandRef = useRef(onCameraChangeFromCommand);
  useEffect(() => {
    onCameraChangeFromCommandRef.current = onCameraChangeFromCommand;
  }, [onCameraChangeFromCommand]);

  const { toast } = useToast();

  const handleSetCameraViewForSystem = useCallback((systemName: string) => {
    // console.log(`[useCameraManager] handleSetCameraViewForSystem CALLED with systemName: ${systemName}, current focusedSystem (from ref): ${focusedSystemRef.current}`);
    
    let nextViewIndex: number;
    
    if (systemName === focusedSystemRef.current) {
      // Mesmo sistema - avançar para próxima visualização
      nextViewIndex = (currentViewIndexRef.current + 1) % NUMBER_OF_VIEWS;
      // console.log(`[useCameraManager] SAME system. Current viewIndex (from ref): ${currentViewIndexRef.current}, nextViewIndex: ${nextViewIndex}`);
    } else {
      // Novo sistema - resetar para visualização padrão
      nextViewIndex = 0;
      // console.log(`[useCameraManager] NEW system (Incoming: ${systemName}, Current focused from ref: ${focusedSystemRef.current}). Resetting view index to: ${nextViewIndex}`);
    }
    
    // Atualizar refs imediatamente para que a próxima chamada (mesmo que rápida/múltipla) use os valores corretos
    focusedSystemRef.current = systemName;
    currentViewIndexRef.current = nextViewIndex;
    
    // Atualizar estados React para UI, se necessário, e para disparar re-renderizações onde estes estados são usados como dependência.
    setFocusedSystemNameUI(systemName);
    setCurrentViewIndexUI(nextViewIndex);
    
    const newTargetSystemInfo: TargetSystemInfo = { 
      systemName, 
      viewIndex: nextViewIndex 
    };
    
    // console.log(`[useCameraManager] Setting targetSystemToFrame:`, newTargetSystemInfo);
    setTargetSystemToFrame(newTargetSystemInfo);
  }, [setTargetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]); // Depende das funções set, que são estáveis
  

  const handleCameraChangeFromScene = useCallback((newSceneCameraState: CameraState) => {
    // console.log(`[useCameraManager] handleCameraChangeFromScene. New state:`, newSceneCameraState, ` Old snapshot:`, previousCameraStateRef.current);
    
    // Se a câmera foi movida programaticamente (foco em sistema), não registramos um novo comando de "movimento manual".
    // Apenas atualizamos previousCameraStateRef para o novo estado após o foco.
    // E resetamos o estado de foco para que o próximo movimento manual seja detectado corretamente.
    if (targetSystemToFrame !== null) {
      // console.log('[useCameraManager] Camera changed due to programmatic focus, updating snapshot but not creating command. Resetting focus refs.');
      previousCameraStateRef.current = { ...newSceneCameraState };
      // Não resetar focusedSystemRef/currentViewIndexRef aqui, pois o targetSystemToFrame ainda pode estar ativo
      // O reset do targetSystemToFrame é feito em onSystemFramed.
      return;
    }

    // Se foi um movimento manual, resetar o estado de foco.
    if (focusedSystemRef.current !== null || currentViewIndexRef.current !== 0) {
        // console.log('[useCameraManager] Manual camera move detected, resetting focused system and view index refs and UI states.');
        focusedSystemRef.current = null;
        currentViewIndexRef.current = 0;
        setFocusedSystemNameUI(null);
        setCurrentViewIndexUI(0);
    }
    
    // Verificar se a mudança é significativa para evitar comandos de undo/redo desnecessários
    // Esta função precisaria ser implementada:
    // if (previousCameraStateRef.current) {
    //   const distance = calculateCameraStateDistance(newSceneCameraState, previousCameraStateRef.current);
    //   if (distance < 0.001) {
    //     // console.log(`[useCameraManager] Camera change too small, not creating command.`);
    //     return; // Não cria comando se a mudança for muito pequena
    //   }
    // }
    
    const oldCameraStateForUndo = previousCameraStateRef.current
      ? {
          position: { ...previousCameraStateRef.current.position },
          lookAt: { ...previousCameraStateRef.current.lookAt }
        }
      : undefined;

    previousCameraStateRef.current = {
        position: { ...newSceneCameraState.position },
        lookAt: { ...newSceneCameraState.lookAt }
    };

    const command: Command = {
      id: `orbit-camera-${Date.now()}`,
      type: 'CAMERA_MOVE',
      description: 'Câmera movimentada pelo usuário',
      execute: () => {
        // Ao refazer, aplica o novo estado da câmera e atualiza o snapshot
        if (typeof onCameraChangeFromCommandRef.current === 'function') {
            onCameraChangeFromCommandRef.current(newSceneCameraState);
        }
        previousCameraStateRef.current = { ...newSceneCameraState };
        // Resetar foco se o comando de redo é um movimento manual
        focusedSystemRef.current = null; 
        currentViewIndexRef.current = 0;
        setFocusedSystemNameUI(null);
        setCurrentViewIndexUI(0);
      },
      undo: () => {
        if (oldCameraStateForUndo) {
          if (typeof onCameraChangeFromCommandRef.current === 'function') {
            onCameraChangeFromCommandRef.current(oldCameraStateForUndo);
          }
          previousCameraStateRef.current = { ...oldCameraStateForUndo };
          // Ao desfazer um movimento manual, não necessariamente resetamos o foco,
          // pois o estado anterior pode ter tido um foco.
          // O estado de foco é gerenciado mais pelo handleSetCameraViewForSystem ou resetado por movimentos manuais.
        }
      },
    };
    // console.log(`[useCameraManager] Executing CAMERA_MOVE command.`);
    executeCommand(command);
  }, [executeCommand, targetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]); // Adicionado targetSystemToFrame
  
  const onSystemFramed = useCallback(() => {
    // console.log('[useCameraManager] onSystemFramed called. Clearing targetSystemToFrame.');
    setTargetSystemToFrame(null);
  }, [setTargetSystemToFrame]);
  
  return {
    currentCameraState: previousCameraStateRef.current,
    targetSystemToFrame,
    focusedSystemNameUI, // Exporta o estado UI
    currentViewIndexUI,  // Exporta o estado UI
    handleSetCameraViewForSystem,
    handleCameraChangeFromScene,
    onSystemFramed,
    defaultInitialCameraPosition,
    defaultInitialCameraLookAt,
  };
}

