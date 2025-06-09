[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-animation-loop](../README.md) / UseAnimationLoopProps

# Interface: UseAnimationLoopProps

Defined in: [src/hooks/use-animation-loop.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L64)

Props para o hook `useAnimationLoop`.
 UseAnimationLoopProps

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-animation-loop.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L67)

Ref para o objeto da câmera perspectiva.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/use-animation-loop.ts:69](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L69)

Ref para o `EffectComposer` (usado para pós-processamento).

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-animation-loop.ts:68](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L68)

Ref para os `OrbitControls`.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-animation-loop.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L65)

Flag que indica se a cena e todos os seus componentes dependentes
                                  (câmera, renderizadores, controles) estão prontos para iniciar o loop de animação.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-animation-loop.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L70)

Ref para o `CSS2DRenderer` (usado para rótulos HTML).

***

### onFrameUpdate()?

> `optional` **onFrameUpdate**: () => `void`

Defined in: [src/hooks/use-animation-loop.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L71)

Callback opcional executado a cada quadro de animação,
                                         útil para lógicas de atualização personalizadas (e.g., animações de câmera).

#### Returns

`void`

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-animation-loop.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-animation-loop.ts#L66)

Ref para o objeto da cena Three.js.
