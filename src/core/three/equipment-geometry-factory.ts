
/**
 * Fábrica para criar geometrias de equipamentos para a cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação de diferentes tipos de `THREE.BufferGeometry` ou `THREE.Group`
 * com base no tipo de equipamento (`item.type`) e suas dimensões (`item.size`, `item.radius`, `item.height`).
 * As funções aqui retornam apenas a estrutura geométrica (sem materiais aplicados).
 *
 */
import * as THREE from 'three';
import type { Equipment } from '@/lib/types';

// --- Funções Auxiliares para Subcomponentes ---

interface BollardConfig {
  parentWidth: number;
  parentDepth: number;
  parentHeight: number;
  bollardRadiusRatio?: number;
  bollardHeightRatio?: number;
  countPerSide: number;
  yOffset?: number;
}

function _createBollardsGroup(config: BollardConfig): THREE.Group {
  const group = new THREE.Group();
  const {
    parentWidth,
    parentDepth,
    parentHeight,
    bollardRadiusRatio = 0.02,
    bollardHeightRatio = 0.15,
    countPerSide,
    yOffset = 0,
  } = config;

  const bollardRadius = Math.min(parentWidth, parentDepth) * bollardRadiusRatio;
  const bollardHeight = parentHeight * bollardHeightRatio;
  const bollardGeo = new THREE.CylinderGeometry(bollardRadius, bollardRadius, bollardHeight, 8);

  for (let i = 0; i < countPerSide; i++) {
    const zPos = -parentDepth / 2 + (i * (parentDepth / (countPerSide > 1 ? countPerSide - 1 : 1)));
    
    const bollardLeft = new THREE.Mesh(bollardGeo.clone());
    bollardLeft.position.set(-parentWidth / 2 + bollardRadius * 2.5, yOffset + parentHeight / 2 + bollardHeight / 2, zPos);
    group.add(bollardLeft);

    const bollardRight = new THREE.Mesh(bollardGeo.clone());
    bollardRight.position.set(parentWidth / 2 - bollardRadius * 2.5, yOffset + parentHeight / 2 + bollardHeight / 2, zPos);
    group.add(bollardRight);
  }
  return group;
}

interface FenderConfig {
  parentWidth: number;
  parentDepth: number;
  parentHeight: number;
  fenderRadiusRatio?: number;
  fenderTubeRatio?: number;
  countPerSide: number;
  yOffset?: number;
}

function _createFendersGroup(config: FenderConfig): THREE.Group {
  const group = new THREE.Group();
  const {
    parentWidth,
    parentDepth,
    parentHeight,
    fenderRadiusRatio = 0.25,
    fenderTubeRatio = 0.25,
    countPerSide,
    yOffset = 0,
  } = config;

  const fenderRadius = Math.min(parentWidth, parentHeight, parentDepth) * fenderRadiusRatio;
  const fenderTubeRadius = fenderRadius * fenderTubeRatio;
  const fenderGeo = new THREE.TorusGeometry(fenderRadius, fenderTubeRadius, 8, 16);
  
  for (let i = 0; i < countPerSide; i++) {
    const zPosFender = -parentDepth / 2 + fenderRadius + (countPerSide > 1 ? (i * (parentDepth - 2 * fenderRadius) / (countPerSide - 1)) : 0);
    
    const fenderLeft = new THREE.Mesh(fenderGeo.clone());
    fenderLeft.position.set(-parentWidth / 2 - fenderTubeRadius + 0.05, yOffset + parentHeight / 2 - fenderRadius * 0.5, zPosFender);
    fenderLeft.rotation.y = Math.PI / 2;
    group.add(fenderLeft);

    const fenderRight = new THREE.Mesh(fenderGeo.clone());
    fenderRight.position.set(parentWidth / 2 + fenderTubeRadius - 0.05, yOffset + parentHeight / 2 - fenderRadius * 0.5, zPosFender);
    fenderRight.rotation.y = Math.PI / 2;
    group.add(fenderRight);
  }
  return group;
}

// --- Funções de Fábrica Específicas por Tipo de Equipamento ---

function _createTankGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const radius = item.radius || 2;
  const height = item.height || 4;

  const bodyGeo = new THREE.CylinderGeometry(radius, radius, height, 32);
  const bodyMesh = new THREE.Mesh(bodyGeo);
  group.add(bodyMesh);

  if (item.tankType === 'teto-fixo') {
    const roofHeight = radius * 0.5;
    const roofGeo = new THREE.ConeGeometry(radius, roofHeight, 32);
    const roofMesh = new THREE.Mesh(roofGeo);
    roofMesh.position.y = height / 2 + roofHeight / 2;
    group.add(roofMesh);
  }
  // Adicionar lógica para 'teto-flutuante-externo' e 'teto-flutuante-interno' se necessário
  return group;
}

function _createValveGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const radius = item.radius || 0.3;

  const bodyGeo = new THREE.SphereGeometry(radius, 16, 16);
  const bodyMesh = new THREE.Mesh(bodyGeo);
  group.add(bodyMesh);

  const actuatorRadius = radius * 0.5;
  const actuatorHeight = radius * 1.5;
  const actuatorGeo = new THREE.CylinderGeometry(actuatorRadius, actuatorRadius, actuatorHeight, 8);
  const actuatorMesh = new THREE.Mesh(actuatorGeo);
  actuatorMesh.position.y = radius + actuatorHeight / 2;
  group.add(actuatorMesh);
  return group;
}

