
"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import type { CameraState, Command, TargetSystemInfo } from '@/lib/types';
import { useToast } from '@/hooks/use-toast'; // Para feedback ao usuário
// import { useUndoableCommandsStore } from '@/stores/undoable-commands-store'; // Exemplo, ajuste para sua store
// import { calculateCameraStateDistance } from '@/core/three/camera-utils'; // Removido - Função não existe no módulo

/** Posição inicial padrão da câmera: { x: 25, y: 20, z: 25 }. */
export const defaultInitialCameraPosition = { x: 25, y: 20, z: 25 };
/** Ponto de observação (lookAt) inicial padrão da câmera: { x: 0, y: 2, z: 0 }. */
export const defaultInitialCameraLookAt = { x: 0, y: 2, z: 0 };

const NUMBER_OF_VIEWS = 3; // 0: default, 1: topDown, 2: isometric

export interface UseCameraManagerProps {
  executeCommand: (command: Command) => void;
  onCameraChangeFromCommand?: (newState: CameraState) => void;
}

export interface UseCameraManagerReturn {
  currentCameraState: CameraState | undefined;
  targetSystemToFrame: TargetSystemInfo | null;
  focusedSystemNameUI: string | null;
  currentViewIndexUI: number;
  handleSetCameraViewForSystem: (systemName: string) => void;
  handleCameraChangeFromScene: (newSceneCameraState: CameraState) => void;
  onSystemFramed: () => void;
  defaultInitialCameraPosition: { x: number; y: number; z: number };
  defaultInitialCameraLookAt: { x: number; y: number; z: number };
}

export function useCameraManager({ executeCommand, onCameraChangeFromCommand }: UseCameraManagerProps): UseCameraManagerReturn {
  const [targetSystemToFrame, setTargetSystemToFrame] = useState<TargetSystemInfo | null>(null);
  const [focusedSystemNameUI, setFocusedSystemNameUI] = useState<string | null>(null);
  const [currentViewIndexUI, setCurrentViewIndexUI] = useState<number>(0);

  const focusedSystemRef = useRef<string | null>(null);
  const currentViewIndexRef = useRef<number>(0);
  const previousCameraStateRef = useRef<CameraState | undefined>({
    position: defaultInitialCameraPosition,
    lookAt: defaultInitialCameraLookAt,
  });

  const onCameraChangeFromCommandRef = useRef(onCameraChangeFromCommand);
  useEffect(() => {
    onCameraChangeFromCommandRef.current = onCameraChangeFromCommand;
  }, [onCameraChangeFromCommand]);

  const { toast } = useToast();

  const handleSetCameraViewForSystem = useCallback((systemName: string) => {
    // console.log(`[useCameraManager] handleSetCameraViewForSystem CALLED with systemName: ${systemName}, current focusedSystem (from ref): ${focusedSystemRef.current}`);

    let nextViewIndex: number;

    if (systemName === focusedSystemRef.current) {
      nextViewIndex = (currentViewIndexRef.current + 1) % NUMBER_OF_VIEWS;
      // console.log(`[useCameraManager] SAME system. Current viewIndex (from ref): ${currentViewIndexRef.current}, nextViewIndex: ${nextViewIndex}`);
    } else {
      nextViewIndex = 0;
      // console.log(`[useCameraManager] NEW system (Incoming: ${systemName}, Current focused from ref: ${focusedSystemRef.current}). Resetting view index to: ${nextViewIndex}`);
    }

    focusedSystemRef.current = systemName;
    currentViewIndexRef.current = nextViewIndex;

    setFocusedSystemNameUI(systemName);
    setCurrentViewIndexUI(nextViewIndex);

    const newTargetSystemInfo: TargetSystemInfo = {
      systemName,
      viewIndex: nextViewIndex
    };
    // console.log(`[useCameraManager] Setting targetSystemToFrame:`, newTargetSystemInfo);
    setTargetSystemToFrame(newTargetSystemInfo);
  }, [setTargetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]);

  const handleCameraChangeFromScene = useCallback((newSceneCameraState: CameraState) => {
    // console.log(`[useCameraManager] handleCameraChangeFromScene. New state:`, newSceneCameraState, ` Old snapshot:`, previousCameraStateRef.current);

    if (targetSystemToFrame === null) {
      // console.log('[useCameraManager] Manual camera move detected, resetting focused system and view index.');
      focusedSystemRef.current = null;
      currentViewIndexRef.current = 0;
      setFocusedSystemNameUI(null);
      setCurrentViewIndexUI(0);
    }

    // const distance = previousCameraStateRef.current ? calculateCameraStateDistance(newSceneCameraState, previousCameraStateRef.current) : Infinity;
    // if (distance < 0.001 && previousCameraStateRef.current) {
    //   console.log('[useCameraManager] Camera change too small, not creating command.');
    //   previousCameraStateRef.current = { ...newSceneCameraState };
    //   return;
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
        previousCameraStateRef.current = { ...newSceneCameraState };
      },
      undo: () => {
        if (oldCameraStateForUndo) {
          if (typeof onCameraChangeFromCommandRef.current === 'function') {
            onCameraChangeFromCommandRef.current(oldCameraStateForUndo);
          }
          previousCameraStateRef.current = { ...oldCameraStateForUndo };
          focusedSystemRef.current = null; 
          currentViewIndexRef.current = 0;
          setFocusedSystemNameUI(null);
          setCurrentViewIndexUI(0);
        }
      },
    };
    // console.log(`[useCameraManager] Executing CAMERA_MOVE command.`);
    executeCommand(command);
  }, [executeCommand, targetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]);

  const onSystemFramed = useCallback(() => {
    // console.log('[useCameraManager] onSystemFramed called. Clearing targetSystemToFrame.');
    setTargetSystemToFrame(null);
  }, [setTargetSystemToFrame]);

  // O currentCameraState é o que o hook expõe, mas ele é uma combinação do que foi definido
  // programaticamente (via targetSystemToFrame ou undo) e o último estado conhecido da câmera.
  // A intenção é que `ThreeScene` use `currentCameraState` para aplicar mudanças vindas de comandos (e.g., undo)
  // ou do ciclo de foco. Quando o usuário move a câmera, `handleCameraChangeFromScene` é chamado,
  // atualizando `previousCameraStateRef` e registrando o comando.
  // A "verdade" da câmera para o usuário é o que OrbitControls está fazendo,
  // e `previousCameraStateRef` tenta rastrear isso para os undos.

  return {
    currentCameraState: previousCameraStateRef.current, // Retorna o último estado conhecido da câmera
    targetSystemToFrame,
    focusedSystemNameUI,
    currentViewIndexUI,
    handleSetCameraViewForSystem,
    handleCameraChangeFromScene,
    onSystemFramed,
    defaultInitialCameraPosition,
    defaultInitialCameraLookAt,
  };
}
