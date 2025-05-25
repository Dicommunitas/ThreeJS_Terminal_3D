[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerProps

# Interface: UseEquipmentSelectionManagerProps

Defined in: [src/hooks/use-equipment-selection-manager.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L38)

Props para o hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerProps

## Properties

### equipmentData

> **equipmentData**: `Equipment`[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:39](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L39)

Lista completa de todos os equipamentos. Usada para buscar nomes
                                      de equipamentos para mensagens de feedback (toasts).

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:40](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L40)

Função para executar comandos (e.g., seleção de equipamento)
                                                       e adicioná-los ao histórico de undo/redo.

#### Parameters

##### command

`Command`

#### Returns

`void`
