[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / setupGroundPlane

# Function: setupGroundPlane()

> **setupGroundPlane**(`scene`): `Mesh`

Defined in: [src/core/three/scene-elements-setup.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/core/three/scene-elements-setup.ts#L77)

Configura o plano de chão (terreno) para a cena.
Cria um `THREE.Mesh` com `PlaneGeometry` e `MeshStandardMaterial`.
O plano é posicionado em Y=0 e rotacionado para ficar horizontal.

## Parameters

### scene

`Scene`

A instância da cena Three.js onde o plano será adicionado.

## Returns

`Mesh`

O mesh do plano de chão criado.
