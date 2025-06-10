
import * as THREE from 'three';
import type { Equipment } from '@/lib/types';
import { createBollardsGroup } from '../geometry-subcomponents';

export function createShipGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const hullWidth = item.size?.width || 10;
  const hullHeight = item.size?.height || 4; // Altura do casco principal (da linha d'água ao convés principal)
  const hullDepth = item.size?.depth || 40; // Comprimento do navio

  // Material temporário, será substituído pela lógica de renderização principal
  const tempMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, visible: false });

  // 1. Casco Principal
  const hullGeo = new THREE.BoxGeometry(hullWidth, hullHeight, hullDepth);
  const hullMesh = new THREE.Mesh(hullGeo, tempMaterial.clone());
  group.add(hullMesh);

  // 2. Superestrutura (Acomodações e Ponte de Comando - à Ré)
  const superstructureGroup = new THREE.Group();
  const mainBlockWidth = hullWidth * 0.65;
  const mainBlockHeight = hullHeight * 1.6;
  const mainBlockDepth = hullDepth * 0.22;
  const mainBlockGeo = new THREE.BoxGeometry(mainBlockWidth, mainBlockHeight, mainBlockDepth);
  const mainBlockMesh = new THREE.Mesh(mainBlockGeo, tempMaterial.clone());
  mainBlockMesh.position.y = hullHeight / 2 + mainBlockHeight / 2; // Sobre o convés principal

  const bridgeBlockWidth = mainBlockWidth * 0.8; // Ponte um pouco mais estreita que o bloco principal
  const bridgeBlockHeightAddition = mainBlockHeight * 0.4; // Altura adicional para a ponte
  const bridgeBlockDepth = mainBlockDepth * 0.7;
  const bridgeBlockGeo = new THREE.BoxGeometry(bridgeBlockWidth, bridgeBlockHeightAddition, bridgeBlockDepth);
  const bridgeBlockMesh = new THREE.Mesh(bridgeBlockGeo, tempMaterial.clone());
  bridgeBlockMesh.position.y = mainBlockHeight / 2 + bridgeBlockHeightAddition / 2; // Empilhada sobre o bloco principal
  mainBlockMesh.add(bridgeBlockMesh);

  superstructureGroup.add(mainBlockMesh);
  superstructureGroup.position.z = -hullDepth * 0.5 + mainBlockDepth * 0.5 + hullDepth * 0.08; // Um pouco à frente da popa
  group.add(superstructureGroup);

  // 3. Castelo de Proa (Estrutura elevada na frente)
  const forecastleWidth = hullWidth * 0.9;
  const forecastleHeight = hullHeight * 0.20;
  const forecastleDepth = hullDepth * 0.12;
  const forecastleGeo = new THREE.BoxGeometry(forecastleWidth, forecastleHeight, forecastleDepth);
  const forecastleMesh = new THREE.Mesh(forecastleGeo, tempMaterial.clone());
  forecastleMesh.position.y = hullHeight / 2 + forecastleHeight / 2;
  forecastleMesh.position.z = hullDepth * 0.5 - forecastleDepth / 2; // Na proa
  group.add(forecastleMesh);

  // 4. Mastros/Guindastes Simplificados
  const mastRadius = hullWidth * 0.02; // Mastro mais fino
  const mainMastHeight = hullHeight * 2.5;
  const mastGeo = new THREE.CylinderGeometry(mastRadius, mastRadius * 0.7, mainMastHeight, 8);

  // Mastro da Proa (no castelo de proa)
  const forwardMastMesh = new THREE.Mesh(mastGeo, tempMaterial.clone());
  // Posição relativa ao centro do castelo de proa
  forwardMastMesh.position.set(0, forecastleHeight / 2 + mainMastHeight / 2, 0); 
  forecastleMesh.add(forwardMastMesh);

  // Postes de Carga (Kingposts) a Meio-Navio
  const derrickHeight = hullHeight * 1.8; // Um pouco mais baixos
  const derrickRadius = mastRadius * 2; // Um pouco mais grossos que o mastro da proa
  const derrickGeo = new THREE.CylinderGeometry(derrickRadius, derrickRadius * 0.8, derrickHeight, 8);
  
  // Posicionar os postes de carga mais para dentro do convés
  const derrickXOffset = hullWidth * 0.22; // Reduzido de 0.28

  const derrickPost1 = new THREE.Mesh(derrickGeo, tempMaterial.clone());
  // A base do poste (Y local = 0) deve estar no convés (Y local do casco = hullHeight/2)
  derrickPost1.position.set(-derrickXOffset, hullHeight / 2 + derrickHeight / 2, hullDepth * 0.1);
  group.add(derrickPost1);

  const derrickPost2 = new THREE.Mesh(derrickGeo, tempMaterial.clone());
  derrickPost2.position.set(derrickXOffset, hullHeight / 2 + derrickHeight / 2, hullDepth * 0.1);
  group.add(derrickPost2);

  // 5. Cabeços de Amarração (Bollards)
  const bollards = createBollardsGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight,
    countPerSide: Math.max(4, Math.floor(hullDepth / 7) + 1), // Ajuste na contagem se necessário
    bollardRadiusRatio: 0.010, // Bollards menores
    bollardHeightRatio: 0.07,
    yOffset: 0,
  });
  group.add(bollards);

  return group;
}
