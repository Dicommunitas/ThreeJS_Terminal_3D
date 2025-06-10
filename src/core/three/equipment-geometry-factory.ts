
/**
 * Fábrica para criar geometrias de equipamentos para a cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação de diferentes tipos de `THREE.BufferGeometry` ou `THREE.Group`
 * com base no tipo de equipamento (`item.type`) e suas dimensões (`item.size`, `item.radius`, `item.height`).
 * Isso promove o Single Responsibility Principle, isolando a lógica de criação
 * de geometrias do componente `ThreeScene` ou outras partes do sistema.
 * Fornece uma geometria padrão (BoxGeometry) caso um tipo de equipamento desconhecido não manuseado como grupo.
 *
 */
import * as THREE from 'three';
import type { Equipment } from '@/lib/types';

/**
 * Cria e retorna uma `THREE.BufferGeometry` ou `THREE.Group` apropriada para o tipo de equipamento.
 * Seleciona a geometria correta (Box, Cylinder, Sphere) ou monta um grupo de geometrias
 * com base no `item.type` e utiliza as dimensões fornecidas no objeto `item`.
 * @param {Equipment} item - O objeto de equipamento contendo tipo e dimensões.
 * @returns {THREE.BufferGeometry | THREE.Group} A geometria ou grupo criado para o equipamento.
 *                                  Retorna um `BoxGeometry(1,1,1)` para tipos desconhecidos não manuseados como grupo.
 */
