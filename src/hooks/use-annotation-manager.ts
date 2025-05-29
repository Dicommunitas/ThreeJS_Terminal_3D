
/**
 * Custom hook para gerenciar o estado e a lógica das anotações textuais dos equipamentos.
 *
 * Principal Responsabilidade:
 * Encapsular o estado das anotações (lista de anotações, estado do diálogo de edição)
 * e fornecer uma API (funções) para criar, ler, atualizar e excluir anotações
 * associadas a equipamentos específicos. Cada equipamento pode ter no máximo uma anotação.
 * Utiliza `useToast` para feedback ao usuário.
 * 
 * ```mermaid
 *   classDiagram
 *     class UseAnnotationManagerProps {
 *       +initialAnnotations: Annotation[]
 *       +equipmentData: Equipment[]
 *     }
 *     class UseAnnotationManagerReturn {
 *       +annotations: Annotation[]
 *       +isAnnotationDialogOpen: boolean
 *       +annotationTargetEquipment: Equipment | null
 *       +editingAnnotation: Annotation | null
 *       +handleOpenAnnotationDialog(equipment: Equipment | null): void
 *       +handleSaveAnnotation(text: string): void
 *       +handleDeleteAnnotation(equipmentTag: string): void
 *       +getAnnotationForEquipment(equipmentTag: string | null): Annotation | null
 *       +setAnnotations(annotations: Annotation[]): void
 *       +setIsAnnotationDialogOpen(isOpen: boolean): void
 *     }
 *     class Annotation {
 *
 *     }
 *     class Equipment {
 *
 *     }
 *     UseAnnotationManagerProps ..> Annotation
 *     UseAnnotationManagerProps ..> Equipment
 *     UseAnnotationManagerReturn ..> Annotation
 *     UseAnnotationManagerReturn ..> Equipment
 *     class useAnnotationManager {
 *
 *     }
 *     useAnnotationManager ..> useToast : uses
 * ```
 * 
 */
"use client";

import { useState, useCallback } from 'react';
import type { Annotation, Equipment } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

/**
 * Props para o hook `useAnnotationManager`.
 * @interface UseAnnotationManagerProps
 * @property {Annotation[]} [initialAnnotations=[]] - Lista inicial opcional de anotações para popular o estado.
 * @property {Equipment[]} equipmentData - Lista completa de todos os equipamentos. Usada para buscar nomes de
 *                                       equipamentos para mensagens de feedback (toasts) e para validar alvos.
 */
export interface UseAnnotationManagerProps {
  initialAnnotations?: Annotation[];
  equipmentData: Equipment[];
}

/**
 * Retorno do hook `useAnnotationManager`.
 * @interface UseAnnotationManagerReturn
 * @property {Annotation[]} annotations - A lista atual de todas as anotações.
 * @property {React.Dispatch<React.SetStateAction<Annotation[]>>} setAnnotations - Função para definir diretamente a lista de anotações (geralmente usada internamente ou para inicialização).
 * @property {boolean} isAnnotationDialogOpen - Indica se o diálogo de anotação está aberto.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAnnotationDialogOpen - Função para definir o estado de abertura/fechamento do diálogo.
 * @property {Equipment | null} annotationTargetEquipment - O equipamento que é o alvo atual para adicionar/editar uma anotação.
 * @property {Annotation | null} editingAnnotation - A anotação que está atualmente em edição no diálogo (null se for uma nova anotação).
 * @property {(equipment: Equipment | null) => void} handleOpenAnnotationDialog - Abre o diálogo de anotação para o equipamento fornecido.
 * @property {(text: string) => void} handleSaveAnnotation - Salva (cria ou atualiza) a anotação para o `annotationTargetEquipment`.
 * @property {(equipmentTag: string) => void} handleDeleteAnnotation - Exclui a anotação associada à tag do equipamento fornecida.
 * @property {(equipmentTag: string | null) => Annotation | null} getAnnotationForEquipment - Retorna a anotação para a tag do equipamento fornecida, ou null se não existir.
 */
export interface UseAnnotationManagerReturn {
  annotations: Annotation[];
  setAnnotations: React.Dispatch<React.SetStateAction<Annotation[]>>;
  isAnnotationDialogOpen: boolean;
  setIsAnnotationDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  annotationTargetEquipment: Equipment | null;
  editingAnnotation: Annotation | null;
  handleOpenAnnotationDialog: (equipment: Equipment | null) => void;
  handleSaveAnnotation: (text: string) => void;
  handleDeleteAnnotation: (equipmentTag: string) => void;
  getAnnotationForEquipment: (equipmentTag: string | null) => Annotation | null;
}

/**
 * Hook customizado para gerenciar anotações textuais associadas a equipamentos.
 * Permite adicionar, editar e excluir uma anotação por equipamento.
 * @param {UseAnnotationManagerProps} props As props do hook.
 * @returns {UseAnnotationManagerReturn} Um objeto contendo o estado das anotações e funções para manipulá-las.
 */
