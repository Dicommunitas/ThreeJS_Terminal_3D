[**nextn**](../../../../README.md)

***

[nextn](../../../../modules.md) / [core/three/postprocessing-utils](../README.md) / updatePostProcessingSize

# Function: updatePostProcessingSize()

> **updatePostProcessingSize**(`composer`, `outlinePass`, `width`, `height`): `void`

Defined in: [src/core/three/postprocessing-utils.ts:113](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/core/three/postprocessing-utils.ts#L113)

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
