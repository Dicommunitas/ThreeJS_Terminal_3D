[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / UpdateEquipmentMeshesParams

# Interface: UpdateEquipmentMeshesParams

Defined in: [src/core/three/scene-elements-setup.ts:199](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L199)

Interface para os parâmetros da função `updateEquipmentMeshesInScene`.
 UpdateEquipmentMeshesParams

## Properties

### colorMode

> **colorMode**: [`ColorMode`](../../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/core/three/scene-elements-setup.ts:204](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L204)

O modo de colorização atual para os equipamentos.

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/core/three/scene-elements-setup.ts:205](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L205)

Função callback para criar um mesh de equipamento individual.

#### Parameters

##### item

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `MutableRefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/core/three/scene-elements-setup.ts:201](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L201)

Ref para o array de meshes de equipamentos existentes na cena.

***

### groundMeshRef

> **groundMeshRef**: `MutableRefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/core/three/scene-elements-setup.ts:206](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L206)

Ref para o mesh do plano de chão, para controle de visibilidade.

***

### layers

> **layers**: [`Layer`](../../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:203](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L203)

A lista de camadas para determinar a visibilidade por tipo de equipamento e do terreno.

***

### newEquipmentData

> **newEquipmentData**: [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:202](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L202)

A nova lista de equipamentos a serem renderizados (já filtrada).

***

### scene

> **scene**: `Scene`

Defined in: [src/core/three/scene-elements-setup.ts:200](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/scene-elements-setup.ts#L200)

A cena Three.js.
