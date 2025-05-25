# Arquitetura e Requisitos de Software - Terminal 3D

Este documento detalha a arquitetura do sistema Terminal 3D, requisitos funcionais, não funcionais e as tecnologias utilizadas.

## 1. Visão Geral do Sistema

O sistema Terminal 3D visa fornecer uma visualização interativa em três dimensões de um terminal industrial (portuário, de mineração, etc.), permitindo aos usuários monitorar equipamentos, seus estados operacionais, produtos associados, adicionar anotações textuais e controlar a visualização da cena através de filtros e camadas. A arquitetura é focada em componentes React e hooks customizados para gerenciamento de estado e lógica da cena 3D.

## 2. Requisitos Funcionais (RF)

-   **RF001**: O sistema deve exibir uma cena 3D representando o terminal e seus equipamentos. **[IMPLEMENTADO]**
-   **RF002**: O sistema deve permitir a navegação (zoom, pan, órbita) na cena 3D. **[IMPLEMENTADO]**
-   **RF003**: O sistema deve exibir informações detalhadas de um equipamento ao ser selecionado. **[IMPLEMENTADO]**
    -   **RF003.1**: As informações devem incluir nome, TAG, tipo, sistema, área, estado operacional, produto e detalhes textuais. **[IMPLEMENTADO]**
-   **RF004**: O sistema deve permitir a alteração do estado operacional de um equipamento. **[IMPLEMENTADO]**
-   **RF005**: O sistema deve permitir a alteração do produto associado a um equipamento (quando aplicável). **[IMPLEMENTADO]**
-   **RF006**: O sistema deve permitir a adição, edição e remoção de anotações textuais para cada equipamento. **[IMPLEMENTADO]**
    -   **RF006.1**: Cada anotação deve registrar a data de criação/modificação. **[IMPLEMENTADO]**
-   **RF007**: O sistema deve permitir filtrar os equipamentos exibidos por: **[IMPLEMENTADO]**
    -   **RF007.1**: Termo de busca (nome, TAG, tipo). **[IMPLEMENTADO]**
    -   **RF007.2**: Sistema. **[IMPLEMENTADO]**
    -   **RF007.3**: Área. **[IMPLEMENTADO]**
-   **RF008**: O sistema deve permitir o controle de visibilidade de diferentes camadas de objetos (e.g., prédios, tanques, tubulações, anotações, terreno). **[IMPLEMENTADO]**
-   **RF009**: O sistema deve permitir colorir os equipamentos na cena 3D com base em: **[IMPLEMENTADO]**
    -   **RF009.1**: Cor base do equipamento. **[IMPLEMENTADO]**
    -   **RF009.2**: Estado operacional. **[IMPLEMENTADO]**
    -   **RF009.3**: Produto. **[IMPLEMENTADO]**
-   **RF010**: O sistema deve permitir focar a câmera em um sistema específico, enquadrando todos os equipamentos daquele sistema. **[IMPLEMENTADO]**
-   **RF011**: O sistema deve manter um histórico de comandos para ações que alteram o estado (e.g., seleção, mudança de câmera, visibilidade de camada), permitindo operações de "Desfazer" (Undo) e "Refazer" (Redo). **[IMPLEMENTADO]**
    -   **RF011.1**: As alterações de estado operacional e produto não são, por padrão, parte do histórico de undo/redo, pois representam modificações diretas nos dados "reais". **[IMPLEMENTADO]**
    -   **RF011.2**: A criação, edição ou exclusão de anotações também não fazem parte do histórico de undo/redo, pois são persistidas diretamente. **[IMPLEMENTADO]**
-   **RF012**: O sistema deve gerar e manter automaticamente a documentação técnica (API, arquitetura, fluxos) e diagrama de classes a partir do código-fonte e comentários, usando ferramentas open-source. **[EM ANDAMENTO]** (Configuração do TypeDoc e plugins em andamento).
-   **RF013**: A documentação gerada deve ser acessível através de um link na interface do sistema. **[IMPLEMENTADO]**

## 3. Requisitos Não Funcionais (RNF)

-   **RNF001**: **Desempenho**: A renderização da cena 3D deve ser fluida, com uma taxa de quadros aceitável (mínimo 30 FPS) em hardware moderno.
-   **RNF002**: **Usabilidade**: A interface do usuário deve ser intuitiva e fácil de usar.
-   **RNF003**: **Manutenibilidade**: O código deve ser bem organizado, modularizado, comentado e seguir boas práticas de desenvolvimento para facilitar futuras manutenções e evoluções.
-   **RNF004**: **Portabilidade**: A aplicação deve ser acessível via navegador web moderno (Chrome, Firefox, Edge, Safari).
-   **RNF005**: **Confiabilidade**: O sistema deve ser estável e não apresentar falhas frequentes.
-   **RNF006**: **Extensibilidade**: A arquitetura deve permitir a fácil adição de novos tipos de equipamentos ou funcionalidades.
-   **RNF007**: **Segurança**: Não aplicável para este escopo inicial (sem autenticação ou dados sensíveis persistidos no backend).

