[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-annotation-manager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/use-annotation-manager.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-annotation-manager.ts#L48)

Props para o hook `useAnnotationManager`.

## Interface

UseAnnotationManagerProps

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-annotation-manager.ts#L50)

Lista completa de todos os equipamentos. Usada para buscar nomes de
                                      equipamentos para mensagens de feedback (toasts) e para validar alvos.

***

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-annotation-manager.ts#L49)

Lista inicial opcional de anotações para popular o estado.
