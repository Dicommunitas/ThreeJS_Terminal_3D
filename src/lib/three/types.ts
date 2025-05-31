import type * as THREE from 'three';

export interface SceneObject {
  id: string; // uuid
  name: string;
  type: string; // e.g. 'Mesh', 'Group', 'DirectionalLight'
  transform: {
    position: THREE.Vector3Tuple;
    rotation: THREE.EulerTuple;
    scale: THREE.Vector3Tuple;
  };
  // Additional properties specific to object type can be added
  properties?: Record<string, any>; 
}

export type PrimitiveShapeType = 'Cube' | 'Sphere' | 'Cylinder' | 'Cone' | 'Torus' | 'Plane';
export interface PrimitiveProperties {
  size?: number; // Cube
  width?: number; // Cube, Plane
  height?: number; // Cube, Cylinder, Cone, Plane
  depth?: number; // Cube
  radius?: number; // Sphere, Cylinder, Cone, Torus
  tube?: number; // Torus
  radialSegments?: number; // Sphere, Cylinder, Cone, Torus
  tubularSegments?: number; // Torus
  arc?: number; // Torus
  widthSegments?: number; // Sphere, Plane
  heightSegments?: number; // Sphere, Plane
  color?: string;
  materialType?: 'basic' | 'standard';
  position?: THREE.Vector3Tuple;
  rotation?: THREE.EulerTuple;
}

export interface LightProperties {
  type: 'ambient' | 'directional' | 'point' | 'spot' | 'hemisphere';
  color?: string;
  intensity?: number;
  position?: THREE.Vector3Tuple;
  targetPosition?: THREE.Vector3Tuple; // For directional/spot
  skyColor?: string; // For hemisphere
  groundColor?: string; // For hemisphere
  distance?: number; // For point/spot
  angle?: number; // For spot
  penumbra?: number; // For spot
  decay?: number; // For point/spot
}
