
/**
 * ```mermaid
 *   graph LR
 *     Terminal3DPage["Terminal3DPage (src/app/page.tsx)"] --> H_CmdHistory["useCommandHistory"];
 *     Terminal3DPage --> H_EquipData["useEquipmentDataManager"];
 *     Terminal3DPage --> H_CameraMgr["useCameraManager"];
 *     Terminal3DPage --> H_FilterMgr["useFilterManager"];
 *     Terminal3DPage --> H_AnnotMgr["useAnnotationManager"];
 *     Terminal3DPage --> H_EquipSelectMgr["useEquipmentSelectionManager"];
 *     Terminal3DPage --> H_LayerMgr["useLayerManager"];
 *
 *     Terminal3DPage --> MainSceneArea_Comp["MainSceneArea"];
 *     Terminal3DPage --> Sidebar_Comp["Sidebar"];
 *     Terminal3DPage --> AnnotationDialog_Comp["AnnotationDialog"];
 *
 *     MainSceneArea_Comp --> ThreeScene_Comp["ThreeScene"];
 *     MainSceneArea_Comp --> InfoPanel_Comp["InfoPanel"];
 *     Sidebar_Comp --> SidebarContentLayout_Comp["SidebarContentLayout"];
 *
 *     subgraph "Hooks de Estado"
 *       H_CmdHistory["useCommandHistory"];
 *       H_EquipData["useEquipmentDataManager"];
 *       H_CameraMgr["useCameraManager"];
 *       H_FilterMgr["useFilterManager"];
 *       H_AnnotMgr["useAnnotationManager"];
 *       H_EquipSelectMgr["useEquipmentSelectionManager"];
 *       H_LayerMgr["useLayerManager"];
 *     end
 *
 *     subgraph "Componentes de UI Principais"
 *       MainSceneArea_Comp["MainSceneArea"];
 *       Sidebar_Comp["Sidebar"];
 *       AnnotationDialog_Comp["AnnotationDialog"];
 *       InfoPanel_Comp["InfoPanel"];
 *       ThreeScene_Comp["ThreeScene"];
 *       SidebarContentLayout_Comp["SidebarContentLayout"];
 *     end
 * ```
 * 
 */
"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import type { Equipment, Layer, Command, CameraState, Annotation, ColorMode, TargetSystemInfo } from '@/lib/types'; 
import { useCommandHistory } from '@/hooks/use-command-history';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Undo2Icon, Redo2Icon, PanelLeft } from 'lucide-react';

// Hooks de gerenciamento de estado
import { useAnnotationManager } from '@/hooks/use-annotation-manager';
import { useEquipmentSelectionManager } from '@/hooks/use-equipment-selection-manager';
import { useFilterManager } from '@/hooks/use-filter-manager';
import { useEquipmentDataManager } from '@/hooks/use-equipment-data-manager';
import { useCameraManager, defaultInitialCameraPosition, defaultInitialCameraLookAt } from '@/hooks/use-camera-manager';
import { useLayerManager } from '@/hooks/use-layer-manager';

// Componentes de Layout
import { MainSceneArea } from '@/components/main-scene-area';
import { SidebarContentLayout } from '@/components/sidebar-content-layout';
import { AnnotationDialog } from '@/components/annotation-dialog';


/**
 * Componente principal da página Terminal 3D (Terminal3DPage).
 *
 * Orquestra os diversos hooks de gerenciamento de estado da aplicação e renderiza a UI principal.
 * @returns {JSX.Element} O componente da página Terminal 3D.
 */
