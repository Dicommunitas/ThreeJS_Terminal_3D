[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / components/three-scene

# components/three-scene

Componente React principal para renderizar e interagir com a cena 3D usando Three.js.
Este componente atua como um orquestrador para a visualização 3D.
Ele delega responsabilidades específicas de configuração e gerenciamento da cena
para hooks customizados especializados, e então renderiza o elemento DOM
onde a cena Three.js será montada.

Responsabilidades Principais:
-   **Orquestração de Hooks da Cena:** Utiliza `useSceneSetup` como um hook orquestrador
    para obter refs para os componentes centrais da cena Three.js (cena, câmera, renderizadores, etc.)
    e flags que indicam a prontidão desses componentes.
-   **Renderização de Elementos da Cena:** Utiliza hooks especializados para gerenciar a
    renderização de diferentes tipos de objetos na cena:
    -   `useEquipmentRenderer`: Para os meshes dos equipamentos.
    -   `useAnnotationPinRenderer`: Para os pins (marcadores) de anotações HTML.
-   **Gerenciamento de Interação:** Utiliza `useMouseInteractionManager` para processar
    cliques e movimentos do mouse, permitindo a seleção e o hover em equipamentos.
-   **Efeitos Visuais:** Utiliza `useSceneOutline` para aplicar um efeito de contorno
    visual aos equipamentos selecionados ou sob o cursor.
-   **Loop de Animação:** Utiliza `useAnimationLoop` para gerenciar o ciclo de renderização
    contínua da cena (`requestAnimationFrame`).
-   **Controle de Câmera Programático:** Implementa a lógica para animar a câmera para
    visualizações específicas (e.g., focar em um sistema), observando a prop `targetSystemToFrame`
    e utilizando uma animação de interpolação suave.
-   **Comunicação de Estado da Câmera:** Propaga mudanças no estado da câmera (via `onCameraChange`)
    que ocorrem devido à interação do usuário ou animações programáticas.
-   **Fornecimento do Ponto de Montagem:** Renderiza o `div` que serve como contêiner para
    os renderizadores Three.js.

## See

 - /docs/hooks/use-scene-setup.md Para a orquestração da configuração da cena.
 - /docs/hooks/use-equipment-renderer.md Para a renderização de equipamentos.
 - /docs/hooks/use-annotation-pin-renderer.md Para a renderização de pins de anotação.
 - /docs/hooks/use-mouse-interaction.md Para interações do mouse.
 - /docs/hooks/use-scene-outline.md Para o efeito de contorno.
 - /docs/hooks/useAnimationLoop.md Para o loop de animação.

## Example

```ts
// Diagrama de Composição do ThreeScene e seus Hooks
// mermaid
// graph TD
//     ThreeScene_Comp["ThreeScene (Componente React)"]
//     MountPoint["<div ref={mountRef}> (Ponto de Montagem DOM)"]
//
//     ThreeScene_Comp -- renderiza --> MountPoint
//
//     subgraph "Hooks Utilizados por ThreeScene"
//         direction LR
//         H_SceneSetup["useSceneSetup (Orquestrador de Setup)"]
//         H_EquipRenderer["useEquipmentRenderer"]
//         H_AnnotPinRenderer["useAnnotationPinRenderer"]
//         H_MouseInt["useMouseInteractionManager"]
//         H_Outline["useSceneOutline"]
//         H_AnimLoop["useAnimationLoop"]
//     end
//
//     ThreeScene_Comp -- usa --> H_SceneSetup
//     ThreeScene_Comp -- usa --> H_EquipRenderer
//     ThreeScene_Comp -- usa --> H_AnnotPinRenderer
//     ThreeScene_Comp -- usa --> H_MouseInt
//     ThreeScene_Comp -- usa --> H_Outline
//     ThreeScene_Comp -- usa --> H_AnimLoop
//
//     H_SceneSetup --> R_Scene["sceneRef"]
//     H_SceneSetup --> R_Camera["cameraRef"]
//     H_SceneSetup --> R_Renderer["rendererRef"]
//     H_SceneSetup --> R_LabelRenderer["labelRendererRef"]
//     H_SceneSetup --> R_Controls["controlsRef"]
//     H_SceneSetup --> R_Composer["composerRef"]
//     H_SceneSetup --> R_OutlinePass["outlinePassRef"]
//     H_SceneSetup --> F_IsSceneReady["isSceneReady (flag)"]
//     H_SceneSetup --> F_IsControlsReady["isControlsReady (flag)"]
//
//     H_EquipRenderer -- usa --> R_Scene
//     H_AnnotPinRenderer -- usa --> R_Scene
//     H_AnnotPinRenderer -- usa --> R_LabelRenderer
//     H_MouseInt -- usa --> MountPoint
//     H_MouseInt -- usa --> R_Camera
//     H_Outline -- usa --> R_OutlinePass
//     H_AnimLoop -- usa --> R_Scene
//     H_AnimLoop -- usa --> R_Camera
//     H_AnimLoop -- usa --> R_Controls
//     H_AnimLoop -- usa --> R_Composer
//     H_AnimLoop -- usa --> R_LabelRenderer
//
//     classDef comp fill:#lightcoral,stroke:#333,stroke-width:2px;
//     classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
//     classDef ref fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
//     classDef flag fill:#lightpink,stroke:#333,stroke-width:2px;
//
//     class ThreeScene_Comp comp;
//     class MountPoint comp;
//     class H_SceneSetup,H_EquipRenderer,H_AnnotPinRenderer,H_MouseInt,H_Outline,H_AnimLoop hook;
//     class R_Scene,R_Camera,R_Renderer,R_LabelRenderer,R_Controls,R_Composer,R_OutlinePass ref;
//     class F_IsSceneReady,F_IsControlsReady flag;
```

## Interfaces

- [ThreeSceneProps](interfaces/ThreeSceneProps.md)

## Variables

- [default](variables/default.md)
