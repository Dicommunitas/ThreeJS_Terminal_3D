[**nextn**](../../../../README.md)

***

[nextn](../../../../modules.md) / [core/graphics/color-utils](../README.md) / getEquipmentColor

# Function: getEquipmentColor()

> **getEquipmentColor**(`item`, `colorMode`): `Color`

Defined in: [src/core/graphics/color-utils.ts:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/core/graphics/color-utils.ts#L41)

Determina a cor final de um equipamento com base no modo de colorização e seus atributos.

## Parameters

### item

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)

O equipamento para o qual a cor será determinada.

### colorMode

[`ColorMode`](../../../../lib/types/type-aliases/ColorMode.md)

O modo de colorização selecionado ('Equipamento', 'Estado Operacional', 'Produto').

## Returns

`Color`

A cor calculada para o equipamento, como uma instância de `THREE.Color`.
