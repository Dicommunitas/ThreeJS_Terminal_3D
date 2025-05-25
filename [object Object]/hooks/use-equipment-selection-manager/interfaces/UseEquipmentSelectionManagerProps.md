[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerProps

# Interface: UseEquipmentSelectionManagerProps

Defined in: [src/hooks/use-equipment-selection-manager.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-selection-manager.ts#L42)

Props para o hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerProps

## Properties

### equipmentData

> **equipmentData**: `Equipment`[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-selection-manager.ts#L43)

Lista completa de todos os equipamentos. Usada para buscar nomes
                                      de equipamentos para mensagens de feedback (toasts).

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-equipment-selection-manager.ts#L44)

Função para executar comandos (e.g., seleção de equipamento)
                                                       e adicioná-los ao histórico de undo/redo.

#### Parameters

##### command

`Command`

#### Returns

`void`
