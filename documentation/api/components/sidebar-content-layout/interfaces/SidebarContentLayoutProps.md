[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/sidebar-content-layout](../README.md) / SidebarContentLayoutProps

# Interface: SidebarContentLayoutProps

Defined in: [src/components/sidebar-content-layout.tsx:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L91)

Props para o componente SidebarContentLayout.
 SidebarContentLayoutProps

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L99)

Lista de áreas disponíveis para filtro.

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L96)

Lista de sistemas disponíveis para filtro.

***

### cameraViewSystems

> **cameraViewSystems**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:104](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L104)

Lista de nomes de sistemas para o CameraControlsPanel.

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/sidebar-content-layout.tsx:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L100)

O modo de colorização atual.

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/sidebar-content-layout.tsx:102](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L102)

Lista de camadas para o LayerManager.

***

### onColorModeChange()

> **onColorModeChange**: (`mode`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L101)

Função para atualizar o modo de colorização.

#### Parameters

##### mode

[`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

#### Returns

`void`

***

### onFocusAndSelectSystem()

> **onFocusAndSelectSystem**: (`systemName`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:105](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L105)

Callback para focar e selecionar um sistema.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:103](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L103)

Função para alternar a visibilidade de uma camada.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L92)

O termo de busca textual atual.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L97)

A área selecionada para filtro.

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L94)

O sistema selecionado para filtro.

***

### setSearchTerm()

> **setSearchTerm**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L93)

Função para atualizar o termo de busca.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedArea()

> **setSelectedArea**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L98)

Função para atualizar a área selecionada.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedSistema()

> **setSelectedSistema**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/sidebar-content-layout.tsx#L95)

Função para atualizar o sistema selecionado.

#### Parameters

##### value

`string`

#### Returns

`void`
