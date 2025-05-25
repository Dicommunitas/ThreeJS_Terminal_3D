[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/info-panel](../README.md) / InfoPanelProps

# Interface: InfoPanelProps

Defined in: [src/components/info-panel.tsx:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L46)

Props para o componente InfoPanel.

## Properties

### annotation

> **annotation**: `null` \| `Annotation`

Defined in: [src/components/info-panel.tsx:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L50)

A anotação associada ao equipamento selecionado. Null se não houver anotação.

***

### availableOperationalStatesList

> **availableOperationalStatesList**: `string`[]

Defined in: [src/components/info-panel.tsx:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L60)

Lista de estados operacionais disponíveis para seleção no dropdown.

***

### availableProductsList

> **availableProductsList**: `string`[]

Defined in: [src/components/info-panel.tsx:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L64)

Lista de produtos disponíveis para seleção no dropdown.

***

### equipment

> **equipment**: `null` \| `Equipment`

Defined in: [src/components/info-panel.tsx:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L48)

O equipamento selecionado para exibir detalhes. Null se nenhum equipamento único estiver selecionado.

***

### onClose()

> **onClose**: () => `void`

Defined in: [src/components/info-panel.tsx:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L52)

Callback para fechar o painel de informações (geralmente deseleciona o equipamento).

#### Returns

`void`

***

### onDeleteAnnotation()

> **onDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/components/info-panel.tsx:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L56)

Callback para excluir a anotação do equipamento especificado.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### onOpenAnnotationDialog()

> **onOpenAnnotationDialog**: () => `void`

Defined in: [src/components/info-panel.tsx:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L54)

Callback para abrir o diálogo de adição/edição de anotação.

#### Returns

`void`

***

### onOperationalStateChange()

> **onOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/components/info-panel.tsx:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L58)

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

Defined in: [src/components/info-panel.tsx:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/components/info-panel.tsx#L62)

Callback para alterar o produto de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
