[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/layer-manager](../README.md) / LayerManagerProps

# Interface: LayerManagerProps

Defined in: [src/components/layer-manager.tsx:36](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/layer-manager.tsx#L36)

Props para o componente LayerManager.
 LayerManagerProps

## Properties

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/layer-manager.tsx:37](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/layer-manager.tsx#L37)

A lista de camadas disponíveis e seus estados de visibilidade.

***

### onToggleLayer()

> **onToggleLayer**: (`layerId`) => `void`

Defined in: [src/components/layer-manager.tsx:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/components/layer-manager.tsx#L38)

Callback para quando a visibilidade de uma camada é alternada.

#### Parameters

##### layerId

`string`

#### Returns

`void`
