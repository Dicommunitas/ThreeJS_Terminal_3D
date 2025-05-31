"use client";
import { ThreeCanvas } from "@/components/three-canvas/ThreeCanvas";

export default function EditorPage() {
  return (
    <main className="flex-1 flex flex-col p-4 md:p-6 bg-muted/40">
      <div className="flex-1 rounded-lg border shadow-sm overflow-hidden">
        <ThreeCanvas />
      </div>
    </main>
  );
}
