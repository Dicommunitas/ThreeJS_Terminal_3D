[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / app/page

# app/page

## File Overview

Componente principal da página da aplicação Terminal 3D.

## See

 - module:components/main-scene-area~MainSceneArea Para a área principal da cena.
 - module:components/ui/sidebar~Sidebar Para a barra lateral de controles.
 - module:components/annotation-dialog~AnnotationDialog Para o diálogo de anotações.
 - module:hooks/use-command-history~useCommandHistory Para o gerenciamento de histórico de comandos.
 - module:hooks/use-equipment-data-manager~useEquipmentDataManager Para o gerenciamento de dados de equipamentos.
 - module:hooks/use-camera-manager~useCameraManager Para o gerenciamento da câmera.
 - module:hooks/use-filter-manager~useFilterManager Para o gerenciamento de filtros.
 - module:hooks/use-annotation-manager~useAnnotationManager Para o gerenciamento de anotações.
 - module:hooks/use-equipment-selection-manager~useEquipmentSelectionManager Para o gerenciamento de seleção de equipamentos.
 - module:hooks/use-layer-manager~useLayerManager Para o gerenciamento de camadas.

## Description

Componente principal da página da aplicação Terminal 3D.

Responsabilidades:
1.  **Orquestração de Hooks de Estado:** Inicializa e coordena os principais hooks customizados
    que gerenciam diferentes aspectos do estado da aplicação (e.g., `useCommandHistory`,
    `useEquipmentDataManager`, `useCameraManager`, `useFilterManager`, `useAnnotationManager`,
    `useEquipmentSelectionManager`, `useLayerManager`).
2.  **Gerenciamento de Estado da UI:** Controla estados locais específicos da UI que não pertencem
    a um hook dedicado (e.g., `colorMode`).
3.  **Derivação de Dados para UI:** Calcula ou formata dados derivados dos estados dos hooks para
    serem passados como props para componentes da UI (e.g., `cameraViewSystems`,
    `selectedEquipmentDetails`, `equipmentAnnotation`, `availableOperationalStatesList`,
    `availableProductsList`).
4.  **Manipulação de Interações Complexas:** Implementa lógicas de callback que podem envolver
    múltiplos hooks ou estados (e.g., `handleFocusAndSelectSystem` que afeta a câmera e a seleção).
5.  **Renderização do Layout Principal:** Define a estrutura da página, renderizando componentes
    de alto nível como `MainSceneArea` (contendo a cena 3D e o painel de informações),
    a `Sidebar` (com seus controles) e o `AnnotationDialog`.
6.  **Passagem de Props e Callbacks:** Conecta os hooks de estado aos componentes da UI,
    fornecendo os dados necessários e as funções de callback para manipulação de eventos.

## Example

```ts
// Diagrama de Interação de Alto Nível da Terminal3DPage
// mermaid
// graph LR
//     Terminal3DPage["Terminal3DPage (Página Principal)"] --> H_CmdHistory["useCommandHistory"];
//     Terminal3DPage --> H_EquipData["useEquipmentDataManager"];
//     Terminal3DPage --> H_CameraMgr["useCameraManager"];
//     Terminal3DPage --> H_FilterMgr["useFilterManager"];
//     Terminal3DPage --> H_AnnotMgr["useAnnotationManager"];
//     Terminal3DPage --> H_EquipSelectMgr["useEquipmentSelectionManager"];
//     Terminal3DPage --> H_LayerMgr["useLayerManager"];
//
//     Terminal3DPage --> MainSceneArea_Comp["MainSceneArea (Área da Cena)"];
//     Terminal3DPage --> Sidebar_Comp["Sidebar (Barra Lateral)"];
//     Terminal3DPage --> AnnotationDialog_Comp["AnnotationDialog (Diálogo de Anotação)"];
//
//     MainSceneArea_Comp --> ThreeScene_Comp["ThreeScene (Renderizador 3D)"];
//     MainSceneArea_Comp --> InfoPanel_Comp["InfoPanel (Painel de Informações)"];
//     Sidebar_Comp --> SidebarContentLayout_Comp["SidebarContentLayout (Conteúdo da Sidebar)"];
//
//     subgraph "Hooks de Gerenciamento de Estado da Aplicação"
//       H_CmdHistory;
//       H_EquipData;
//       H_CameraMgr;
//       H_FilterMgr;
//       H_AnnotMgr;
//       H_EquipSelectMgr;
//       H_LayerMgr;
//     end
//
//     subgraph "Componentes de UI Principais"
//       MainSceneArea_Comp;
//       Sidebar_Comp;
//       AnnotationDialog_Comp;
//       InfoPanel_Comp;
//       ThreeScene_Comp;
//       SidebarContentLayout_Comp;
//     end
//
```

## Functions

- [default](functions/default.md)
