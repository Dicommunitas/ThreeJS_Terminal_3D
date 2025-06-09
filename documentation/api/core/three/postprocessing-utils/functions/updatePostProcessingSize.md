[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / updatePostProcessingSize

# Function: updatePostProcessingSize()

> **updatePostProcessingSize**(`composer`, `outlinePass`, `width`, `height`): `void`

Defined in: [src/core/three/postprocessing-utils.ts:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/core/three/postprocessing-utils.ts#L117)

Atualiza o tamanho do EffectComposer e do OutlinePass.
Deve ser chamado quando o contêiner de renderização é redimensionado.

## Parameters

### composer

O EffectComposer a ser atualizado.

`null` | `EffectComposer`

### outlinePass

O OutlinePass a ser atualizado.

`null` | `OutlinePass`

### width

`number`

A nova largura.

### height

`number`

A nova altura.

## Returns

`void`
