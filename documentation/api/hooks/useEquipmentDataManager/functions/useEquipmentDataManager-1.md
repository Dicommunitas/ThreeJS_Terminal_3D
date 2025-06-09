[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useEquipmentDataManager](../README-1.md) / useEquipmentDataManager

# Function: useEquipmentDataManager()

> **useEquipmentDataManager**(): [`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn-1.md)

Defined in: [src/hooks/useEquipmentDataManager.ts:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7212b5be68c3f7954d775adb9932e64d901692b4/src/hooks/useEquipmentDataManager.ts#L81)

Hook customizado para gerenciar os dados dos equipamentos, atuando como uma fachada para o `equipmentRepository`.
Inicializa os dados do repositório e fornece funções para modificar
propriedades como estado operacional e produto, com feedback via toast.

## Returns

[`UseEquipmentDataManagerReturn`](../interfaces/UseEquipmentDataManagerReturn-1.md)

Um objeto contendo os dados dos equipamentos
                                        e funções para modificá-los.
