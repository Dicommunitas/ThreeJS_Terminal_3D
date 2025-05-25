[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / setupPostProcessing

# Function: setupPostProcessing()

> **setupPostProcessing**(`renderer`, `scene`, `camera`, `initialWidth`, `initialHeight`): `object`

Defined in: [src/core/three/postprocessing-utils.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/core/three/postprocessing-utils.ts#L82)

Configura o pipeline de pós-processamento, incluindo o EffectComposer e o OutlinePass.
Esta função é chamada uma vez durante o setup inicial da cena.

## Parameters

### renderer

`WebGLRenderer`

O renderizador WebGL principal.

### scene

`Scene`

A cena 3D.

### camera

`PerspectiveCamera`

A câmera da cena.

### initialWidth

`number`

A largura inicial do canvas de renderização.

### initialHeight

`number`

A altura inicial do canvas de renderização.

## Returns

`object`

Um objeto contendo o EffectComposer e o OutlinePass configurados.

### composer

> **composer**: `EffectComposer`

### outlinePass

> **outlinePass**: `OutlinePass`
