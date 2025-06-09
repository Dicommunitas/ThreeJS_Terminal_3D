
/**
 * Repositório em memória para gerenciar os dados da aplicação Terminal 3D.
 *
 * Principal Responsabilidade:
 * Atuar como a "fonte da verdade" para os dados de `Equipment` (equipamentos) e `Annotation` (anotações)
 * durante a execução da aplicação. Ele encapsula a lógica de armazenamento (usando Maps) e
 * fornece uma interface CRUD (Create, Read, Update, Delete) para acessar e modificar esses dados.
 *
 * Este repositório é auto-inicializável com os dados de `initialEquipment` e `initialAnnotations`
 * definidos em `src/core/data/initial-data.ts`.
 *
 * Exporta:
 * - `equipmentRepository`: Objeto com métodos para gerenciar equipamentos.
 * - `annotationRepository`: Objeto com métodos para gerenciar anotações.
 */
import type { Equipment, Annotation } from '@/lib/types';
import { initialEquipment, initialAnnotations as defaultInitialAnnotations } from '@/core/data/initial-data';

// Stores para os dados, usando Map para acesso eficiente por ID/tag.
let equipmentStore = new Map<string, Equipment>();
let annotationStore = new Map<string, Annotation>(); // Chave: equipmentTag

let isInitialized = false; // Flag para controlar a inicialização única

/**
 * Inicializa os repositórios com os dados iniciais.
 * Esta função é chamada automaticamente na primeira importação do módulo
 * e pode ser chamada manualmente para resetar os dados (e.g., em testes).
 */
function initializeRepository() {
  if (isInitialized) return;

  // console.log('[MemoryRepository] Initializing repository...');
  equipmentStore.clear();
  initialEquipment.forEach(eq => equipmentStore.set(eq.tag, { ...eq })); // Armazena cópias

  annotationStore.clear();
  defaultInitialAnnotations.forEach(an => annotationStore.set(an.equipmentTag, { ...an })); // Armazena cópias
  
  isInitialized = true;
  // console.log(`[MemoryRepository] Initialized with ${equipmentStore.size} equipment items and ${annotationStore.size} annotations.`);
}

// Garante a inicialização ao importar o módulo
initializeRepository();

/**
 * Objeto repositório para gerenciar dados de `Equipment`.
 */
export const equipmentRepository = {
  /**
   * Obtém um equipamento pela sua tag.
   * @param {string} tag - A tag do equipamento.
   * @returns {Equipment | undefined} O objeto do equipamento, ou undefined se não encontrado. Retorna uma cópia.
   */
  getEquipmentByTag: (tag: string): Equipment | undefined => {
    const equipment = equipmentStore.get(tag);
    return equipment ? { ...equipment } : undefined; // Retorna uma cópia para evitar mutação externa
  },

  /**
   * Obtém todos os equipamentos.
   * @returns {Equipment[]} Um array com todos os equipamentos. Retorna cópias.
   */
  getAllEquipment: (): Equipment[] => {
    return Array.from(equipmentStore.values()).map(eq => ({ ...eq })); // Retorna cópias
  },

  /**
   * Adiciona um novo equipamento. Se um equipamento com a mesma tag já existir,
   * ele será atualizado em vez de adicionar um novo.
   * @param {Equipment} equipment - O objeto do equipamento a ser adicionado.
   * @returns {Equipment} O equipamento adicionado (ou atualizado). Retorna uma cópia.
   */
  addEquipment: (equipment: Equipment): Equipment => {
    if (equipmentStore.has(equipment.tag)) {
      // console.warn(`[MemoryRepository] Equipment with tag ${equipment.tag} already exists. Updating instead.`);
      return equipmentRepository.updateEquipment(equipment.tag, equipment)!;
    }
    const newEquipment = { ...equipment }; // Cria uma cópia
    equipmentStore.set(equipment.tag, newEquipment);
    // console.log(`[MemoryRepository] Added equipment: ${equipment.tag}`);
    return { ...newEquipment }; // Retorna uma cópia
  },

  /**
   * Atualiza um equipamento existente.
   * @param {string} tag - A tag do equipamento a ser atualizado.
   * @param {Partial<Equipment>} updates - Um objeto com as propriedades do equipamento a serem atualizadas.
   *                                      A propriedade `tag` não pode ser alterada por este método.
   * @returns {Equipment | undefined} O equipamento atualizado, ou undefined se não encontrado. Retorna uma cópia.
   */
  updateEquipment: (tag: string, updates: Partial<Equipment>): Equipment | undefined => {
    const existingEquipment = equipmentStore.get(tag);
    if (!existingEquipment) {
      // console.warn(`[MemoryRepository] Update failed: Equipment with tag ${tag} not found.`);
      return undefined;
    }
    // Previne que a tag seja alterada durante uma atualização parcial
    const { tag: _tag, ...restOfUpdates } = updates;
    const updatedEquipment = { ...existingEquipment, ...restOfUpdates, tag: existingEquipment.tag }; // Garante que a tag original seja mantida
    
    equipmentStore.set(tag, updatedEquipment);
    // console.log(`[MemoryRepository] Updated equipment: ${tag}`);
    return { ...updatedEquipment }; // Retorna uma cópia
  },

  /**
   * Exclui um equipamento pela sua tag.
   * @param {string} tag - A tag do equipamento a ser excluído.
   * @returns {boolean} True se o equipamento foi excluído com sucesso, false caso contrário.
   */
  deleteEquipment: (tag: string): boolean => {
    const result = equipmentStore.delete(tag);
    // if (result) console.log(`[MemoryRepository] Deleted equipment: ${tag}`);
    // else console.warn(`[MemoryRepository] Delete failed: Equipment with tag ${tag} not found.`);
    return result;
  },

  /**
   * Método interno para redefinir os dados do repositório e recarregar os dados iniciais.
   * Útil para testes ou cenários de reset.
   */
  _resetAndLoadInitialData: () => {
    isInitialized = false; // Permite que initializeRepository rode novamente
    initializeRepository();
  }
};

