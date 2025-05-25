[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-mouse-interaction](../README.md) / UseMouseInteractionManagerProps

# Interface: UseMouseInteractionManagerProps

Defined in: [src/hooks/use-mouse-interaction.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L42)

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-mouse-interaction.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L44)

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`null` \| `Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-mouse-interaction.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L45)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-mouse-interaction.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L46)

***

### mountRef

> **mountRef**: `RefObject`\<`null` \| `HTMLDivElement`\>

Defined in: [src/hooks/use-mouse-interaction.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L43)

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/hooks/use-mouse-interaction.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L47)

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

Defined in: [src/hooks/use-mouse-interaction.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-mouse-interaction.ts#L48)

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`
