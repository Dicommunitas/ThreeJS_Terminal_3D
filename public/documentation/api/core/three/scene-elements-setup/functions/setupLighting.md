[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / setupLighting

# Function: setupLighting()

> **setupLighting**(`scene`): `void`

Defined in: [src/core/three/scene-elements-setup.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5bec8212bfd37e45fdf0e49aa57af1be9d74e77/src/core/three/scene-elements-setup.ts#L51)

Configura a iluminação padrão para a cena.
Adiciona uma AmbientLight para iluminação geral, uma HemisphereLight para simular luz do céu e do chão,
e uma DirectionalLight para simular luz solar com sombras (atualmente desabilitadas por performance).

## Parameters

### scene

`Scene`

A instância da cena Three.js onde as luzes serão adicionadas.

## Returns

`void`
