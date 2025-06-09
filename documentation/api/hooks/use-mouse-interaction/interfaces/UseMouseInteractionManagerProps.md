[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-mouse-interaction](../README.md) / UseMouseInteractionManagerProps

# Interface: UseMouseInteractionManagerProps

Defined in: [src/hooks/use-mouse-interaction.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L55)

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-mouse-interaction.ts:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L57)

***

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`null` \| `Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-mouse-interaction.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L58)

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-mouse-interaction.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L59)

***

### mountRef

> **mountRef**: `RefObject`\<`null` \| `HTMLDivElement`\>

Defined in: [src/hooks/use-mouse-interaction.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L56)

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/hooks/use-mouse-interaction.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L60)

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

Defined in: [src/hooks/use-mouse-interaction.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/use-mouse-interaction.ts#L61)

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`