## 4. Arquitetura de Software

O sistema é uma aplicação web Single Page Application (SPA) construída com Next.js (React). A visualização 3D é implementada com Three.js. A arquitetura prioriza a separação de responsabilidades através de componentes de UI, hooks customizados para gerenciamento de estado e lógica de negócios, e módulos utilitários para funcionalidades core.

### 4.1. Componentes Principais

1.  **`Terminal3DPage` (`src/app/page.tsx`)**:
    *   Componente principal da página.
    *   Orquestra os diversos hooks de gerenciamento de estado de alto nível.
    *   Renderiza a `MainSceneArea`, `Sidebar` e `AnnotationDialog`.
    *   Gerencia estados locais da UI (e.g., modo de colorização) e lógicas que coordenam múltiplos hooks.

2.  **Hooks de Gerenciamento de Estado de Alto Nível (`src/hooks/`)**:
    *   **`useCommandHistory`**: Gerencia o histórico de comandos para Undo/Redo.
    *   **`useEquipmentDataManager`**: "Fonte da verdade" para os dados dos equipamentos e suas modificações diretas (estado operacional, produto).
    *   **`useCameraManager`**: Gerencia o estado da câmera 3D (posição, lookAt, foco em sistemas), integrando com `useCommandHistory`.
    *   **`useFilterManager`**: Gerencia os critérios de filtro (busca, sistema, área) e a lista de equipamentos filtrados.
    *   **`useAnnotationManager`**: Gerencia o estado das anotações (CRUD, estado do diálogo de edição).
    *   **`useEquipmentSelectionManager`**: Gerencia a seleção de equipamentos (single, multi, hover), integrando com `useCommandHistory`.
    *   **`useLayerManager`**: Gerencia a visibilidade das camadas da cena, integrando com `useCommandHistory`.

3.  **Componentes da Cena 3D (`src/components/`)**:
    *   **`MainSceneArea`**: Contêiner de layout para `ThreeScene` e `InfoPanel`. Passa os dados e callbacks necessários.
    *   **`ThreeScene`**: Componente React que orquestra a renderização e interação com a cena Three.js.
        *   Utiliza `useSceneSetup` para a infraestrutura básica da cena (cena, câmera, renderizadores, controles de órbita, iluminação, plano de chão).
        *   Utiliza `useEquipmentRenderer` para gerenciar a criação e atualização dos meshes dos equipamentos.
        *   Utiliza `useAnnotationPinRenderer` para gerenciar os pins de anotação (`CSS2DObject`).
        *   Utiliza `useMouseInteractionManager` para processar interações do mouse (seleção, hover).
        *   Utiliza `useSceneOutline` para aplicar efeitos de contorno (OutlinePass).
        *   Utiliza `useAnimationLoop` para o loop de renderização contínuo.
        *   Aplica estados de câmera programáticos e lida com o enquadramento de sistemas.
    *   **`InfoPanel`**: Exibe detalhes do equipamento selecionado e permite interações (mudar estado, produto, gerenciar anotações).
    *   **`AnnotationDialog`**: Diálogo modal para adicionar/editar anotações textuais.

4.  **Componentes da Sidebar (`src/components/`, `src/components/ui/`)**:
    *   **`Sidebar` (e subcomponentes de `src/components/ui/sidebar.tsx`)**: Estrutura da sidebar, gerenciada por `SidebarProvider`.
    *   **`SidebarContentLayout`**: Conteúdo da sidebar, incluindo:
        *   **`CameraControlsPanel`**: Botões para focar a câmera em sistemas.
        *   **`ColorModeSelector`**: Dropdown para mudar o modo de colorização.
        *   **`LayerManager`**: Checkboxes para visibilidade das camadas.
        *   Inputs para filtros de busca, sistema e área.
        *   Link para documentação.

