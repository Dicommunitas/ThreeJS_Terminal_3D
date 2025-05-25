[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [components/layer-manager](../README.md) / LayerManagerProps

# Interface: LayerManagerProps

Defined in: [src/components/layer-manager.tsx:35](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/layer-manager.tsx#L35)

Props para o componente LayerManager.

## Interface

LayerManagerProps

## Properties

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/layer-manager.tsx:36](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/layer-manager.tsx#L36)

A lista de camadas disponíveis e seus estados de visibilidade.

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/layer-manager.tsx:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/components/layer-manager.tsx#L37)

Callback para quando a visibilidade de uma camada é alternada.

#### Parameters

##### layerId

`string`

#### Returns

`void`
