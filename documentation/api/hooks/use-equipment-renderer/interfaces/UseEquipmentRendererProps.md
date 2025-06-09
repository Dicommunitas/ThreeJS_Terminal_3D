[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-renderer](../README.md) / UseEquipmentRendererProps

# Interface: UseEquipmentRendererProps

Defined in: [src/hooks/use-equipment-renderer.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L73)

Custom hook to manage the rendering of equipment meshes in the 3D scene.

Principal Responsabilidade:
Encapsular a lógica de criação, atualização e remoção dos meshes 3D que representam
os equipamentos. Observa mudanças nos dados dos equipamentos (filtrados), camadas de visibilidade
e modo de colorização, e atualiza a cena Three.js de acordo.
Utiliza `updateEquipmentMeshesInScene` de `scene-elements-setup.ts` para a lógica de sincronização
dos meshes e do plano de chão com base na visibilidade das camadas.
<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
classDiagram
    class UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +cameraRef: RefObject_PerspectiveCamera_
      +controlsRef: RefObject_OrbitControls_
      +isSceneReady: boolean
      +isControlsReady: boolean // Adicionado
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    class useEquipmentRenderer {

    }
    class ReactFCHook {

    }
    class scene_elements_setup {

    }
    class Equipment {

    }
    class Layer {

    }
    class ColorMode {

    }
    class RefObject_Scene_ {

    }
    class RefObject_PerspectiveCamera_ {
    }
    class RefObject_OrbitControls_ {
    }
    class RefObject_Mesh_ {

    }
    useEquipmentRenderer --|&gt; ReactFCHook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_
    UseEquipmentRendererProps ..&gt; RefObject_PerspectiveCamera_
    UseEquipmentRendererProps ..&gt; RefObject_OrbitControls_</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
classDiagram
    class UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +cameraRef: RefObject_PerspectiveCamera_
      +controlsRef: RefObject_OrbitControls_
      +isSceneReady: boolean
      +isControlsReady: boolean // Adicionado
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    class useEquipmentRenderer {

    }
    class ReactFCHook {

    }
    class scene_elements_setup {

    }
    class Equipment {

    }
    class Layer {

    }
    class ColorMode {

    }
    class RefObject_Scene_ {

    }
    class RefObject_PerspectiveCamera_ {
    }
    class RefObject_OrbitControls_ {
    }
    class RefObject_Mesh_ {

    }
    useEquipmentRenderer --|&gt; ReactFCHook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_
    UseEquipmentRendererProps ..&gt; RefObject_PerspectiveCamera_
    UseEquipmentRendererProps ..&gt; RefObject_OrbitControls_</div><pre><code class="language-mermaid">classDiagram
    class UseEquipmentRendererProps {
      +sceneRef: RefObject_Scene_
      +cameraRef: RefObject_PerspectiveCamera_
      +controlsRef: RefObject_OrbitControls_
      +isSceneReady: boolean
      +isControlsReady: boolean // Adicionado
      +equipmentData: Equipment[]  // Filtered list
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): Object3D
      +groundMeshRef: RefObject_Mesh_
    }
    class useEquipmentRenderer {

    }
    class ReactFCHook {

    }
    class scene_elements_setup {

    }
    class Equipment {

    }
    class Layer {

    }
    class ColorMode {

    }
    class RefObject_Scene_ {

    }
    class RefObject_PerspectiveCamera_ {
    }
    class RefObject_OrbitControls_ {
    }
    class RefObject_Mesh_ {

    }
    useEquipmentRenderer --|&gt; ReactFCHook
    useEquipmentRenderer ..&gt; scene_elements_setup : uses updateEquipmentMeshesInScene
    UseEquipmentRendererProps ..&gt; Equipment
    UseEquipmentRendererProps ..&gt; Layer
    UseEquipmentRendererProps ..&gt; ColorMode
    UseEquipmentRendererProps ..&gt; RefObject_Scene_
    UseEquipmentRendererProps ..&gt; RefObject_Mesh_
    UseEquipmentRendererProps ..&gt; RefObject_PerspectiveCamera_
    UseEquipmentRendererProps ..&gt; RefObject_OrbitControls_</code></pre></div>

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-equipment-renderer.ts:75](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L75)

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/hooks/use-equipment-renderer.ts:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L81)

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-equipment-renderer.ts:76](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L76)

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/hooks/use-equipment-renderer.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L82)

#### Parameters

##### item

[`Equipment`](../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L79)

***

### groundMeshRef

> **groundMeshRef**: `RefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/hooks/use-equipment-renderer.ts:83](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L83)

***

### isControlsReady

> **isControlsReady**: `boolean`

Defined in: [src/hooks/use-equipment-renderer.ts:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L78)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-equipment-renderer.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L77)

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L80)

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-equipment-renderer.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-equipment-renderer.ts#L74)
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

