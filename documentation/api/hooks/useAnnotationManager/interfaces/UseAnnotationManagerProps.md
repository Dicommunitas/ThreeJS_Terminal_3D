[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useAnnotationManager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/useAnnotationManager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/hooks/useAnnotationManager.ts#L73)

Props para o hook `useAnnotationManager`.
 UseAnnotationManagerProps

## Properties

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/useAnnotationManager.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/hooks/useAnnotationManager.ts#L74)

Lista inicial opcional de anotações. Pode ser usada para uma
                                                 inicialização única do repositório se ele estiver vazio e este array contiver dados.
                                                 No entanto, o `annotationRepository` é geralmente auto-inicializável.
