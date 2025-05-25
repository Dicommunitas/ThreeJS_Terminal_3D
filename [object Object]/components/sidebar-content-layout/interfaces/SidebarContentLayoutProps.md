[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/sidebar-content-layout](../README.md) / SidebarContentLayoutProps

# Interface: SidebarContentLayoutProps

Defined in: [src/components/sidebar-content-layout.tsx:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L78)

Props para o componente SidebarContentLayout.
 SidebarContentLayoutProps

## Properties

### availableAreas

> **availableAreas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:86](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L86)

Lista de áreas disponíveis para filtro.

***

### availableSistemas

> **availableSistemas**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:83](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L83)

Lista de sistemas disponíveis para filtro.

***

### cameraViewSystems

> **cameraViewSystems**: `string`[]

Defined in: [src/components/sidebar-content-layout.tsx:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L91)

Lista de nomes de sistemas para o CameraControlsPanel.

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/sidebar-content-layout.tsx:87](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L87)

O modo de colorização atual.

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/sidebar-content-layout.tsx:89](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L89)

Lista de camadas para o LayerManager.

***

### onColorModeChange()

> **onColorModeChange**: (`mode`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:88](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L88)

Função para atualizar o modo de colorização.

#### Parameters

##### mode

[`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

#### Returns

`void`

***

### onFocusAndSelectSystem()

> **onFocusAndSelectSystem**: (`systemName`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L92)

Callback para focar e selecionar um sistema.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:90](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L90)

Função para alternar a visibilidade de uma camada.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### searchTerm

> **searchTerm**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L79)

O termo de busca textual atual.

***

### selectedArea

> **selectedArea**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:84](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L84)

A área selecionada para filtro.

***

### selectedSistema

> **selectedSistema**: `string`

Defined in: [src/components/sidebar-content-layout.tsx:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L81)

O sistema selecionado para filtro.

***

### setSearchTerm()

> **setSearchTerm**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L80)

Função para atualizar o termo de busca.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedArea()

> **setSelectedArea**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:85](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L85)

Função para atualizar a área selecionada.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### setSelectedSistema()

> **setSelectedSistema**: (`value`) => `void`

Defined in: [src/components/sidebar-content-layout.tsx:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/components/sidebar-content-layout.tsx#L82)

Função para atualizar o sistema selecionado.

#### Parameters

##### value

`string`

#### Returns

`void`
