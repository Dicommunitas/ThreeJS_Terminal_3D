[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-filter-manager](../README.md) / UseFilterManagerReturn

# Interface: UseFilterManagerReturn

Defined in: [src/hooks/use-filter-manager.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L63)

Retorno do hook `useFilterManager`.
 UseFilterManagerReturn

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L71)

Lista ordenada de áreas únicas disponíveis para seleção no filtro, incluindo "All".

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L70)

Lista ordenada de sistemas únicos disponíveis para seleção no filtro, incluindo "All".

***

### filteredEquipment

> **filteredEquipment**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-filter-manager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L72)

A lista de equipamentos resultante após a aplicação de todos os filtros ativos.

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/hooks/use-filter-manager.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L64)

O termo de busca textual atualmente aplicado.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/hooks/use-filter-manager.ts:68](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L68)

A área atualmente selecionada para filtro (e.g., "Área 31", "All").

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/hooks/use-filter-manager.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L66)

O sistema atualmente selecionado para filtro (e.g., "GA", "All").

***

### setSearchTerm

> **setSearchTerm**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L65)

Função para atualizar o `searchTerm`.

***

### setSelectedArea

> **setSelectedArea**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:69](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L69)

Função para atualizar o `selectedArea`.

***

### setSelectedSistema

> **setSelectedSistema**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L67)

Função para atualizar o `selectedSistema`.
