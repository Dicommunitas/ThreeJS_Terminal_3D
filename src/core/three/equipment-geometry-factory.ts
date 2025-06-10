
/**
 * Fábrica para criar geometrias de equipamentos para a cena Three.js.
 *
 * Principal Responsabilidade:
 * Encapsular a lógica de criação de diferentes tipos de `THREE.BufferGeometry`
 * com base no tipo de equipamento (`item.type`) e suas dimensões (`item.size`, `item.radius`, `item.height`).
 * Isso promove o Single Responsibility Principle, isolando a lógica de criação
 * de geometrias do componente `ThreeScene` ou outras partes do sistema.
 * Fornece uma geometria padrão (BoxGeometry) caso um tipo de equipamento desconhecido seja fornecido.
 *
 */
import * as THREE from 'three';
import type { Equipment } from '@/lib/types';

/**
 * Cria e retorna uma `THREE.BufferGeometry` apropriada para o tipo de equipamento.
 * Seleciona a geometria correta (Box, Cylinder, Sphere) com base no `item.type`
 * e utiliza as dimensões fornecidas no objeto `item`.
 * @param {Equipment} item - O objeto de equipamento contendo tipo e dimensões.
 * @returns {THREE.BufferGeometry} A geometria criada para o equipamento.
 *                                  Retorna um `BoxGeometry(1,1,1)` para tipos desconhecidos.
 */
export function createGeometryForItem(item: Equipment): THREE.BufferGeometry {
  let geometry: THREE.BufferGeometry;

  switch (item.type) {
    case 'Building':
      geometry = new THREE.BoxGeometry(
        item.size?.width || 5,
        item.size?.height || 5,
        item.size?.depth || 5
      );
      break;
    case 'Crane':
      geometry = new THREE.BoxGeometry(
        item.size?.width || 3,
        item.size?.height || 10,
        item.size?.depth || 3
      );
      break;
    case 'Tank':
      geometry = new THREE.CylinderGeometry(
        item.radius || 2,
        item.radius || 2,
        item.height || 4,
        32 // Segmentos radiais
      );
      break;
    case 'Pipe':
      geometry = new THREE.CylinderGeometry(
        item.radius || 0.2,
        item.radius || 0.2,
        item.height || 5, // Comprimento do tubo
        16 // Segmentos radiais
      );
      break;
    case 'Valve':
      geometry = new THREE.SphereGeometry(
        item.radius || 0.3,
        16, // Segmentos de largura
        16  // Segmentos de altura
      );
      break;
    case 'Sphere':
      geometry = new THREE.SphereGeometry(
        item.radius || 3,
        32, // Segmentos de largura
        32  // Segmentos de altura
      );
      break;
    case 'Vessel': // Vaso
      geometry = new THREE.CylinderGeometry(
        item.radius || 1,
        item.radius || 1,
        item.height || 3,
        32
      );
      // A orientação (vertical/horizontal) seria aplicada na rotação do Mesh, não na geometria em si.
      break;
    case 'Pump': // Bomba
      geometry = new THREE.BoxGeometry(
        item.size?.width || 0.8,
        item.size?.height || 0.8,
        item.size?.depth || 1.2
      );
      break;
    case 'Ship': // Navio
    case 'Barge': // Barcaça
      geometry = new THREE.BoxGeometry(
        item.size?.width || 8,
        item.size?.height || 3,
        item.size?.depth || 20
      );
      break;
    default:
      // console.warn(`[GeometryFactory] Tipo de equipamento desconhecido: ${item.type}. Usando cubo padrão.`);
      geometry = new THREE.BoxGeometry(1, 1, 1);
      break;
  }

  geometry.computeBoundingBox();
  if (geometry.boundingBox) {
    const size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);
    // console.log(`[createGeometryForItem] Geometry for ${item.tag} (${item.type}). Original Geo Size: ${size.x.toFixed(2)},${size.y.toFixed(2)},${size.z.toFixed(2)}`);
  } else {
    // console.log(`[createGeometryForItem] Geometry for ${item.tag} (${item.type}). Could not compute bounding box.`);
  }

  return geometry;
}

