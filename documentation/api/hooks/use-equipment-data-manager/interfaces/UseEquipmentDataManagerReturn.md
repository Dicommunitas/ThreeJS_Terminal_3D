[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-equipment-data-manager](../README.md) / UseEquipmentDataManagerReturn

# Interface: UseEquipmentDataManagerReturn

Defined in: [src/hooks/use-equipment-data-manager.ts:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-equipment-data-manager.ts#L37)

Retorno do hook `useEquipmentDataManager`.

## Interface

UseEquipmentDataManagerReturn

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-data-manager.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-equipment-data-manager.ts#L38)

A lista atual de todos os equipamentos. Esta é a "fonte da verdade".

***

### handleOperationalStateChange()

> **handleOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:39](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-equipment-data-manager.ts#L39)

Função para modificar
                                                                                             o estado operacional
                                                                                             de um equipamento específico.

#### Parameters

##### equipmentTag

`string`

##### newState

`string`

#### Returns

`void`

***

### handleProductChange()

> **handleProductChange**: (`equipmentTag`, `newProduct`) => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:40](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-equipment-data-manager.ts#L40)

Função para modificar o produto
                                                                                      associado a um equipamento específico.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
