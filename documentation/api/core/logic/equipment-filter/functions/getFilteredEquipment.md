[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/logic/equipment-filter](../README.md) / getFilteredEquipment

# Function: getFilteredEquipment()

> **getFilteredEquipment**(`allEquipment`, `criteria`): [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/logic/equipment-filter.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/core/logic/equipment-filter.ts#L55)

Filtra uma lista de equipamentos com base nos critérios fornecidos.
A filtragem ocorre na seguinte ordem: Sistema, depois Área, depois Termo de Busca.
A filtragem textual por `searchTerm` considera nome, tipo e tag, com lógica "E" para múltiplos termos.
Os filtros de sistema e área são aplicados se não forem "All".

## Parameters

### allEquipment

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

A lista completa de equipamentos a serem filtrados.

### criteria

[`EquipmentFilterCriteria`](../interfaces/EquipmentFilterCriteria.md)

Os critérios de filtro a serem aplicados.

## Returns

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

A lista de equipamentos filtrada.
