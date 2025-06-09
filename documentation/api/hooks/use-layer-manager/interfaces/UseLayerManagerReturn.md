[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-layer-manager](../README.md) / UseLayerManagerReturn

# Interface: UseLayerManagerReturn

Defined in: [src/hooks/use-layer-manager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/use-layer-manager.ts#L73)

Retorno do hook `useLayerManager`.
 UseLayerManagerReturn

## Properties

### handleToggleLayer()

> **handleToggleLayer**: (`layerId`) => `void`

Defined in: [src/hooks/use-layer-manager.ts:75](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/use-layer-manager.ts#L75)

Função para alternar a visibilidade de uma camada específica.
                                                         Esta ação é registrada no histórico de comandos.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/hooks/use-layer-manager.ts:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/use-layer-manager.ts#L74)

A lista atual de todas as camadas e seus respectivos estados de visibilidade.