export function createGeometryForItem(item: Equipment): THREE.BufferGeometry | THREE.Group {
  let geometryOrGroup: THREE.BufferGeometry | THREE.Group;

  switch (item.type) {
    case 'Building':
      geometryOrGroup = new THREE.BoxGeometry(
        item.size?.width || 5,
        item.size?.height || 5,
        item.size?.depth || 5
      );
      break;
    case 'Crane':
      geometryOrGroup = new THREE.BoxGeometry(
        item.size?.width || 3,
        item.size?.height || 10,
        item.size?.depth || 3
      );
      break;
    case 'Tank':
      const tankGroup = new THREE.Group();
      const tankBody = new THREE.CylinderGeometry(
        item.radius || 2,
        item.radius || 2,
        item.height || 4,
        32
      );
      const tankBodyMesh = new THREE.Mesh(tankBody); 
      tankGroup.add(tankBodyMesh);

      if (item.tankType === 'teto-fixo') {
        const roofHeight = (item.radius || 2) * 0.5;
        const tankRoof = new THREE.ConeGeometry(item.radius || 2, roofHeight, 32);
        const tankRoofMesh = new THREE.Mesh(tankRoof);
        tankRoofMesh.position.y = (item.height || 4) / 2 + roofHeight / 2;
        tankGroup.add(tankRoofMesh);
      }
      geometryOrGroup = tankGroup;
      break;
    case 'Pipe':
      geometryOrGroup = new THREE.CylinderGeometry(
        item.radius || 0.2,
        item.radius || 0.2,
        item.height || 5, 
        16
      );
      break;
    case 'Valve':
      const valveGroup = new THREE.Group();
      const valveBody = new THREE.SphereGeometry(item.radius || 0.3, 16, 16);
      const valveBodyMesh = new THREE.Mesh(valveBody);
      valveGroup.add(valveBodyMesh);

      const actuatorRadius = (item.radius || 0.3) * 0.5;
      const actuatorHeight = (item.radius || 0.3) * 1.5;
      const valveActuator = new THREE.CylinderGeometry(actuatorRadius, actuatorRadius, actuatorHeight, 8);
      const valveActuatorMesh = new THREE.Mesh(valveActuator);
      valveActuatorMesh.position.y = (item.radius || 0.3) + actuatorHeight / 2;
      valveGroup.add(valveActuatorMesh);
      geometryOrGroup = valveGroup;
      break;
    case 'Sphere':
      geometryOrGroup = new THREE.SphereGeometry(
        item.radius || 3,
        32,
        32
      );
      break;
    case 'Vessel':
      geometryOrGroup = new THREE.CylinderGeometry(
        item.radius || 1,
        item.radius || 1,
        item.height || 3,
        32
      );
      break;
    case 'Pump':
      const pumpGroup = new THREE.Group();
      const pumpBodyGeo = new THREE.BoxGeometry(
        item.size?.width || 0.8,
        item.size?.height || 0.8,
        item.size?.depth || 1.2
      );
      const pumpBodyMesh = new THREE.Mesh(pumpBodyGeo);
      pumpGroup.add(pumpBodyMesh);

      const motorSize = (item.size?.height || 0.8) * 0.6;
      const motorGeo = new THREE.BoxGeometry(motorSize, motorSize, motorSize);
      const motorMesh = new THREE.Mesh(motorGeo);
      motorMesh.position.set(0, (item.size?.height || 0.8) / 2 + motorSize / 2, 0);
      pumpGroup.add(motorMesh);
      geometryOrGroup = pumpGroup;
      break;
    
    case 'Barge':
      const bargeGroup = new THREE.Group();
      const bargeHullWidth = item.size?.width || 8;
      const bargeHullHeight = item.size?.height || 1.5; // Flatter hull
      const bargeHullDepth = item.size?.depth || 20;

      const bargeHullGeo = new THREE.BoxGeometry(bargeHullWidth, bargeHullHeight, bargeHullDepth);
      const bargeHullMesh = new THREE.Mesh(bargeHullGeo);
      bargeHullMesh.position.y = 0; // Hull center at y=0 for barge
      bargeGroup.add(bargeHullMesh);

      // Add Bollards
      const bollardRadius = Math.min(bargeHullWidth, bargeHullDepth) * 0.03;
      const bollardHeight = bargeHullHeight * 0.4;
      const bollardGeo = new THREE.CylinderGeometry(bollardRadius, bollardRadius, bollardHeight, 8);
      const numBollardsPerSide = Math.max(2,Math.floor(bargeHullDepth / (bollardRadius * 25)) +1); // Ensure at least 2

      for (let i = 0; i < numBollardsPerSide; i++) {
        const zPos = -bargeHullDepth / 2 + (i * (bargeHullDepth / (numBollardsPerSide -1 + (numBollardsPerSide===1 ? 1:0) ))) ; // Distribute along depth
        
        const bollardLeft = new THREE.Mesh(bollardGeo.clone());
        bollardLeft.position.set(-bargeHullWidth / 2 + bollardRadius * 2.5, bargeHullHeight / 2 + bollardHeight / 2, zPos);
        bargeGroup.add(bollardLeft);

        const bollardRight = new THREE.Mesh(bollardGeo.clone());
        bollardRight.position.set(bargeHullWidth / 2 - bollardRadius * 2.5, bargeHullHeight / 2 + bollardHeight / 2, zPos);
        bargeGroup.add(bollardRight);
      }
      
      // Add Tire Fenders
      const fenderRadius = Math.min(bargeHullWidth, bargeHullHeight, bargeHullDepth) * 0.25;
      const fenderTubeRadius = fenderRadius * 0.25;
      const fenderGeo = new THREE.TorusGeometry(fenderRadius, fenderTubeRadius, 8, 16);
      const numFendersPerSide = Math.max(2,Math.floor(bargeHullDepth / (fenderRadius * 2.5)));

      for (let i = 0; i < numFendersPerSide; i++) {
        const zPosFender = -bargeHullDepth / 2 + fenderRadius + (i * (bargeHullDepth - 2 * fenderRadius) / (numFendersPerSide -1 + (numFendersPerSide===1 ? 1:0) )) ;
        
        const fenderLeft = new THREE.Mesh(fenderGeo.clone());
        fenderLeft.position.set(-bargeHullWidth / 2 - fenderTubeRadius + 0.05, bargeHullHeight / 2 - fenderRadius * 0.5 , zPosFender);
        fenderLeft.rotation.y = Math.PI / 2;
        bargeGroup.add(fenderLeft);

        const fenderRight = new THREE.Mesh(fenderGeo.clone());
        fenderRight.position.set(bargeHullWidth / 2 + fenderTubeRadius - 0.05, bargeHullHeight / 2 - fenderRadius * 0.5, zPosFender);
        fenderRight.rotation.y = Math.PI / 2;
        bargeGroup.add(fenderRight);
      }

      geometryOrGroup = bargeGroup;
      break;

    case 'Ship':
      const shipGroup = new THREE.Group();
      const shipHullWidth = item.size?.width || 10;
      const shipHullHeight = item.size?.height || 4;
      const shipHullDepth = item.size?.depth || 40;

      const shipHullGeo = new THREE.BoxGeometry(shipHullWidth, shipHullHeight, shipHullDepth);
      const shipHullMesh = new THREE.Mesh(shipHullGeo);
      shipHullMesh.position.y = 0; // Hull center at y=0
      shipGroup.add(shipHullMesh);

      // Superstructure
      const superstructureWidth = shipHullWidth * 0.6;
      const superstructureHeight = shipHullHeight * 0.8; // Relative to hull height
      const superstructureDepth = shipHullDepth * 0.25;
      const superstructureGeo = new THREE.BoxGeometry(superstructureWidth, superstructureHeight, superstructureDepth);
      const superstructureMesh = new THREE.Mesh(superstructureGeo);
      // Position superstructure towards the stern, on top of the hull
      superstructureMesh.position.set(0, shipHullHeight / 2 + superstructureHeight / 2, -shipHullDepth / 2 + superstructureDepth / 2 + shipHullDepth * 0.1);
      shipGroup.add(superstructureMesh);
      
      // Add Bollards to Ship
      const shipBollardRadius = Math.min(shipHullWidth, shipHullDepth) * 0.02;
      const shipBollardHeight = shipHullHeight * 0.15;
      const shipBollardGeo = new THREE.CylinderGeometry(shipBollardRadius, shipBollardRadius, shipBollardHeight, 8);
      const numShipBollardsSide = Math.max(3,Math.floor(shipHullDepth / (shipBollardRadius * 30)) +1);

      for (let i = 0; i < numShipBollardsSide; i++) {
        const zPosB = -shipHullDepth / 2 + (i * (shipHullDepth / (numShipBollardsSide -1 + (numShipBollardsSide===1 ? 1:0) )));
        const bollardL = new THREE.Mesh(shipBollardGeo.clone());
        bollardL.position.set(-shipHullWidth / 2 + shipBollardRadius * 3, shipHullHeight / 2 + shipBollardHeight / 2, zPosB);
        shipGroup.add(bollardL);

        const bollardR = new THREE.Mesh(shipBollardGeo.clone());
        bollardR.position.set(shipHullWidth / 2 - shipBollardRadius * 3, shipHullHeight / 2 + shipBollardHeight / 2, zPosB);
        shipGroup.add(bollardR);
      }

      geometryOrGroup = shipGroup;
      break;
    default:
      geometryOrGroup = new THREE.BoxGeometry(1, 1, 1);
      break;
  }

  return geometryOrGroup;
}

