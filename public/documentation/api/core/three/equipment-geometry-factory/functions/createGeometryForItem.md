[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/equipment-geometry-factory](../README.md) / createGeometryForItem

# Function: createGeometryForItem()

> **createGeometryForItem**(`item`): `BufferGeometry`

Defined in: [src/core/three/equipment-geometry-factory.ts:26](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5bec8212bfd37e45fdf0e49aa57af1be9d74e77/src/core/three/equipment-geometry-factory.ts#L26)

Cria e retorna uma `THREE.BufferGeometry` apropriada para o tipo de equipamento.
Seleciona a geometria correta (Box, Cylinder, Sphere) com base no `item.type`
e utiliza as dimensões fornecidas no objeto `item`.

## Parameters

### item

[`Equipment`](../../../../lib/types/interfaces/Equipment.md)

O objeto de equipamento contendo tipo e dimensões.

## Returns

`BufferGeometry`

A geometria criada para o equipamento.
                                 Retorna um `BoxGeometry(1,1,1)` para tipos desconhecidos.
