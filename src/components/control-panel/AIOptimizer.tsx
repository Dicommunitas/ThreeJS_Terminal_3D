"use client";
import React, { useState } from 'react';
import { optimize3DModel, type Optimize3DModelInput, type Optimize3DModelOutput } from '@/ai/flows/optimize-3d-model';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { fileToDataUri } from '@/lib/utils';
import { Sparkles, Loader2, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function AIOptimizer() {
  const [file, setFile] = useState<File | null>(null);
  const [targetPlatform, setTargetPlatform] = useState('web');
  const [complexity, setComplexity] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Optimize3DModelOutput | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null); // Clear previous result if new file is selected
    }
  };

  const handleOptimize = async () => {
    if (!file) {
      toast({ title: "No file selected", description: "Please select a model file to optimize.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const modelDataUri = await fileToDataUri(file);
      const input: Optimize3DModelInput = { modelDataUri, targetPlatform, complexity };
      const output = await optimize3DModel(input);
      setResult(output);
      toast({ title: "Optimization Complete", description: "Model has been optimized." });
    } catch (error: any) {
      console.error("Optimization error:", error);
      toast({ title: "Optimization Error", description: error.message || "Failed to optimize model.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDownloadOptimizedModel = () => {
    if (result?.optimizedModelDataUri) {
      const link = document.createElement('a');
      link.href = result.optimizedModelDataUri;
      const originalFileName = file?.name.split('.')[0] || 'optimized_model';
      const extension = result.optimizedModelDataUri.substring(result.optimizedModelDataUri.indexOf('/') + 1, result.optimizedModelDataUri.indexOf(';'));
      link.download = `${originalFileName}_optimized.${extension}`; // e.g. model_optimized.glb
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <Label htmlFor="optimizerFile">Model File</Label>
        <Input id="optimizerFile" type="file" onChange={handleFileChange} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="targetPlatform">Target Platform</Label>
        <Select value={targetPlatform} onValueChange={setTargetPlatform}>
          <SelectTrigger id="targetPlatform" className="mt-1">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="vr">VR/AR</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="modelComplexity">Model Complexity</Label>
        <Select value={complexity} onValueChange={setComplexity}>
          <SelectTrigger id="modelComplexity" className="mt-1">
            <SelectValue placeholder="Select complexity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="very_high">Very High</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleOptimize} disabled={!file || isLoading} className="w-full mt-2">
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
        Optimize Model
      </Button>

      {result && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Optimization Result</CardTitle>
            <CardDescription>Summary of optimizations applied.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea value={result.optimizationSummary} readOnly rows={5} className="text-sm" />
          </CardContent>
          <CardFooter>
             <Button onClick={handleDownloadOptimizedModel} className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Optimized Model
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
