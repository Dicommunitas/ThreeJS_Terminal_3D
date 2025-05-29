[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-annotation-pin-renderer](../README.md) / UseAnnotationPinRendererProps

# Interface: UseAnnotationPinRendererProps

Defined in: [src/hooks/use-annotation-pin-renderer.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L46)

Custom hook para gerenciar a renderização de pins de anotação na cena 3D.

Principal Responsabilidade:
Encapsular a lógica de criação, atualização e remoção dos `CSS2DObject` (pins)
que representam as anotações. Observa mudanças nas anotações, dados dos equipamentos
(para posicionamento), e camadas de visibilidade, atualizando os pins conforme necessário.
Utiliza `updateAnnotationPins` de `label-renderer-utils.ts` para a lógica de sincronização.
<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
classDiagram
    class UseAnnotationPinRendererProps {
      +sceneRef: RefObject_Scene_
      +labelRendererRef: RefObject_CSS2DRenderer_
      +isSceneReady: boolean
      +annotations: Annotation[]
      +allEquipmentData: Equipment[] // Full list for correct positioning
      +layers: Layer[]
    }
    class useAnnotationPinRenderer {}
    class ReactFCHook {}
    class label_renderer_utils{}
    class Annotation{}
    class Equipment{}
    class Layer{}
    class RefObject_Scene_ {}
    class RefObject_CSS2DRenderer_ {}
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    UseAnnotationPinRendererProps ..&gt; RefObject_CSS2DRenderer_</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
classDiagram
    class UseAnnotationPinRendererProps {
      +sceneRef: RefObject_Scene_
      +labelRendererRef: RefObject_CSS2DRenderer_
      +isSceneReady: boolean
      +annotations: Annotation[]
      +allEquipmentData: Equipment[] // Full list for correct positioning
      +layers: Layer[]
    }
    class useAnnotationPinRenderer {}
    class ReactFCHook {}
    class label_renderer_utils{}
    class Annotation{}
    class Equipment{}
    class Layer{}
    class RefObject_Scene_ {}
    class RefObject_CSS2DRenderer_ {}
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    UseAnnotationPinRendererProps ..&gt; RefObject_CSS2DRenderer_</div><pre><code class="language-mermaid">classDiagram
    class UseAnnotationPinRendererProps {
      +sceneRef: RefObject_Scene_
      +labelRendererRef: RefObject_CSS2DRenderer_
      +isSceneReady: boolean
      +annotations: Annotation[]
      +allEquipmentData: Equipment[] // Full list for correct positioning
      +layers: Layer[]
    }
    class useAnnotationPinRenderer {}
    class ReactFCHook {}
    class label_renderer_utils{}
    class Annotation{}
    class Equipment{}
    class Layer{}
    class RefObject_Scene_ {}
    class RefObject_CSS2DRenderer_ {}
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    UseAnnotationPinRendererProps ..&gt; RefObject_CSS2DRenderer_</code></pre></div>

## Properties

### allEquipmentData

> **allEquipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L51)

***

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L50)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-annotation-pin-renderer.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L49)

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-annotation-pin-renderer.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L48)

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L53)

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-annotation-pin-renderer.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-annotation-pin-renderer.ts#L47)
<style>
:root.mermaid-enabled .mermaid-block > pre {
  display: none;
}
:root:not(.mermaid-enabled) .mermaid-block > .mermaid {
  display: none !important;
}

.mermaid-block > .mermaid[data-inserted].dark {
  display: var(--mermaid-dark-display);
}
.mermaid-block > .mermaid[data-inserted].light {
  display: var(--mermaid-light-display);
}

:root {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
@media (prefers-color-scheme: light) {
  :root {
    --mermaid-dark-display: none;
    --mermaid-light-display: block;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --mermaid-dark-display: block;
    --mermaid-light-display: none;
  }
}
body.light, :root[data-theme="light"] {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
body.dark, :root[data-theme="dark"] {
  --mermaid-dark-display: block;
  --mermaid-light-display: none;
}
</style>

<script type="module">
import mermaid from "https://unpkg.com/mermaid@latest/dist/mermaid.esm.min.mjs";

document.documentElement.classList.add("mermaid-enabled");

mermaid.initialize({startOnLoad:true});

requestAnimationFrame(function check() {
  let some = false;
  document.querySelectorAll("div.mermaid:not([data-inserted])").forEach(div => {
    some = true;
    if (div.querySelector("svg")) {
      div.dataset.inserted = true;
    }
  });

  if (some) {
    requestAnimationFrame(check);
  }
});
</script>

