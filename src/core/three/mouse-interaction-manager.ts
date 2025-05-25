
/**
 * @fileOverview Gerencia interações do mouse (clique e movimento) dentro da cena Three.js.
 *
 * Principal Responsabilidade:
 * Utilizar raycasting para detectar quais objetos 3D (equipamentos) são intersectados
 * pelo ponteiro do mouse. Com base nessa detecção, invoca callbacks para tratar
 * a seleção de equipamentos (em eventos de clique) e o realce de equipamentos
 * (em eventos de movimento do mouse, para efeito de hover).
 * Isso desacopla a lógica de detecção de interação da renderização principal da cena.
 *
 * Exporta:
 * - `processSceneClick`: Processa cliques do mouse para seleção.
 * - `processSceneMouseMove`: Processa movimentos do mouse para hover.
 */
import * as THREE from 'three';

// Instâncias reutilizáveis para raycasting para otimizar performance.
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

/**
 * Processa um evento de clique do mouse na cena para selecionar equipamento.
 * Realiza raycasting para identificar o equipamento clicado e chama o callback `onSelectEquipmentCallback`.
 *
 * @param {MouseEvent} event O evento de clique do mouse.
 * @param {HTMLDivElement} mountRefCurrent O elemento DOM atual onde a cena está montada.
 * @param {THREE.PerspectiveCamera} camera A câmera de perspectiva da cena.
 * @param {THREE.Object3D[]} equipmentMeshes Array de meshes 3D representando os equipamentos visíveis na cena.
 * @param {(tag: string | null, isMultiSelect: boolean) => void} onSelectEquipmentCallback Callback a ser chamado
 *        com a tag do equipamento selecionado (ou null se o clique foi em espaço vazio ou objeto não identificável)
 *        e um booleano indicando se a tecla Ctrl/Cmd (para seleção múltipla) estava pressionada.
 */
export function processSceneClick(
  event: MouseEvent,
  mountRefCurrent: HTMLDivElement,
  camera: THREE.PerspectiveCamera,
  equipmentMeshes: THREE.Object3D[],
  onSelectEquipmentCallback: (tag: string | null, isMultiSelect: boolean) => void
): void {
  if (!mountRefCurrent || !camera) {
    return;
  }

  const rect = mountRefCurrent.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(equipmentMeshes.filter(m => m.visible), true); // Considera apenas meshes visíveis

  const isMultiSelectModifierPressed = event.ctrlKey || event.metaKey;
  let tagToSelect: string | null = null;

  if (intersects.length > 0) {
    let selectedObject = intersects[0].object;
    // Navega para cima na hierarquia até encontrar o objeto com userData.tag (o mesh principal do equipamento)
    while (selectedObject.parent && !selectedObject.userData.tag) {
      if (selectedObject.parent instanceof THREE.Scene) break; // Evita ir além da cena
      selectedObject = selectedObject.parent;
    }
    if (selectedObject.userData.tag) {
      tagToSelect = selectedObject.userData.tag as string;
    }
  }

  if (typeof onSelectEquipmentCallback === 'function') {
    onSelectEquipmentCallback(tagToSelect, isMultiSelectModifierPressed);
  }
}

/**
 * Processa um evento de movimento do mouse na cena para detectar equipamento em hover.
 * Realiza raycasting para identificar o equipamento sob o cursor e chama o callback `setHoveredEquipmentTagCallback`.
 *
 * @param {MouseEvent} event O evento de movimento do mouse.
 * @param {HTMLDivElement} mountRefCurrent O elemento DOM atual onde a cena está montada.
 * @param {THREE.PerspectiveCamera} camera A câmera de perspectiva da cena.
 * @param {THREE.Object3D[]} equipmentMeshes Array de meshes 3D representando os equipamentos visíveis na cena.
 * @param {(tag: string | null) => void} setHoveredEquipmentTagCallback Callback para definir a tag do equipamento em hover.
 *        Chamado com a tag do equipamento ou null se nenhum equipamento estiver sob o cursor.
 */
export function processSceneMouseMove(
  event: MouseEvent,
  mountRefCurrent: HTMLDivElement,
  camera: THREE.PerspectiveCamera,
  equipmentMeshes: THREE.Object3D[],
  setHoveredEquipmentTagCallback: (tag: string | null) => void
): void {
  if (!mountRefCurrent || !camera) {
    return;
  }

  const rect = mountRefCurrent.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(equipmentMeshes.filter(m => m.visible), true); // Considera apenas meshes visíveis

  let foundHoverTag: string | null = null;
  if (intersects.length > 0) {
    let hoveredObjectCandidate = intersects[0].object;
    // Navega para cima na hierarquia até encontrar o objeto com userData.tag
    while (hoveredObjectCandidate.parent && !hoveredObjectCandidate.userData.tag) {
      if (hoveredObjectCandidate.parent instanceof THREE.Scene) break;
      hoveredObjectCandidate = hoveredObjectCandidate.parent;
    }
    if (hoveredObjectCandidate.userData.tag) {
      foundHoverTag = hoveredObjectCandidate.userData.tag as string;
    }
  }

  if (typeof setHoveredEquipmentTagCallback === 'function') {
    setHoveredEquipmentTagCallback(foundHoverTag);
  }
}

    