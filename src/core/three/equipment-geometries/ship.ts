
import * as THREE from 'three';
import type { Equipment } from '@/lib/types';
import { createBollardsGroup } from '../geometry-subcomponents';

export function createShipGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const hullWidth = item.size?.width || 10;
  const hullHeight = item.size?.height || 4;
  const hullDepth = item.size?.depth || 40;

  // Material temporário, será substituído
  const tempMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, visible: false });

  const hullGeo = new THREE.BoxGeometry(hullWidth, hullHeight, hullDepth);
  const hullMesh = new THREE.Mesh(hullGeo, tempMaterial.clone());
  group.add(hullMesh);

  const superstructureWidth = hullWidth * 0.6;
  const superstructureHeight = hullHeight * 0.8;
  const superstructureDepth = hullDepth * 0.25;
  const superstructureGeo = new THREE.BoxGeometry(superstructureWidth, superstructureHeight, superstructureDepth);
  const superstructureMesh = new THREE.Mesh(superstructureGeo, tempMaterial.clone());
  superstructureMesh.position.set(0, hullHeight / 2 + superstructureHeight / 2, -hullDepth / 2 + superstructureDepth / 2 + hullDepth * 0.1);
  group.add(superstructureMesh);

  const bollards = createBollardsGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight,
    countPerSide: Math.max(3, Math.floor(hullDepth / 8) + 1),
    yOffset: 0,
  });
  group.add(bollards);

  // hullGeo.dispose();
  // superstructureGeo.dispose();
  return group;
}
