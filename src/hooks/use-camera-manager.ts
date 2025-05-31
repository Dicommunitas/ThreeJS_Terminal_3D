
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
  // Removido: onCameraChangeFromCommand?: (newState: CameraState) => void;
}

export interface UseCameraManagerReturn {
  currentCameraState: CameraState; // Agora não é mais undefined após a inicialização
  targetSystemToFrame: TargetSystemInfo | null;
  focusedSystemNameUI: string | null;
  currentViewIndexUI: number;
  handleSetCameraViewForSystem: (systemName: string) => void;
  handleCameraChangeFromScene: (newSceneCameraState: CameraState, actionDescription?: string) => void;
  onSystemFramed: () => void;
  defaultInitialCameraPosition: { x: number; y: number; z: number };
  defaultInitialCameraLookAt: { x: number; y: number; z: number };
}

export function useCameraManager({ executeCommand }: UseCameraManagerProps): UseCameraManagerReturn {
  const [targetSystemToFrame, setTargetSystemToFrame] = useState<TargetSystemInfo | null>(null);
  const [focusedSystemNameUI, setFocusedSystemNameUI] = useState<string | null>(null);
  const [currentViewIndexUI, setCurrentViewIndexUI] = useState<number>(0);

  const focusedSystemRef = useRef<string | null>(null);
  const currentViewIndexRef = useRef<number>(0);

  const [currentCameraState, setCurrentCameraState] = useState<CameraState>(() => ({
    position: { ...defaultInitialCameraPosition },
    lookAt: { ...defaultInitialCameraLookAt },
  }));
  const lastCommittedCameraStateForUndoRef = useRef<CameraState>({ ...currentCameraState });


  const { toast } = useToast();

  const handleSetCameraViewForSystem = useCallback((systemName: string) => {
    let nextViewIndex: number;
    if (systemName === focusedSystemRef.current) {
      nextViewIndex = (currentViewIndexRef.current + 1) % NUMBER_OF_VIEWS;
    } else {
      nextViewIndex = 0;
    }
    focusedSystemRef.current = systemName;
    currentViewIndexRef.current = nextViewIndex;
    setFocusedSystemNameUI(systemName);
    setCurrentViewIndexUI(nextViewIndex);
    const newTargetSystemInfo: TargetSystemInfo = {
      systemName,
      viewIndex: nextViewIndex
    };
    setTargetSystemToFrame(newTargetSystemInfo);
  }, [setTargetSystemToFrame, setFocusedSystemNameUI, setCurrentViewIndexUI]);


  const handleCameraChangeFromScene = useCallback((newSceneCameraState: CameraState, actionDescription?: string) => {
    const oldStateForUndo = { ...lastCommittedCameraStateForUndoRef.current };

    const command: Command = {
      id: `camera-move-${Date.now()}`,
      type: 'CAMERA_MOVE',
      description: actionDescription || 'Câmera movida pelo usuário',
      execute: () => {
        setCurrentCameraState(newSceneCameraState);
        lastCommittedCameraStateForUndoRef.current = { ...newSceneCameraState };
      },
      undo: () => {
        setCurrentCameraState(oldStateForUndo);
        lastCommittedCameraStateForUndoRef.current = { ...oldStateForUndo };
      },
    };
    executeCommand(command);
  }, [executeCommand]);


  const onSystemFramed = useCallback(() => {
    setTargetSystemToFrame(null);
    // O estado da câmera (currentCameraState) já terá sido atualizado
    // pela callback de conclusão da animação em ThreeScene, que chama handleCameraChangeFromScene.
  }, [setTargetSystemToFrame]);

  return {
    currentCameraState,
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
