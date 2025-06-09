[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/layer-manager](../README.md) / LayerManagerProps

# Interface: LayerManagerProps

Defined in: [src/components/layer-manager.tsx:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/layer-manager.tsx#L55)

Props para o componente LayerManager.
 LayerManagerProps

## Properties

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/layer-manager.tsx:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/layer-manager.tsx#L56)

A lista de camadas disponíveis e seus estados de visibilidade.

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/layer-manager.tsx:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/components/layer-manager.tsx#L57)

Callback para quando a visibilidade de uma camada é alternada.

#### Parameters

##### layerId

`string`

#### Returns

`void`
