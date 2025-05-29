[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-mouse-interaction](../README.md) / UseMouseInteractionManagerProps

# Interface: UseMouseInteractionManagerProps

Defined in: [src/hooks/use-mouse-interaction.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L45)

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-mouse-interaction.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L47)

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`null` \| `Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-mouse-interaction.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L48)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-mouse-interaction.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L49)

***

### mountRef

> **mountRef**: `RefObject`\<`null` \| `HTMLDivElement`\>

Defined in: [src/hooks/use-mouse-interaction.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L46)

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/hooks/use-mouse-interaction.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L50)

#### Parameters

##### tag

`null` | `string`

##### isMultiSelectModifierPressed

`boolean`

#### Returns

`void`

***

### setHoveredEquipmentTag()

> **setHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/hooks/use-mouse-interaction.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-mouse-interaction.ts#L51)

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`
