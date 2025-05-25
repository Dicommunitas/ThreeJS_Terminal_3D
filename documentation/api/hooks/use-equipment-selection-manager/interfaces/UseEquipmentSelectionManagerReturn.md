[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-selection-manager](../README.md) / UseEquipmentSelectionManagerReturn

# Interface: UseEquipmentSelectionManagerReturn

Defined in: [src/hooks/use-equipment-selection-manager.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L58)

Retorno do hook `useEquipmentSelectionManager`.
 UseEquipmentSelectionManagerReturn

## Properties

### handleEquipmentClick()

> **handleEquipmentClick**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L61)

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

Defined in: [src/hooks/use-equipment-selection-manager.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L62)

Define o equipamento atualmente em hover.

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `null` \| `string`

Defined in: [src/hooks/use-equipment-selection-manager.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L60)

Tag do equipamento atualmente sob o cursor do mouse, ou null.

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `string`[]

Defined in: [src/hooks/use-equipment-selection-manager.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L59)

Array das tags dos equipamentos atualmente selecionados.

***

### selectTagsBatch()

> **selectTagsBatch**: (`tagsToSelect`, `operationDescription?`) => `void`

Defined in: [src/hooks/use-equipment-selection-manager.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-selection-manager.ts#L63)

Seleciona programaticamente um lote de equipamentos.
                                                                                              `operationDescription` é usado para o histórico de comandos.

#### Parameters

##### tagsToSelect

`string`[]

##### operationDescription?

`string`

#### Returns

`void`
