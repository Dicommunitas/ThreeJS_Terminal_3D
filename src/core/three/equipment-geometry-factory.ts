
/**
 * Fábrica para criar geometrias de equipamentos para a cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação de diferentes tipos de `THREE.BufferGeometry` ou `THREE.Group`
 * com base no tipo de equipamento (`item.type`) e suas dimensões (`item.size`, `item.radius`, `item.height`).
 * Isso promove o Single Responsibility Principle, isolando a lógica de criação
 * de geometrias do componente `ThreeScene` ou outras partes do sistema.
 * Fornece uma geometria padrão (BoxGeometry) caso um tipo de equipamento desconhecido seja fornecido.
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
      const tankBodyMesh = new THREE.Mesh(tankBody); // Material will be applied later
      tankGroup.add(tankBodyMesh);

      if (item.tankType === 'teto-fixo') {
        const roofHeight = (item.radius || 2) * 0.5;
        const tankRoof = new THREE.ConeGeometry(item.radius || 2, roofHeight, 32);
        const tankRoofMesh = new THREE.Mesh(tankRoof);
        tankRoofMesh.position.y = (item.height || 4) / 2 + roofHeight / 2;
        tankGroup.add(tankRoofMesh);
      }
      // Teto flutuante pode ser apenas o corpo do cilindro ou uma representação mais complexa no futuro.
      geometryOrGroup = tankGroup;
      break;
    case 'Pipe':
      geometryOrGroup = new THREE.CylinderGeometry(
        item.radius || 0.2,
        item.radius || 0.2,
        item.height || 5, // Comprimento do tubo
        16
      );
      break;
    case 'Valve':
      const valveGroup = new THREE.Group();
      const valveBody = new THREE.SphereGeometry(item.radius || 0.3, 16, 16);
      const valveBodyMesh = new THREE.Mesh(valveBody);
      valveGroup.add(valveBodyMesh);

      // Atuador/Volante simplificado
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
      // A orientação (vertical/horizontal) é aplicada pela rotação do THREE.Object3D na cena.
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

      // Motor simplificado
      const motorSize = (item.size?.height || 0.8) * 0.6;
      const motorGeo = new THREE.BoxGeometry(motorSize, motorSize, motorSize);
      const motorMesh = new THREE.Mesh(motorGeo);
      motorMesh.position.set(0, (item.size?.height || 0.8) / 2 + motorSize / 2, 0); // Exemplo de posicionamento
      pumpGroup.add(motorMesh);
      geometryOrGroup = pumpGroup;
      break;
    case 'Ship':
    case 'Barge':
      const shipGroup = new THREE.Group();
      const hullGeo = new THREE.BoxGeometry(
        item.size?.width || 8,
        item.size?.height || 3,
        item.size?.depth || 20
      );
      const hullMesh = new THREE.Mesh(hullGeo);
      shipGroup.add(hullMesh);

      // Superestrutura simplificada
      const superstructureWidth = (item.size?.width || 8) * 0.7;
      const superstructureHeight = (item.size?.height || 3) * 1.2;
      const superstructureDepth = (item.size?.depth || 20) * 0.2;
      const superstructureGeo = new THREE.BoxGeometry(superstructureWidth, superstructureHeight, superstructureDepth);
      const superstructureMesh = new THREE.Mesh(superstructureGeo);
      // Posiciona a superestrutura em uma das extremidades do casco
      superstructureMesh.position.set(0, (item.size?.height || 3) / 2 + superstructureHeight / 2, (item.size?.depth || 20) / 2 - superstructureDepth / 2 - (item.size?.depth || 20)*0.1);
      shipGroup.add(superstructureMesh);
      geometryOrGroup = shipGroup;
      break;
    default:
      geometryOrGroup = new THREE.BoxGeometry(1, 1, 1);
      break;
  }

  if (geometryOrGroup instanceof THREE.BufferGeometry && geometryOrGroup.boundingBox) {
    // O cálculo do bounding box para Groups é mais complexo e geralmente feito no Group.
    // Para BufferGeometry, podemos calcular aqui se necessário para logs, mas a cena já o faz.
  }

  return geometryOrGroup;
}
