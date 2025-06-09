[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeOrbitControls](../README.md) / UseThreeOrbitControlsProps

# Interface: UseThreeOrbitControlsProps

Defined in: [src/hooks/useThreeOrbitControls.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L61)

Props para o hook `useThreeOrbitControls`.
 UseThreeOrbitControlsProps

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/useThreeOrbitControls.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L62)

Ref para a câmera perspectiva.

***

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/hooks/useThreeOrbitControls.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L64)

O ponto inicial para onde a câmera (e os controles) deve olhar.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### onCameraChange()

> **onCameraChange**: (`cameraState`, `actionDescription?`) => `void`

Defined in: [src/hooks/useThreeOrbitControls.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L65)

Callback acionado quando o usuário finaliza uma interação com a câmera.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

##### actionDescription?

`string`

#### Returns

`void`

***

### rendererRef

> **rendererRef**: `RefObject`\<`null` \| `WebGLRenderer`\>

Defined in: [src/hooks/useThreeOrbitControls.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L63)

Ref para o renderizador WebGL (necessário para o `domElement`).

***

### renderersReady

> **renderersReady**: `boolean`

Defined in: [src/hooks/useThreeOrbitControls.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeOrbitControls.ts#L66)

Flag que indica se os renderizadores (especialmente o `domElement` do WebGLRenderer) estão prontos.
