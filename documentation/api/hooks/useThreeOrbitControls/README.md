[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / hooks/useThreeOrbitControls

# hooks/useThreeOrbitControls

Hook customizado para configurar e gerenciar os `OrbitControls` do Three.js.

Este hook é responsável por:
-   Importar dinamicamente o módulo `OrbitControls` dos exemplos do Three.js.
-   Inicializar os `OrbitControls` com a câmera e o elemento DOM do renderizador fornecidos.
-   Configurar propriedades importantes dos controles, como `enableDamping` (para suavização),
    `target` (ponto inicial de observação) e o mapeamento dos botões do mouse (esquerdo/meio para rotação, direito para pan).
-   Adicionar um ouvinte de evento ao evento 'end' dos controles para disparar o callback `onCameraChange`
    quando o usuário finaliza uma interação com a câmera.
-   Gerenciar uma flag de estado `isControlsReady` que se torna `true` assim que os controles
    são carregados e inicializados com sucesso.
-   Lidar com a limpeza (dispose) dos controles e remoção do ouvinte de evento quando o componente
    é desmontado ou as dependências do hook mudam.

## Example

```ts
// Diagrama de Fluxo do useThreeOrbitControls
// mermaid
// sequenceDiagram
//     participant Usuário
//     participant ThreeScene as Componente React
//     participant useThreeOrbitControls as Hook
//     participant OrbitControls as Módulo Three.js
//
//     ThreeScene ->>+ useThreeOrbitControls: Chama com cameraRef, rendererRef, etc.
//     Note right of useThreeOrbitControls: renderersReady = true?
//     useThreeOrbitControls ->>+ OrbitControls: import('OrbitControls.js')
//     OrbitControls -->>- useThreeOrbitControls: Módulo carregado
//     useThreeOrbitControls -->> OrbitControls: new OrbitControls(camera, renderer.domElement)
//     useThreeOrbitControls -->> OrbitControls: Configura (enableDamping, target, mouseButtons)
//     useThreeOrbitControls -->> OrbitControls: addEventListener('end', handleEnd)
//     useThreeOrbitControls -->> ThreeScene: Retorna controlsRef, isControlsReady = true
//     activate Usuário
//     Usuário ->> OrbitControls: Interage com a câmera (arrasta mouse)
//     OrbitControls -->> OrbitControls: Atualiza posição/rotação da câmera
//     Usuário ->> OrbitControls: Solta o botão do mouse
//     deactivate Usuário
//     OrbitControls -->> useThreeOrbitControls: Dispara evento 'end'
//     useThreeOrbitControls ->> ThreeScene: Chama onCameraChange(novoEstado)
//     Note right of ThreeScene: Atualiza estado da câmera da aplicação
```

## Interfaces

- [UseThreeOrbitControlsProps](interfaces/UseThreeOrbitControlsProps.md)
- [UseThreeOrbitControlsReturn](interfaces/UseThreeOrbitControlsReturn.md)

## Functions

- [useThreeOrbitControls](functions/useThreeOrbitControls.md)
