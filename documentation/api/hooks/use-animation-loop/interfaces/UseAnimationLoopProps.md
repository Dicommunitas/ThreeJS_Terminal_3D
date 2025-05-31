[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-animation-loop](../README.md) / UseAnimationLoopProps

# Interface: UseAnimationLoopProps

Defined in: [src/hooks/use-animation-loop.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L59)

Props para o hook useAnimationLoop.
 UseAnimationLoopProps

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-animation-loop.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L62)

Ref para a câmera da cena.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/use-animation-loop.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L64)

Ref para o EffectComposer (pós-processamento).

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-animation-loop.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L63)

Ref para os OrbitControls.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-animation-loop.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L60)

Indica se a cena está pronta para iniciar o loop.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-animation-loop.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L65)

Ref para o CSS2DRenderer (rótulos HTML).

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-animation-loop.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-animation-loop.ts#L61)

Ref para a cena Three.js.
