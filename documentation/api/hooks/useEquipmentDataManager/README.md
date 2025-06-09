[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useEquipmentDataManager

# hooks/useEquipmentDataManager

## See

 - [core/repository/memory-repository.equipmentRepository](../../core/repository/memory-repository/variables/equipmentRepository.md) Para a fonte de dados.
 - [lib/types.Equipment](../../lib/types/interfaces/Equipment.md) Para a interface de Equipamento.

## Example

```ts
// Diagrama de Interação do useEquipmentDataManager:
```mermaid
graph TD
    A[Componente UI (ex: InfoPanel)] -- chama --> B(handleOperationalStateChange)

    subgraph useEquipmentDataManager [Hook useEquipmentDataManager]
        direction LR
        B -- chama --> C[equipmentRepository.updateEquipment]
        C -- retorna --> B{Equipamento Atualizado}
        B -- chama --> D[equipmentRepository.getAllEquipment]
        D -- retorna --> E[setEquipmentData (Estado React)]
        E -- atualiza --> F[equipmentData (Estado React)]
        B -- chama --> G[toast]
    end

    F -- usado por --> A

   classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
   classDef state fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
   classDef func fill:#lightgreen,stroke:#333,stroke-width:2px;
   classDef repo fill:#lightcoral,stroke:#333,stroke-width:2px;
   classDef ui fill:#peachpuff,stroke:#333,stroke-width:2px;

   class A ui;
   class B,G func;
   class C,D repo;
   class E,F state;
   class useEquipmentDataManager hook;
```
```

## Interfaces

- [UseEquipmentDataManagerReturn](interfaces/UseEquipmentDataManagerReturn.md)

## Functions

- [useEquipmentDataManager](functions/useEquipmentDataManager.md)
