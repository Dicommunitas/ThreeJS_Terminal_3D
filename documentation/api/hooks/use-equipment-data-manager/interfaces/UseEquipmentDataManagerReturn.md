[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-data-manager](../README.md) / UseEquipmentDataManagerReturn

# Interface: UseEquipmentDataManagerReturn

Defined in: [src/hooks/use-equipment-data-manager.ts:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-equipment-data-manager.ts#L41)

Retorno do hook `useEquipmentDataManager`.
 UseEquipmentDataManagerReturn

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-data-manager.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-equipment-data-manager.ts#L42)

A lista atual de todos os equipamentos. Esta é a "fonte da verdade".

***

### handleOperationalStateChange()

> **handleOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-equipment-data-manager.ts#L43)

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

Defined in: [src/hooks/use-equipment-data-manager.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-equipment-data-manager.ts#L44)

Função para modificar o produto
                                                                                      associado a um equipamento específico.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
