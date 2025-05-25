"use client";

import React, { useState } from 'react';
import { ControlsPanel } from '@/components/controls-panel';
import { ThreeScene } from '@/components/three-scene';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<'cube' | 'sphere' | 'cone'>('cube');
  const [selectedColor, setSelectedColor] = useState<string>('#40E0D0'); // Default to accent color

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-background">
      <aside className="w-full md:w-80 lg:w-96 p-0 md:p-4 border-b md:border-b-0 md:border-r shrink-0">
        <ControlsPanel
          selectedShape={selectedShape}
          onShapeChange={(shape) => setSelectedShape(shape as 'cube' | 'sphere' | 'cone')}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </aside>
      <main className="flex-grow relative min-h-0"> {/* Added min-h-0 for flex child to shrink properly */}
        <ThreeScene
          shapeType={selectedShape}
          shapeColor={selectedColor}
          className="w-full h-full"
        />
      </main>
    </div>
  );
}
