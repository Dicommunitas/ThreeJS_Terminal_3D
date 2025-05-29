[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/label-renderer-utils](../README.md) / UpdateAnnotationPinsParams

# Interface: UpdateAnnotationPinsParams

Defined in: [src/core/three/label-renderer-utils.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L71)

Parâmetros para a função `updateAnnotationPins`.
 UpdateAnnotationPinsParams

## Properties

### annotations

> **annotations**: [`Annotation`](../../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L74)

A lista atual de todas as anotações.

***

### equipmentData

> **equipmentData**: [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:75](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L75)

A lista completa de equipamentos, usada para encontrar posições e dimensões dos alvos das anotações.

***

### existingPinsRef

> **existingPinsRef**: `MutableRefObject`\<`CSS2DObject`[]\>

Defined in: [src/core/three/label-renderer-utils.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L77)

Ref para o array de objetos CSS2DObject (pins) atualmente na cena.

***

### labelRenderer

> **labelRenderer**: `null` \| `CSS2DRenderer`

Defined in: [src/core/three/label-renderer-utils.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L73)

O renderizador CSS2D responsável por exibir os pins.

***

### layers

> **layers**: [`Layer`](../../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:76](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L76)

A lista de camadas, usada para verificar a visibilidade da camada de "Annotations".

***

### scene

> **scene**: `null` \| `Scene`

Defined in: [src/core/three/label-renderer-utils.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/core/three/label-renderer-utils.ts#L72)

A cena Three.js onde os pins serão adicionados/removidos.
