[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-annotation-pin-renderer](../README.md) / UseAnnotationPinRendererProps

# Interface: UseAnnotationPinRendererProps

Defined in: [src/hooks/use-annotation-pin-renderer.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L43)

Custom hook para gerenciar a renderização de pins de anotação na cena 3D.

Principal Responsabilidade:
Encapsular a lógica de criação, atualização e remoção dos `CSS2DObject` (pins)
que representam as anotações. Observa mudanças nas anotações, dados dos equipamentos
(para posicionamento), e camadas de visibilidade, atualizando os pins conforme necessário.
Utiliza `updateAnnotationPins` de `label-renderer-utils.ts` para a lógica de sincronização.
<pre>
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
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    class RefObject_Scene_ { current: Scene | null }
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    class RefObject_CSS2DRenderer_ { current: CSS2DRenderer | null }
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
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    class RefObject_Scene_ { current: Scene | null }
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    class RefObject_CSS2DRenderer_ { current: CSS2DRenderer | null }
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
    useAnnotationPinRenderer --|&gt; ReactFCHook
    useAnnotationPinRenderer ..&gt; label_renderer_utils : uses updateAnnotationPins
    UseAnnotationPinRendererProps ..&gt; Annotation
    UseAnnotationPinRendererProps ..&gt; Equipment
    UseAnnotationPinRendererProps ..&gt; Layer
    class RefObject_Scene_ { current: Scene | null }
    UseAnnotationPinRendererProps ..&gt; RefObject_Scene_
    class RefObject_CSS2DRenderer_ { current: CSS2DRenderer | null }
    UseAnnotationPinRendererProps ..&gt; RefObject_CSS2DRenderer_</code></pre></div>
</pre>

## Properties

### allEquipmentData

> **allEquipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L48)

***

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L47)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-annotation-pin-renderer.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L46)

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-annotation-pin-renderer.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L45)

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-annotation-pin-renderer.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L50)

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-annotation-pin-renderer.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-pin-renderer.ts#L44)
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

