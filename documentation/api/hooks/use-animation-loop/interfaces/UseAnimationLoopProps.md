[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-animation-loop](../README.md) / UseAnimationLoopProps

# Interface: UseAnimationLoopProps

Defined in: [src/hooks/use-animation-loop.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L43)

Props para o hook useAnimationLoop.
 UseAnimationLoopProps

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-animation-loop.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L46)

Ref para a câmera da cena.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/use-animation-loop.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L48)

Ref para o EffectComposer (pós-processamento).

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-animation-loop.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L47)

Ref para os OrbitControls.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-animation-loop.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L44)

Indica se a cena está pronta para iniciar o loop.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-animation-loop.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L49)

Ref para o CSS2DRenderer (rótulos HTML).

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-animation-loop.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-animation-loop.ts#L45)

Ref para a cena Three.js.
