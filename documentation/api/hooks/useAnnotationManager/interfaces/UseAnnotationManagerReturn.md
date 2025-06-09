[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useAnnotationManager](../README.md) / UseAnnotationManagerReturn

# Interface: UseAnnotationManagerReturn

Defined in: [src/hooks/use-annotation-manager.ts:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L92)

Retorno do hook `useAnnotationManager`.
 UseAnnotationManagerReturn

## Properties

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L93)

A lista atual de todas as anotações (cópia local do estado do repositório).

***

### annotationTargetEquipment

> **annotationTargetEquipment**: `null` \| [`Equipment`](../../../lib/types/interfaces/Equipment.md)

Defined in: [src/hooks/use-annotation-manager.ts:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L95)

O equipamento que é o alvo atual para adicionar/editar uma anotação.

***

### editingAnnotation

> **editingAnnotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/hooks/use-annotation-manager.ts:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L96)

A anotação que está atualmente em edição no diálogo (null se for uma nova anotação).

***

### getAnnotationForEquipment()

> **getAnnotationForEquipment**: (`equipmentTag`) => `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/hooks/use-annotation-manager.ts:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L100)

Retorna a anotação para a tag do equipamento fornecida, ou null se não existir.

#### Parameters

##### equipmentTag

`null` | `string`

#### Returns

`null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

***

### handleDeleteAnnotation()

> **handleDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L99)

Exclui a anotação associada à tag do equipamento fornecida.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### handleOpenAnnotationDialog()

> **handleOpenAnnotationDialog**: (`equipment`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L97)

Abre o diálogo de anotação para o equipamento fornecido.

#### Parameters

##### equipment

`null` | [`Equipment`](../../../lib/types/interfaces/Equipment.md)

#### Returns

`void`

***

### handleSaveAnnotation()

> **handleSaveAnnotation**: (`text`) => `void`

Defined in: [src/hooks/use-annotation-manager.ts:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L98)

Salva (cria ou atualiza) a anotação para o `annotationTargetEquipment`.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### isAnnotationDialogOpen

> **isAnnotationDialogOpen**: `boolean`

Defined in: [src/hooks/use-annotation-manager.ts:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L94)

Indica se o diálogo de anotação está aberto.

***

### setIsAnnotationDialogOpen

> **setIsAnnotationDialogOpen**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

Defined in: [src/hooks/use-annotation-manager.ts:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-annotation-manager.ts#L101)

Função para definir o estado de abertura/fechamento do diálogo.
