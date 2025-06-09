[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useAnnotationManager](../README.md) / UseAnnotationManagerProps

# Interface: UseAnnotationManagerProps

Defined in: [src/hooks/useAnnotationManager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useAnnotationManager.ts#L72)

Props para o hook `useAnnotationManager`.
 UseAnnotationManagerProps

## Properties

### initialAnnotations?

> `optional` **initialAnnotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/hooks/useAnnotationManager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useAnnotationManager.ts#L73)

Lista inicial opcional de anotações. Pode ser usada para uma
                                                 inicialização única do repositório se ele estiver vazio e este array contiver dados.
                                                 No entanto, o `annotationRepository` é geralmente auto-inicializável.