5.  **Lógica Core (`src/core/`)**:
    *   **`data/initial-data.ts`**: Dados iniciais para equipamentos e camadas.
    *   **`graphics/color-utils.ts`**: Lógica para determinar a cor dos equipamentos.
    *   **`logic/equipment-filter.ts`**: Lógica de filtragem dos equipamentos.
    *   **`three/`**: Módulos utilitários específicos para Three.js:
        *   `camera-utils.ts`: Funções para manipulação de câmera.
        *   `equipment-geometry-factory.ts`: Cria geometrias 3D para os equipamentos.
        *   `label-renderer-utils.ts`: Gerencia os pins de anotação e o `CSS2DRenderer`.
        *   `postprocessing-utils.ts`: Configura e atualiza o `EffectComposer` e `OutlinePass`.
        *   `scene-elements-setup.ts`: Configura elementos básicos da cena (luzes, chão, renderizadores WebGL/CSS2D).

6.  **Tipos Compartilhados (`src/lib/types.ts`)**: Define as interfaces principais (Equipment, Layer, Command, CameraState, Annotation, ColorMode).

### 4.2. Fluxo de Dados e Interações (Exemplos)

*   **Seleção de Equipamento**:
    1.  Usuário clica em um equipamento na `ThreeScene`.
    2.  `useMouseInteractionManager` (dentro de `ThreeScene`) detecta o clique via raycasting e o equipamento alvo.
    3.  Chama `handleEquipmentClick` (prop vinda de `Terminal3DPage`, que por sua vez a obtém de `useEquipmentSelectionManager`).
    4.  `useEquipmentSelectionManager` atualiza `selectedEquipmentTags` e cria um comando para `useCommandHistory`.
    5.  `Terminal3DPage` recebe `selectedEquipmentTags` atualizado e passa para `InfoPanel` (para exibir detalhes) e `ThreeScene` (para `useSceneOutline` aplicar o contorno).

*   **Filtragem**:
    1.  Usuário interage com os inputs de filtro na `SidebarContentLayout`.
    2.  Callbacks (`setSearchTerm`, `setSelectedSistema`, `setSelectedArea`) de `useFilterManager` são chamados.
    3.  `useFilterManager` recalcula `filteredEquipment` usando `getFilteredEquipment` (de `core/logic`).
    4.  `Terminal3DPage` recebe `filteredEquipment` atualizado e passa para `MainSceneArea`, que por sua vez passa para `ThreeScene`.
    5.  `ThreeScene` (via `useEquipmentRenderer`) atualiza os meshes visíveis na cena.

*   **Adicionar Anotação**:
    1.  Usuário clica no botão "Adicionar Anotação" no `InfoPanel` (se um equipamento estiver selecionado).
    2.  `InfoPanel` chama `onOpenAnnotationDialog` (prop vinda de `Terminal3DPage`, que a obtém de `useAnnotationManager`).
    3.  `useAnnotationManager` define o equipamento alvo e abre o `AnnotationDialog`.
    4.  Usuário digita o texto e clica em "Salvar".
    5.  `AnnotationDialog` chama `onConfirm` (prop vinda de `Terminal3DPage`, que a obtém de `useAnnotationManager`).
    6.  `useAnnotationManager` salva a anotação, atualiza seu estado e fecha o diálogo.
    7.  `Terminal3DPage` recebe a lista de `annotations` atualizada e a passa para `ThreeScene` (para `useAnnotationPinRenderer` exibir o pin).

### 4.3. Diagrama de Componentes e Hooks de Alto Nível (Mermaid)

