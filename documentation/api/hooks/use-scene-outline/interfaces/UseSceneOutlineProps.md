[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-outline](../README.md) / UseSceneOutlineProps

# Interface: UseSceneOutlineProps

Defined in: [src/hooks/use-scene-outline.ts:44](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L44)

Props para o hook useSceneOutline.
 UseSceneOutlineProps

## Properties

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-scene-outline.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L46)

Ref para o array de meshes de equipamentos na cena.

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/hooks/use-scene-outline.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L48)

Tag do equipamento atualmente em hover.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-scene-outline.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L49)

Flag indicando se a cena 3D está pronta.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/use-scene-outline.ts:45](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L45)

Ref para a instância do OutlinePass.

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/hooks/use-scene-outline.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-scene-outline.ts#L47)

Array de tags dos equipamentos selecionados.
