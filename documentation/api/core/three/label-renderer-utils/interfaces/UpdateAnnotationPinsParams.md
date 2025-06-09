[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/label-renderer-utils](../README.md) / UpdateAnnotationPinsParams

# Interface: UpdateAnnotationPinsParams

Defined in: [src/core/three/label-renderer-utils.ts:89](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L89)

Parâmetros para a função `updateAnnotationPins`.
 UpdateAnnotationPinsParams

## Properties

### annotations

> **annotations**: [`Annotation`](../../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L92)

A lista atual de todas as anotações.

***

### equipmentData

> **equipmentData**: [`Equipment`](../../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L93)

A lista completa de equipamentos, usada para encontrar posições e dimensões dos alvos das anotações.

***

### existingPinsRef

> **existingPinsRef**: `MutableRefObject`\<`CSS2DObject`[]\>

Defined in: [src/core/three/label-renderer-utils.ts:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L95)

Ref para o array de objetos CSS2DObject (pins) atualmente na cena.

***

### labelRenderer

> **labelRenderer**: `null` \| `CSS2DRenderer`

Defined in: [src/core/three/label-renderer-utils.ts:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L91)

O renderizador CSS2D responsável por exibir os pins.

***

### layers

> **layers**: [`Layer`](../../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/core/three/label-renderer-utils.ts:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L94)

A lista de camadas, usada para verificar a visibilidade da camada de "Annotations".

***

### scene

> **scene**: `null` \| `Scene`

Defined in: [src/core/three/label-renderer-utils.ts:90](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/core/three/label-renderer-utils.ts#L90)

A cena Three.js onde os pins serão adicionados/removidos.
