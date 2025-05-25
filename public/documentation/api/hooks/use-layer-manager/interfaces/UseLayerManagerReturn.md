[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-layer-manager](../README.md) / UseLayerManagerReturn

# Interface: UseLayerManagerReturn

Defined in: src/hooks/use-layer-manager.ts:42

Retorno do hook `useLayerManager`.
 UseLayerManagerReturn

## Properties

### handleToggleLayer()

> **handleToggleLayer**: (`layerId`) => `void`

Defined in: src/hooks/use-layer-manager.ts:44

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

Defined in: src/hooks/use-layer-manager.ts:43

A lista atual de todas as camadas e seus respectivos estados de visibilidade.
