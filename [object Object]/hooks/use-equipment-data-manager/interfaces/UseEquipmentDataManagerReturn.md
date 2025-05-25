[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-data-manager](../README.md) / UseEquipmentDataManagerReturn

# Interface: UseEquipmentDataManagerReturn

Defined in: [src/hooks/use-equipment-data-manager.ts:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-data-manager.ts#L37)

Retorno do hook `useEquipmentDataManager`.
 UseEquipmentDataManagerReturn

## Properties

### equipmentData

> **equipmentData**: `Equipment`[]

Defined in: [src/hooks/use-equipment-data-manager.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-data-manager.ts#L38)

A lista atual de todos os equipamentos. Esta é a "fonte da verdade".

***

### handleOperationalStateChange()

> **handleOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:39](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-data-manager.ts#L39)

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

Defined in: [src/hooks/use-equipment-data-manager.ts:40](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-data-manager.ts#L40)

Função para modificar o produto
                                                                                      associado a um equipamento específico.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