/**
 * Objeto repositório para gerenciar dados de `Annotation`.
 */
export const annotationRepository = {
  /**
   * Obtém uma anotação pela tag do equipamento associado.
   * @param {string} equipmentTag - A tag do equipamento.
   * @returns {Annotation | undefined} A anotação, ou undefined se não encontrada. Retorna uma cópia.
   */
  getAnnotationByEquipmentTag: (equipmentTag: string): Annotation | undefined => {
    const annotation = annotationStore.get(equipmentTag);
    return annotation ? { ...annotation } : undefined; // Retorna uma cópia
  },

  /**
   * Obtém todas as anotações.
   * @returns {Annotation[]} Um array com todas as anotações. Retorna cópias.
   */
  getAllAnnotations: (): Annotation[] => {
    return Array.from(annotationStore.values()).map(an => ({ ...an })); // Retorna cópias
  },

  /**
   * Adiciona uma nova anotação ou atualiza uma existente se já houver uma para a mesma `equipmentTag`.
   * @param {Annotation} annotation - O objeto da anotação a ser adicionado/atualizado.
   * @returns {Annotation} A anotação adicionada/atualizada. Retorna uma cópia.
   */
  addOrUpdateAnnotation: (annotation: Annotation): Annotation => {
    const newAnnotation = { ...annotation }; // Cria uma cópia
    annotationStore.set(annotation.equipmentTag, newAnnotation);
    // console.log(`[MemoryRepository] Added/Updated annotation for: ${annotation.equipmentTag}`);
    return { ...newAnnotation }; // Retorna uma cópia
  },

  /**
   * Exclui uma anotação pela tag do equipamento associado.
   * @param {string} equipmentTag - A tag do equipamento cuja anotação será excluída.
   * @returns {boolean} True se a anotação foi excluída com sucesso, false caso contrário.
   */
  deleteAnnotation: (equipmentTag: string): boolean => {
    const result = annotationStore.delete(equipmentTag);
    // if (result) console.log(`[MemoryRepository] Deleted annotation for: ${equipmentTag}`);
    // else console.warn(`[MemoryRepository] Delete annotation failed: No annotation for ${equipmentTag}.`);
    return result;
  },

  /**
   * Inicializa explicitamente as anotações no repositório.
   * Limpa quaisquer anotações existentes e popula com as fornecidas.
   * @param {Annotation[]} annotations - Um array de anotações para inicializar o repositório.
   */
  initializeAnnotations: (annotations: Annotation[]) => {
    // console.log('[MemoryRepository] Initializing annotations explicitly with:', annotations);
    annotationStore.clear();
    annotations.forEach(an => annotationStore.set(an.equipmentTag, { ...an })); // Armazena cópias
    // console.log(`[MemoryRepository] Annotations initialized. Count: ${annotationStore.size}`);
  }
};
