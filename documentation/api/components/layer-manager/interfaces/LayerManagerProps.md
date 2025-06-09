[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/layer-manager](../README.md) / LayerManagerProps

# Interface: LayerManagerProps

Defined in: [src/components/layer-manager.tsx:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/824631c882bd29351bc730ad23d22c22cce24127/src/components/layer-manager.tsx#L56)

Props para o componente LayerManager.
 LayerManagerProps

## Properties

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/layer-manager.tsx:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/824631c882bd29351bc730ad23d22c22cce24127/src/components/layer-manager.tsx#L57)

A lista de camadas disponíveis e seus estados de visibilidade.

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/layer-manager.tsx:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/824631c882bd29351bc730ad23d22c22cce24127/src/components/layer-manager.tsx#L58)

Callback para quando a visibilidade de uma camada é alternada.

#### Parameters

##### layerId

`string`

#### Returns

`void`
