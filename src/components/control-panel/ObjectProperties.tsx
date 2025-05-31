"use client";
import React, { useState, useEffect, useCallback } } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type * as THREE from 'three';

type TransformValue = { x: number; y: number; z: number };

export function ObjectProperties() {
  const { selectedObject, updateObjectTransform } = useThreeScene();
  const [name, setName] = useState('');
  const [position, setPosition] = useState<TransformValue>({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState<TransformValue>({ x: 0, y: 0, z: 0 }); // In degrees
  const [scale, setScale] = useState<TransformValue>({ x: 1, y: 1, z: 1 });

  const updateLocalState = useCallback(() => {
    if (selectedObject) {
      setName(selectedObject.name);
      setPosition({
        x: parseFloat(selectedObject.transform.position[0].toFixed(2)),
        y: parseFloat(selectedObject.transform.position[1].toFixed(2)),
        z: parseFloat(selectedObject.transform.position[2].toFixed(2)),
      });
      setRotation({ // Convert radians to degrees for display
        x: parseFloat(THREE.MathUtils.radToDeg(selectedObject.transform.rotation[0]).toFixed(1)),
        y: parseFloat(THREE.MathUtils.radToDeg(selectedObject.transform.rotation[1]).toFixed(1)),
        z: parseFloat(THREE.MathUtils.radToDeg(selectedObject.transform.rotation[2]).toFixed(1)),
      });
      setScale({
        x: parseFloat(selectedObject.transform.scale[0].toFixed(2)),
        y: parseFloat(selectedObject.transform.scale[1].toFixed(2)),
        z: parseFloat(selectedObject.transform.scale[2].toFixed(2)),
      });
    }
  }, [selectedObject]);

  useEffect(() => {
    updateLocalState();
  }, [selectedObject, updateLocalState]);

  const handleTransformChange = (axis: 'x' | 'y' | 'z', type: 'position' | 'rotation' | 'scale', value: string) => {
    const numValue = parseFloat(value) || 0;
    const setter = type === 'position' ? setPosition : type === 'rotation' ? setRotation : setScale;
    setter(prev => ({ ...prev, [axis]: numValue }));
  };
  
  const applyChanges = () => {
    if (!selectedObject) return;
    
    const newRotationRad = {
        x: THREE.MathUtils.degToRad(rotation.x),
        y: THREE.MathUtils.degToRad(rotation.y),
        z: THREE.MathUtils.degToRad(rotation.z),
    };

    updateObjectTransform(selectedObject.id, {
      position,
      rotation: newRotationRad, // Send radians
      scale,
    });
    // Name update would require a different method, e.g., updateObjectName(id, newName)
  };

  if (!selectedObject) {
    return <p className="p-2 text-sm text-muted-foreground">No object selected.</p>;
  }

  const renderTransformInputs = (type: 'position' | 'rotation' | 'scale', value: TransformValue) => (
    <div className="grid grid-cols-3 gap-2">
      {(['x', 'y', 'z'] as const).map(axis => (
        <div key={axis}>
          <Label htmlFor={`${type}-${axis}`} className="text-xs uppercase">{axis}</Label>
          <Input
            id={`${type}-${axis}`}
            type="number"
            step={type === 'rotation' ? "1" : "0.01"}
            value={value[axis]}
            onChange={(e) => handleTransformChange(axis, type, e.target.value)}
            className="mt-1 h-8"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-3 p-2">
      <div>
        <Label htmlFor="objectName">Name</Label>
        <Input id="objectName" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-8" disabled />
         {/* Name editing disabled as updateObjectTransform doesn't handle it. Needs dedicated function. */}
      </div>
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm py-2">Position</AccordionTrigger>
          <AccordionContent className="pt-1 pb-2">
            {renderTransformInputs('position', position)}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm py-2">Rotation (Degrees)</AccordionTrigger>
          <AccordionContent className="pt-1 pb-2">
             {renderTransformInputs('rotation', rotation)}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm py-2">Scale</AccordionTrigger>
          <AccordionContent className="pt-1 pb-2">
            {renderTransformInputs('scale', scale)}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button onClick={applyChanges} className="w-full mt-2 h-9">Apply Changes</Button>
    </div>
  );
}
