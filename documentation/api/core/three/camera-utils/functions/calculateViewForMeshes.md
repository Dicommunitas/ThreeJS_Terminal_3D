[**nextn**](../../../../README.md)

***

[nextn](../../../../modules.md) / [core/three/camera-utils](../README.md) / calculateViewForMeshes

# Function: calculateViewForMeshes()

> **calculateViewForMeshes**(`meshes`, `camera`): `null` \| \{ `lookAt`: `Vector3`; `position`: `Vector3`; \}

Defined in: [src/core/three/camera-utils.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/core/three/camera-utils.ts#L38)

Calcula uma posição e um ponto de observação (lookAt) para a câmera
de forma a enquadrar um conjunto de meshes fornecidos.
Tenta encontrar uma posição que mostre todos os meshes de forma clara.

## Parameters

### meshes

`Object3D`\<`Object3DEventMap`\>[]

Um array de meshes 3D a serem enquadrados.

### camera

`PerspectiveCamera`

A câmera de perspectiva da cena.

## Returns

`null` \| \{ `lookAt`: `Vector3`; `position`: `Vector3`; \}

Um objeto contendo a nova posição
         e o ponto de observação da câmera, ou null se não for possível calcular
         (e.g., nenhum mesh fornecido ou meshes sem geometria).
