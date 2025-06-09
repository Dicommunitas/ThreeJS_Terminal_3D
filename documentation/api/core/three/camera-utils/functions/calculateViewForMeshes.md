[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/camera-utils](../README.md) / calculateViewForMeshes

# Function: calculateViewForMeshes()

> **calculateViewForMeshes**(`meshes`, `camera`): `null` \| [`SystemViewOptions`](../../../../lib/types/interfaces/SystemViewOptions.md)

Defined in: [src/core/three/camera-utils.ts:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/camera-utils.ts#L37)

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
