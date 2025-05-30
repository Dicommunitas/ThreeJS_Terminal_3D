

/**
 * Hook customizado para a configuração inicial de uma cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a criação e inicialização dos principais componentes de uma cena Three.js,
 * incluindo a cena em si, câmera, renderizadores (WebGL e CSS2D para labels),
 * controles de órbita (com configuração específica para botões do mouse: esquerdo e meio para rotacionar, direito para pan),
 * pipeline de pós-processamento (EffectComposer, OutlinePass),
 * iluminação básica e um plano de chão. Gerencia também o estado de "prontidão" da cena
 * e o tratamento de redimensionamento da janela/contêiner.
 *
 * ```mermaid
 *   classDiagram
 *     class UseSceneSetupProps {
 *       +mountRef: RefObject_HTMLDivElement_
 *       +initialCameraPosition: Point3D
 *       +initialCameraLookAt: Point3D
 *       +onCameraChange(cameraState: CameraState): void
 *     }
 *     class UseSceneSetupReturn {
 *       +sceneRef: RefObject_Scene_
 *       +cameraRef: RefObject_PerspectiveCamera_
 *       +rendererRef: RefObject_WebGLRenderer_
 *       +labelRendererRef: RefObject_CSS2DRenderer_
 *       +controlsRef: RefObject_OrbitControls_
 *       +composerRef: RefObject_EffectComposer_
 *       +outlinePassRef: RefObject_OutlinePass_
 *       +groundMeshRef: RefObject_Mesh_
 *       +isSceneReady: boolean
 *     }
 *     class Point3D {
 *       +x: number
 *       +y: number
 *       +z: number
 *     }
 *     class CameraState {
 *        +position: Point3D
 *        +lookAt: Point3D
 *     }
 *     class RefObject_HTMLDivElement_ {}
 *     class RefObject_Scene_ {}
 *     class RefObject_PerspectiveCamera_ {}
 *     class RefObject_WebGLRenderer_ {}
 *     class RefObject_CSS2DRenderer_ {}
 *     class RefObject_OrbitControls_ {}
 *     class RefObject_EffectComposer_ {}
 *     class RefObject_OutlinePass_ {}
 *     class RefObject_Mesh_ {}
 *
 *     UseSceneSetupProps ..> Point3D
 *     UseSceneSetupProps ..> CameraState
 *     UseSceneSetupReturn ..> Point3D
 *     UseSceneSetupReturn ..> CameraState
 *     class useSceneSetup {
 *     }
 *     class scene_elements_setup {
 *     }
 *     useSceneSetup ..> scene_elements_setup : uses setupRenderPipeline, setupLighting, setupGroundPlane
 *     UseSceneSetupProps --> RefObject_HTMLDivElement_ : mountRef
 *     UseSceneSetupReturn --> RefObject_Scene_ : sceneRef
 *     UseSceneSetupReturn --> RefObject_PerspectiveCamera_ : cameraRef
 *     UseSceneSetupReturn --> RefObject_WebGLRenderer_ : rendererRef
 *     UseSceneSetupReturn --> RefObject_CSS2DRenderer_ : labelRendererRef
 *     UseSceneSetupReturn --> RefObject_OrbitControls_ : controlsRef
 *     UseSceneSetupReturn --> RefObject_EffectComposer_ : composerRef
 *     UseSceneSetupReturn --> RefObject_OutlinePass_ : outlinePassRef
 *     UseSceneSetupReturn --> RefObject_Mesh_ : groundMeshRef
 *
 *     style UseSceneSetupProps,UseSceneSetupReturn fill:#DCDCDC,stroke:#333,stroke-width:2px,color:black
 *     style Point3D,CameraState,RefObject_HTMLDivElement_,RefObject_Scene_,RefObject_PerspectiveCamera_,RefObject_WebGLRenderer_,RefObject_CSS2DRenderer_,RefObject_OrbitControls_,RefObject_EffectComposer_,RefObject_OutlinePass_,RefObject_Mesh_ fill:#FFFFE0,stroke:#333,stroke-width:2px,color:black
 *     style useSceneSetup,scene_elements_setup fill:#ADD8E6,stroke:#333,stroke-width:2px,color:black
 * ```
 *
 */
