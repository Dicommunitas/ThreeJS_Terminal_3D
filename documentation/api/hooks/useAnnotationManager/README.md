[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useAnnotationManager

# hooks/useAnnotationManager

Hook customizado para gerenciar o estado e a lógica das anotações textuais dos equipamentos,
atuando como uma fachada para o `annotationRepository`.

Este hook é responsável por:
-   Obter e manter uma cópia local (estado React) das anotações a partir do `annotationRepository`.
-   Gerenciar o estado do diálogo de adição/edição de anotações (`isAnnotationDialogOpen`, `editingAnnotation`, `annotationTargetEquipment`).
-   Fornecer uma API (funções `handleOpenAnnotationDialog`, `handleSaveAnnotation`, `handleDeleteAnnotation`, `getAnnotationForEquipment`)
    para criar, ler, atualizar e excluir anotações. Estas operações persistem as mudanças no `annotationRepository`.
-   Após cada modificação no repositório, o estado local de anotações do hook é atualizado para
    refletir os dados mais recentes, garantindo a reatividade da UI.
-   Utilizar `useToast` para fornecer feedback visual ao usuário sobre as operações de anotação.

## See

 - /docs/core/repository/memory-repository.md#annotationRepository Para a fonte de dados das anotações.
 - /docs/core/repository/memory-repository.md#equipmentRepository Para obter dados de equipamentos (e.g., nome para toasts).
 - /docs/lib/types.md#Annotation Para a interface de Anotação.
 - /docs/lib/types.md#Equipment Para a interface de Equipamento.

## Param

Propriedades de configuração para o hook (atualmente, `initialAnnotations` é opcional e usado para uma potencial inicialização única do repositório, embora o repositório seja auto-inicializável).

## Example

```ts
// Diagrama de Interação do useAnnotationManager
// mermaid
// graph TD
//     A[Componente UI (ex: InfoPanel)] -- chama --> B(handleOpenAnnotationDialog)
//     B -- define estados --> DialogState["isAnnotationDialogOpen, editingAnnotation, annotationTargetEquipment"]
//
//     C[Componente UI (ex: AnnotationDialog)] -- no submit --> D(handleSaveAnnotation)
//
//     subgraph useAnnotationManager [Hook useAnnotationManager]
//         direction LR
//         D -- chama --> E[annotationRepository.addOrUpdateAnnotation]
//         E -- retorna --> D{Anotação Salva}
//         D -- chama --> F[refreshAnnotationsFromRepo]
//         F -- chama --> G[annotationRepository.getAllAnnotations]
//         G -- retorna --> H[setAnnotationsState (Estado React)]
//         H -- atualiza --> I[annotations (Estado React)]
//         D -- chama --> J[toast]
//         DialogState
//     end
//
//     I -- usado por --> A
//     DialogState -- usado por --> C
//
//    classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
//    classDef state fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
//    classDef func fill:#lightgreen,stroke:#333,stroke-width:2px;
//    classDef repo fill:#lightcoral,stroke:#333,stroke-width:2px;
//    classDef ui fill:#peachpuff,stroke:#333,stroke-width:2px;
//
//    class A,C ui;
//    class B,D,F,J func;
//    class E,G repo;
//    class DialogState,H,I state;
//    class useAnnotationManager hook;
```

## Interfaces

- [UseAnnotationManagerProps](interfaces/UseAnnotationManagerProps.md)
- [UseAnnotationManagerReturn](interfaces/UseAnnotationManagerReturn.md)

## Functions

- [useAnnotationManager](functions/useAnnotationManager.md)
