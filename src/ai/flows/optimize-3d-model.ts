// src/ai/flows/optimize-3d-model.ts
'use server';

/**
 * @fileOverview An AI agent that optimizes a 3D model for performance.
 *
 * - optimize3DModel - A function that optimizes the 3D model.
 * - Optimize3DModelInput - The input type for the optimize3DModel function.
 * - Optimize3DModelOutput - The return type for the optimize3DModel function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Optimize3DModelInputSchema = z.object({
  modelDataUri: z
    .string()
    .describe(
      "The 3D model file as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  targetPlatform: z
    .string()
    .describe('The target platform for the 3D model (e.g., web, mobile, VR).'),
  complexity: z
    .string()
    .describe(
      'The complexity of the 3D model (e.g., low, medium, high). This helps the AI to determine the level of optimization needed.'
    ),
});
export type Optimize3DModelInput = z.infer<typeof Optimize3DModelInputSchema>;

const Optimize3DModelOutputSchema = z.object({
  optimizationSummary: z
    .string()
    .describe(
      'A summary of the optimizations applied to the 3D model, including changes to polygon count, texture size, and LOD.'
    ),
  optimizedModelDataUri: z
    .string()
    .describe(
      "The optimized 3D model file as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type Optimize3DModelOutput = z.infer<typeof Optimize3DModelOutputSchema>;

export async function optimize3DModel(
  input: Optimize3DModelInput
): Promise<Optimize3DModelOutput> {
  return optimize3DModelFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimize3DModelPrompt',
  input: {schema: Optimize3DModelInputSchema},
  output: {schema: Optimize3DModelOutputSchema},
  prompt: `You are an expert in 3D model optimization for various platforms.

You will receive a 3D model, the target platform, and the complexity of the model.
Your goal is to provide an optimization summary and the optimized model data URI.

Consider factors such as polygon count, texture size, and level of detail (LOD) to ensure smooth rendering on the target platform.

Model Data URI: {{modelDataUri}}
Target Platform: {{targetPlatform}}
Complexity: {{complexity}}

Provide a detailed optimization summary and the optimized model data URI.
`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const optimize3DModelFlow = ai.defineFlow(
  {
    name: 'optimize3DModelFlow',
    inputSchema: Optimize3DModelInputSchema,
    outputSchema: Optimize3DModelOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