```mermaid
graph TD
    %% Main Page and Layout
    Terminal3DPage["Terminal3DPage (src/app/page.tsx)"] --> MainSceneArea["MainSceneArea (src/components/main-scene-area.tsx)"];
    Terminal3DPage --> Sidebar["Sidebar (src/components/ui/sidebar.tsx)"];
    Terminal3DPage --> AnnotationDialog["AnnotationDialog (src/components/annotation-dialog.tsx)"];

    %% Main Scene Area Content
    MainSceneArea --> ThreeScene["ThreeScene (src/components/three-scene.tsx)"];
    MainSceneArea --> InfoPanel["InfoPanel (src/components/info-panel.tsx)"];

    %% Sidebar Content
    Sidebar --> SidebarContentLayout["SidebarContentLayout (src/components/sidebar-content-layout.tsx)"];
    SidebarContentLayout --> CameraControlsPanel["CameraControlsPanel"];
    SidebarContentLayout --> ColorModeSelector["ColorModeSelector"];
    SidebarContentLayout --> LayerManager["LayerManager"];
    SidebarContentLayout --> FilterInputs["Filter Inputs"];

    %% ThreeScene uses Specialized Hooks
    ThreeScene -- uses --> useSceneSetup["useSceneSetup"];
    ThreeScene -- uses --> useEquipmentRenderer["useEquipmentRenderer"];
    ThreeScene -- uses --> useAnnotationPinRenderer["useAnnotationPinRenderer"];
    ThreeScene -- uses --> useMouseInteractionManager["useMouseInteractionManager"];
    ThreeScene -- uses --> useSceneOutline["useSceneOutline"];
    ThreeScene -- uses --> useAnimationLoop["useAnimationLoop"];

    %% Specialized Hooks use Core Utilities
    useSceneSetup -- uses --> CoreThreeUtils["Core Three.js Utils (core/three)"];
    useEquipmentRenderer -- uses --> CoreThreeUtils;
    useEquipmentRenderer -- uses --> GraphicsUtils["Graphics Utils (core/graphics)"];
    useAnnotationPinRenderer -- uses --> CoreThreeUtils;
    useMouseInteractionManager -- uses --> CoreThreeUtils; % For raycasting etc.
    useSceneOutline -- uses --> CoreThreeUtils; % For postprocessing utils

    %% Page uses State Management Hooks
    Terminal3DPage -- uses --> StateManagementHooks["State Management Hooks (src/hooks)"];

    subgraph "State Management Hooks (src/hooks)"
        direction LR
        useCommandHistory["useCommandHistory"]
        useEquipmentDataManager["useEquipmentDataManager"]
        useCameraManager["useCameraManager"]
        useFilterManager["useFilterManager"]
        useAnnotationManager["useAnnotationManager"]
        useEquipmentSelectionManager["useEquipmentSelectionManager"]
        useLayerManager["useLayerManager"]
    end
    StateManagementHooks --> useCommandHistory;
    StateManagementHooks --> useEquipmentDataManager;
    StateManagementHooks --> useCameraManager;
    StateManagementHooks --> useFilterManager;
    StateManagementHooks --> useAnnotationManager;
    StateManagementHooks --> useEquipmentSelectionManager;
    StateManagementHooks --> useLayerManager;

    %% State Management Hooks may use Core Logic & Data
    useFilterManager -- uses --> DataLogicCore["Data & Logic Core (src/core)"];
    useEquipmentDataManager -- uses --> DataLogicCore; % Specifically initial-data
    useLayerManager -- uses --> DataLogicCore; % Specifically initial-data
    useCameraManager -- uses --> DataLogicCore; % For equipment data to calculate views
    useAnnotationManager -- uses --> DataLogicCore; % For equipment data (names for toasts)
    useEquipmentSelectionManager -- uses --> DataLogicCore; % For equipment data (names for toasts)


    subgraph "Core Logic & Data (src/core)"
        direction LR
        InitialData["initial-data (core/data)"]
        ColorUtils["color-utils (core/graphics)"]
        EquipmentFilter["equipment-filter (core/logic)"]
    end
    DataLogicCore --> InitialData;
    DataLogicCore --> ColorUtils;
    DataLogicCore --> EquipmentFilter;

    %% InfoPanel can trigger AnnotationDialog
    InfoPanel --> AnnotationDialog;

    classDef mainComponent fill:#f9f,stroke:#333,stroke-width:2px;
    classDef uiComponent fill:#e0e0e0,stroke:#333;
    classDef hook fill:#9fdf9f,stroke:#333;
    classDef coreUtil fill:#add8e6,stroke:#333;

    class Terminal3DPage mainComponent;
    class MainSceneArea,Sidebar,AnnotationDialog,InfoPanel,ThreeScene,SidebarContentLayout,CameraControlsPanel,ColorModeSelector,LayerManager,FilterInputs uiComponent;
    class useSceneSetup,useEquipmentRenderer,useAnnotationPinRenderer,useMouseInteractionManager,useSceneOutline,useAnimationLoop,useCommandHistory,useEquipmentDataManager,useCameraManager,useFilterManager,useAnnotationManager,useEquipmentSelectionManager,useLayerManager hook;
    class CoreThreeUtils,GraphicsUtils,DataLogicCore,InitialData,ColorUtils,EquipmentFilter coreUtil;
```

## 5. Tecnologias Utilizadas

*   **Frontend Framework**: Next.js (v15.x) com React (v18.x)
*   **Linguagem**: TypeScript
*   **Renderização 3D**: Three.js
*   **Componentes UI**: ShadCN UI
*   **Estilização**: Tailwind CSS
*   **Geração de Documentação**:
    *   TypeDoc (com `typedoc-plugin-markdown` e `typedoc-plugin-mermaid`)
*   **Controle de Versão**: Git
*   **Gerenciador de Pacotes**: npm

## 6. Documentação da API

A documentação detalhada da API, gerada a partir dos comentários do código-fonte, pode ser encontrada aqui:
[Ver Documentação da API](./api/README.md)
(Nota: O link pode precisar ser ajustado dependendo de onde a documentação é hospedada ou acessada.)
```