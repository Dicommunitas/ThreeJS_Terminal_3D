"use client";
import React, { useState } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { PrimitiveShapeType, PrimitiveProperties } from '@/lib/three/types';
import { Shapes } from 'lucide-react';

export function DynamicShapeRenderer() {
  const { addPrimitive } = useThreeScene();
  const [shapeType, setShapeType] = useState<PrimitiveShapeType>('Cube');
  const [color, setColor] = useState('#1E90FF'); // DodgerBlue
  const [size, setSize] = useState(1); // General size / radius / width
  const [height, setHeight] = useState(1); // For Cube, Cylinder, Cone, Plane
  const [depth, setDepth] = useState(1); // For Cube
  const [materialType, setMaterialType] = useState<'standard' | 'basic'>('standard');

  const handleAddShape = () => {
    const properties: PrimitiveProperties = { color, materialType };
    switch (shapeType) {
      case 'Cube':
        properties.width = size;
        properties.height = height;
        properties.depth = depth;
        break;
      case 'Sphere':
        properties.radius = size;
        break;
      case 'Cylinder':
      case 'Cone':
        properties.radius = size;
        properties.height = height;
        break;
      case 'Torus':
        properties.radius = size;
        properties.tube = size * 0.4; // Default tube relative to radius
        break;
      case 'Plane':
        properties.width = size;
        properties.height = height;
        break;
    }
    addPrimitive(shapeType, properties);
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <Label htmlFor="shapeType">Shape Type</Label>
        <Select value={shapeType} onValueChange={(value: PrimitiveShapeType) => setShapeType(value)}>
          <SelectTrigger id="shapeType" className="mt-1">
            <SelectValue placeholder="Select shape" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Cube">Cube</SelectItem>
            <SelectItem value="Sphere">Sphere</SelectItem>
            <SelectItem value="Cylinder">Cylinder</SelectItem>
            <SelectItem value="Cone">Cone</SelectItem>
            <SelectItem value="Torus">Torus</SelectItem>
            <SelectItem value="Plane">Plane</SelectItem>
          </SelectContent>
        </Select>
      </div>
       <div>
        <Label htmlFor="materialType">Material</Label>
        <Select value={materialType} onValueChange={(value: 'standard' | 'basic') => setMaterialType(value)}>
          <SelectTrigger id="materialType" className="mt-1">
            <SelectValue placeholder="Select material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="basic">Basic (Unlit)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="shapeColor">Color</Label>
        <Input id="shapeColor" type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mt-1" />
      </div>
      
      { (shapeType === 'Cube' || shapeType === 'Sphere' || shapeType === 'Cylinder' || shapeType === 'Cone' || shapeType === 'Torus' || shapeType === 'Plane') &&
        <div>
          <Label htmlFor="shapeSize">
            {shapeType === 'Sphere' || shapeType === 'Cylinder' || shapeType === 'Cone' || shapeType === 'Torus' ? 'Radius' : 'Width/Size'}
          </Label>
          <Input id="shapeSize" type="number" value={size} onChange={(e) => setSize(parseFloat(e.target.value))} step="0.1" className="mt-1" />
        </div>
      }
      { (shapeType === 'Cube' || shapeType === 'Cylinder' || shapeType === 'Cone' || shapeType === 'Plane') &&
        <div>
          <Label htmlFor="shapeHeight">Height</Label>
          <Input id="shapeHeight" type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} step="0.1" className="mt-1" />
        </div>
      }
      { shapeType === 'Cube' &&
        <div>
          <Label htmlFor="shapeDepth">Depth</Label>
          <Input id="shapeDepth" type="number" value={depth} onChange={(e) => setDepth(parseFloat(e.target.value))} step="0.1" className="mt-1" />
        </div>
      }
      
      <Button onClick={handleAddShape} className="w-full mt-2">
        <Shapes className="mr-2 h-4 w-4" /> Add Shape
      </Button>
    </div>
  );
}
