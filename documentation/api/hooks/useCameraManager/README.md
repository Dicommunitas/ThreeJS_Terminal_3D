[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useCameraManager

# hooks/useCameraManager

Hook customizado para gerenciar o estado e as interações da câmera 3D.

Este hook é responsável por:
-   Manter o estado atual da câmera (posição e ponto de observação - `lookAt`).
-   Gerenciar a lógica para focar a câmera em sistemas específicos de equipamentos,
    incluindo a ciclagem entre diferentes visualizações (padrão, de cima, isométrica) para o mesmo sistema.
-   Integrar os movimentos de câmera (tanto os iniciados pelo usuário via `OrbitControls`
    quanto os programáticos como o foco em sistema) com o sistema de histórico de comandos,
    permitindo operações de Undo/Redo.
-   Expor o estado da câmera e funções para interagir com ela e responder a eventos.

O estado da câmera (`currentCameraState`) é um estado React, garantindo que as atualizações
sejam propagadas para os componentes que o utilizam (e.g., `ThreeScene` para aplicar
o estado à câmera Three.js).

## See

 - /docs/lib/types.md#CameraState Para a interface do estado da câmera.
 - /docs/lib/types.md#Command Para a interface de comando (usada com `executeCommand`).
 - /docs/lib/types.md#TargetSystemInfo Para a interface de informações do sistema alvo.

## Param

Propriedades para o hook, incluindo `executeCommand` para integração com histórico.

## Example

```ts
// Diagrama de Interação e Estado do useCameraManager
// mermaid
// graph LR
//     A[Terminal3DPage] -- chama --> B(handleSetCameraViewForSystem)
//     B -- atualiza --> C{targetSystemToFrame};
//     C -- atualiza --> D{focusedSystemNameUI};
//     C -- atualiza --> E{currentViewIndexUI};
//     A -- passa targetSystemToFrame --> F[ThreeScene]
//
//     F -- anima câmera e ao final chama --> G(onSystemFramed)
//     G -- limpa --> C;
//     F -- em interações manuais, chama --> H(handleCameraChangeFromScene)
//
//     H -- cria comando --> I{Comando}
//     H -- chama --> J(executeCommand)
//     J -- executa e salva --> I
//
//     subgraph useCameraManager [Hook useCameraManager]
//         direction LR
//         B
//         G
//         H
//         C
//         D
//         E
//         K[currentCameraState (Estado React)]
//         L[lastCommittedCameraStateForUndoRef (Ref)]
//     end
//
//     I -- no execute/undo --> M{setCurrentCameraState}
//     M -- atualiza --> K
//     K -- usado por --> F
//
//    classDef hook fill:#lightblue,stroke:#333,stroke-width:2px;
//    classDef state fill:#lightgoldenrodyellow,stroke:#333,stroke-width:2px;
//    classDef func fill:#lightgreen,stroke:#333,stroke-width:2px;
//    classDef comp fill:#lightcoral,stroke:#333,stroke-width:2px;
//
//    class A,F comp;
//    class B,G,H,J,M func;
//    class C,D,E,K,L,I state;
//    class useCameraManager hook;
```

## Interfaces

- [UseCameraManagerProps](interfaces/UseCameraManagerProps.md)
- [UseCameraManagerReturn](interfaces/UseCameraManagerReturn.md)

## Variables

- [defaultInitialCameraLookAt](variables/defaultInitialCameraLookAt.md)
- [defaultInitialCameraPosition](variables/defaultInitialCameraPosition.md)

## Functions

- [useCameraManager](functions/useCameraManager.md)
