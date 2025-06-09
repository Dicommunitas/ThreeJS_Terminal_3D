[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useThreeSceneElements

# hooks/useThreeSceneElements

## File Overview

Hook customizado para configurar elementos básicos da cena Three.js, como iluminação e plano de chão.

## See

 - module:core/three/scene-elements-setup~setupLighting Para a função de configuração da iluminação.
 - module:core/three/scene-elements-setup~setupGroundPlane Para a função de configuração do plano de chão.

## Description

Este hook é responsável por adicionar elementos visuais e de ambiente fundamentais à cena.
Ele utiliza funções de utilidade (`setupLighting`, `setupGroundPlane`) para criar e adicionar
luzes (ambiente, hemisférica, direcional) e uma malha (mesh) para o plano de chão.
A execução depende da prontidão do núcleo da cena (objeto `THREE.Scene`).

## Example

```ts
// Diagrama de Funcionalidade do useThreeSceneElements
// mermaid
// graph TD
//     useThreeSceneElements["useThreeSceneElements (Hook)"]
//     Props["UseThreeSceneElementsProps"]
//     Return["UseThreeSceneElementsReturn"]
//     SceneRef["sceneRef (da Cena Principal)"]
//     CoreReady["coreReady (flag)"]
//     Utils["scene-elements-setup Utilities"]
//     Lighting["Iluminação (Ambient, Hemisphere, Directional)"]
//     GroundPlane["Plano de Chão (THREE.Mesh)"]
//
//     Props -- define --> SceneRef
//     Props -- define --> CoreReady
//     Props --> useThreeSceneElements
//
//     useThreeSceneElements -- verifica --> CoreReady
//     useThreeSceneElements -- usa --> SceneRef
//     useThreeSceneElements -- chama --> Utils
//     Utils -- adiciona à cena --> Lighting
//     Utils -- cria e adiciona à cena --> GroundPlane
//
//     useThreeSceneElements -- retorna ref para --> Return
//     Return -- contém ref para --> GroundPlane
//
//     classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
//     classDef type fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
//     classDef obj3d fill:#lightgreen,stroke:#333,stroke-width:2px;
//     classDef util fill:#lightcoral,stroke:#333,stroke-width:2px;
//     classDef flag fill:#lightpink,stroke:#333,stroke-width:2px;
//
//     class useThreeSceneElements hook;
//     class Props,Return,SceneRef type;
//     class CoreReady flag;
//     class Lighting,GroundPlane obj3d;
//     class Utils util;
```

## Interfaces

- [UseThreeSceneElementsProps](interfaces/UseThreeSceneElementsProps.md)
- [UseThreeSceneElementsReturn](interfaces/UseThreeSceneElementsReturn.md)

## Functions

- [useThreeSceneElements](functions/useThreeSceneElements.md)
