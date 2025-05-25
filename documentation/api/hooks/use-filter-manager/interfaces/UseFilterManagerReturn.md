[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-filter-manager](../README.md) / UseFilterManagerReturn

# Interface: UseFilterManagerReturn

Defined in: [src/hooks/use-filter-manager.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L58)

Retorno do hook `useFilterManager`.

## Interface

UseFilterManagerReturn

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L66)

Lista ordenada de áreas únicas disponíveis para seleção no filtro, incluindo "All".

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L65)

Lista ordenada de sistemas únicos disponíveis para seleção no filtro, incluindo "All".

***

### filteredEquipment

> **filteredEquipment**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-filter-manager.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L67)

A lista de equipamentos resultante após a aplicação de todos os filtros ativos.

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/hooks/use-filter-manager.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L59)

O termo de busca textual atualmente aplicado.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/hooks/use-filter-manager.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L63)

A área atualmente selecionada para filtro (e.g., "Área 31", "All").

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/hooks/use-filter-manager.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L61)

O sistema atualmente selecionado para filtro (e.g., "GA", "All").

***

### setSearchTerm

> **setSearchTerm**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L60)

Função para atualizar o `searchTerm`.

***

### setSelectedArea

> **setSelectedArea**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L64)

Função para atualizar o `selectedArea`.

***

### setSelectedSistema

> **setSelectedSistema**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-filter-manager.ts#L62)

Função para atualizar o `selectedSistema`.
