[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / updatePostProcessingSize

# Function: updatePostProcessingSize()

> **updatePostProcessingSize**(`composer`, `outlinePass`, `width`, `height`): `void`

Defined in: [src/core/three/postprocessing-utils.ts:113](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/core/three/postprocessing-utils.ts#L113)

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
