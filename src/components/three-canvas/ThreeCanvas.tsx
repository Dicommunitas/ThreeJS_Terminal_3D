"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { useThreeScene } from '@/hooks/useThreeScene';
import * as THREE from 'three';

export function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { initScene, isInitialized, selectObjectById, getSceneInstance, getCameraInstance } = useThreeScene();
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (mountRef.current && !isInitialized) {
      cleanupRef.current = initScene(mountRef);
    }
    // Ensure cleanup is called when the component unmounts or initScene changes.
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [initScene, isInitialized]);

  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!mountRef.current || !getSceneInstance() || !getCameraInstance()) return;

    const scene = getSceneInstance();
    const camera = getCameraInstance();
    if (!scene || !camera) return;

    const rect = mountRef.current.getBoundingClientRect();
    const mouse = new THREE.Vector2();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let selected = null;
      // Find the highest-level managed object in the hierarchy
      for (const intersect of intersects) {
        let obj = intersect.object;
        while(obj.parent && obj.parent !== scene) { // Traverse up to find the main group/mesh added
           if (obj.userData.isManaged) break;
           obj = obj.parent;
        }
        if (obj.userData.isManaged) {
          selected = obj;
          break;
        }
      }
      
      if (selected) {
        selectObjectById(selected.uuid);
      } else {
        selectObjectById(null); // Clicked on something, but not a managed object or its child
      }
    } else {
      selectObjectById(null); // Clicked on empty space
    }
  }, [getSceneInstance, getCameraInstance, selectObjectById]);


  return <div ref={mountRef} className="w-full h-full flex-grow relative" onClick={handleCanvasClick} style={{ minHeight: 'calc(100vh - 7rem)' }} />;
}
