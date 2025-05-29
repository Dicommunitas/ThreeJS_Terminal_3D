[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / UseSceneSetupProps

# Interface: UseSceneSetupProps

Defined in: [src/hooks/use-scene-setup.ts:84](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-setup.ts#L84)

Props for the useSceneSetup hook.
 UseSceneSetupProps

## Properties

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/hooks/use-scene-setup.ts:87](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-setup.ts#L87)

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

Defined in: [src/hooks/use-scene-setup.ts:86](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-setup.ts#L86)

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

Defined in: [src/hooks/use-scene-setup.ts:85](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-setup.ts#L85)

Ref to the container element for the scene.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/hooks/use-scene-setup.ts:88](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-setup.ts#L88)

Callback function to be called when the camera changes.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

#### Returns

`void`
