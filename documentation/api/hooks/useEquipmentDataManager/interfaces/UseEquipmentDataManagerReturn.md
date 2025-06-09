[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useEquipmentDataManager](../README.md) / UseEquipmentDataManagerReturn

# Interface: UseEquipmentDataManagerReturn

Defined in: [src/hooks/use-equipment-data-manager.ts:69](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-data-manager.ts#L69)

Retorno do hook `useEquipmentDataManager`.
 UseEquipmentDataManagerReturn

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-data-manager.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-data-manager.ts#L70)

A lista atual de todos os equipamentos (cópia local do estado do repositório).

***

### handleOperationalStateChange()

> **handleOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-data-manager.ts#L71)

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

Defined in: [src/hooks/use-equipment-data-manager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-data-manager.ts#L72)

Função para modificar o produto
                                                                                     associado a um equipamento específico.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`

***

### refreshEquipmentData()

> **refreshEquipmentData**: () => `void`

Defined in: [src/hooks/use-equipment-data-manager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-data-manager.ts#L73)

Função para recarregar os dados do repositório para o estado local do hook.

#### Returns

`void`
