
/**
 * Custom hook para gerenciar o loop de animação de uma cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de `requestAnimationFrame` para renderizar a cena Three.js continuamente.
 * Isso inclui atualizar controles de órbita, renderizar o `EffectComposer` (para pós-processamento)
 * e o `CSS2DRenderer` (para rótulos HTML), garantindo que a animação só comece quando a cena
 * e todos os seus componentes necessários estiverem prontos.
 * ```mermaid
 *   classDiagram
 *     class UseAnimationLoopProps {
 *       +isSceneReady: boolean // Representa a prontidão combinada da cena e dos controles
 *       +sceneRef: RefObject_Scene_
 *       +cameraRef: RefObject_PerspectiveCamera_
 *       +controlsRef: RefObject_OrbitControls_
 *       +composerRef: RefObject_EffectComposer_
 *       +labelRendererRef: RefObject_CSS2DRenderer_
 *       +onFrameUpdate?: () => void
 *     }
 *     class RefObject_Scene_ {
 *       current: Scene | null
 *     }
 *     class RefObject_PerspectiveCamera_ {
 *       current: PerspectiveCamera | null
 *     }
 *     class RefObject_OrbitControls_ {
 *       current: OrbitControls | null
 *     }
 *     class RefObject_EffectComposer_ {
 *       current: EffectComposer | null
 *     }
 *     class RefObject_CSS2DRenderer_ {
 *       current: CSS2DRenderer | null
 *     }
 *     UseAnimationLoopProps --> RefObject_Scene_
 *     UseAnimationLoopProps --> RefObject_PerspectiveCamera_
 *     UseAnimationLoopProps --> RefObject_OrbitControls_
 *     UseAnimationLoopProps --> RefObject_EffectComposer_
 *     UseAnimationLoopProps --> RefObject_CSS2DRenderer_
 * ```
 *
 */
import type * as THREE from 'three';
import { useEffect, type RefObject } from 'react';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import type { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

/**
 * Props para o hook useAnimationLoop.
 */
export interface UseAnimationLoopProps {
  isSceneReady: boolean; // Esta prop agora representa a prontidão combinada
  sceneRef: RefObject<THREE.Scene | null>;
  cameraRef: RefObject<THREE.PerspectiveCamera | null>;
  controlsRef: RefObject<OrbitControls | null>;
  composerRef: RefObject<EffectComposer | null>;
  labelRendererRef: RefObject<CSS2DRenderer | null>;
  onFrameUpdate?: () => void; // Callback opcional para atualizações por frame
}

/**
 * Hook customizado para gerenciar o loop de animação de uma cena Three.js.
 * Ele configura e executa o `requestAnimationFrame` para renderizar a cena
 * e atualizar os controles, o composer e o renderizador de rótulos.
 * O loop só é iniciado quando `isSceneReady` (a prontidão combinada) e todos os refs necessários estão populados.
 *
 * @param {UseAnimationLoopProps} props - As props necessárias para o loop de animação.
 */
export function useAnimationLoop({
  isSceneReady, // Esta é a prop de prontidão combinada
  sceneRef,
  cameraRef,
  controlsRef,
  composerRef,
  labelRendererRef,
  onFrameUpdate,
}: UseAnimationLoopProps): void {
  useEffect(() => {
    console.log(`[useAnimationLoop] useEffect triggered. isSceneReady (combined): ${isSceneReady}`);

    if (!isSceneReady) {
      console.log('[useAnimationLoop] Skipping: Combined readiness (isSceneReady prop) is false.');
      return;
    }
    if (!sceneRef.current) {
      console.log('[useAnimationLoop] Skipping: sceneRef.current is null.');
      return;
    }
    if (!cameraRef.current) {
      console.log('[useAnimationLoop] Skipping: cameraRef.current is null.');
      return;
    }
    if (!controlsRef.current) {
      console.log('[useAnimationLoop] Skipping: controlsRef.current is null.');
      return;
    }
    if (!composerRef.current) {
      console.log('[useAnimationLoop] Skipping: composerRef.current is null.');
      return;
    }
    if (!labelRendererRef.current) {
      console.log('[useAnimationLoop] Skipping: labelRendererRef.current is null.');
      return;
    }
    console.log('[useAnimationLoop] All refs and readiness flags are set, proceeding to start animation loop.');


    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const composer = composerRef.current;
    const labelRenderer = labelRendererRef.current;

    let animationFrameId: number;

    const animate = () => {
      // console.log('[AnimationLoop] animate() CALLED.'); 
      animationFrameId = requestAnimationFrame(animate);

      if (onFrameUpdate) {
        onFrameUpdate();
      }

      if (controls.enabled) {
        controls.update();
      }

      if (cameraRef.current && sceneRef.current && controlsRef.current) {
        console.log(`[AnimationLoop] Rendering. Camera Pos: ${cameraRef.current.position.x.toFixed(2)},${cameraRef.current.position.y.toFixed(2)},${cameraRef.current.position.z.toFixed(2)}. Target: ${controlsRef.current.target.x.toFixed(2)},${controlsRef.current.target.y.toFixed(2)},${controlsRef.current.target.z.toFixed(2)}. Zoom: ${cameraRef.current.zoom.toFixed(2)}. Scene children: ${sceneRef.current.children.length}`);
      } else {
        // console.log('[AnimationLoop] Rendering details skipped: camera, scene or controls ref not current during log.');
      }

      if (composerRef.current && sceneRef.current && cameraRef.current) {
        composer.render();
      } else {
        // console.warn('[AnimationLoop] Composer render skipped: refs not current.');
      }

      if (labelRendererRef.current && sceneRef.current && cameraRef.current) {
        labelRenderer.render(scene, camera);
      } else {
        // console.warn('[AnimationLoop] LabelRenderer render skipped: refs not current.');
      }
    };

    console.log('[useAnimationLoop] Starting animation loop by calling animate() for the first time.');
    animate();

    return () => {
      console.log('[useAnimationLoop] Cleanup: Cancelling animation frame ID:', animationFrameId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isSceneReady, sceneRef, cameraRef, controlsRef, composerRef, labelRendererRef, onFrameUpdate]);
}
