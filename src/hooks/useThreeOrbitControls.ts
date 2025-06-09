
/**
 * @fileOverview Custom hook for setting up and managing Three.js OrbitControls.
 *
 * Responsibilities:
 * - Dynamically import `OrbitControls` from Three.js examples.
 * - Initialize `OrbitControls` with the provided camera and DOM element.
 * - Configure control properties like damping, target, and mouse button assignments.
 * - Add an event listener to the controls' 'end' event to trigger the `onCameraChange` callback.
 * - Manage an `isControlsReady` state flag that becomes true once controls are loaded and initialized.
 * - Handle cleanup by disposing of the controls and removing event listeners.
 */
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three'; // Added import
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js';
import type { CameraState } from '@/lib/types';

export interface UseThreeOrbitControlsProps {
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
  initialCameraLookAt: { x: number; y: number; z: number };
  onCameraChange: (cameraState: CameraState, actionDescription?: string) => void;
  renderersReady: boolean; 
}

export interface UseThreeOrbitControlsReturn {
  controlsRef: React.RefObject<OrbitControlsType | null>;
  isControlsReady: boolean;
}

/**
 * Sets up and manages Three.js OrbitControls.
 * Handles dynamic import, configuration, and event listeners for camera changes.
 * @param {UseThreeOrbitControlsProps} props - Properties for OrbitControls setup.
 * @returns {UseThreeOrbitControlsReturn} Ref to OrbitControls and readiness flag.
 */
export function useThreeOrbitControls({
  cameraRef,
  rendererRef,
  initialCameraLookAt,
  onCameraChange,
  renderersReady,
}: UseThreeOrbitControlsProps): UseThreeOrbitControlsReturn {
  const controlsRef = useRef<OrbitControlsType | null>(null);
  const [isControlsReady, setIsControlsReady] = useState(false);
  const onCameraChangeRef = useRef(onCameraChange);

  useEffect(() => {
    onCameraChangeRef.current = onCameraChange;
  }, [onCameraChange]);

  useEffect(() => {
    // console.log(`[useThreeOrbitControls] useEffect triggered. renderersReady: ${renderersReady}`);
    if (!renderersReady || !cameraRef.current || !rendererRef.current || !rendererRef.current.domElement) {
      // console.warn('[useThreeOrbitControls] Skipping setup: renderers not ready or camera/rendererRef/rendererRef.domElement missing.');
      setIsControlsReady(false);
      return;
    }
    // console.log('[useThreeOrbitControls] Prerequisites met, proceeding with OrbitControls setup.');

    const domElement = rendererRef.current.domElement; // Store in a variable for check
    let localControlsInstance: OrbitControlsType | null = null;
    let isEffectMounted = true;

    import('three/examples/jsm/controls/OrbitControls.js')
      .then(module => {
        if (!isEffectMounted || !cameraRef.current || !domElement) { // Check domElement here
          // console.log("[useThreeOrbitControls] Effect unmounted or refs (camera/domElement) changed/missing before OrbitControls module loaded or instantiated.");
          if (isEffectMounted) setIsControlsReady(false);
          return;
        }
        // console.log("[useThreeOrbitControls] OrbitControls module loaded successfully.");
        const OrbitControls = module.OrbitControls;
        localControlsInstance = new OrbitControls(cameraRef.current, domElement); // Use stored domElement
        controlsRef.current = localControlsInstance;

        localControlsInstance.enableDamping = true;
        localControlsInstance.target.set(initialCameraLookAt.x, initialCameraLookAt.y, initialCameraLookAt.z);
        localControlsInstance.mouseButtons = {
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.ROTATE, // Changed from default DOLLY
          RIGHT: THREE.MOUSE.PAN
        };
        localControlsInstance.update(); 
        // console.log("[useThreeOrbitControls] OrbitControls initialized and configured.");

        const handleControlsChangeEnd = () => {
          if (cameraRef.current && controlsRef.current && onCameraChangeRef.current) {
            const newCameraState: CameraState = {
              position: cameraRef.current.position.clone(),
              lookAt: controlsRef.current.target.clone(),
            };
            onCameraChangeRef.current(newCameraState, 'Câmera movida pelo usuário (OrbitControls)');
          }
        };
        (localControlsInstance as any).__private_handleControlsChangeEndListener = handleControlsChangeEnd;
        localControlsInstance.addEventListener('end', handleControlsChangeEnd);
        
        if (isEffectMounted) {
          setIsControlsReady(true);
          // console.log('[useThreeOrbitControls] isControlsReady set to true.');
        }
      })
      .catch(err => {
        console.error("[useThreeOrbitControls] Failed to load OrbitControls", err);
        if (isEffectMounted) {
          setIsControlsReady(false);
        }
      });
      
    return () => {
      isEffectMounted = false;
      // console.log('[useThreeOrbitControls] Cleanup function running.');
      if (controlsRef.current) { 
        // console.log('[useThreeOrbitControls] Disposing OrbitControls.');
        const listener = (controlsRef.current as any).__private_handleControlsChangeEndListener;
        if (listener) {
          controlsRef.current.removeEventListener('end', listener);
        }
        controlsRef.current.dispose();
        controlsRef.current = null;
      }
      setIsControlsReady(false); 
    };
  }, [cameraRef, rendererRef, initialCameraLookAt, renderersReady]);

  return { controlsRef, isControlsReady };
}
