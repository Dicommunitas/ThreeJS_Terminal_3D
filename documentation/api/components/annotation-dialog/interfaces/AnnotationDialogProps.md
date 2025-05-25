[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [components/annotation-dialog](../README.md) / AnnotationDialogProps

# Interface: AnnotationDialogProps

Defined in: [src/components/annotation-dialog.tsx:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L50)

Props para o componente AnnotationDialog.

## Interface

AnnotationDialogProps

## Properties

### currentAnnotation

> **currentAnnotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/components/annotation-dialog.tsx:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L54)

A anotação atual sendo editada, ou null se for uma nova anotação.

***

### equipmentName

> **equipmentName**: `string`

Defined in: [src/components/annotation-dialog.tsx:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L55)

O nome do equipamento ao qual a anotação se refere, para exibição no diálogo.

***

### isOpen

> **isOpen**: `boolean`

Defined in: [src/components/annotation-dialog.tsx:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L51)

Controla se o diálogo está aberto ou fechado.

***

### onConfirm()

> **onConfirm**: (`text`) => `void`

Defined in: [src/components/annotation-dialog.tsx:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L53)

Callback para confirmar e salvar a anotação, passando o texto inserido.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### onOpenChange()

> **onOpenChange**: (`isOpen`) => `void`

Defined in: [src/components/annotation-dialog.tsx:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/annotation-dialog.tsx#L52)

Callback para quando o estado de abertura do diálogo muda.

#### Parameters

##### isOpen

`boolean`

#### Returns

`void`
