[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useEquipmentDataManager](../README.md) / useEquipmentDataManager

# Function: useEquipmentDataManager()

> **useEquipmentDataManager**(): [`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn.md)

Defined in: [src/hooks/useEquipmentDataManager.ts:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useEquipmentDataManager.ts#L81)

Hook customizado para gerenciar os dados dos equipamentos, atuando como uma fachada para o `equipmentRepository`.
Inicializa os dados do repositório e fornece funções para modificar
propriedades como estado operacional e produto, com feedback via toast.

## Returns

[`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn.md)

Um objeto contendo os dados dos equipamentos
                                        e funções para modificá-los.
