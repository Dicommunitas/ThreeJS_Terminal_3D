[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-filter-manager](../README.md) / UseFilterManagerReturn

# Interface: UseFilterManagerReturn

Defined in: src/hooks/use-filter-manager.ts:48

Retorno do hook `useFilterManager`.
 UseFilterManagerReturn

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: src/hooks/use-filter-manager.ts:56

Lista ordenada de áreas únicas disponíveis para seleção no filtro, incluindo "All".

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: src/hooks/use-filter-manager.ts:55

Lista ordenada de sistemas únicos disponíveis para seleção no filtro, incluindo "All".

***

### filteredEquipment

> **filteredEquipment**: `Equipment`[]

Defined in: src/hooks/use-filter-manager.ts:57

A lista de equipamentos resultante após a aplicação de todos os filtros ativos.

***

### searchTerm

> **searchTerm**: `string`

Defined in: src/hooks/use-filter-manager.ts:49

O termo de busca textual atualmente aplicado.

***

### selectedArea

> **selectedArea**: `string`

Defined in: src/hooks/use-filter-manager.ts:53

A área atualmente selecionada para filtro (e.g., "Área 31", "All").

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: src/hooks/use-filter-manager.ts:51

O sistema atualmente selecionado para filtro (e.g., "GA", "All").

***

### setSearchTerm

> **setSearchTerm**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: src/hooks/use-filter-manager.ts:50

Função para atualizar o `searchTerm`.

***

### setSelectedArea

> **setSelectedArea**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: src/hooks/use-filter-manager.ts:54

Função para atualizar o `selectedArea`.

***

### setSelectedSistema

> **setSelectedSistema**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: src/hooks/use-filter-manager.ts:52

Função para atualizar o `selectedSistema`.
