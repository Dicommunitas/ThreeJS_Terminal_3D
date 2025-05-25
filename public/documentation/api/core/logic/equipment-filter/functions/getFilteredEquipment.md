[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/logic/equipment-filter](../README.md) / getFilteredEquipment

# Function: getFilteredEquipment()

> **getFilteredEquipment**(`allEquipment`, `criteria`): `Equipment`[]

Defined in: [src/core/logic/equipment-filter.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/ddd5d4bcdcae7e6ea863634448491f6c8a8bd764/src/core/logic/equipment-filter.ts#L38)

Filtra uma lista de equipamentos com base nos critérios fornecidos.
A filtragem ocorre na seguinte ordem: Sistema, depois Área, depois Termo de Busca.
A filtragem textual por `searchTerm` considera nome, tipo e tag, com lógica "E" para múltiplos termos.
Os filtros de sistema e área são aplicados se não forem "All".

## Parameters

### allEquipment

`Equipment`[]

A lista completa de equipamentos a serem filtrados.

### criteria

[`EquipmentFilterCriteria`](../interfaces/EquipmentFilterCriteria.md)

Os critérios de filtro a serem aplicados.

## Returns

`Equipment`[]

A lista de equipamentos filtrada.
