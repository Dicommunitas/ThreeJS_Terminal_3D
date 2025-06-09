[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-renderer](../README.md) / useEquipmentRenderer

# Function: useEquipmentRenderer()

> **useEquipmentRenderer**(`props`): `RefObject`\<`Object3D`\<`Object3DEventMap`\>[]\>

Defined in: [src/hooks/use-equipment-renderer.ts:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/use-equipment-renderer.ts#L95)

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
