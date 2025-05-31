"use client";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function AppHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
      <Button
        size="icon"
        variant="outline"
        className="sm:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <PanelLeft className="h-5 w-5" />
      </Button>
      <h1 className="text-xl font-semibold font-headline">ThreeJS Canvas Crafter</h1>
    </header>
  );
}
