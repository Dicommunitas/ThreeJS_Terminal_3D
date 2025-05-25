[**nextn**](../../../../README.md)

***

[nextn](../../../../modules.md) / [core/three/scene-elements-setup](../README.md) / setupLighting

# Function: setupLighting()

> **setupLighting**(`scene`): `void`

Defined in: [src/core/three/scene-elements-setup.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/core/three/scene-elements-setup.ts#L51)

Configura a iluminação padrão para a cena.
Adiciona uma AmbientLight para iluminação geral, uma HemisphereLight para simular luz do céu e do chão,
e uma DirectionalLight para simular luz solar com sombras (atualmente desabilitadas por performance).

## Parameters

### scene

`Scene`

A instância da cena Three.js onde as luzes serão adicionadas.

## Returns

`void`
