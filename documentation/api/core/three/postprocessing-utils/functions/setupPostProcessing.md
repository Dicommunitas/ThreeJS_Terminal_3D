[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / setupPostProcessing

# Function: setupPostProcessing()

> **setupPostProcessing**(`renderer`, `scene`, `camera`, `initialWidth`, `initialHeight`): `object`

Defined in: [src/core/three/postprocessing-utils.ts:86](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/core/three/postprocessing-utils.ts#L86)

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
