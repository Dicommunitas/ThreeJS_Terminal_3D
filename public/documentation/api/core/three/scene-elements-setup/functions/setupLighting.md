[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / setupLighting

# Function: setupLighting()

> **setupLighting**(`scene`): `void`

Defined in: src/core/three/scene-elements-setup.ts:31

Configura a iluminação padrão para a cena.
Adiciona uma AmbientLight para iluminação geral, uma HemisphereLight para simular luz do céu e do chão,
e uma DirectionalLight para simular luz solar com sombras (atualmente desabilitadas por performance).

## Parameters

### scene

`Scene`

A instância da cena Three.js onde as luzes serão adicionadas.

## Returns

`void`
