[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-annotation-manager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/use-annotation-manager.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-annotation-manager.ts#L48)

Props para o hook `useAnnotationManager`.
 UseAnnotationManagerProps

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-annotation-manager.ts#L50)

Lista completa de todos os equipamentos. Usada para buscar nomes de
                                      equipamentos para mensagens de feedback (toasts) e para validar alvos.

***

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-annotation-manager.ts#L49)

Lista inicial opcional de anotações para popular o estado.
