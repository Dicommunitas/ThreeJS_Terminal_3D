"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreeSceneProps {
  shapeType: 'cube' | 'sphere' | 'cone';
  shapeColor: string;
  className?: string;
}

export function ThreeScene({ shapeType, shapeColor, className }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const initializeScene = useCallback(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Corresponds to globals.css --background
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Animation loop
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && mountRef.current) {
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      controlsRef.current?.dispose();
      meshRef.current?.geometry?.dispose();
      (meshRef.current?.material as THREE.Material)?.dispose();
      rendererRef.current?.dispose();
      if (rendererRef.current?.domElement && currentMount.contains(rendererRef.current.domElement)) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      controlsRef.current = null;
      meshRef.current = null;
    };
  }, []);

  useEffect(() => {
    const cleanup = initializeScene();
    return cleanup;
  }, [initializeScene]);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Remove existing mesh
    if (meshRef.current) {
      sceneRef.current.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      (meshRef.current.material as THREE.Material).dispose();
    }

    // Create new geometry
    let geometry: THREE.BufferGeometry;
    switch (shapeType) {
      case 'cube':
        geometry = new THREE.BoxGeometry(2, 2, 2);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        break;
      case 'cone':
        geometry = new THREE.ConeGeometry(1.5, 3, 32);
        break;
      default:
        geometry = new THREE.BoxGeometry(2, 2, 2); // Default to cube
    }

    // Create material
    const material = new THREE.MeshStandardMaterial({
      color: shapeColor,
      roughness: 0.5,
      metalness: 0.5,
    });

    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    sceneRef.current.add(mesh);
    meshRef.current = mesh;

  }, [shapeType, shapeColor]);


  useEffect(() => {
    if (meshRef.current && (meshRef.current.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
      (meshRef.current.material as THREE.MeshStandardMaterial).color.set(shapeColor);
    }
  }, [shapeColor]);

  return <div ref={mountRef} className={cn('w-full h-full', className)} data-ai-hint="3d scene abstract" />;
}
