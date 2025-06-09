[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / setupRenderPipeline

# Function: setupRenderPipeline()

> **setupRenderPipeline**(`mountElement`, `scene`, `camera`): `null` \| \{ `composer`: `EffectComposer`; `labelRenderer`: `CSS2DRenderer`; `outlinePass`: `OutlinePass`; `renderer`: `WebGLRenderer`; \}

Defined in: [src/core/three/scene-elements-setup.ts:105](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/core/three/scene-elements-setup.ts#L105)

Configura os renderizadores principais (WebGL, CSS2D) e o pipeline de pós-processamento.
Centraliza a criação do WebGLRenderer, CSS2DRenderer, EffectComposer e OutlinePass.

## Parameters

### mountElement

`HTMLElement`

O elemento DOM onde o canvas WebGL e o renderer de labels serão montados.

### scene

`Scene`

A cena Three.js.

### camera

`PerspectiveCamera`

A câmera da cena.

## Returns

`null` \| \{ `composer`: `EffectComposer`; `labelRenderer`: `CSS2DRenderer`; `outlinePass`: `OutlinePass`; `renderer`: `WebGLRenderer`; \}

Um objeto contendo as instâncias configuradas, ou null se mountElement não for válido.
