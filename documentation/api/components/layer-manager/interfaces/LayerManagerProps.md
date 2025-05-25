[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/layer-manager](../README.md) / LayerManagerProps

# Interface: LayerManagerProps

Defined in: [src/components/layer-manager.tsx:35](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/layer-manager.tsx#L35)

Props para o componente LayerManager.
 LayerManagerProps

## Properties

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/layer-manager.tsx:36](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/layer-manager.tsx#L36)

A lista de camadas disponíveis e seus estados de visibilidade.

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/layer-manager.tsx:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/layer-manager.tsx#L37)

Callback para quando a visibilidade de uma camada é alternada.

#### Parameters

##### layerId

`string`

#### Returns

`void`
