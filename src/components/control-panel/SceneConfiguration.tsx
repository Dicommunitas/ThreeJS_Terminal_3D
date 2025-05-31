"use client";
import React, { useState } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb, Sun, MountainSnow } from 'lucide-react'; // MountainSnow for Hemisphere (sky/ground)

export function SceneConfiguration() {
  const { setCanvasBackgroundColor, addSceneLight, getSceneInstance } = useThreeScene();
  const [bgColor, setBgColor] = useState(() => {
    const scene = getSceneInstance();
    return scene?.background instanceof THREE.Color ? `#${scene.background.getHexString()}` : '#f0f2f5';
  });
  const [lightType, setLightType] = useState<'ambient' | 'directional' | 'point'>('directional');
  const [lightColor, setLightColor] = useState('#ffffff');
  const [lightIntensity, setLightIntensity] = useState(1);

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
    setCanvasBackgroundColor(e.target.value);
  };

  const handleAddLight = () => {
    addSceneLight({
      type: lightType,
      color: lightColor,
      intensity: lightIntensity,
      position: lightType === 'directional' || lightType === 'point' ? [5, 10, 7.5] : undefined,
    });
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <Label htmlFor="bgColor">Background Color</Label>
        <Input id="bgColor" type="color" value={bgColor} onChange={handleBgColorChange} className="mt-1" />
      </div>
      <div className="space-y-2">
        <Label>Add Light</Label>
        <Select value={lightType} onValueChange={(value: 'ambient' | 'directional' | 'point') => setLightType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select light type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ambient"><Lightbulb className="inline-block mr-2 h-4 w-4" />Ambient</SelectItem>
            <SelectItem value="directional"><Sun className="inline-block mr-2 h-4 w-4" />Directional</SelectItem>
            <SelectItem value="point"><Lightbulb className="inline-block mr-2 h-4 w-4" />Point</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <Input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} className="w-1/3" aria-label="Light color"/>
          <Input type="number" step="0.1" min="0" value={lightIntensity} onChange={(e) => setLightIntensity(parseFloat(e.target.value))} placeholder="Intensity" className="flex-grow" aria-label="Light intensity"/>
        </div>
        <Button onClick={handleAddLight} className="w-full mt-2">Add Light</Button>
      </div>
    </div>
  );
}
