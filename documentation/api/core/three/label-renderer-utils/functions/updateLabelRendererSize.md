[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/label-renderer-utils](../README.md) / updateLabelRendererSize

# Function: updateLabelRendererSize()

> **updateLabelRendererSize**(`labelRenderer`, `width`, `height`): `void`

Defined in: [src/core/three/label-renderer-utils.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/core/three/label-renderer-utils.ts#L49)

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
