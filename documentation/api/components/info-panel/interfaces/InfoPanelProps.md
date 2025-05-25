[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/info-panel](../README.md) / InfoPanelProps

# Interface: InfoPanelProps

Defined in: [src/components/info-panel.tsx:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L47)

Props para o componente InfoPanel.

## Properties

### annotation

> **annotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/components/info-panel.tsx:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L51)

A anotação associada ao equipamento selecionado. Null se não houver anotação.

***

### availableOperationalStatesList

> **availableOperationalStatesList**: `string`[]

Defined in: [src/components/info-panel.tsx:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L61)

Lista de estados operacionais disponíveis para seleção no dropdown.

***

### availableProductsList

> **availableProductsList**: `string`[]

Defined in: [src/components/info-panel.tsx:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L65)

Lista de produtos disponíveis para seleção no dropdown.

***

### equipment

> **equipment**: `null` \| [`Equipment`](../../../lib/types/interfaces/Equipment.md)

Defined in: [src/components/info-panel.tsx:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L49)

O equipamento selecionado para exibir detalhes. Null se nenhum equipamento único estiver selecionado.

***

### onClose()

> **onClose**: () => `void`

Defined in: [src/components/info-panel.tsx:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L53)

Callback para fechar o painel de informações (geralmente deseleciona o equipamento).

#### Returns

`void`

***

### onDeleteAnnotation()

> **onDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/components/info-panel.tsx:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L57)

Callback para excluir a anotação do equipamento especificado.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### onOpenAnnotationDialog()

> **onOpenAnnotationDialog**: () => `void`

Defined in: [src/components/info-panel.tsx:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L55)

Callback para abrir o diálogo de adição/edição de anotação.

#### Returns

`void`

***

### onOperationalStateChange()

> **onOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/components/info-panel.tsx:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L59)

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

Defined in: [src/components/info-panel.tsx:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/info-panel.tsx#L63)

Callback para alterar o produto de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`
