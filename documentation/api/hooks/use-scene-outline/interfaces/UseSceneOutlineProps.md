[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-outline](../README.md) / UseSceneOutlineProps

# Interface: UseSceneOutlineProps

Defined in: [src/hooks/use-scene-outline.ts:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L41)

Props para o hook useSceneOutline.
 UseSceneOutlineProps

## Properties

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-scene-outline.ts:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L43)

Ref para o array de meshes de equipamentos na cena.

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/hooks/use-scene-outline.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L45)

Tag do equipamento atualmente em hover.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-scene-outline.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L46)

Flag indicando se a cena 3D está pronta.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/use-scene-outline.ts:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L42)

Ref para a instância do OutlinePass.

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/hooks/use-scene-outline.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-scene-outline.ts#L44)

Array de tags dos equipamentos selecionados.
