
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
  // O centro do casco está em (0,0,0) relativo ao grupo.
  // A posição Y do 'item' em initial-data define o centro Y do navio no mundo.
  // Se item.position.y é 2 e hullHeight é 4, o fundo do casco estará em Y=0 (linha d'água).
  group.add(hullMesh);

  // 2. Superestrutura (Acomodações e Ponte de Comando - à Ré)
  const superstructureGroup = new THREE.Group();
  const mainBlockWidth = hullWidth * 0.65;
  const mainBlockHeight = hullHeight * 1.6; // Mais alto que o casco
  const mainBlockDepth = hullDepth * 0.22;
  const mainBlockGeo = new THREE.BoxGeometry(mainBlockWidth, mainBlockHeight, mainBlockDepth);
  const mainBlockMesh = new THREE.Mesh(mainBlockGeo, tempMaterial.clone());
  mainBlockMesh.position.y = hullHeight / 2 + mainBlockHeight / 2; // Sobre o convés principal

  const bridgeBlockWidth = mainBlockWidth * 0.7;
  const bridgeBlockHeight = mainBlockHeight * 0.5; // Altura adicional para a ponte
  const bridgeBlockDepth = mainBlockDepth * 0.6;
  const bridgeBlockGeo = new THREE.BoxGeometry(bridgeBlockWidth, bridgeBlockHeight, bridgeBlockDepth);
  const bridgeBlockMesh = new THREE.Mesh(bridgeBlockGeo, tempMaterial.clone());
  // Posiciona a ponte sobre o bloco principal da superestrutura
  bridgeBlockMesh.position.y = mainBlockHeight / 2 + bridgeBlockHeight / 2; 
  mainBlockMesh.add(bridgeBlockMesh); 

  superstructureGroup.add(mainBlockMesh);
  // Posiciona a superestrutura um pouco à frente da popa extrema
  superstructureGroup.position.z = -hullDepth * 0.5 + mainBlockDepth * 0.5 + hullDepth * 0.05; 
  group.add(superstructureGroup);

  // 3. Castelo de Proa (Estrutura elevada na frente)
  const forecastleWidth = hullWidth * 0.9;
  const forecastleHeight = hullHeight * 0.20; // Elevação sutil
  const forecastleDepth = hullDepth * 0.12;
  const forecastleGeo = new THREE.BoxGeometry(forecastleWidth, forecastleHeight, forecastleDepth);
  const forecastleMesh = new THREE.Mesh(forecastleGeo, tempMaterial.clone());
  forecastleMesh.position.y = hullHeight / 2 + forecastleHeight / 2; // Sobre o convés principal
  forecastleMesh.position.z = hullDepth * 0.5 - forecastleDepth / 2; // Na proa
  group.add(forecastleMesh);

  // 4. Mastros/Guindastes Simplificados
  const mastRadius = hullWidth * 0.025;
  const mainMastHeight = hullHeight * 2.8;
  const mastGeo = new THREE.CylinderGeometry(mastRadius, mastRadius * 0.7, mainMastHeight, 8);

  // Mastro da Proa (no castelo de proa)
  const forwardMastMesh = new THREE.Mesh(mastGeo, tempMaterial.clone());
  forwardMastMesh.position.set(0, forecastleHeight / 2 + mainMastHeight / 2, forecastleMesh.position.z + forecastleDepth * 0.1);
  forecastleMesh.add(forwardMastMesh); // Adiciona ao castelo de proa

  // Postes de Carga (Kingposts) a Meio-Navio
  const derrickHeight = hullHeight * 2.2;
  const derrickRadius = mastRadius * 1.5;
  const derrickGeo = new THREE.CylinderGeometry(derrickRadius, derrickRadius * 0.8, derrickHeight, 8);
  
  const derrickPost1 = new THREE.Mesh(derrickGeo, tempMaterial.clone());
  derrickPost1.position.set(-hullWidth * 0.28, hullHeight / 2 + derrickHeight / 2, hullDepth * 0.15);
  group.add(derrickPost1);

  const derrickPost2 = new THREE.Mesh(derrickGeo, tempMaterial.clone());
  derrickPost2.position.set(hullWidth * 0.28, hullHeight / 2 + derrickHeight / 2, hullDepth * 0.15);
  group.add(derrickPost2);

  // 5. Cabeços de Amarração (Bollards)
  const bollards = createBollardsGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight, 
    countPerSide: Math.max(4, Math.floor(hullDepth / 6) + 1), 
    bollardRadiusRatio: 0.012, 
    bollardHeightRatio: 0.08,  
    yOffset: 0, 
  });
  group.add(bollards);

  return group;
}
