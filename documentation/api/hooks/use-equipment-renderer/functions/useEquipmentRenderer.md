[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-renderer](../README.md) / useEquipmentRenderer

# Function: useEquipmentRenderer()

> **useEquipmentRenderer**(`props`): `RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-equipment-renderer.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-equipment-renderer.ts#L60)

Hook customizado para gerenciar a renderização (criação, atualização, remoção)
dos meshes de equipamentos na cena Three.js.

## Parameters

### props

[`UseEquipmentRendererProps`](../interfaces/UseEquipmentRendererProps.md)

As props do hook.

## Returns

`RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Ref para a lista de meshes de equipamentos atualmente na cena.
         Este ref é gerenciado internamente pelo hook mas retornado para que outros hooks
         (e.g., para raycasting) possam acessá-lo.
