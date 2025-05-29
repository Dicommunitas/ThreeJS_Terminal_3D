[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/sidebar-content-layout](../README.md) / SidebarContentLayoutProps

# Interface: SidebarContentLayoutProps

Defined in: [src/components/sidebar-content-layout.tsx:89](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L89)

Props para o componente SidebarContentLayout.
 SidebarContentLayoutProps

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L97)

Lista de áreas disponíveis para filtro.

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L94)

Lista de sistemas disponíveis para filtro.

***

### cameraViewSystems

> **cameraViewSystems**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:102](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L102)

Lista de nomes de sistemas para o CameraControlsPanel.

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/sidebar-content-layout.tsx:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L98)

O modo de colorização atual.

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/sidebar-content-layout.tsx:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L100)

Lista de camadas para o LayerManager.

***

### onColorModeChange()

> **onColorModeChange**: (`mode`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L99)

Função para atualizar o modo de colorização.

#### Parameters

##### mode

[`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

#### Returns

`void`

***

### onFocusAndSelectSystem()

> **onFocusAndSelectSystem**: (`systemName`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:103](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L103)

Callback para focar e selecionar um sistema.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L101)

Função para alternar a visibilidade de uma camada.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:90](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L90)

O termo de busca textual atual.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L95)

A área selecionada para filtro.

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L92)

O sistema selecionado para filtro.

***

### setSearchTerm()

> **setSearchTerm**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L91)

Função para atualizar o termo de busca.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedArea()

> **setSelectedArea**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L96)

Função para atualizar a área selecionada.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedSistema()

> **setSelectedSistema**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/sidebar-content-layout.tsx#L93)

Função para atualizar o sistema selecionado.

#### Parameters

##### value

`string`

#### Returns

`void`
