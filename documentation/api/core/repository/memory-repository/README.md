[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / core/repository/memory-repository

# core/repository/memory-repository

## File Overview

Repositório em memória para gerenciar os dados da aplicação Terminal 3D.

## See

 - module:core/data/initial-data Para os dados iniciais de equipamentos e camadas.
 - module:lib/types~Equipment Para a interface de Equipamento.
 - module:lib/types~Annotation Para a interface de Anotação.

## Description

Este módulo atua como a "fonte da verdade" para os dados de `Equipment` (equipamentos) e `Annotation` (anotações)
durante a execução da aplicação. Ele encapsula a lógica de armazenamento em memória (utilizando `Map` para acesso eficiente por ID/tag)
e fornece uma interface CRUD (Criar, Ler, Atualizar, Excluir) para acessar e modificar esses dados.

O repositório é auto-inicializável com os dados de `initialEquipment` e `initialAnnotations`
definidos em `src/core/data/initial-data.ts` na primeira vez que é importado.
Funções de obtenção (get/getAll) retornam cópias dos objetos para promover a imutabilidade
e evitar modificações acidentais do estado interno do repositório por referências externas.

Exporta dois objetos principais:
-   `equipmentRepository`: Contém métodos para gerenciar dados de equipamentos.
-   `annotationRepository`: Contém métodos para gerenciar dados de anotações.

## Example

```ts
// Diagrama de Estrutura do Repositório em Memória
// mermaid
// classDiagram
//     class MemoryRepository {
//         -equipmentStore: Map<string, Equipment>
//         -annotationStore: Map<string, Annotation>
//         -isInitialized: boolean
//         +initializeRepository() void
//     }
//     class EquipmentRepository {
//         +getEquipmentByTag(tag: string): Equipment | undefined
//         +getAllEquipment(): Equipment[]
//         +addEquipment(equipment: Equipment): Equipment
//         +updateEquipment(tag: string, updates: Partial<Equipment>): Equipment | undefined
//         +deleteEquipment(tag: string): boolean
//         +_resetAndLoadInitialData(): void
//     }
//     class AnnotationRepository {
//         +getAnnotationByEquipmentTag(equipmentTag: string): Annotation | undefined
//         +getAllAnnotations(): Annotation[]
//         +addOrUpdateAnnotation(annotation: Annotation): Annotation
//         +deleteAnnotation(equipmentTag: string): boolean
//         +initializeAnnotations(annotations: Annotation[]): void
//     }
//     class InitialData {
//         +initialEquipment: Equipment[]
//         +initialAnnotations: Annotation[]
//     }
//
//     MemoryRepository --|> InitialData : carrega dados de
//     MemoryRepository o-- EquipmentRepository : expõe
//     MemoryRepository o-- AnnotationRepository : expõe
//
//     note for MemoryRepository "Módulo auto-inicializável."
//     note for EquipmentRepository "Gerencia o CRUD de Equipamentos."
//     note for AnnotationRepository "Gerencia o CRUD de Anotações."
```

## Variables

- [annotationRepository](variables/annotationRepository.md)
- [equipmentRepository](variables/equipmentRepository.md)
