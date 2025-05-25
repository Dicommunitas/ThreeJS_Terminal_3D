[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-layer-manager](../README.md) / UseLayerManagerReturn

# Interface: UseLayerManagerReturn

Defined in: [src/hooks/use-layer-manager.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-layer-manager.ts#L50)

Retorno do hook `useLayerManager`.
 UseLayerManagerReturn

## Properties

### handleToggleLayer()

> **handleToggleLayer**: (`layerId`) => `void`

Defined in: [src/hooks/use-layer-manager.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-layer-manager.ts#L52)

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

Defined in: [src/hooks/use-layer-manager.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-layer-manager.ts#L51)

A lista atual de todas as camadas e seus respectivos estados de visibilidade.
