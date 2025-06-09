[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/camera-utils](../README.md) / calculateViewForMeshes

# Function: calculateViewForMeshes()

> **calculateViewForMeshes**(`meshes`, `camera`): `null` \| [`SystemViewOptions`](../../../../lib/types/interfaces/SystemViewOptions.md)

Defined in: [src/core/three/camera-utils.ts:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/core/three/camera-utils.ts#L46)

Calcula múltiplas opções de visualização (padrão, de cima, isométrica) para a câmera
de forma a enquadrar um conjunto de meshes fornecidos.

## Parameters

### meshes

`Object3D`\<`Object3DEventMap`\>[]

Um array de meshes 3D a serem enquadrados.

### camera

`PerspectiveCamera`

A câmera de perspectiva da cena.

## Returns

`null` \| [`SystemViewOptions`](../../../../lib/types/interfaces/SystemViewOptions.md)

Um objeto contendo as diferentes visualizações calculadas
         ou null se não for possível calcular (e.g., nenhum mesh fornecido).
