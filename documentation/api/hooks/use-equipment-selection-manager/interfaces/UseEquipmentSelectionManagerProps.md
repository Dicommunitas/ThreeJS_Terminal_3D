[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerProps

# Interface: UseEquipmentSelectionManagerProps

Defined in: [src/hooks/use-equipment-selection-manager.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-equipment-selection-manager.ts#L45)

Props para o hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerProps

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-equipment-selection-manager.ts#L46)

Lista completa de todos os equipamentos. Usada para buscar nomes
                                      de equipamentos para mensagens de feedback (toasts).

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-equipment-selection-manager.ts#L47)

Função para executar comandos (e.g., seleção de equipamento)
                                                       e adicioná-los ao histórico de undo/redo.

#### Parameters

##### command

[`Command`](../../../lib/types/interfaces/Command.md)

#### Returns

`void`
