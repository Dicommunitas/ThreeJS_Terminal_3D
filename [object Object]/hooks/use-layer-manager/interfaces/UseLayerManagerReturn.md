[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-layer-manager](../README.md) / UseLayerManagerReturn

# Interface: UseLayerManagerReturn

Defined in: [src/hooks/use-layer-manager.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-layer-manager.ts#L49)

Retorno do hook `useLayerManager`.
 UseLayerManagerReturn

## Properties

### handleToggleLayer()

> **handleToggleLayer**: (`layerId`) => `void`

Defined in: [src/hooks/use-layer-manager.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-layer-manager.ts#L51)

Função para alternar a visibilidade de uma camada específica.
                                                         Esta ação é registrada no histórico de comandos.

#### Parameters

##### layerId

`string`

#### Returns

`void`

***

### layers

> **layers**: `Layer`[]

Defined in: [src/hooks/use-layer-manager.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-layer-manager.ts#L50)

A lista atual de todas as camadas e seus respectivos estados de visibilidade.
