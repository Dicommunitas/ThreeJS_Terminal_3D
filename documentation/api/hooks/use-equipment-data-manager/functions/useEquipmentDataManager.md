[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-equipment-data-manager](../README.md) / useEquipmentDataManager

# Function: useEquipmentDataManager()

> **useEquipmentDataManager**(): [`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn.md)

Defined in: [src/hooks/use-equipment-data-manager.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/use-equipment-data-manager.ts#L82)

Hook customizado para gerenciar os dados dos equipamentos, atuando como uma fachada para o `equipmentRepository`.
Inicializa os dados do repositório e fornece funções para modificar
propriedades como estado operacional e produto, com feedback via toast.

## Returns

[`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn.md)

Um objeto contendo os dados dos equipamentos
                                        e funções para modificá-los.
