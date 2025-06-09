
/**
 * @fileOverview Custom hook for setting up Three.js renderers and post-processing.
 *
 * Responsibilities:
 * - Initialize `THREE.WebGLRenderer` and configure its properties (size, pixelRatio, background, fog).
 * - Initialize `THREE.CSS2DRenderer` for HTML-based labels and configure its properties.
 * - Initialize `EffectComposer` and add `RenderPass` and `OutlinePass` for post-processing effects.
 * - Append renderer DOM elements to the provided mount point.
 * - Handle WebGL context lost and restored events for the `WebGLRenderer`.
 *
 * Returns refs to the renderers, composer, outline pass, and a flag indicating their readiness.
 */
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

export interface UseThreeRenderersProps {
  mountRef: React.RefObject<HTMLDivElement | null>;
  sceneRef: React.RefObject<THREE.Scene | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
}

export interface UseThreeRenderersReturn {
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
  labelRendererRef: React.RefObject<CSS2DRenderer | null>;
  composerRef: React.RefObject<EffectComposer | null>;
  outlinePassRef: React.RefObject<OutlinePass | null>;
  areRenderersReady: boolean;
}

/**
 * Sets up Three.js renderers (WebGL, CSS2D) and post-processing pipeline (EffectComposer, OutlinePass).
 * Handles DOM attachment and WebGL context events.
 * @param {UseThreeRenderersProps} props - Properties for renderer setup.
 * @returns {UseThreeRenderersReturn} Refs to renderers, composer, outline pass, and readiness flag.
 */
export function useThreeRenderers({ mountRef, sceneRef, cameraRef }: UseThreeRenderersProps): UseThreeRenderersReturn {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const labelRendererRef = useRef<CSS2DRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const outlinePassRef = useRef<OutlinePass | null>(null);
  const [areRenderersReady, setAreRenderersReady] = useState(false);

  useEffect(() => {
    // console.log('[useThreeRenderers] useEffect triggered.');
    const currentMount = mountRef.current;
    const currentScene = sceneRef.current;
    const currentCamera = cameraRef.current;

    if (!currentMount || !currentScene || !currentCamera) {
      // console.warn('[useThreeRenderers] Skipping setup: mount, scene, or camera not ready.');
      setAreRenderersReady(false);
      return;
    }
    // console.log('[useThreeRenderers] All refs present, proceeding with setup.');

    const initialWidth = Math.max(1, currentMount.clientWidth);
    const initialHeight = Math.max(1, currentMount.clientHeight);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(initialWidth, initialHeight);
    renderer.shadowMap.enabled = false;
    currentScene.background = new THREE.Color(0xA9C1D1);
    currentScene.fog = new THREE.Fog(0xA9C1D1, 200, 1000);
    rendererRef.current = renderer;
    // console.log('[useThreeRenderers] WebGLRenderer initialized.');

    // CSS2D Renderer
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(initialWidth, initialHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.left = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    labelRendererRef.current = labelRenderer;
    // console.log('[useThreeRenderers] CSS2DRenderer initialized.');

    // EffectComposer
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(currentScene, currentCamera);
    composer.addPass(renderPass);
    const outlinePass = new OutlinePass(new THREE.Vector2(initialWidth, initialHeight), currentScene, currentCamera);
    outlinePass.edgeStrength = 0; // Initial state
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    outlinePass.pulsePeriod = 0;
    composer.addPass(outlinePass);
    composerRef.current = composer;
    outlinePassRef.current = outlinePass;
    // console.log('[useThreeRenderers] EffectComposer and OutlinePass initialized.');

    currentMount.appendChild(renderer.domElement);
    currentMount.appendChild(labelRenderer.domElement);
    // console.log('[useThreeRenderers] Renderers DOM elements appended.');

    const handleContextLost = (event: Event) => { event.preventDefault(); /* console.error('[useThreeRenderers] WebGL context lost.'); */ };
    const handleContextRestored = () => { /* console.log('[useThreeRenderers] WebGL context restored.'); */ renderer.compile(currentScene, currentCamera); };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
    // console.log('[useThreeRenderers] WebGL context event listeners added.');

    setAreRenderersReady(true);
    // console.log('[useThreeRenderers] areRenderersReady set to true.');

    return () => {
      // console.log('[useThreeRenderers] Cleanup started.');
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored, false);
      
      composerRef.current?.passes.forEach(pass => { if ((pass as any).dispose) (pass as any).dispose(); });
      
      if (rendererRef.current && rendererRef.current.domElement.parentNode === currentMount) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
      
      if (labelRendererRef.current && labelRendererRef.current.domElement.parentNode === currentMount) {
        currentMount.removeChild(labelRendererRef.current.domElement);
      }
      
      rendererRef.current = null;
      labelRendererRef.current = null;
      composerRef.current = null;
      outlinePassRef.current = null;
      setAreRenderersReady(false);
      // console.log('[useThreeRenderers] Cleanup finished.');
    };
  }, [mountRef, sceneRef, cameraRef]); // Dependencies ensure re-run if these fundamental refs change.

  return { rendererRef, labelRendererRef, composerRef, outlinePassRef, areRenderersReady };
}

