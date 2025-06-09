[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/label-renderer-utils](../README.md) / updateLabelRendererSize

# Function: updateLabelRendererSize()

> **updateLabelRendererSize**(`labelRenderer`, `width`, `height`): `void`

Defined in: [src/core/three/label-renderer-utils.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/core/three/label-renderer-utils.ts#L72)

Atualiza o tamanho do CSS2DRenderer.
Deve ser chamado quando o contêiner de renderização da cena é redimensionado
para garantir que os rótulos sejam dimensionados e posicionados corretamente.

## Parameters

### labelRenderer

A instância do CSS2DRenderer a ser atualizada.

`null` | `CSS2DRenderer`

### width

`number`

A nova largura para o renderizador de rótulos.

### height

`number`

A nova altura para o renderizador de rótulos.

## Returns

`void`
