[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-animation-loop](../README.md) / useAnimationLoop

# Function: useAnimationLoop()

> **useAnimationLoop**(`props`): `void`

Defined in: [src/hooks/use-animation-loop.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/use-animation-loop.ts#L82)

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