import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js';
import type { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import type { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

import { setupLighting, setupGroundPlane, setupRenderPipeline } from '@/core/three/scene-elements-setup';
import type { CameraState } from '@/lib/types';

/**
 * Props for the useSceneSetup hook.
 * @interface UseSceneSetupProps
 * @property mountRef - Ref to the container element for the scene.
 * @property initialCameraPosition - The initial position of the camera.
 * @property initialCameraLookAt - The initial point the camera is looking at.
 * @property onCameraChange - Callback function to be called when the camera changes.
 */
export interface UseSceneSetupProps {
  mountRef: React.RefObject<HTMLDivElement>;
  initialCameraPosition: { x: number; y: number; z: number };
  initialCameraLookAt: { x: number; y: number; z: number };
  onCameraChange: (cameraState: CameraState) => void;
}

/**
 * Return value of the useSceneSetup hook.
 * @interface UseSceneSetupReturn
 * @property sceneRef - Ref to the Three.js Scene.
 * @property cameraRef - Ref to the Three.js Camera.
 * @property rendererRef - Ref to the WebGLRenderer.
 * @property labelRendererRef - Ref to the CSS2DRenderer.
 * @property controlsRef - Ref to the OrbitControls.
 *           Configured for Left and Middle mouse buttons to rotate, and Right mouse button to pan.
 * @property composerRef - Ref to the EffectComposer.
 * @property outlinePassRef - Ref to the OutlinePass.
 * @property groundMeshRef - Ref to the ground plane mesh.
 * @property isSceneReady - State indicating if the scene setup is complete.
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
}

/**
 * A custom hook for handling the initial setup of a Three.js scene.
 * Encapsulates the creation of the scene, camera, renderers, controls, lighting, and ground plane.
 * Also manages the scene's readiness state and handles window resizing.
 * OrbitControls are configured by default for Left and Middle mouse buttons to rotate, and Right mouse button to pan.
 *
 * @param props - The properties for the hook.
 * @returns An object containing refs to the core scene elements and the readiness state.
 */
export const useSceneSetup = (props: UseSceneSetupProps): UseSceneSetupReturn => {
  const { mountRef, initialCameraPosition, initialCameraLookAt, onCameraChange } = props;

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const labelRendererRef = useRef<CSS2DRenderer | null>(null);
  const controlsRef = useRef<OrbitControlsType | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const outlinePassRef = useRef<OutlinePass | null>(null);
  const groundMeshRef = useRef<THREE.Mesh | null>(null);

  const [isSceneReady, setIsSceneReady] = useState(false);

  // Ref for the onCameraChange callback to prevent stale closures
  const onCameraChangeRef = useRef(onCameraChange);
  useEffect(() => { onCameraChangeRef.current = onCameraChange; }, [onCameraChange]);


  /**
   * Handles the resizing of the container and updates the camera and renderers.
   */
  const handleResize = useCallback(() => {
    if (mountRef.current && cameraRef.current && rendererRef.current) {
      const width = Math.max(1, mountRef.current.clientWidth);
      const height = Math.max(1, mountRef.current.clientHeight);

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);
      labelRendererRef.current?.setSize(width, height);
      composerRef.current?.setSize(width, height);
      outlinePassRef.current?.resolution.set(width, height);
    }
  }, [mountRef]); // mountRef is a dependency because its current property is used inside the callback


  /**
   * Effect hook for the initial setup of the Three.js scene.
   * Runs only once on component mount.
   */
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) {
      console.warn('[useSceneSetup] mountRef.current is null. Aborting setup.');
      return;
    }

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, Math.max(1, currentMount.clientWidth) / Math.max(1, currentMount.clientHeight), 0.1, 2000);
    cameraRef.current.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);

    const pipeline = setupRenderPipeline(currentMount, sceneRef.current, cameraRef.current);
    if (!pipeline) {
      console.error("[useSceneSetup] Failed to setup render pipeline. Aborting setup.");
      return;
    }
    rendererRef.current = pipeline.renderer;
    labelRendererRef.current = pipeline.labelRenderer;
    composerRef.current = pipeline.composer;
    outlinePassRef.current = pipeline.outlinePass;

    // WebGL Context Loss/Restore Listeners
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.error("WebGL context lost. Application may need to reinitialize resources.");
      // Optionally, trigger a state update to inform the UI or attempt recovery
    };
    const handleContextRestored = () => {
      console.log("WebGL context restored. Reinitializing scene if necessary.");
      // Here you might need to re-setup parts of your scene, re-upload textures, etc.
      // For now, we'll just log. A full re-init might involve calling setup functions again or reloading data.
      if (sceneRef.current && cameraRef.current && rendererRef.current && labelRendererRef.current && composerRef.current) {
         // A simple re-render might be triggered by other state changes,
         // but a full re-init would be more complex.
         // This example just logs, actual re-init depends on app complexity.
         rendererRef.current.compile(sceneRef.current, cameraRef.current); // Attempt to recompile shaders
      }
    };

    if (rendererRef.current) {
      rendererRef.current.domElement.addEventListener('webglcontextlost', handleContextLost, false);
      rendererRef.current.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
    }


    if (sceneRef.current) {
      setupLighting(sceneRef.current);
      groundMeshRef.current = setupGroundPlane(sceneRef.current);
    }

    let localControls: OrbitControlsType | null = null;

    import('three/examples/jsm/controls/OrbitControls.js')
      .then(module => {
        const OrbitControls = module.OrbitControls;
        if (!cameraRef.current || !rendererRef.current?.domElement) {
          console.error("[useSceneSetup] Failed to initialize OrbitControls: Camera or Renderer domElement not ready.");
          return;
        }

        localControls = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
        controlsRef.current = localControls; // Assign to the ref

        localControls.enableDamping = true;

        if (initialCameraLookAt) {
          localControls.target.set(initialCameraLookAt.x, initialCameraLookAt.y, initialCameraLookAt.z);
        } else {
          console.warn("[useSceneSetup] initialLookAt is undefined during OrbitControls setup. Using default target (0,0,0).");
          localControls.target.set(0, 0, 0);
        }

        localControls.mouseButtons = {
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.ROTATE,
          RIGHT: THREE.MOUSE.PAN
        };
        localControls.update();

        localControls.addEventListener('end', handleControlsChangeEnd);
      })
      .catch(err => console.error("[useSceneSetup] Failed to load OrbitControls", err));


    const handleControlsChangeEnd = () => {
        if (cameraRef.current && controlsRef.current && onCameraChangeRef.current) {
            const newCameraState: CameraState = {
            position: cameraRef.current.position.clone(),
            lookAt: controlsRef.current.target.clone(),
            };
            onCameraChangeRef.current(newCameraState);
        }
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(currentMount);

    const initialSetupTimeoutId = setTimeout(() => {
      handleResize();
      setIsSceneReady(true);
      // console.log('[useSceneSetup] Scene is now READY.');
    }, 150);


    /**
     * Cleanup function for the effect. Disposes of Three.js objects and removes event listeners.
     */
    return () => {
      // console.log('[useSceneSetup] Setup useEffect CLEANUP running.');
      clearTimeout(initialSetupTimeoutId);

      if (currentMount) {
        resizeObserver.unobserve(currentMount);
      }

      if (rendererRef.current) {
        rendererRef.current.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
        rendererRef.current.domElement.removeEventListener('webglcontextrestored', handleContextRestored, false);
      }

      if (localControls) { // Use the locally scoped variable for cleanup
        localControls.removeEventListener('end', handleControlsChangeEnd);
        localControls.dispose();
      }
      controlsRef.current = null; // Clear the ref

      if (groundMeshRef.current) {
        groundMeshRef.current.geometry?.dispose();
        if (groundMeshRef.current.material instanceof THREE.Material) {
           (groundMeshRef.current.material as THREE.Material).dispose();
        }
        sceneRef.current?.remove(groundMeshRef.current);
        groundMeshRef.current = null;
      }

       composerRef.current?.passes.forEach(pass => {
            if (pass && (pass as any).dispose && typeof (pass as any).dispose === 'function') {
                (pass as any).dispose();
            }
       });
       composerRef.current = null;
       outlinePassRef.current = null;

      if (rendererRef.current) {
         if (rendererRef.current.domElement.parentNode === currentMount) {
             currentMount.removeChild(rendererRef.current.domElement);
         }
         rendererRef.current.dispose();
         rendererRef.current = null;
      }

      if (labelRendererRef.current) {
         if (labelRendererRef.current.domElement.parentNode === currentMount) {
             currentMount.removeChild(labelRendererRef.current.domElement);
         }
         labelRendererRef.current = null;
      }

      sceneRef.current = null;
      cameraRef.current = null;

      setIsSceneReady(false);
      // console.log('[useSceneSetup] Setup CLEANUP finished.');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mountRef, initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z, initialCameraLookAt.x, initialCameraLookAt.y, initialCameraLookAt.z]);

  return {
    sceneRef,
    cameraRef,
    rendererRef,
    labelRendererRef,
    controlsRef,
    composerRef,
    outlinePassRef,
    groundMeshRef,
    isSceneReady,
  };
};