export function useAnnotationManager({ initialAnnotations = [], equipmentData }: UseAnnotationManagerProps): UseAnnotationManagerReturn {
  const [annotations, setAnnotations] = useState<Annotation[]>(initialAnnotations);
  const [isAnnotationDialogOpen, setIsAnnotationDialogOpen] = useState(false);
  const [annotationTargetEquipment, setAnnotationTargetEquipment] = useState<Equipment | null>(null);
  const [editingAnnotation, setEditingAnnotation] = useState<Annotation | null>(null);
  const { toast } = useToast();

  /**
   * Abre o diálogo de anotação para um equipamento específico.
   * Se o equipamento já possui uma anotação, preenche o diálogo para edição.
   * Se nenhum equipamento for fornecido ou o equipamento não for encontrado, exibe um toast de erro.
   * @param {Equipment | null} equipment O equipamento para o qual a anotação será gerenciada.
   */
  const handleOpenAnnotationDialog = useCallback((equipment: Equipment | null) => {
    if (equipment) {
      const existing = annotations.find(a => a.equipmentTag === equipment.tag);
      setEditingAnnotation(existing || null);
      setAnnotationTargetEquipment(equipment);
      setIsAnnotationDialogOpen(true);
    } else {
      // Defer toast call
      setTimeout(() => {
        toast({ title: "Nenhum Equipamento Selecionado", description: "Por favor, selecione um equipamento para gerenciar sua anotação.", variant: "destructive" });
      }, 0);
    }
  }, [annotations, toast]);

  /**
   * Salva uma anotação (nova ou existente) para o `annotationTargetEquipment`.
   * Atualiza a data de criação/modificação (`createdAt`) da anotação.
   * Fecha o diálogo e limpa os estados de edição após salvar.
   * Exibe um toast de confirmação.
   * @param {string} text O texto da anotação a ser salvo.
   */
  const handleSaveAnnotation = useCallback((text: string) => {
    if (!annotationTargetEquipment) return;

    const equipmentName = annotationTargetEquipment.name;
    const currentDate = new Date().toISOString(); // Formato ISO 8601 para data/hora
    let toastDescriptionMessage = "";

    setAnnotations(prevAnnotations => {
      const existingAnnotationIndex = prevAnnotations.findIndex(a => a.equipmentTag === annotationTargetEquipment.tag);
      let newAnnotationsList: Annotation[];
      
      if (existingAnnotationIndex > -1) {
        // Atualiza anotação existente
        newAnnotationsList = [...prevAnnotations];
        newAnnotationsList[existingAnnotationIndex] = {
          ...newAnnotationsList[existingAnnotationIndex],
          text: text,
          createdAt: currentDate, // Atualiza data de modificação
        };
        toastDescriptionMessage = `Anotação para ${equipmentName} atualizada.`;
      } else {
        // Cria nova anotação
        const newAnnotation: Annotation = {
          equipmentTag: annotationTargetEquipment.tag,
          text,
          createdAt: currentDate,
        };
        newAnnotationsList = [...prevAnnotations, newAnnotation];
        toastDescriptionMessage = `Anotação para ${equipmentName} adicionada.`;
      }
      return newAnnotationsList;
    });

    if (toastDescriptionMessage) {
      setTimeout(() => {
        toast({ title: "Anotação Salva", description: toastDescriptionMessage });
      }, 0);
    }

    setIsAnnotationDialogOpen(false);
    setEditingAnnotation(null);
    setAnnotationTargetEquipment(null);
  }, [annotationTargetEquipment, toast]);

  /**
   * Exclui a anotação de um equipamento específico.
   * Exibe um toast de confirmação ou de erro se nenhuma anotação for encontrada.
   * Se o diálogo de anotação estava aberto para o equipamento excluído, ele é fechado.
   * @param {string} equipmentTag A tag do equipamento cuja anotação será excluída.
   */
  const handleDeleteAnnotation = useCallback((equipmentTag: string) => {
    const equipment = equipmentData.find(e => e.tag === equipmentTag);
    if (!equipment) return; 

    let toastTitleMessage = "";
    let toastDescriptionMessage = "";
    let toastVariantValue: "default" | "destructive" | undefined = undefined;

    setAnnotations(prevAnnotations => {
      const newAnnotationsList = prevAnnotations.filter(a => a.equipmentTag !== equipmentTag);
      if (prevAnnotations.length === newAnnotationsList.length) {
        toastTitleMessage = "Nenhuma Anotação";
        toastDescriptionMessage = `Nenhuma anotação encontrada para ${equipment.name} para excluir.`;
        toastVariantValue = "destructive";
        return prevAnnotations;
      }
      toastTitleMessage = "Anotação Excluída";
      toastDescriptionMessage = `Anotação para ${equipment.name} foi excluída.`;
      return newAnnotationsList;
    });

    if (annotationTargetEquipment?.tag === equipmentTag) {
        setIsAnnotationDialogOpen(false);
        setEditingAnnotation(null);
        setAnnotationTargetEquipment(null);
    }

    if (toastTitleMessage && toastDescriptionMessage) {
      setTimeout(() => {
        toast({ title: toastTitleMessage, description: toastDescriptionMessage, variant: toastVariantValue });
      }, 0);
    }
  }, [toast, equipmentData, annotationTargetEquipment]);

  /**
   * Obtém a anotação para um equipamento específico.
   * @param {string | null} equipmentTag A tag do equipamento. Se null, retorna null.
   * @returns {Annotation | null} A anotação encontrada, ou null se não existir nenhuma para a tag fornecida.
   */
  const getAnnotationForEquipment = useCallback((equipmentTag: string | null): Annotation | null => {
    if (!equipmentTag) return null;
    return annotations.find(a => a.equipmentTag === equipmentTag) || null;
  }, [annotations]);

  return {
    annotations,
    setAnnotations,
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
