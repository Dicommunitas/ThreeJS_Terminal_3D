
"use client";

import { useState, useCallback, useEffect } from 'react';
import type { Equipment } from '@/lib/types';
import { equipmentRepository } from '@/core/repository/memory-repository';
import { useToast } from '@/hooks/use-toast';

export interface UseEquipmentDataManagerReturn {
  equipmentData: Equipment[];
  handleOperationalStateChange: (equipmentTag: string, newState: string) => void;
  handleProductChange: (equipmentTag: string, newProduct: string) => void;
  refreshEquipmentData: () => void; // Adicionado para recarregar os dados se necessário
}

export function useEquipmentDataManager(): UseEquipmentDataManagerReturn {
  const [equipmentData, setEquipmentData] = useState<Equipment[]>(() => equipmentRepository.getAllEquipment());
  const { toast } = useToast();

  // Efeito para garantir que os dados iniciais sejam carregados se o repositório for inicializado após o hook.
  // Ou se os dados no repositório forem resetados.
  useEffect(() => {
    setEquipmentData(equipmentRepository.getAllEquipment());
    // console.log('[useEquipmentDataManager] Initial data loaded from repository.');
  }, []);

  const refreshEquipmentData = useCallback(() => {
    setEquipmentData(equipmentRepository.getAllEquipment());
    // console.log('[useEquipmentDataManager] Data refreshed from repository.');
  }, []);

  const handleOperationalStateChange = useCallback((equipmentTag: string, newState: string) => {
    const updatedEquipment = equipmentRepository.updateEquipment(equipmentTag, { operationalState: newState });
    if (updatedEquipment) {
      setEquipmentData(equipmentRepository.getAllEquipment()); // Atualiza o estado local com todos os dados do repositório
      toast({ title: "Estado Atualizado", description: `Estado de ${updatedEquipment.name || 'Equipamento'} alterado para ${newState}.` });
    } else {
      toast({ title: "Erro", description: `Equipamento com TAG ${equipmentTag} não encontrado.`, variant: "destructive" });
    }
  }, [toast]);

  const handleProductChange = useCallback((equipmentTag: string, newProduct: string) => {
    const updatedEquipment = equipmentRepository.updateEquipment(equipmentTag, { product: newProduct });
    if (updatedEquipment) {
      setEquipmentData(equipmentRepository.getAllEquipment()); // Atualiza o estado local
      toast({ title: "Produto Atualizado", description: `Produto de ${updatedEquipment.name || 'Equipamento'} alterado para ${newProduct}.` });
    } else {
      toast({ title: "Erro", description: `Equipamento com TAG ${equipmentTag} não encontrado.`, variant: "destructive" });
    }
  }, [toast]);

  return {
    equipmentData,
    handleOperationalStateChange,
    handleProductChange,
    refreshEquipmentData,
  };
}

    