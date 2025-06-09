[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / useSceneSetup

# Function: useSceneSetup()

> **useSceneSetup**(`props`): [`UseSceneSetupReturn`](../interfaces/UseSceneSetupReturn.md)

Defined in: [src/hooks/use-scene-setup.ts:162](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/hooks/use-scene-setup.ts#L162)

Orquestra a configuração de uma cena Three.js compondo hooks especializados.
Este hook é responsável por inicializar o núcleo da cena, renderizadores, controles,
elementos básicos da cena (iluminação, chão) e manipulação de redimensionamento.
Ele fornece refs para todos os principais componentes Three.js e flags indicando sua prontidão.

## Parameters

### props

[`UseSceneSetupProps`](../interfaces/UseSceneSetupProps.md)

Propriedades de configuração para a montagem da cena.

## Returns

[`UseSceneSetupReturn`](../interfaces/UseSceneSetupReturn.md)

Refs para os componentes da cena e flags de prontidão.
