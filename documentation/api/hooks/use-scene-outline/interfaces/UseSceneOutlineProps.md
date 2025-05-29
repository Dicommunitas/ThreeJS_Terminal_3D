[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-outline](../README.md) / UseSceneOutlineProps

# Interface: UseSceneOutlineProps

Defined in: [src/hooks/use-scene-outline.ts:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L47)

Props para o hook useSceneOutline.
 UseSceneOutlineProps

## Properties

### equipmentMeshesRef

> **equipmentMeshesRef**: `RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-scene-outline.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L49)

Ref para o array de meshes de equipamentos na cena.

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/hooks/use-scene-outline.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L51)

Tag do equipamento atualmente em hover.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-scene-outline.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L52)

Flag indicando se a cena 3D está pronta.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/use-scene-outline.ts:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L48)

Ref para a instância do OutlinePass.

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/hooks/use-scene-outline.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-scene-outline.ts#L50)

Array de tags dos equipamentos selecionados.
