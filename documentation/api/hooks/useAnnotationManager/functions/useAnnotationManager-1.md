[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useAnnotationManager](../README-1.md) / useAnnotationManager

# Function: useAnnotationManager()

> **useAnnotationManager**(`props`): [`UseAnnotationManagerReturn`](../interfaces/UseAnnotationManagerReturn-1.md)

Defined in: [src/hooks/useAnnotationManager.ts:109](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/useAnnotationManager.ts#L109)

Hook customizado para gerenciar anotações textuais associadas a equipamentos.
Atua como uma fachada para o `annotationRepository`, gerenciando o estado do diálogo de edição
e sincronizando o estado local de anotações com o repositório.

## Parameters

### props

[`UseAnnotationManagerProps`](../interfaces/UseAnnotationManagerProps-1.md)

Propriedades de configuração para o hook.

## Returns

[`UseAnnotationManagerReturn`](../interfaces/UseAnnotationManagerReturn-1.md)

Um objeto contendo o estado das anotações e funções para manipulá-las.
