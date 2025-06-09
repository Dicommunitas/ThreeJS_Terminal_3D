[**3D Terminal System API Documentation**](../../README.md)

***

[3D Terminal System API Documentation](../../README.md) / app/page

# app/page

## See

 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/components/main-scene-area/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/components/main-scene-area/README.md) Para a área principal da cena.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/components/ui/sidebar/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/components/ui/sidebar/README.md) Para a barra lateral de controles.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/components/annotation-dialog/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/components/annotation-dialog/README.md) Para o diálogo de anotações.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-command-history/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-command-history/README.md) Para o gerenciamento de histórico de comandos.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-equipment-data-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-equipment-data-manager/README.md) Para o gerenciamento de dados de equipamentos.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-camera-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-camera-manager/README.md) Para o gerenciamento da câmera.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-filter-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-filter-manager/README.md) Para o gerenciamento de filtros.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-annotation-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-annotation-manager/README.md) Para o gerenciamento de anotações.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-equipment-selection-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-equipment-selection-manager/README.md) Para o gerenciamento de seleção de equipamentos.
 - [https://github.com/Dicommunitas/ThreeJS\_Terminal\_3D/blob/main/documentation/api/hooks/use-layer-manager/README.md](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/main/documentation/api/hooks/use-layer-manager/README.md) Para o gerenciamento de camadas.

## Example

```ts
// Diagrama de Interação de Alto Nível da Terminal3DPage:
```mermaid
graph LR
    Terminal3DPage["Terminal3DPage (Página Principal)"] --> H_CmdHistory["useCommandHistory (Hook Histórico)"];
    Terminal3DPage --> H_EquipData["useEquipmentDataManager (Hook Dados Equip.)"];
    Terminal3DPage --> H_CameraMgr["useCameraManager (Hook Câmera)"];
    Terminal3DPage --> H_FilterMgr["useFilterManager (Hook Filtros)"];
    Terminal3DPage --> H_AnnotMgr["useAnnotationManager (Hook Anotações)"];
    Terminal3DPage --> H_EquipSelectMgr["useEquipmentSelectionManager (Hook Seleção)"];
    Terminal3DPage --> H_LayerMgr["useLayerManager (Hook Camadas)"];

    Terminal3DPage --> MainSceneArea_Comp["MainSceneArea (Comp. Área da Cena)"];
    Terminal3DPage --> Sidebar_Comp["Sidebar (Comp. Barra Lateral)"];
    Terminal3DPage --> AnnotationDialog_Comp["AnnotationDialog (Comp. Diálogo Anotação)"];

    MainSceneArea_Comp --> ThreeScene_Comp["ThreeScene (Comp. Cena 3D)"];
    MainSceneArea_Comp --> InfoPanel_Comp["InfoPanel (Comp. Painel Info)"];
    Sidebar_Comp --> SidebarContentLayout_Comp["SidebarContentLayout (Comp. Conteúdo Sidebar)"];

    subgraph "Hooks de Gerenciamento de Estado da Aplicação"
      H_CmdHistory;
      H_EquipData;
      H_CameraMgr;
      H_FilterMgr;
      H_AnnotMgr;
      H_EquipSelectMgr;
      H_LayerMgr;
    end

    subgraph "Componentes de UI Principais"
      MainSceneArea_Comp;
      Sidebar_Comp;
      AnnotationDialog_Comp;
      InfoPanel_Comp;
      ThreeScene_Comp;
      SidebarContentLayout_Comp;
    end
```
```

## Functions

- [default](functions/default.md)
