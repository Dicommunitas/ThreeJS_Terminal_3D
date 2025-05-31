"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SceneConfiguration } from "@/components/control-panel/SceneConfiguration";
import { DynamicShapeRenderer } from "@/components/control-panel/DynamicShapeRenderer";
import { ImportModel } from "@/components/control-panel/ImportModel";
import { ObjectProperties } from "@/components/control-panel/ObjectProperties";
import { AIOptimizer } from "@/components/control-panel/AIOptimizer";
import { ObjectList } from "@/components/control-panel/ObjectList";

export function ControlPanel() {
  return (
    <SidebarContent className="flex flex-col">
      <SidebarGroup>
        <SidebarGroupLabel>Scene</SidebarGroupLabel>
        <SceneConfiguration />
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>Add Shape</SidebarGroupLabel>
        <DynamicShapeRenderer />
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>Import Model</SidebarGroupLabel>
        <ImportModel />
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup className="flex-grow min-h-0 flex flex-col">
        <SidebarGroupLabel>Object List</SidebarGroupLabel>
        <ObjectList />
      </SidebarGroup>
      <SidebarSeparator />
       <SidebarGroup>
        <SidebarGroupLabel>Selected Object</SidebarGroupLabel>
        <ObjectProperties />
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>AI Optimizer</SidebarGroupLabel>
        <AIOptimizer />
      </SidebarGroup>
    </SidebarContent>
  );
}
