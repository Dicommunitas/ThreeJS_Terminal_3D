[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useAnimationLoop

# hooks/useAnimationLoop

Hook customizado para gerenciar o loop de animação de uma cena Three.js.

Este hook é responsável por encapsular a lógica de `requestAnimationFrame`
para renderizar continuamente uma cena Three.js. Ele lida com:
-   Atualização dos controles de órbita (`OrbitControls`).
-   Renderização do `EffectComposer` (para efeitos de pós-processamento).
-   Renderização do `CSS2DRenderer` (para rótulos HTML sobrepostos à cena).
-   Execução de uma callback opcional (`onFrameUpdate`) a cada quadro de animação,
    permitindo lógicas personalizadas de atualização por frame (e.g., animações de câmera).

O loop de animação só é iniciado quando a flag `isSceneReady` (fornecida como prop)
é verdadeira, indicando que todos os componentes necessários da cena (câmera, renderizadores, controles)
foram inicializados e estão prontos.

## Param

Propriedades para configurar o loop de animação.

## Example

```ts
// Diagrama de Fluxo do useAnimationLoop
// mermaid
// sequenceDiagram
//     participant ComponentePai as Comp. (ex: ThreeScene)
//     participant useAnimationLoop as Hook
//     participant Navegador
//     participant OrbitControls
//     participant EffectComposer
//     participant CSS2DRenderer
//
//     ComponentePai ->>+ useAnimationLoop: Chama com refs e isSceneReady=true
//     useAnimationLoop ->> Navegador: requestAnimationFrame(animate)
//     Navegador -->> useAnimationLoop: Chama animate()
//     loop Cada Quadro
//         useAnimationLoop ->> OrbitControls: controls.update() (se habilitado)
//         useAnimationLoop ->> ComponentePai: onFrameUpdate() (callback opcional)
//         useAnimationLoop ->> EffectComposer: composer.render()
//         useAnimationLoop ->> CSS2DRenderer: labelRenderer.render()
//         useAnimationLoop ->> Navegador: requestAnimationFrame(animate)
//     end
//     Note right of ComponentePai: Quando desmontado ou isSceneReady=false
//     useAnimationLoop ->> Navegador: cancelAnimationFrame()
```

## Interfaces

- [UseAnimationLoopProps](interfaces/UseAnimationLoopProps.md)

## Functions

- [useAnimationLoop](functions/useAnimationLoop.md)
