[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / UpdateEquipmentMeshesParams

# Interface: UpdateEquipmentMeshesParams

Defined in: [src/core/three/scene-elements-setup.ts:224](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L224)

Interface para os parâmetros da função `updateEquipmentMeshesInScene`.
<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
classDiagram
    class UpdateEquipmentMeshesParams {
      +scene: THREE.Scene
      +equipmentMeshesRef: React.MutableRefObject_Object3D_Array_
      +newEquipmentData: Equipment[]
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): THREE.Object3D
      +groundMeshRef: React.MutableRefObject_Mesh_
    }
    class Equipment {
    }
    class Layer {
    }
    class ColorMode {
    }
    class THREE_Object3D {
    }
    class THREE_Mesh {
    }
    class THREE_Scene {
    }
    class React_MutableRefObject {
    }

    UpdateEquipmentMeshesParams --&gt; THREE_Scene : scene
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : equipmentMeshesRef
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : groundMeshRef
    React_MutableRefObject --&gt; THREE_Object3D : (array for equipment)
    React_MutableRefObject --&gt; THREE_Mesh : (for ground)
    UpdateEquipmentMeshesParams --&gt; Equipment : newEquipmentData (array)
    UpdateEquipmentMeshesParams --&gt; Layer : layers (array)
    UpdateEquipmentMeshesParams --&gt; ColorMode : colorMode

    style UpdateEquipmentMeshesParams fill:#DCDCDC,stroke:#333,stroke-width:2px,color:black
    style Equipment,Layer,ColorMode,THREE_Object3D,THREE_Mesh,THREE_Scene,React_MutableRefObject fill:#FFFFE0,stroke:#333,stroke-width:2px,color:black</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
classDiagram
    class UpdateEquipmentMeshesParams {
      +scene: THREE.Scene
      +equipmentMeshesRef: React.MutableRefObject_Object3D_Array_
      +newEquipmentData: Equipment[]
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): THREE.Object3D
      +groundMeshRef: React.MutableRefObject_Mesh_
    }
    class Equipment {
    }
    class Layer {
    }
    class ColorMode {
    }
    class THREE_Object3D {
    }
    class THREE_Mesh {
    }
    class THREE_Scene {
    }
    class React_MutableRefObject {
    }

    UpdateEquipmentMeshesParams --&gt; THREE_Scene : scene
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : equipmentMeshesRef
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : groundMeshRef
    React_MutableRefObject --&gt; THREE_Object3D : (array for equipment)
    React_MutableRefObject --&gt; THREE_Mesh : (for ground)
    UpdateEquipmentMeshesParams --&gt; Equipment : newEquipmentData (array)
    UpdateEquipmentMeshesParams --&gt; Layer : layers (array)
    UpdateEquipmentMeshesParams --&gt; ColorMode : colorMode

    style UpdateEquipmentMeshesParams fill:#DCDCDC,stroke:#333,stroke-width:2px,color:black
    style Equipment,Layer,ColorMode,THREE_Object3D,THREE_Mesh,THREE_Scene,React_MutableRefObject fill:#FFFFE0,stroke:#333,stroke-width:2px,color:black</div><pre><code class="language-mermaid">classDiagram
    class UpdateEquipmentMeshesParams {
      +scene: THREE.Scene
      +equipmentMeshesRef: React.MutableRefObject_Object3D_Array_
      +newEquipmentData: Equipment[]
      +layers: Layer[]
      +colorMode: ColorMode
      +createSingleEquipmentMesh(item: Equipment): THREE.Object3D
      +groundMeshRef: React.MutableRefObject_Mesh_
    }
    class Equipment {
    }
    class Layer {
    }
    class ColorMode {
    }
    class THREE_Object3D {
    }
    class THREE_Mesh {
    }
    class THREE_Scene {
    }
    class React_MutableRefObject {
    }

    UpdateEquipmentMeshesParams --&gt; THREE_Scene : scene
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : equipmentMeshesRef
    UpdateEquipmentMeshesParams --&gt; React_MutableRefObject : groundMeshRef
    React_MutableRefObject --&gt; THREE_Object3D : (array for equipment)
    React_MutableRefObject --&gt; THREE_Mesh : (for ground)
    UpdateEquipmentMeshesParams --&gt; Equipment : newEquipmentData (array)
    UpdateEquipmentMeshesParams --&gt; Layer : layers (array)
    UpdateEquipmentMeshesParams --&gt; ColorMode : colorMode

    style UpdateEquipmentMeshesParams fill:#DCDCDC,stroke:#333,stroke-width:2px,color:black
    style Equipment,Layer,ColorMode,THREE_Object3D,THREE_Mesh,THREE_Scene,React_MutableRefObject fill:#FFFFE0,stroke:#333,stroke-width:2px,color:black</code></pre></div>
 UpdateEquipmentMeshesParams

## Properties

### colorMode

> **colorMode**: [`ColorMode`](../../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/core/three/scene-elements-setup.ts:229](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L229)

O modo de colorização atual para os equipamentos.

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/core/three/scene-elements-setup.ts:230](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L230)

Função callback para criar um mesh de equipamento individual.

#### Parameters

##### item

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `MutableRefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/core/three/scene-elements-setup.ts:226](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L226)

Ref para o array de meshes de equipamentos existentes na cena.

***

### groundMeshRef

> **groundMeshRef**: `MutableRefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/core/three/scene-elements-setup.ts:231](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L231)

Ref para o mesh do plano de chão, para controle de visibilidade.

***

### layers

> **layers**: [`Layer`](../../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:228](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L228)

A lista de camadas para determinar a visibilidade por tipo de equipamento e do terreno.

***

### newEquipmentData

> **newEquipmentData**: [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:227](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L227)

A nova lista de equipamentos a serem renderizados (já filtrada).

***

### scene

> **scene**: `Scene`

Defined in: [src/core/three/scene-elements-setup.ts:225](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/scene-elements-setup.ts#L225)

A cena Three.js.
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

