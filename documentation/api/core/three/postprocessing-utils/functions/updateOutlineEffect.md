[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/postprocessing-utils](../README.md) / updateOutlineEffect

# Function: updateOutlineEffect()

> **updateOutlineEffect**(`outlinePass`, `allMeshes`, `selectedTags`, `hoveredTag`): `void`

Defined in: [src/core/three/postprocessing-utils.ts:135](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/core/three/postprocessing-utils.ts#L135)

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
