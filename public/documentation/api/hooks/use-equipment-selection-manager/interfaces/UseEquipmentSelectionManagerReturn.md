[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerReturn

# Interface: UseEquipmentSelectionManagerReturn

Defined in: [src/hooks/use-equipment-selection-manager.ts:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L54)

Retorno do hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerReturn

## Properties

### handleEquipmentClick()

> **handleEquipmentClick**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L57)

Manipulador para eventos de clique em equipamentos
                                                                                                      (ou em espaço vazio para deselecionar).

#### Parameters

##### tag

`null` | `string`

##### isMultiSelectModifierPressed

`boolean`

#### Returns

`void`

***

### handleSetHoveredEquipmentTag()

> **handleSetHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L58)

Define o equipamento atualmente em hover.

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `null` \| `string`

Defined in: [src/hooks/use-equipment-selection-manager.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L56)

Tag do equipamento atualmente sob o cursor do mouse, ou null.

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `string`[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L55)

Array das tags dos equipamentos atualmente selecionados.

***

### selectTagsBatch()

> **selectTagsBatch**: (`tagsToSelect`, `operationDescription?`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-equipment-selection-manager.ts#L59)

Seleciona programaticamente um lote de equipamentos.
                                                                                              `operationDescription` é usado para o histórico de comandos.

#### Parameters

##### tagsToSelect

`string`[]

##### operationDescription?

`string`

#### Returns

`void`
