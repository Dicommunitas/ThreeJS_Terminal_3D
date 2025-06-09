
/**
 * @fileOverview Orchestrator hook for setting up a complete Three.js scene.
 *
 * Responsibilities:
 * - Composes specialized hooks to initialize different parts of the Three.js environment:
 *   - `useThreeCore`: Initializes `THREE.Scene` and `THREE.PerspectiveCamera`.
 *   - `useThreeRenderers`: Sets up `WebGLRenderer`, `CSS2DRenderer`, `EffectComposer`, and `OutlinePass`.
 *   - `useThreeOrbitControls`: Configures `OrbitControls` for camera manipulation.
 *   - `useThreeSceneElements`: Adds lighting and a ground plane to the scene.
 *   - `useThreeResize`: Handles responsive resizing of the camera and renderers.
 * - Aggregates and returns refs to all major Three.js components created by these hooks.
 * - Manages and returns overall scene readiness flags (`isSceneReady`, `isControlsReady`).
 *
 * This hook aims to simplify scene setup in the main `ThreeScene` component by delegating
 * specific initialization tasks to more focused hooks, adhering to the Single Responsibility Principle.
 */
import type * as THREE from 'three';
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js';
import type { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import type { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import type { CameraState } from '@/lib/types';

import { useThreeCore } from './useThreeCore';
import { useThreeRenderers } from './useThreeRenderers';
import { useThreeOrbitControls } from './useThreeOrbitControls';
import { useThreeSceneElements } from './useThreeSceneElements';
import { useThreeResize } from './useThreeResize';

/**
 * Props for the main scene setup orchestrator hook.
 * @interface UseSceneOrchestratorProps
 * @property {React.RefObject<HTMLDivElement>} mountRef - Ref to the container element for the scene.
 * @property {{ x: number; y: number; z: number }} initialCameraPosition - Initial position of the camera.
 * @property {{ x: number; y: number; z: number }} initialCameraLookAt - Initial point the camera is looking at.
 * @property {(cameraState: CameraState, actionDescription?: string) => void} onCameraChange - Callback for when camera state changes.
 */
export interface UseSceneSetupProps {
  mountRef: React.RefObject<HTMLDivElement>;
  initialCameraPosition: { x: number; y: number; z: number };
  initialCameraLookAt: { x: number; y: number; z: number };
  onCameraChange: (cameraState: CameraState, actionDescription?: string) => void;
}

/**
 * Return value of the main scene setup orchestrator hook.
 * Aggregates refs and readiness flags from specialized setup hooks.
 * @interface UseSceneSetupReturn
 * @property {React.RefObject<THREE.Scene | null>} sceneRef
 * @property {React.RefObject<THREE.PerspectiveCamera | null>} cameraRef
 * @property {React.RefObject<THREE.WebGLRenderer | null>} rendererRef
 * @property {React.RefObject<CSS2DRenderer | null>} labelRendererRef
 * @property {React.RefObject<OrbitControlsType | null>} controlsRef
 * @property {React.RefObject<EffectComposer | null>} composerRef
 * @property {React.RefObject<OutlinePass | null>} outlinePassRef
 * @property {React.RefObject<THREE.Mesh | null>} groundMeshRef
 * @property {boolean} isSceneReady - True if core, renderers, and elements are ready.
 * @property {boolean} isControlsReady - True if OrbitControls are ready.
 */
export interface UseSceneSetupReturn {
  sceneRef: React.RefObject<THREE.Scene | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
  labelRendererRef: React.RefObject<CSS2DRenderer | null>;
  controlsRef: React.RefObject<OrbitControlsType | null>;
  composerRef: React.RefObject<EffectComposer | null>;
  outlinePassRef: React.RefObject<OutlinePass | null>;
  groundMeshRef: React.RefObject<THREE.Mesh | null>;
  isSceneReady: boolean;
  isControlsReady: boolean;
}

/**
 * Orchestrates the setup of a Three.js scene by composing specialized setup hooks.
 * This hook is responsible for initializing the core scene, renderers, controls,
 * basic scene elements (lighting, ground), and handling resize events.
 * It provides refs to all major Three.js components and flags indicating their readiness.
 *
 * @param {UseSceneSetupProps} props - Configuration properties for the scene setup.
 * @returns {UseSceneSetupReturn} Refs to scene components and readiness flags.
 */
export function useSceneSetup(props: UseSceneSetupProps): UseSceneSetupReturn {
  const { mountRef, initialCameraPosition, initialCameraLookAt, onCameraChange } = props;
  // console.log('[useSceneSetup Orchestrator] Hook initialized.');

  // 1. Core (Scene, Camera)
  const { sceneRef, cameraRef } = useThreeCore({ initialCameraPosition, mountRef });
  const coreReady = !!(mountRef.current && sceneRef.current && cameraRef.current); // Core ready if mount, scene and camera are up.

  // 2. Renderers (WebGL, CSS2D, Composer, OutlinePass)
  const { 
    rendererRef, 
    labelRendererRef, 
    composerRef, 
    outlinePassRef, 
    areRenderersReady 
  } = useThreeRenderers({ mountRef, sceneRef, cameraRef }); // Depends on coreReady implicitly via refs

  // 3. OrbitControls - Depends on renderers being ready (for rendererRef.current.domElement)
  const { controlsRef, isControlsReady } = useThreeOrbitControls({
    cameraRef,
    rendererRef: rendererRef, // Pass the WebGLRenderer ref
    initialCameraLookAt,
    onCameraChange,
    renderersReady: areRenderersReady,
  });

  // 4. Scene Elements (Lighting, Ground Plane) - Depends on coreReady
  const { groundMeshRef } = useThreeSceneElements({ sceneRef, coreReady });
  const elementsReady = coreReady && !!groundMeshRef.current; // Elements ready if core is ready and ground mesh is created

  // 5. Combined readiness for the base scene (everything except controls which are async)
  const baseSceneComponentsReady = coreReady && areRenderersReady && elementsReady;

  // 6. Resize Handling - Depends on all visual components being ready
  useThreeResize({
    mountRef,
    cameraRef,
    rendererRef,
    labelRendererRef,
    composerRef,
    outlinePassRef,
    ready: baseSceneComponentsReady,
  });
  
  // console.log(`[useSceneSetup Orchestrator] Final readiness: baseSceneComponentsReady: ${baseSceneComponentsReady}, isControlsReady: ${isControlsReady}`);

  return {
    sceneRef,
    cameraRef,
    rendererRef,
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady: baseSceneComponentsReady, // Overall scene elements readiness
    isControlsReady,                      // OrbitControls specific readiness
  };
}
