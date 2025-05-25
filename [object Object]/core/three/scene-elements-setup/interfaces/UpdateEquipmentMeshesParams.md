[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / UpdateEquipmentMeshesParams

# Interface: UpdateEquipmentMeshesParams

Defined in: [src/core/three/scene-elements-setup.ts:180](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L180)

Interface para os parâmetros da função `updateEquipmentMeshesInScene`.
 UpdateEquipmentMeshesParams

## Properties

### colorMode

> **colorMode**: [`ColorMode`](../../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/core/three/scene-elements-setup.ts:185](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L185)

O modo de colorização atual para os equipamentos.

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/core/three/scene-elements-setup.ts:186](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L186)

Função callback para criar um mesh de equipamento individual.

#### Parameters

##### item

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `MutableRefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/core/three/scene-elements-setup.ts:182](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L182)

Ref para o array de meshes de equipamentos existentes na cena.

***

### groundMeshRef

> **groundMeshRef**: `MutableRefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/core/three/scene-elements-setup.ts:187](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L187)

Ref para o mesh do plano de chão, para controle de visibilidade.

***

### layers

> **layers**: [`Layer`](../../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:184](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L184)

A lista de camadas para determinar a visibilidade por tipo de equipamento e do terreno.

***

### newEquipmentData

> **newEquipmentData**: [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/three/scene-elements-setup.ts:183](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L183)

A nova lista de equipamentos a serem renderizados (já filtrada).

***

### scene

> **scene**: `Scene`

Defined in: [src/core/three/scene-elements-setup.ts:181](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/core/three/scene-elements-setup.ts#L181)

A cena Three.js.
