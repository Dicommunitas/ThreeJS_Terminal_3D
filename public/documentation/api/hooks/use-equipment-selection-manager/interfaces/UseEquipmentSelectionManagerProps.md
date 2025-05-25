[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerProps

# Interface: UseEquipmentSelectionManagerProps

Defined in: [src/hooks/use-equipment-selection-manager.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5bec8212bfd37e45fdf0e49aa57af1be9d74e77/src/hooks/use-equipment-selection-manager.ts#L42)

Props para o hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerProps

## Properties

### equipmentData

> **equipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5bec8212bfd37e45fdf0e49aa57af1be9d74e77/src/hooks/use-equipment-selection-manager.ts#L43)

Lista completa de todos os equipamentos. Usada para buscar nomes
                                      de equipamentos para mensagens de feedback (toasts).

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5bec8212bfd37e45fdf0e49aa57af1be9d74e77/src/hooks/use-equipment-selection-manager.ts#L44)

Função para executar comandos (e.g., seleção de equipamento)
                                                       e adicioná-los ao histórico de undo/redo.

#### Parameters

##### command

[`Command`](../../../lib/types/interfaces/Command.md)

#### Returns

`void`
