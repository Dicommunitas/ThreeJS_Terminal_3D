[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-annotation-manager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/use-annotation-manager.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-annotation-manager.ts#L59)

Props para o hook `useAnnotationManager`.
 UseAnnotationManagerProps

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-annotation-manager.ts#L61)

Lista completa de todos os equipamentos. Usada para buscar nomes de
                                      equipamentos para mensagens de feedback (toasts) e para validar alvos.

***

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/use-annotation-manager.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-annotation-manager.ts#L60)

Lista inicial opcional de anotações para popular o estado.