export default function Terminal3DPage(): JSX.Element {
  const { executeCommand, undo, redo, canUndo, canRedo } = useCommandHistory();

  const {
    equipmentData, 
    handleOperationalStateChange,
    handleProductChange,
  } = useEquipmentDataManager();

  const {
    currentCameraState,
    targetSystemToFrame, 
    handleSetCameraViewForSystem, 
    handleCameraChangeFromScene,
    onSystemFramed,
    focusedSystemNameUI, // Mantido para UI, se necessário
    currentViewIndexUI, // Mantido para UI, se necessário
  } = useCameraManager({ executeCommand });

  const {
    searchTerm,
    setSearchTerm,
    selectedSistema,
    setSelectedSistema,
    selectedArea,
    setSelectedArea,
    availableSistemas,
    availableAreas,
    filteredEquipment, 
  } = useFilterManager({ allEquipment: equipmentData }); 

  const {
    annotations,
    isAnnotationDialogOpen,
    annotationTargetEquipment,
    editingAnnotation,
    handleOpenAnnotationDialog,
    handleSaveAnnotation,
    handleDeleteAnnotation,
    getAnnotationForEquipment,
    setIsAnnotationDialogOpen,
  } = useAnnotationManager({ equipmentData }); 

  const {
    selectedEquipmentTags,
    hoveredEquipmentTag,
    handleEquipmentClick, 
    handleSetHoveredEquipmentTag, 
    selectTagsBatch, 
  } = useEquipmentSelectionManager({ equipmentData, executeCommand }); 

  const { layers, handleToggleLayer } = useLayerManager({ executeCommand });

  const [colorMode, setColorMode] = useState<ColorMode>('Estado Operacional');
  
  const cameraViewSystems = useMemo(() => {
    return availableSistemas.filter(s => s !== 'All');
  }, [availableSistemas]);

  const isFocusingRef = useRef(false);
  const focusTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleFocusAndSelectSystem = useCallback((systemName: string) => {
    console.log(`[Terminal3DPage] Attempting to focus on: ${systemName}, isFocusing: ${isFocusingRef.current}`);
    if (isFocusingRef.current) {
      console.log(`[Terminal3DPage] Focus operation already in progress for ${systemName}. Ignoring subsequent call.`);
      return;
    }

    isFocusingRef.current = true;
    console.log(`[Terminal3DPage] handleFocusAndSelectSystem called for: ${systemName}`);
    
    handleSetCameraViewForSystem(systemName); 
    const equipmentInSystem = equipmentData 
      .filter(equip => equip.sistema === systemName)
      .map(equip => equip.tag);
    selectTagsBatch(equipmentInSystem, `Focado e selecionado sistema ${systemName}.`); 

    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
    }
    focusTimeoutRef.current = setTimeout(() => {
      isFocusingRef.current = false;
      console.log(`[Terminal3DPage] Focus lock released for ${systemName}.`);
    }, 100); // 100ms debounce window

  }, [equipmentData, handleSetCameraViewForSystem, selectTagsBatch]); // Adicionadas as dependências corretas

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, []);

  const selectedEquipmentDetails = useMemo(() => {
    if (selectedEquipmentTags.length === 1) {
      const tag = selectedEquipmentTags[0];
      return equipmentData.find(e => e.tag === tag) || null; 
    }
    return null;
  }, [selectedEquipmentTags, equipmentData]);

  const equipmentAnnotation = useMemo(() => {
    if (selectedEquipmentDetails) {
      return getAnnotationForEquipment(selectedEquipmentDetails.tag);
    }
    return null;
  }, [selectedEquipmentDetails, getAnnotationForEquipment]);

  const availableOperationalStatesList = useMemo(() => {
    const states = new Set<string>();
    equipmentData.forEach(equip => { 
      if (equip.operationalState) states.add(equip.operationalState);
    });
    const sortedStates = Array.from(states).sort((a, b) => {
      if (a === "Não aplicável") return -1;
      if (b === "Não aplicável") return 1;
      return a.localeCompare(b);
    });
    return sortedStates;
  }, [equipmentData]);

  const availableProductsList = useMemo(() => {
    const products = new Set<string>();
    equipmentData.forEach(equip => { 
      if (equip.product) products.add(equip.product);
    });
     const sortedProducts = Array.from(products).sort((a,b) => {
      if (a === "Não aplicável") return -1;
      if (b === "Não aplicável") return 1;
      return a.localeCompare(b);
    });
    return sortedProducts;
  }, [equipmentData]);


  return (
    <SidebarProvider defaultOpen={false}>
      <div className="h-screen flex-1 flex flex-col relative min-w-0 overflow-x-hidden">
        <MainSceneArea
          equipment={filteredEquipment} 
          allEquipmentData={equipmentData} 
          layers={layers}
          annotations={annotations}
          selectedEquipmentTags={selectedEquipmentTags}
          onSelectEquipment={handleEquipmentClick}
          hoveredEquipmentTag={hoveredEquipmentTag}
          setHoveredEquipmentTag={handleSetHoveredEquipmentTag}
          cameraState={currentCameraState}
          onCameraChange={handleCameraChangeFromScene}
          initialCameraPosition={defaultInitialCameraPosition}
          initialCameraLookAt={defaultInitialCameraLookAt}
          colorMode={colorMode}
          targetSystemToFrame={targetSystemToFrame} 
          onSystemFramed={onSystemFramed}
          selectedEquipmentDetails={selectedEquipmentDetails}
          equipmentAnnotation={equipmentAnnotation}
          onOpenAnnotationDialog={() => selectedEquipmentDetails && handleOpenAnnotationDialog(selectedEquipmentDetails)}
          onDeleteAnnotation={handleDeleteAnnotation}
          onOperationalStateChange={handleOperationalStateChange}
          availableOperationalStatesList={availableOperationalStatesList}
          onProductChange={handleProductChange}
          availableProductsList={availableProductsList}
        />

        <div className="absolute top-4 left-4 z-30">
          <SidebarTrigger asChild className="h-10 w-10 bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md shadow-lg p-2">
            <PanelLeft />
          </SidebarTrigger>
        </div>
      </div>

      <Sidebar collapsible="offcanvas" className="border-r z-40">
        <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
          <SidebarHeader className="p-3 flex justify-between items-center border-b">
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" onClick={undo} disabled={!canUndo} aria-label="Desfazer" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Undo2Icon className="h-5 w-5" />
              </Button>
              <SidebarTrigger
                asChild
                variant="ghost"
                size="default"
                className="p-0 h-auto w-auto hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <span className="font-semibold text-lg cursor-pointer hover:underline">
                  Terminal 3D
                </span>
              </SidebarTrigger>
              <Button variant="ghost" size="icon" onClick={redo} disabled={!canRedo} aria-label="Refazer" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Redo2Icon className="h-5 w-5" />
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContentLayout
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedSistema={selectedSistema}
            setSelectedSistema={setSelectedSistema}
            availableSistemas={availableSistemas}
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
            availableAreas={availableAreas}
            colorMode={colorMode}
            onColorModeChange={setColorMode}
            layers={layers}
            onToggleLayer={handleToggleLayer}
            cameraViewSystems={cameraViewSystems}
            onFocusAndSelectSystem={handleFocusAndSelectSystem}
          />
        </div>
      </Sidebar>

      <AnnotationDialog
        isOpen={isAnnotationDialogOpen}
        onOpenChange={setIsAnnotationDialogOpen}
        onConfirm={handleSaveAnnotation}
        currentAnnotation={editingAnnotation}
        equipmentName={annotationTargetEquipment?.name || ''}
      />
    </SidebarProvider>
  );
}
