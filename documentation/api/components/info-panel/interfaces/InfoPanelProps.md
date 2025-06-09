[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/info-panel](../README.md) / InfoPanelProps

# Interface: InfoPanelProps

Defined in: [src/components/info-panel.tsx:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L60)

Props para o componente InfoPanel.

## Properties

### annotation

> **annotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/components/info-panel.tsx:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L64)

A anotação associada ao equipamento selecionado. Null se não houver anotação.

***

### availableOperationalStatesList

> **availableOperationalStatesList**: `string`[]

Defined in: [src/components/info-panel.tsx:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L74)

Lista de estados operacionais disponíveis para seleção no dropdown.

***

### availableProductsList

> **availableProductsList**: `string`[]

Defined in: [src/components/info-panel.tsx:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L78)

Lista de produtos disponíveis para seleção no dropdown.

***

### equipment

> **equipment**: `null` \| [`Equipment`](../../../lib/types/interfaces/Equipment.md)

Defined in: [src/components/info-panel.tsx:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L62)

O equipamento selecionado para exibir detalhes. Null se nenhum equipamento único estiver selecionado.

***

### onClose()

> **onClose**: () => `void`

Defined in: [src/components/info-panel.tsx:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L66)

Callback para fechar o painel de informações (geralmente deseleciona o equipamento).

#### Returns

`void`

***

### onDeleteAnnotation()

> **onDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/components/info-panel.tsx:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L70)

Callback para excluir a anotação do equipamento especificado.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### onOpenAnnotationDialog()

> **onOpenAnnotationDialog**: () => `void`

Defined in: [src/components/info-panel.tsx:68](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L68)

Callback para abrir o diálogo de adição/edição de anotação.

#### Returns

`void`

***

### onOperationalStateChange()

> **onOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/components/info-panel.tsx:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L72)

Callback para alterar o estado operacional de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newState

`string`

#### Returns

`void`

***

### onProductChange()

> **onProductChange**: (`equipmentTag`, `newProduct`) => `void`

Defined in: [src/components/info-panel.tsx:76](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/info-panel.tsx#L76)

Callback para alterar o produto de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
