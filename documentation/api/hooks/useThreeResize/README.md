[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useThreeResize

# hooks/useThreeResize

Hook customizado para lidar com eventos de redimensionamento para uma cena Three.js.

Este hook é responsável por:
-   Configurar um `ResizeObserver` para monitorar mudanças nas dimensões do elemento DOM de montagem da cena.
-   Quando um evento de redimensionamento ocorre (e todos os componentes necessários estão prontos),
    ele atualiza as seguintes propriedades para manter a responsividade:
    -   A razão de aspecto (`aspect`) da `THREE.PerspectiveCamera` e chama `updateProjectionMatrix()`.
    -   O tamanho (`setSize`) do `THREE.WebGLRenderer`.
    -   O tamanho (`setSize`) do `CSS2DRenderer`.
    -   O tamanho (`setSize`) do `THREE.EffectComposer`.
    -   A resolução (`resolution.set`) do `THREE.OutlinePass`.
-   Realizar uma chamada inicial de redimensionamento para garantir que as dimensões corretas
    sejam aplicadas assim que os componentes estiverem prontos.
-   Limpar (desconectar) o `ResizeObserver` quando o componente é desmontado ou as dependências mudam,
    para evitar vazamentos de memória e chamadas desnecessárias.

## Param

Objeto contendo refs para os elementos Three.js que precisam ser redimensionados e uma flag de prontidão.

## Example

```ts
// Diagrama de Funcionalidade do useThreeResize
// mermaid
// graph TD
//     useThreeResize["useThreeResize (Hook)"]
//     Props["UseThreeResizeProps"]
//     MountElement["Elemento DOM (mountRef)"]
//     ResizeObserver_API["ResizeObserver API"]
//     Camera["Câmera (cameraRef)"]
//     Renderer["WebGLRenderer (rendererRef)"]
//     LabelRenderer["CSS2DRenderer (labelRendererRef)"]
//     Composer["EffectComposer (composerRef)"]
//     OutlinePass["OutlinePass (outlinePassRef)"]
//     ReadyFlag["ready (flag)"]
//
//     Props -- define --> MountElement
//     Props -- define --> Camera
//     Props -- define --> Renderer
//     Props -- define --> LabelRenderer
//     Props -- define --> Composer
//     Props -- define --> OutlinePass
//     Props -- define --> ReadyFlag
//     Props --> useThreeResize
//
//     useThreeResize -- verifica --> ReadyFlag
//     useThreeResize -- observa --> MountElement
//     MountElement -- dispara evento de redimensionamento --> ResizeObserver_API
//     ResizeObserver_API -- chama callback --> useThreeResize
//
//     subgraph "Callback de Redimensionamento (handleResize)"
//         direction LR
//         Callback["handleResize"] -- atualiza --> Camera
//         Callback -- atualiza --> Renderer
//         Callback -- atualiza --> LabelRenderer
//         Callback -- atualiza --> Composer
//         Callback -- atualiza --> OutlinePass
//     end
//
//     useThreeResize -- executa na montagem e quando 'ready' muda --> Callback
//
//     classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
//     classDef type fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
//     classDef obj3d fill:#lightgreen,stroke:#333,stroke-width:2px;
//     classDef dom fill:#lightcoral,stroke:#333,stroke-width:2px;
//     classDef api fill:#lightsalmon,stroke:#333,stroke-width:2px;
//     classDef flag fill:#lightpink,stroke:#333,stroke-width:2px;
//
//     class useThreeResize hook;
//     class Props type;
//     class Camera,Renderer,LabelRenderer,Composer,OutlinePass obj3d;
//     class MountElement dom;
//     class ResizeObserver_API api;
//     class ReadyFlag flag;
```

## Interfaces

- [UseThreeResizeProps](interfaces/UseThreeResizeProps.md)

## Functions

- [useThreeResize](functions/useThreeResize.md)
