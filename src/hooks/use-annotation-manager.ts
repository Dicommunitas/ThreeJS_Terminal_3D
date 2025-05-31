
"use client";

import { useState, useCallback, useEffect } from 'react';
import type { Annotation, Equipment } from '@/lib/types';
import { annotationRepository, equipmentRepository } from '@/core/repository/memory-repository';
import { useToast } from '@/hooks/use-toast';

export interface UseAnnotationManagerProps {
  initialAnnotations?: Annotation[]; // Mantido para consistência, pode ser usado para uma inicialização única.
  // equipmentData agora é obtido do repositório, não mais como prop direta para este hook.
}

export interface UseAnnotationManagerReturn {
  annotations: Annotation[];
  isAnnotationDialogOpen: boolean;
  annotationTargetEquipment: Equipment | null;
  editingAnnotation: Annotation | null;
  handleOpenAnnotationDialog: (equipment: Equipment | null) => void;
  handleSaveAnnotation: (text: string) => void;
  handleDeleteAnnotation: (equipmentTag: string) => void;
  getAnnotationForEquipment: (equipmentTag: string | null) => Annotation | null;
  setIsAnnotationDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setAnnotations não é mais exposto, pois as modificações devem passar pelo repositório.
}

export function useAnnotationManager({ initialAnnotations = [] }: UseAnnotationManagerProps): UseAnnotationManagerReturn {
  const [annotations, setAnnotationsState] = useState<Annotation[]>(() => annotationRepository.getAllAnnotations());
  const [isAnnotationDialogOpen, setIsAnnotationDialogOpen] = useState(false);
  const [annotationTargetEquipment, setAnnotationTargetEquipment] = useState<Equipment | null>(null);
  const [editingAnnotation, setEditingAnnotation] = useState<Annotation | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // O repositório é auto-inicializável. Este efeito garante que o estado do hook
    // esteja em sincronia com o repositório quando o componente é montado.
    // Atualizações subsequentes ao repositório (por exemplo, via addOrUpdateAnnotation)
    // irão acionar refreshAnnotationsFromRepo, que chama setAnnotationsState.
    setAnnotationsState(annotationRepository.getAllAnnotations());
    // console.log('[useAnnotationManager] Synced annotations from repository on mount.');
  }, []); // Array de dependências vazio: executa apenas na montagem para obter o estado inicial do repo

  const refreshAnnotationsFromRepo = useCallback(() => {
    setAnnotationsState(annotationRepository.getAllAnnotations());
    // console.log('[useAnnotationManager] Annotations refreshed from repository.');
  }, []);

  const handleOpenAnnotationDialog = useCallback((equipment: Equipment | null) => {
    if (equipment) {
      const existing = annotationRepository.getAnnotationByEquipmentTag(equipment.tag);
      setEditingAnnotation(existing || null);
      setAnnotationTargetEquipment(equipment);
      setIsAnnotationDialogOpen(true);
    } else {
      setTimeout(() => {
        toast({ title: "Nenhum Equipamento Selecionado", description: "Por favor, selecione um equipamento para gerenciar sua anotação.", variant: "destructive" });
      }, 0);
    }
  }, [toast]);

  const handleSaveAnnotation = useCallback((text: string) => {
    if (!annotationTargetEquipment) return;

    const equipmentName = annotationTargetEquipment.name;
    const currentDate = new Date().toISOString();
    
    const annotationToSave: Annotation = {
      equipmentTag: annotationTargetEquipment.tag,
      text,
      createdAt: currentDate,
    };

    annotationRepository.addOrUpdateAnnotation(annotationToSave);
    refreshAnnotationsFromRepo(); // Atualiza o estado local

    const toastDescriptionMessage = editingAnnotation
        ? `Anotação para ${equipmentName} atualizada.`
        : `Anotação para ${equipmentName} adicionada.`;
    
    setTimeout(() => {
      toast({ title: "Anotação Salva", description: toastDescriptionMessage });
    }, 0);

    setIsAnnotationDialogOpen(false);
    setEditingAnnotation(null);
    setAnnotationTargetEquipment(null);
  }, [annotationTargetEquipment, editingAnnotation, toast, refreshAnnotationsFromRepo]);

  const handleDeleteAnnotation = useCallback((equipmentTag: string) => {
    const equipment = equipmentRepository.getEquipmentByTag(equipmentTag); // Busca do repo de equipamentos
    if (!equipment) return; 

    const success = annotationRepository.deleteAnnotation(equipmentTag);
    
    let toastTitleMessage = "";
    let toastDescriptionMessage = "";
    let toastVariantValue: "default" | "destructive" | undefined = undefined;

    if (success) {
      refreshAnnotationsFromRepo(); // Atualiza o estado local
      toastTitleMessage = "Anotação Excluída";
      toastDescriptionMessage = `Anotação para ${equipment.name} foi excluída.`;
      if (annotationTargetEquipment?.tag === equipmentTag) {
          setIsAnnotationDialogOpen(false);
          setEditingAnnotation(null);
          setAnnotationTargetEquipment(null);
      }
    } else {
      toastTitleMessage = "Nenhuma Anotação";
      toastDescriptionMessage = `Nenhuma anotação encontrada para ${equipment.name} para excluir.`;
      toastVariantValue = "destructive";
    }
    
    setTimeout(() => {
      toast({ title: toastTitleMessage, description: toastDescriptionMessage, variant: toastVariantValue });
    }, 0);
  }, [toast, annotationTargetEquipment, refreshAnnotationsFromRepo]);

  const getAnnotationForEquipment = useCallback((equipmentTag: string | null): Annotation | null => {
    if (!equipmentTag) return null;
    return annotationRepository.getAnnotationByEquipmentTag(equipmentTag) || null;
  }, []);

  return {
    annotations,
    isAnnotationDialogOpen,
    setIsAnnotationDialogOpen,
    annotationTargetEquipment,
    editingAnnotation,
    handleOpenAnnotationDialog,
    handleSaveAnnotation,
    handleDeleteAnnotation,
    getAnnotationForEquipment,
  };
}
