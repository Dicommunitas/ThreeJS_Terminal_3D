[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useAnnotationManager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/useAnnotationManager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/hooks/useAnnotationManager.ts#L72)

Props para o hook `useAnnotationManager`.
 UseAnnotationManagerProps

## Properties

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/useAnnotationManager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/hooks/useAnnotationManager.ts#L73)

Lista inicial opcional de anotações. Pode ser usada para uma
                                                 inicialização única do repositório se ele estiver vazio e este array contiver dados.
                                                 No entanto, o `annotationRepository` é geralmente auto-inicializável.
