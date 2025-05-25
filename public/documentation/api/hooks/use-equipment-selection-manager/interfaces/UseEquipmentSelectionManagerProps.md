[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerProps

# Interface: UseEquipmentSelectionManagerProps

Defined in: src/hooks/use-equipment-selection-manager.ts:34

Props para o hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerProps

## Properties

### equipmentData

> **equipmentData**: `Equipment`[]

Defined in: src/hooks/use-equipment-selection-manager.ts:35

Lista completa de todos os equipamentos. Usada para buscar nomes
                                      de equipamentos para mensagens de feedback (toasts).

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: src/hooks/use-equipment-selection-manager.ts:36

Função para executar comandos (e.g., seleção de equipamento)
                                                       e adicioná-los ao histórico de undo/redo.

#### Parameters

##### command

`Command`

#### Returns

`void`
