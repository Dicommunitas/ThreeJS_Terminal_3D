[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-animation-loop](../README.md) / useAnimationLoop

# Function: useAnimationLoop()

> **useAnimationLoop**(`props`): `void`

Defined in: [src/hooks/use-animation-loop.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-animation-loop.ts#L60)

Hook customizado para gerenciar o loop de animação de uma cena Three.js.
Ele configura e executa o `requestAnimationFrame` para renderizar a cena
e atualizar os controles, o composer e o renderizador de rótulos.
O loop só é iniciado quando `isSceneReady` é verdadeiro e todos os refs necessários estão populados.

## Parameters

### props

[`UseAnimationLoopProps`](../interfaces/UseAnimationLoopProps.md)

As props necessárias para o loop de animação.

## Returns

`void`
