
import type { Equipment, Annotation } from '@/lib/types';
import { initialEquipment, initialAnnotations as defaultInitialAnnotations } from '@/core/data/initial-data';

let equipmentStore = new Map<string, Equipment>();
let annotationStore = new Map<string, Annotation>(); // equipmentTag as key

let isInitialized = false;

function initializeRepository() {
  if (isInitialized) return;

  // console.log('[MemoryRepository] Initializing repository...');
  equipmentStore.clear();
  initialEquipment.forEach(eq => equipmentStore.set(eq.tag, { ...eq }));

  annotationStore.clear();
  defaultInitialAnnotations.forEach(an => annotationStore.set(an.equipmentTag, { ...an }));
  
  isInitialized = true;
  // console.log(`[MemoryRepository] Initialized with ${equipmentStore.size} equipment items and ${annotationStore.size} annotations.`);
}

// Garante a inicialização ao importar o módulo
initializeRepository();

export const equipmentRepository = {
  getEquipmentByTag: (tag: string): Equipment | undefined => {
    const equipment = equipmentStore.get(tag);
    return equipment ? { ...equipment } : undefined; // Retorna uma cópia para evitar mutação externa
  },
  getAllEquipment: (): Equipment[] => {
    return Array.from(equipmentStore.values()).map(eq => ({ ...eq })); // Retorna cópias
  },
  addEquipment: (equipment: Equipment): Equipment => {
    if (equipmentStore.has(equipment.tag)) {
      // console.warn(`[MemoryRepository] Equipment with tag ${equipment.tag} already exists. Updating instead.`);
      return equipmentRepository.updateEquipment(equipment.tag, equipment)!;
    }
    const newEquipment = { ...equipment };
    equipmentStore.set(equipment.tag, newEquipment);
    // console.log(`[MemoryRepository] Added equipment: ${equipment.tag}`);
    return { ...newEquipment };
  },
  updateEquipment: (tag: string, updates: Partial<Equipment>): Equipment | undefined => {
    const existingEquipment = equipmentStore.get(tag);
    if (!existingEquipment) {
      // console.warn(`[MemoryRepository] Update failed: Equipment with tag ${tag} not found.`);
      return undefined;
    }
    // Previne que a tag seja alterada durante uma atualização parcial
    const { tag: _tag, ...restOfUpdates } = updates;
    const updatedEquipment = { ...existingEquipment, ...restOfUpdates, tag: existingEquipment.tag };
    
    equipmentStore.set(tag, updatedEquipment);
    // console.log(`[MemoryRepository] Updated equipment: ${tag}`);
    return { ...updatedEquipment };
  },
  deleteEquipment: (tag: string): boolean => {
    const result = equipmentStore.delete(tag);
    // if (result) console.log(`[MemoryRepository] Deleted equipment: ${tag}`);
    // else console.warn(`[MemoryRepository] Delete failed: Equipment with tag ${tag} not found.`);
    return result;
  },
  // Método para redefinir/recarregar dados (útil para testes ou cenários específicos)
  _resetAndLoadInitialData: () => {
    isInitialized = false;
    initializeRepository();
  }
};

export const annotationRepository = {
  getAnnotationByEquipmentTag: (equipmentTag: string): Annotation | undefined => {
    const annotation = annotationStore.get(equipmentTag);
    return annotation ? { ...annotation } : undefined;
  },
  getAllAnnotations: (): Annotation[] => {
    return Array.from(annotationStore.values()).map(an => ({ ...an }));
  },
  addOrUpdateAnnotation: (annotation: Annotation): Annotation => {
    const newAnnotation = { ...annotation };
    annotationStore.set(annotation.equipmentTag, newAnnotation);
    // console.log(`[MemoryRepository] Added/Updated annotation for: ${annotation.equipmentTag}`);
    return { ...newAnnotation };
  },
  deleteAnnotation: (equipmentTag: string): boolean => {
    const result = annotationStore.delete(equipmentTag);
    // if (result) console.log(`[MemoryRepository] Deleted annotation for: ${equipmentTag}`);
    // else console.warn(`[MemoryRepository] Delete annotation failed: No annotation for ${equipmentTag}.`);
    return result;
  },
  initializeAnnotations: (annotations: Annotation[]) => {
    // console.log('[MemoryRepository] Initializing annotations explicitly with:', annotations);
    annotationStore.clear();
    annotations.forEach(an => annotationStore.set(an.equipmentTag, { ...an }));
    // console.log(`[MemoryRepository] Annotations initialized. Count: ${annotationStore.size}`);
  }
};

    