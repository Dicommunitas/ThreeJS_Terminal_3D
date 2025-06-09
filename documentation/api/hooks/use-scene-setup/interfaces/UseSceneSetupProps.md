[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / UseSceneSetupProps

# Interface: UseSceneSetupProps

Defined in: [src/hooks/use-scene-setup.ts:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-scene-setup.ts#L118)

Props para o hook orquestrador da configuração da cena.
 UseSceneSetupProps

## Properties

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/hooks/use-scene-setup.ts:121](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-scene-setup.ts#L121)

Ponto de observação (lookAt) inicial da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### initialCameraPosition

> **initialCameraPosition**: `object`

Defined in: [src/hooks/use-scene-setup.ts:120](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-scene-setup.ts#L120)

Posição inicial da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### mountRef

> **mountRef**: `RefObject`\<`HTMLDivElement`\>

Defined in: [src/hooks/use-scene-setup.ts:119](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-scene-setup.ts#L119)

Ref para o elemento DOM contêiner da cena.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`, `actionDescription?`) => `void`

Defined in: [src/hooks/use-scene-setup.ts:122](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-scene-setup.ts#L122)

Callback para quando o estado da câmera muda.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

##### actionDescription?

`string`

#### Returns

`void`
