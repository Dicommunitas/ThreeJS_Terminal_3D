[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/sidebar-content-layout](../README.md) / SidebarContentLayoutProps

# Interface: SidebarContentLayoutProps

Defined in: [src/components/sidebar-content-layout.tsx:113](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L113)

Props para o componente SidebarContentLayout.
 SidebarContentLayoutProps

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:121](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L121)

Lista de áreas disponíveis para filtro.

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L118)

Lista de sistemas disponíveis para filtro.

***

### cameraViewSystems

> **cameraViewSystems**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:126](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L126)

Lista de nomes de sistemas para o CameraControlsPanel.

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/sidebar-content-layout.tsx:122](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L122)

O modo de colorização atual.

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/sidebar-content-layout.tsx:124](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L124)

Lista de camadas para o LayerManager.

***

### onColorModeChange()

> **onColorModeChange**: (`mode`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:123](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L123)

Função para atualizar o modo de colorização.

#### Parameters

##### mode

[`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

#### Returns

`void`

***

### onFocusAndSelectSystem()

> **onFocusAndSelectSystem**: (`systemName`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:127](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L127)

Callback para focar e selecionar um sistema.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:125](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L125)

Função para alternar a visibilidade de uma camada.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:114](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L114)

O termo de busca textual atual.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:119](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L119)

A área selecionada para filtro.

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:116](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L116)

O sistema selecionado para filtro.

***

### setSearchTerm()

> **setSearchTerm**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:115](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L115)

Função para atualizar o termo de busca.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedArea()

> **setSelectedArea**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:120](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L120)

Função para atualizar a área selecionada.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedSistema()

> **setSelectedSistema**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/sidebar-content-layout.tsx#L117)

Função para atualizar o sistema selecionado.

#### Parameters

##### value

`string`

#### Returns

`void`
