[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-annotation-manager](../README.md) / UseAnnotationManagerReturn

# Interface: UseAnnotationManagerReturn

Defined in: [src/hooks/use-annotation-manager.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L70)

Retorno do hook `useAnnotationManager`.
 UseAnnotationManagerReturn

## Properties

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L71)

A lista atual de todas as anotações.

***

### annotationTargetEquipment

> **annotationTargetEquipment**: `null` \| [`Equipment`](../../../lib/types/interfaces/Equipment.md)

Defined in: [src/hooks/use-annotation-manager.ts:75](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L75)

O equipamento que é o alvo atual para adicionar/editar uma anotação.

***

### editingAnnotation

> **editingAnnotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/hooks/use-annotation-manager.ts:76](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L76)

A anotação que está atualmente em edição no diálogo (null se for uma nova anotação).

***

### getAnnotationForEquipment()

> **getAnnotationForEquipment**: (`equipmentTag`) => `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/hooks/use-annotation-manager.ts:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L80)

Retorna a anotação para a tag do equipamento fornecida, ou null se não existir.

#### Parameters

##### equipmentTag

`null` | `string`

#### Returns

`null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

***

### handleDeleteAnnotation()

> **handleDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L79)

Exclui a anotação associada à tag do equipamento fornecida.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### handleOpenAnnotationDialog()

> **handleOpenAnnotationDialog**: (`equipment`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L77)

Abre o diálogo de anotação para o equipamento fornecido.

#### Parameters

##### equipment

`null` | [`Equipment`](../../../lib/types/interfaces/Equipment.md)

#### Returns

`void`

***

### handleSaveAnnotation()

> **handleSaveAnnotation**: (`text`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L78)

Salva (cria ou atualiza) a anotação para o `annotationTargetEquipment`.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### isAnnotationDialogOpen

> **isAnnotationDialogOpen**: `boolean`

Defined in: [src/hooks/use-annotation-manager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L73)

Indica se o diálogo de anotação está aberto.

***

### setAnnotations

> **setAnnotations**: `Dispatch`\<`SetStateAction`\<[`Annotation`](../../../lib/types/interfaces/Annotation.md)[]\>\>

Defined in: [src/hooks/use-annotation-manager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L72)

Função para definir diretamente a lista de anotações (geralmente usada internamente ou para inicialização).

***

### setIsAnnotationDialogOpen

> **setIsAnnotationDialogOpen**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

Defined in: [src/hooks/use-annotation-manager.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-annotation-manager.ts#L74)

Função para definir o estado de abertura/fechamento do diálogo.
