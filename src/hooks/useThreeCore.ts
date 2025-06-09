
/**
 * @fileOverview Custom hook for initializing the core Three.js scene and perspective camera.
 *
 * Responsibilities:
 * - Initialize `THREE.Scene`.
 * - Initialize `THREE.PerspectiveCamera` with a given initial position and aspect ratio derived from the mount point.
 *
 * Returns refs to the created scene and camera objects.
 */
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export interface UseThreeCoreProps {
  initialCameraPosition: { x: number; y: number; z: number };
  mountRef: React.RefObject<HTMLDivElement | null>; // Needed for initial aspect ratio
}

export interface UseThreeCoreReturn {
  sceneRef: React.RefObject<THREE.Scene | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
}

/**
 * Initializes the core Three.js scene and perspective camera.
 * @param {UseThreeCoreProps} props - Properties for core setup.
 * @returns {UseThreeCoreReturn} Refs to the scene and camera.
 */
export function useThreeCore({ initialCameraPosition, mountRef }: UseThreeCoreProps): UseThreeCoreReturn {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    // console.log('[useThreeCore] Initializing...');
    const currentMount = mountRef.current;
    if (!currentMount) {
      // console.warn('[useThreeCore] Mount point not available for aspect ratio calculation.');
      return; // Essential for aspect ratio
    }

    sceneRef.current = new THREE.Scene();
    const aspectRatio = Math.max(1, currentMount.clientWidth) / Math.max(1, currentMount.clientHeight);
    cameraRef.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 2000);
    cameraRef.current.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);

    // console.log('[useThreeCore] Scene and Camera initialized.');

    return () => {
      // console.log('[useThreeCore] Cleanup.');
      // Scene and camera objects are typically managed by Three.js's garbage collection
      // once they are no longer referenced or part of a disposed parent.
      // Explicitly nullifying refs helps ensure they are not accidentally reused.
      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, [initialCameraPosition, mountRef]); // mountRef ensures effect runs if mount point changes

  return { sceneRef, cameraRef };
}
