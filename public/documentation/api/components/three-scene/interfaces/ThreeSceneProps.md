[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/three-scene](../README.md) / ThreeSceneProps

# Interface: ThreeSceneProps

Defined in: [src/components/three-scene.tsx:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L77)

## Properties

### allEquipmentData

> **allEquipmentData**: `Equipment`[]

Defined in: [src/components/three-scene.tsx:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L79)

***

### annotations

> **annotations**: `Annotation`[]

Defined in: [src/components/three-scene.tsx:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L81)

***

### cameraState

> **cameraState**: `undefined` \| `CameraState`

Defined in: [src/components/three-scene.tsx:87](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L87)

***

### colorMode

> **colorMode**: `ColorMode`

Defined in: [src/components/three-scene.tsx:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L92)

***

### equipment

> **equipment**: `Equipment`[]

Defined in: [src/components/three-scene.tsx:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L78)

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/components/three-scene.tsx:84](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L84)

***

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/components/three-scene.tsx:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L91)

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### initialCameraPosition

> **initialCameraPosition**: `object`

Defined in: [src/components/three-scene.tsx:90](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L90)

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### layers

> **layers**: `Layer`[]

Defined in: [src/components/three-scene.tsx:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L80)

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/components/three-scene.tsx:88](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L88)

#### Parameters

##### cameraState

`CameraState`

#### Returns

`void`

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/components/three-scene.tsx:83](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L83)

#### Parameters

##### tag

`null` | `string`

##### isMultiSelectModifierPressed

`boolean`

#### Returns

`void`

***

### onSystemFramed()

> **onSystemFramed**: () => `void`

Defined in: [src/components/three-scene.tsx:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L95)

#### Returns

`void`

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/components/three-scene.tsx:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L82)

***

### setHoveredEquipmentTag()

> **setHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/components/three-scene.tsx:85](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L85)

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/components/three-scene.tsx:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/components/three-scene.tsx#L94)
