[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-scene-setup](../README.md) / UseSceneSetupProps

# Interface: UseSceneSetupProps

Defined in: [src/hooks/use-scene-setup.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-scene-setup.ts#L70)

Props for the useSceneSetup hook.

## Interface

UseSceneSetupProps

## Properties

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/hooks/use-scene-setup.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-scene-setup.ts#L73)

The initial point the camera is looking at.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### initialCameraPosition

> **initialCameraPosition**: `object`

Defined in: [src/hooks/use-scene-setup.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-scene-setup.ts#L72)

The initial position of the camera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### mountRef

> **mountRef**: `RefObject`\<`HTMLDivElement`\>

Defined in: [src/hooks/use-scene-setup.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-scene-setup.ts#L71)

Ref to the container element for the scene.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/hooks/use-scene-setup.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-scene-setup.ts#L74)

Callback function to be called when the camera changes.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

#### Returns

`void`
