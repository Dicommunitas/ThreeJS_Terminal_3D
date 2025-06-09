
/**
 * @fileOverview Custom hook to handle resize events for a Three.js scene.
 *
 * Responsibilities:
 * - Set up a `ResizeObserver` to monitor changes in the size of the mount element.
 * - When a resize event occurs, update:
 *   - The aspect ratio of the `THREE.PerspectiveCamera`.
 *   - The size of the `THREE.WebGLRenderer`.
 *   - The size of the `CSS2DRenderer`.
 *   - The size of the `EffectComposer`.
 *   - The resolution of the `OutlinePass`.
 * - Perform an initial resize call to set correct dimensions on mount.
 * - Clean up by disconnecting the `ResizeObserver` when the component unmounts or dependencies change.
 */
import { useEffect, useCallback } from 'react';
import type * as THREE from 'three';
import type { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import type { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

export interface UseThreeResizeProps {
  mountRef: React.RefObject<HTMLDivElement | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
  labelRendererRef: React.RefObject<CSS2DRenderer | null>;
  composerRef: React.RefObject<EffectComposer | null>;
  outlinePassRef: React.RefObject<OutlinePass | null>;
  ready: boolean; // Combined readiness flag for all components that need resizing
}

/**
 * Handles resize events for the Three.js scene, updating camera and renderers.
 * @param {UseThreeResizeProps} props - Refs to elements that need resizing and a readiness flag.
 */
export function useThreeResize({
  mountRef,
  cameraRef,
  rendererRef,
  labelRendererRef,
  composerRef,
  outlinePassRef,
  ready, // This flag ensures all refs are populated before attempting to resize
}: UseThreeResizeProps): void {
  const handleResize = useCallback(() => {
    // console.log('[useThreeResize] handleResize called.');
    if (
      !mountRef.current ||
      !cameraRef.current ||
      !rendererRef.current ||
      !labelRendererRef.current ||
      !composerRef.current ||
      !outlinePassRef.current
    ) {
      // console.warn('[useThreeResize] One or more refs are null, skipping resize logic.');
      return;
    }

    const width = Math.max(1, mountRef.current.clientWidth);
    const height = Math.max(1, mountRef.current.clientHeight);

    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    rendererRef.current.setSize(width, height);
    labelRendererRef.current.setSize(width, height);
    composerRef.current.setSize(width, height);
    outlinePassRef.current.resolution.set(width, height);
    // console.log(`[useThreeResize] Resized components to ${width}x${height}.`);
  }, [mountRef, cameraRef, rendererRef, labelRendererRef, composerRef, outlinePassRef]);

  useEffect(() => {
    // console.log(`[useThreeResize] useEffect triggered. ready: ${ready}`);
    if (!ready || !mountRef.current) {
      // console.warn('[useThreeResize] Skipping ResizeObserver setup: not ready or mountRef missing.');
      return;
    }
    // console.log('[useThreeResize] Attaching ResizeObserver.');
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);
    
    handleResize(); // Perform an initial resize calculation

    return () => {
      // console.log('[useThreeResize] Detaching ResizeObserver.');
      if (mountRef.current) { 
        resizeObserver.unobserve(mountRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [ready, mountRef, handleResize]); // handleResize is memoized
}

