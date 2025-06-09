
/**
 * @fileOverview Custom hook for setting up basic scene elements like lighting and a ground plane.
 *
 * Responsibilities:
 * - Add ambient, hemisphere, and directional lighting to the scene.
 * - Create and add a ground plane mesh to the scene.
 * - Utilizes utility functions from `src/core/three/scene-elements-setup.ts` for these tasks.
 *
 * Returns a ref to the created ground plane mesh.
 */
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { setupLighting, setupGroundPlane } from '@/core/three/scene-elements-setup'; // Using existing utils

export interface UseThreeSceneElementsProps {
  sceneRef: React.RefObject<THREE.Scene | null>;
  coreReady: boolean; // Ensure sceneRef is populated before adding elements
}

export interface UseThreeSceneElementsReturn {
  groundMeshRef: React.RefObject<THREE.Mesh | null>;
}

/**
 * Sets up basic scene elements like lighting and a ground plane.
 * @param {UseThreeSceneElementsProps} props - Properties for scene elements setup.
 * @returns {UseThreeSceneElementsReturn} Ref to the ground plane mesh.
 */
export function useThreeSceneElements({ sceneRef, coreReady }: UseThreeSceneElementsProps): UseThreeSceneElementsReturn {
  const groundMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    // console.log(`[useThreeSceneElements] useEffect triggered. coreReady: ${coreReady}`);
    const currentScene = sceneRef.current;
    if (!coreReady || !currentScene) {
      // console.warn('[useThreeSceneElements] Skipping setup: core not ready or scene ref missing.');
      return;
    }

    // console.log('[useThreeSceneElements] Setting up lighting and ground plane.');
    setupLighting(currentScene);
    groundMeshRef.current = setupGroundPlane(currentScene);
    // console.log('[useThreeSceneElements] Lighting and ground plane setup complete.');

    return () => {
      // console.log('[useThreeSceneElements] Cleanup.');
      // Lighting: Three.js typically handles light disposal when scene is cleared or lights are removed.
      // Explicit removal might be needed if lights are complex or have specific resources.
      // For simplicity here, assuming higher-level scene cleanup handles lights.

      if (groundMeshRef.current && currentScene) { // Ensure scene still exists for removal
        // console.log('[useThreeSceneElements] Cleaning up ground plane.');
        currentScene.remove(groundMeshRef.current);
        groundMeshRef.current.geometry?.dispose();
        if (groundMeshRef.current.material instanceof THREE.Material) {
          (groundMeshRef.current.material as THREE.Material).dispose();
        } else if (Array.isArray(groundMeshRef.current.material)) {
           (groundMeshRef.current.material as THREE.Material[]).forEach(m => m.dispose());
        }
        groundMeshRef.current = null;
      }
    };
  }, [sceneRef, coreReady]); // Re-run if sceneRef or coreReady status changes

  return { groundMeshRef };
}
