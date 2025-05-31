[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / updateOutlineEffect

# Function: updateOutlineEffect()

> **updateOutlineEffect**(`outlinePass`, `allMeshes`, `selectedTags`, `hoveredTag`): `void`

Defined in: [src/core/three/postprocessing-utils.ts:139](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/core/three/postprocessing-utils.ts#L139)

Atualiza o efeito de contorno (OutlinePass) com base nos equipamentos selecionados e em hover.
Determina quais objetos contornar e qual estilo aplicar.

## Parameters

### outlinePass

A instância do OutlinePass.

`null` | `OutlinePass`

### allMeshes

`Object3D`\<`Object3DEventMap`\>[]

A lista de todos os meshes de equipamentos na cena.

### selectedTags

`string`[]

As tags dos equipamentos atualmente selecionados.

### hoveredTag

A tag do equipamento atualmente sob o cursor.

`null` | `string`

## Returns

`void`
