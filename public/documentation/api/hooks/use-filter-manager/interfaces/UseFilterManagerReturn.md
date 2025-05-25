[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-filter-manager](../README.md) / UseFilterManagerReturn

# Interface: UseFilterManagerReturn

Defined in: [src/hooks/use-filter-manager.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L55)

Retorno do hook `useFilterManager`.
 UseFilterManagerReturn

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L63)

Lista ordenada de áreas únicas disponíveis para seleção no filtro, incluindo "All".

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/hooks/use-filter-manager.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L62)

Lista ordenada de sistemas únicos disponíveis para seleção no filtro, incluindo "All".

***

### filteredEquipment

> **filteredEquipment**: `Equipment`[]

Defined in: [src/hooks/use-filter-manager.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L64)

A lista de equipamentos resultante após a aplicação de todos os filtros ativos.

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/hooks/use-filter-manager.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L56)

O termo de busca textual atualmente aplicado.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/hooks/use-filter-manager.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L60)

A área atualmente selecionada para filtro (e.g., "Área 31", "All").

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/hooks/use-filter-manager.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L58)

O sistema atualmente selecionado para filtro (e.g., "GA", "All").

***

### setSearchTerm

> **setSearchTerm**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L57)

Função para atualizar o `searchTerm`.

***

### setSelectedArea

> **setSelectedArea**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L61)

Função para atualizar o `selectedArea`.

***

### setSelectedSistema

> **setSelectedSistema**: `Dispatch`\<`SetStateAction`\<`string`\>\>

Defined in: [src/hooks/use-filter-manager.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-filter-manager.ts#L59)

Função para atualizar o `selectedSistema`.
