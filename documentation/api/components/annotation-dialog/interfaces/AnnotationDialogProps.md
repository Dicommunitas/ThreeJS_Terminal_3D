[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/annotation-dialog](../README.md) / AnnotationDialogProps

# Interface: AnnotationDialogProps

Defined in: [src/components/annotation-dialog.tsx:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L58)

Props para o componente AnnotationDialog.
 AnnotationDialogProps

## Properties

### currentAnnotation

> **currentAnnotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/components/annotation-dialog.tsx:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L62)

A anotação atual sendo editada, ou null se for uma nova anotação.

***

### equipmentName

> **equipmentName**: `string`

Defined in: [src/components/annotation-dialog.tsx:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L63)

O nome do equipamento ao qual a anotação se refere, para exibição no diálogo.

***

### isOpen

> **isOpen**: `boolean`

Defined in: [src/components/annotation-dialog.tsx:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L59)

Controla se o diálogo está aberto ou fechado.

***

### onConfirm()

> **onConfirm**: (`text`) => `void`

Defined in: [src/components/annotation-dialog.tsx:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L61)

Callback para confirmar e salvar a anotação, passando o texto inserido.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### onOpenChange()

> **onOpenChange**: (`isOpen`) => `void`

Defined in: [src/components/annotation-dialog.tsx:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/components/annotation-dialog.tsx#L60)

Callback para quando o estado de abertura do diálogo muda.

#### Parameters

##### isOpen

`boolean`

#### Returns

`void`
