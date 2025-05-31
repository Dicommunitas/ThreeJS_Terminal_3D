"use client";

import { useContext } from 'react';
import { ThreeSceneContext, type ThreeSceneContextType } from '@/components/providers/ThreeSceneProvider';

export const useThreeScene = (): ThreeSceneContextType => {
  const context = useContext(ThreeSceneContext);
  if (!context) {
    throw new Error('useThreeScene must be used within a ThreeSceneProvider');
  }
  return context;
};
