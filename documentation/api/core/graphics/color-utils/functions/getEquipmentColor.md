[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/graphics/color-utils](../README.md) / getEquipmentColor

# Function: getEquipmentColor()

> **getEquipmentColor**(`item`, `colorMode`): `Color`

Defined in: [src/core/graphics/color-utils.ts:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/core/graphics/color-utils.ts#L41)

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
