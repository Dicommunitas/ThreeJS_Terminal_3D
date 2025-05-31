"use client";

import React, { createContext, useState, useCallback, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import type { SceneObject, PrimitiveShapeType, PrimitiveProperties, LightProperties } from '@/lib/three/types';

export interface ThreeSceneContextType {
  isInitialized: boolean;
  sceneObjects: SceneObject[];
  selectedObject: SceneObject | null;
  initScene: (containerRef: React.RefObject<HTMLDivElement>) => void;
  addPrimitive: (type: PrimitiveShapeType, properties: PrimitiveProperties) => void;
  importModel: (file: File, onProgress?: (progress: number) => void) => Promise<void>;
  selectObjectById: (uuid: string | null) => void;
  updateObjectTransform: (uuid: string, newTransform: { position?: Partial<THREE.Vector3Like>, rotation?: Partial<THREE.EulerLike>, scale?: Partial<THREE.Vector3Like> }) => void;
  removeObjectById: (uuid: string) => void;
  setCanvasBackgroundColor: (color: string) => void;
  addSceneLight: (properties: LightProperties) => void;
  getSceneInstance: () => THREE.Scene | null;
  getCameraInstance: () => THREE.PerspectiveCamera | null;
  getRendererInstance: () => THREE.WebGLRenderer | null;
}

export const ThreeSceneContext = createContext<ThreeSceneContextType | null>(null);

export const ThreeSceneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<SceneObject | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const containerRefInternal = useRef<HTMLDivElement | null>(null);

  const mapThreeObjectToSceneObject = (obj: THREE.Object3D): SceneObject => {
    return {
      id: obj.uuid,
      name: obj.name || `Object-${obj.id.substring(0, 5)}`,
      type: obj.type,
      transform: {
        position: obj.position.toArray(),
        rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z, obj.rotation.order],
        scale: obj.scale.toArray(),
      },
      properties: obj.userData,
    };
  };
  
  const updateSceneObjectsState = useCallback(() => {
    if (sceneRef.current) {
      const updatedObjects = sceneRef.current.children
        .filter(obj => obj.userData.isManaged) // only include objects added by user
        .map(mapThreeObjectToSceneObject);
      setSceneObjects(updatedObjects);
    }
  }, []);

  const initScene = useCallback((containerElementRef: React.RefObject<HTMLDivElement>) => {
    if (!containerElementRef.current || rendererRef.current) return;
    containerRefInternal.current = containerElementRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f2f5);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, containerRefInternal.current.clientWidth / containerRefInternal.current.clientHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRefInternal.current.clientWidth, containerRefInternal.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRefInternal.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Default lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && containerRefInternal.current) {
        cameraRef.current.aspect = containerRefInternal.current.clientWidth / containerRefInternal.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerRefInternal.current.clientWidth, containerRefInternal.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    
    setIsInitialized(true);
    updateSceneObjectsState();

    // Cleanup on component unmount (handled by useEffect in ThreeCanvas component)
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      controlsRef.current?.dispose();
      rendererRef.current?.dispose();
      if (containerRefInternal.current && rendererRef.current?.domElement) {
         containerRefInternal.current.removeChild(rendererRef.current.domElement);
      }
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      controlsRef.current = null;
      setIsInitialized(false);
    };
  }, [updateSceneObjectsState]);

  const addPrimitive = useCallback((type: PrimitiveShapeType, properties: PrimitiveProperties) => {
    if (!sceneRef.current) return;
    let geometry: THREE.BufferGeometry;
    const { color = '#cccccc', materialType = 'standard', position, rotation } = properties;

    switch (type) {
      case 'Cube':
        geometry = new THREE.BoxGeometry(properties.width ?? 1, properties.height ?? 1, properties.depth ?? 1);
        break;
      case 'Sphere':
        geometry = new THREE.SphereGeometry(properties.radius ?? 1, properties.radialSegments ?? 32, properties.heightSegments ?? 16);
        break;
      case 'Cylinder':
        geometry = new THREE.CylinderGeometry(properties.radius ?? 0.5, properties.radius ?? 0.5, properties.height ?? 1, properties.radialSegments ?? 32);
        break;
      case 'Cone':
        geometry = new THREE.ConeGeometry(properties.radius ?? 0.5, properties.height ?? 1, properties.radialSegments ?? 32);
        break;
      case 'Torus':
        geometry = new THREE.TorusGeometry(properties.radius ?? 1, properties.tube ?? 0.4, properties.radialSegments ?? 16, properties.tubularSegments ?? 100);
        break;
      case 'Plane':
        geometry = new THREE.PlaneGeometry(properties.width ?? 1, properties.height ?? 1, properties.widthSegments ?? 1, properties.heightSegments ?? 1);
        break;
      default:
        console.error("Unsupported primitive type");
        return;
    }

    const material = materialType === 'basic'
      ? new THREE.MeshBasicMaterial({ color: new THREE.Color(color) })
      : new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.5, metalness: 0.5 });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = `${type}-${Date.now().toString().slice(-5)}`;
    mesh.userData.isManaged = true; // Mark as user-added
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    if (position) mesh.position.set(position[0], position[1], position[2]);
    if (rotation) mesh.rotation.set(rotation[0], rotation[1], rotation[2], rotation[3] as THREE.EulerOrder);
    
    sceneRef.current.add(mesh);
    updateSceneObjectsState();
  }, [updateSceneObjectsState]);

  const importModel = useCallback(async (file: File, onProgress?: (progress: number) => void) => {
    if (!sceneRef.current) return;
    const objectURL = URL.createObjectURL(file);
    const extension = file.name.split('.').pop()?.toLowerCase();
    let loader: GLTFLoader | OBJLoader;

    try {
      if (extension === 'gltf' || extension === 'glb') {
        loader = new GLTFLoader();
        const gltf = await (loader as GLTFLoader).loadAsync(objectURL, (event) => {
          if (onProgress) onProgress((event.loaded / event.total) * 100);
        });
        const model = gltf.scene;
        model.name = file.name;
        model.userData.isManaged = true;
        model.traverse(child => { if ((child as THREE.Mesh).isMesh) { child.castShadow = true; child.receiveShadow = true; }});
        sceneRef.current.add(model);
      } else if (extension === 'obj') {
        loader = new OBJLoader();
        const object = await (loader as OBJLoader).loadAsync(objectURL, (event) => {
          if (onProgress) onProgress((event.loaded / event.total) * 100);
        });
        object.name = file.name;
        object.userData.isManaged = true;
        object.traverse(child => { if ((child as THREE.Mesh).isMesh) { child.castShadow = true; child.receiveShadow = true; }});
        sceneRef.current.add(object);
      } else {
        throw new Error('Unsupported file format');
      }
      updateSceneObjectsState();
    } catch (error) {
      console.error("Error loading model:", error);
      throw error; // Re-throw for UI handling
    } finally {
      URL.revokeObjectURL(objectURL);
    }
  }, [updateSceneObjectsState]);

  const selectObjectById = useCallback((uuid: string | null) => {
    if (!sceneRef.current) return;
    if (!uuid) {
      setSelectedObject(null);
      return;
    }
    const object = sceneRef.current.getObjectByProperty('uuid', uuid);
    if (object && object.userData.isManaged) {
      setSelectedObject(mapThreeObjectToSceneObject(object));
    } else {
      setSelectedObject(null);
    }
  }, [updateSceneObjectsState]);

  const updateObjectTransform = useCallback((uuid: string, newTransform: { position?: Partial<THREE.Vector3Like>, rotation?: Partial<THREE.EulerLike>, scale?: Partial<THREE.Vector3Like> }) => {
    if (!sceneRef.current) return;
    const object = sceneRef.current.getObjectByProperty('uuid', uuid);
    if (object) {
      if (newTransform.position) object.position.set(newTransform.position.x ?? object.position.x, newTransform.position.y ?? object.position.y, newTransform.position.z ?? object.position.z);
      if (newTransform.rotation) object.rotation.set(newTransform.rotation.x ?? object.rotation.x, newTransform.rotation.y ?? object.rotation.y, newTransform.rotation.z ?? object.rotation.z, newTransform.rotation.order ?? object.rotation.order);
      if (newTransform.scale) object.scale.set(newTransform.scale.x ?? object.scale.x, newTransform.scale.y ?? object.scale.y, newTransform.scale.z ?? object.scale.z);
      updateSceneObjectsState();
      if(selectedObject?.id === uuid) {
        setSelectedObject(mapThreeObjectToSceneObject(object));
      }
    }
  }, [updateSceneObjectsState, selectedObject]);
  
  const removeObjectById = useCallback((uuid: string) => {
    if (!sceneRef.current) return;
    const object = sceneRef.current.getObjectByProperty('uuid', uuid);
    if (object) {
      sceneRef.current.remove(object);
      // Dispose geometry and material
      if ((object as THREE.Mesh).geometry) (object as THREE.Mesh).geometry.dispose();
      if ((object as THREE.Mesh).material) {
        const material = (object as THREE.Mesh).material;
        if (Array.isArray(material)) {
          material.forEach(m => m.dispose());
        } else {
          material.dispose();
        }
      }
      updateSceneObjectsState();
      if (selectedObject?.id === uuid) {
        setSelectedObject(null);
      }
    }
  }, [updateSceneObjectsState, selectedObject]);

  const setCanvasBackgroundColor = useCallback((color: string) => {
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(color);
    }
  }, []);

  const addSceneLight = useCallback((properties: LightProperties) => {
    if(!sceneRef.current) return;
    let light: THREE.Light;
    const { type, color = '#ffffff', intensity = 1, position = [0,0,0] } = properties;

    switch(type) {
      case 'ambient':
        light = new THREE.AmbientLight(new THREE.Color(color), intensity);
        break;
      case 'directional':
        light = new THREE.DirectionalLight(new THREE.Color(color), intensity);
        light.position.set(position[0], position[1], position[2]);
        (light as THREE.DirectionalLight).castShadow = true;
        break;
      case 'point':
        light = new THREE.PointLight(new THREE.Color(color), intensity, properties.distance, properties.decay);
        light.position.set(position[0], position[1], position[2]);
        (light as THREE.PointLight).castShadow = true;
        break;
      // Add SpotLight, HemisphereLight if needed
      default:
        console.error("Unsupported light type");
        return;
    }
    light.name = `${type}-light-${Date.now().toString().slice(-5)}`;
    light.userData.isManaged = true;
    sceneRef.current.add(light);
    updateSceneObjectsState();

  }, [updateSceneObjectsState]);


  const getSceneInstance = useCallback(() => sceneRef.current, []);
  const getCameraInstance = useCallback(() => cameraRef.current, []);
  const getRendererInstance = useCallback(() => rendererRef.current, []);


  useEffect(() => {
    // This effect ensures cleanup when the provider itself is unmounted,
    // though primary cleanup is tied to initScene's returned function.
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      controlsRef.current?.dispose();
      rendererRef.current?.dispose();
      // DOM element removal is tricky here, better handled by the component owning the container.
      // For now, assume ThreeCanvas handles its own DOM cleanup.
    };
  }, []);


  return (
    <ThreeSceneContext.Provider value={{
      isInitialized,
      sceneObjects,
      selectedObject,
      initScene,
      addPrimitive,
      importModel,
      selectObjectById,
      updateObjectTransform,
      removeObjectById,
      setCanvasBackgroundColor,
      addSceneLight,
      getSceneInstance,
      getCameraInstance,
      getRendererInstance,
    }}>
      {children}
    </ThreeSceneContext.Provider>
  );
};
