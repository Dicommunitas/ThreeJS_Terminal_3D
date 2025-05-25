[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-renderer](../README.md) / UseEquipmentRendererProps

# Interface: UseEquipmentRendererProps

Defined in: [src/hooks/use-equipment-renderer.ts:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L41)

## File Overview

Custom hook to manage the rendering of equipment meshes in the 3D scene.

Principal Responsabilidade:
Encapsular a lógica de criação, atualização e remoção dos meshes 3D que representam
os equipamentos. Observa mudanças nos dados dos equipamentos (filtrados), camadas de visibilidade
e modo de colorização, e atualiza a cena Three.js de acordo.
Utiliza `updateEquipmentMeshesInScene` de `scene-elements-setup.ts` para a lógica de sincronização
dos meshes e do plano de chão com base na visibilidade das camadas.

## Mermaid

#### classDiagram

<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +isSceneReady: boolean
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    useEquipmentRenderer --|&gt; React.FC_Hook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_

    class RefObject_Scene_ { current: Scene | null }
    class RefObject_Mesh_ { current: Mesh | null }</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +isSceneReady: boolean
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    useEquipmentRenderer --|&gt; React.FC_Hook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_

    class RefObject_Scene_ { current: Scene | null }
    class RefObject_Mesh_ { current: Mesh | null }</div><pre><code class="language-mermaid">UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +isSceneReady: boolean
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    useEquipmentRenderer --|&gt; React.FC_Hook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_

    class RefObject_Scene_ { current: Scene | null }
    class RefObject_Mesh_ { current: Mesh | null }</code></pre></div>

## Properties

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/hooks/use-equipment-renderer.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L46)

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/hooks/use-equipment-renderer.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L47)

#### Parameters

##### item

[`Equipment`](../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L44)

***

### groundMeshRef

> **groundMeshRef**: `RefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/hooks/use-equipment-renderer.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L48)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-equipment-renderer.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L43)

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L45)

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-equipment-renderer.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-equipment-renderer.ts#L42)
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

