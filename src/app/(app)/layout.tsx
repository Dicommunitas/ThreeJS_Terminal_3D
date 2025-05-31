"use client";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { ControlPanel } from "@/components/layout/ControlPanel";
import { ThreeSceneProvider } from "@/components/providers/ThreeSceneProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThreeSceneProvider>
      <SidebarProvider defaultOpen>
        <Sidebar variant="sidebar" collapsible="icon" side="left">
          <div className="flex h-14 items-center px-4 border-b sticky top-0 bg-sidebar z-10">
            <h2 className="text-lg font-semibold font-headline">Controls</h2>
          </div>
          <ControlPanel />
        </Sidebar>
        <SidebarInset className="flex flex-col">
          <AppHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThreeSceneProvider>
  );
}
