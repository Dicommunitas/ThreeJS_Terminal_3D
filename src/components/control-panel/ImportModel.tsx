"use client";
import React, { useState } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileUp, Loader2 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";


export function ImportModel() {
  const { importModel } = useThreeScene();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!file) {
      toast({ title: "No file selected", description: "Please select a model file to import.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setProgress(0);
    try {
      await importModel(file, (p) => setProgress(p));
      toast({ title: "Model Imported", description: `${file.name} has been added to the scene.` });
      setFile(null); // Reset file input
    } catch (error: any) {
      toast({ title: "Import Error", description: error.message || "Failed to import model.", variant: "destructive" });
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <Label htmlFor="modelFile">Model File (.gltf, .glb, .obj)</Label>
        <Input id="modelFile" type="file" accept=".gltf,.glb,.obj" onChange={handleFileChange} className="mt-1" />
      </div>
      {isLoading && <Progress value={progress} className="w-full" />}
      <Button onClick={handleImport} disabled={!file || isLoading} className="w-full mt-2">
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileUp className="mr-2 h-4 w-4" />}
        Import Model
      </Button>
    </div>
  );
}