function _createPumpGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const bodyWidth = item.size?.width || 0.8;
  const bodyHeight = item.size?.height || 0.8;
  const bodyDepth = item.size?.depth || 1.2;

  const bodyGeo = new THREE.BoxGeometry(bodyWidth, bodyHeight, bodyDepth);
  const bodyMesh = new THREE.Mesh(bodyGeo);
  group.add(bodyMesh);

  const motorSize = bodyHeight * 0.6;
  const motorGeo = new THREE.BoxGeometry(motorSize, motorSize, motorSize);
  const motorMesh = new THREE.Mesh(motorGeo);
  motorMesh.position.set(0, bodyHeight / 2 + motorSize / 2, 0);
  group.add(motorMesh);
  return group;
}

function _createBargeGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const hullWidth = item.size?.width || 8;
  const hullHeight = item.size?.height || 1.5;
  const hullDepth = item.size?.depth || 20;

  const hullGeo = new THREE.BoxGeometry(hullWidth, hullHeight, hullDepth);
  const hullMesh = new THREE.Mesh(hullGeo);
  // hullMesh.position.y = 0; // O centro do casco estará na origem do grupo. O posicionamento Y global é feito em createSingleEquipmentMesh
  group.add(hullMesh);

  const bollards = _createBollardsGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight,
    countPerSide: Math.max(2, Math.floor(hullDepth / 5) + 1),
    bollardRadiusRatio: 0.03,
    bollardHeightRatio: 0.4,
    yOffset: 0, // Bollards estão no convés (topo do casco)
  });
  group.add(bollards);

  const fenders = _createFendersGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight,
    countPerSide: Math.max(2, Math.floor(hullDepth / 6)),
    fenderRadiusRatio: 0.20, // Ajustado para barcaça
    fenderTubeRatio: 0.25,
    yOffset: 0, // Fenders ao longo da altura do casco
  });
  group.add(fenders);

  return group;
}

function _createShipGeometry(item: Equipment): THREE.Group {
  const group = new THREE.Group();
  const hullWidth = item.size?.width || 10;
  const hullHeight = item.size?.height || 4;
  const hullDepth = item.size?.depth || 40;

  const hullGeo = new THREE.BoxGeometry(hullWidth, hullHeight, hullDepth);
  const hullMesh = new THREE.Mesh(hullGeo);
  // hullMesh.position.y = 0; // O centro do casco na origem do grupo
  group.add(hullMesh);

  const superstructureWidth = hullWidth * 0.6;
  const superstructureHeight = hullHeight * 0.8;
  const superstructureDepth = hullDepth * 0.25;
  const superstructureGeo = new THREE.BoxGeometry(superstructureWidth, superstructureHeight, superstructureDepth);
  const superstructureMesh = new THREE.Mesh(superstructureGeo);
  superstructureMesh.position.set(0, hullHeight / 2 + superstructureHeight / 2, -hullDepth / 2 + superstructureDepth / 2 + hullDepth * 0.1);
  group.add(superstructureMesh);

  const bollards = _createBollardsGroup({
    parentWidth: hullWidth,
    parentDepth: hullDepth,
    parentHeight: hullHeight,
    countPerSide: Math.max(3, Math.floor(hullDepth / 8) + 1),
    yOffset: 0, // Bollards no convés
  });
  group.add(bollards);

  return group;
}

/**
 * Cria e retorna uma `THREE.BufferGeometry` ou `THREE.Group` apropriada para o tipo de equipamento.
 * Seleciona a geometria correta ou monta um grupo de geometrias
 * com base no `item.type` e utiliza as dimensões fornecidas no objeto `item`.
 * @param {Equipment} item - O objeto de equipamento contendo tipo e dimensões.
 * @returns {THREE.BufferGeometry | THREE.Group} A geometria ou grupo criado para o equipamento.
 *                                  Retorna um `BoxGeometry(1,1,1)` para tipos desconhecidos.
 */
export function createGeometryForItem(item: Equipment): THREE.BufferGeometry | THREE.Group {
  switch (item.type) {
    case 'Building':
      return new THREE.BoxGeometry(
        item.size?.width || 5,
        item.size?.height || 5,
        item.size?.depth || 5
      );
    case 'Crane':
      return new THREE.BoxGeometry(
        item.size?.width || 3,
        item.size?.height || 10,
        item.size?.depth || 3
      );
    case 'Tank':
      // A função _createTankGeometry já retorna um Group ou uma Geometry simples
      // dependendo do tankType. Se tankType não for 'teto-fixo', retorna um cilindro simples.
      if (item.tankType === 'teto-fixo') {
        return _createTankGeometry(item);
      }
      return new THREE.CylinderGeometry(item.radius || 2, item.radius || 2, item.height || 4, 32);

    case 'Pipe':
      return new THREE.CylinderGeometry(
        item.radius || 0.2,
        item.radius || 0.2,
        item.height || 5,
        16
      );
    case 'Valve':
      return _createValveGeometry(item);
    case 'Sphere':
      return new THREE.SphereGeometry(
        item.radius || 3,
        32,
        32
      );
    case 'Vessel':
      // A orientação (vertical/horizontal) é controlada pela propriedade 'rotation'
      // do objeto Equipment, aplicada em createSingleEquipmentMesh.
      return new THREE.CylinderGeometry(
        item.radius || 1,
        item.radius || 1,
        item.height || 3,
        32
      );
    case 'Pump':
      return _createPumpGeometry(item);
    case 'Barge':
      return _createBargeGeometry(item);
    case 'Ship':
      return _createShipGeometry(item);
    default:
      // Fallback para tipos desconhecidos
      console.warn(`Geometria desconhecida para o tipo de equipamento: ${item.type}. Usando BoxGeometry padrão.`);
      return new THREE.BoxGeometry(1, 1, 1);
  }
}

    