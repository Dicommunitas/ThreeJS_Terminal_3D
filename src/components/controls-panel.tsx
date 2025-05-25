"use client";

import type React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Circle, Triangle } from "lucide-react";

interface ControlsPanelProps {
  selectedShape: string;
  onShapeChange: (shape: string) => void;
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const Shapes = [
  { id: "cube", label: "Cube", icon: Box },
  { id: "sphere", label: "Sphere", icon: Circle },
  { id: "cone", label: "Cone", icon: Triangle },
];

export function ControlsPanel({
  selectedShape,
  onShapeChange,
  selectedColor,
  onColorChange,
}: ControlsPanelProps) {
  return (
    <Card className="h-full shadow-lg rounded-none md:rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="shape-group" className="text-base font-medium">Select Shape</Label>
          <RadioGroup
            id="shape-group"
            value={selectedShape}
            onValueChange={onShapeChange}
            className="space-y-2"
          >
            {Shapes.map((shape) => (
              <div key={shape.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent/10 transition-colors">
                <RadioGroupItem value={shape.id} id={shape.id} className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                <Label htmlFor={shape.id} className="flex items-center gap-2 cursor-pointer text-sm">
                  <shape.icon className="w-5 h-5 text-primary" />
                  {shape.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label htmlFor="color-picker" className="text-base font-medium">Shape Color</Label>
          <div className="relative">
             <Input
                id="color-picker"
                type="color"
                value={selectedColor}
                onChange={(e) => onColorChange(e.target.value)}
                className="w-full h-12 p-1 cursor-pointer border-2 border-input focus:border-primary rounded-md shadow-sm"
                aria-label="Select shape color"
            />
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-md text-sm font-mono pointer-events-none bg-background border border-border"
              style={{ color: selectedColor === '#ffffff' ? '#000000' : selectedColor }} // Ensure text visibility on white
            >
              {selectedColor.toUpperCase()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
