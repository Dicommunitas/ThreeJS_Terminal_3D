[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeRenderers](../README.md) / UseThreeRenderersReturn

# Interface: UseThreeRenderersReturn

Defined in: [src/hooks/useThreeRenderers.ts:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L95)

Valor de retorno do hook `useThreeRenderers`.
 UseThreeRenderersReturn

## Properties

### areRenderersReady

> **areRenderersReady**: `boolean`

Defined in: [src/hooks/useThreeRenderers.ts:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L100)

Flag que indica se todos os renderizadores e o composer foram inicializados com sucesso.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/useThreeRenderers.ts:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L98)

Ref para o `EffectComposer`.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/useThreeRenderers.ts:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L97)

Ref para o `CSS2DRenderer`.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/useThreeRenderers.ts:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L99)

Ref para o `OutlinePass`.

***

### rendererRef

> **rendererRef**: `RefObject`\<`null` \| `WebGLRenderer`\>

Defined in: [src/hooks/useThreeRenderers.ts:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/useThreeRenderers.ts#L96)

Ref para o `WebGLRenderer`.
