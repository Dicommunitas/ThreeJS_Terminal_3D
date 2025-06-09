[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeRenderers](../README.md) / useThreeRenderers

# Function: useThreeRenderers()

> **useThreeRenderers**(`props`): [`UseThreeRenderersReturn`](../interfaces/UseThreeRenderersReturn.md)

Defined in: [src/hooks/useThreeRenderers.ts:110](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/useThreeRenderers.ts#L110)

Configura os renderizadores Three.js (WebGL, CSS2D) e o pipeline de pós-processamento (EffectComposer, OutlinePass).
Gerencia a anexação ao DOM e eventos de contexto WebGL.

## Parameters

### props

[`UseThreeRenderersProps`](../interfaces/UseThreeRenderersProps.md)

Propriedades para a configuração dos renderizadores.

## Returns

[`UseThreeRenderersReturn`](../interfaces/UseThreeRenderersReturn.md)

Refs para os renderizadores, composer, outline pass, e flag de prontidão.
