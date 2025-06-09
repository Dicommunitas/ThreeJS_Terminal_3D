[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / core/repository/memory-repository

# core/repository/memory-repository

Repositório em memória para gerenciar os dados da aplicação Terminal 3D.

Este módulo atua como a "fonte da verdade" para os dados de `Equipment` (equipamentos) e `Annotation` (anotações)
durante a execução da aplicação. Ele encapsula a lógica de armazenamento em memória (utilizando `Map` para acesso eficiente por ID/tag)
e fornece uma interface CRUD (Criar, Ler, Atualizar, Excluir) para acessar e modificar esses dados.

O repositório é auto-inicializável com os dados de `initialEquipment` e `initialAnnotations`
definidos em `src/core/data/initial-data.ts` na primeira vez que é importado.
Funções de obtenção (get/getAll) retornam cópias dos objetos para promover a imutabilidade
e evitar modificações acidentais do estado interno do repositório por referências externas.

## See

 - /docs/core/data/initial-data.md Para os dados iniciais de equipamentos e camadas.
 - /docs/lib/types.md#Equipment Para a interface de Equipamento.
 - /docs/lib/types.md#Annotation Para a interface de Anotação.

## Example

```ts
// Diagrama de Estrutura do Repositório em Memória
// mermaid
// classDiagram
//     class RepositorioMemoria {
//         -equipmentStore: Map_string_Equipment_
//         -annotationStore: Map_string_Annotation_
//         -isInitialized: boolean
//         +initializeRepository() void
//     }
//     class RepositorioEquipamentos {
//         +getEquipmentByTag(tag: string): Equipment | undefined
//         +getAllEquipment(): Equipment[]
//         +addEquipment(equipment: Equipment): Equipment
//         +updateEquipment(tag: string, updates: Partial_Equipment_): Equipment | undefined
//         +deleteEquipment(tag: string): boolean
//         +_resetAndLoadInitialData(): void
//     }
//     class RepositorioAnotacoes {
//         +getAnnotationByEquipmentTag(equipmentTag: string): Annotation | undefined
//         +getAllAnnotations(): Annotation[]
//         +addOrUpdateAnnotation(annotation: Annotation): Annotation
//         +deleteAnnotation(equipmentTag: string): boolean
//         +initializeAnnotations(annotations: Annotation[]): void
//     }
//     class DadosIniciais {
//         +initialEquipment: Equipment[]
//         +initialAnnotations: Annotation[]
//     }
//
//     RepositorioMemoria --|> DadosIniciais : carrega dados de
//     RepositorioMemoria o-- RepositorioEquipamentos : expõe
//     RepositorioMemoria o-- RepositorioAnotacoes : expõe
//
//     note for RepositorioMemoria "Módulo auto-inicializável."
//     note for RepositorioEquipamentos "Gerencia o CRUD de Equipamentos."
//     note for RepositorioAnotacoes "Gerencia o CRUD de Anotações."
```

## Variables

- [annotationRepository](variables/annotationRepository.md)
- [equipmentRepository](variables/equipmentRepository.md)
