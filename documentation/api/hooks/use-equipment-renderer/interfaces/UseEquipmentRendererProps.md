[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-renderer](../README.md) / UseEquipmentRendererProps

# Interface: UseEquipmentRendererProps

Defined in: [src/hooks/use-equipment-renderer.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L70)

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-equipment-renderer.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L72)

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/hooks/use-equipment-renderer.ts:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L78)

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-equipment-renderer.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L73)

***

### createSingleEquipmentMesh()

> **createSingleEquipmentMesh**: (`item`) => `Object3D`

Defined in: [src/hooks/use-equipment-renderer.ts:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L79)

#### Parameters

##### item

[`Equipment`](../../../lib/types/interfaces/Equipment.md)

#### Returns

`Object3D`

***

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:76](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L76)

***

### groundMeshRef

> **groundMeshRef**: `RefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/hooks/use-equipment-renderer.ts:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L80)

***

### isControlsReady

> **isControlsReady**: `boolean`

Defined in: [src/hooks/use-equipment-renderer.ts:75](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L75)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-equipment-renderer.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L74)

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-equipment-renderer.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L77)

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-equipment-renderer.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-equipment-renderer.ts#L71)
