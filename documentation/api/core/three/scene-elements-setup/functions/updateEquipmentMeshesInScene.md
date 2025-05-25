[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [core/three/scene-elements-setup](../README.md) / updateEquipmentMeshesInScene

# Function: updateEquipmentMeshesInScene()

> **updateEquipmentMeshesInScene**(`params`): `void`

Defined in: [src/core/three/scene-elements-setup.ts:199](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/core/three/scene-elements-setup.ts#L199)

Atualiza a lista de meshes de equipamentos na cena com base nos novos dados.
Remove meshes antigos, atualiza existentes (recriando-os para garantir consistência de material/cor)
e adiciona novos, considerando a visibilidade das camadas. Também gerencia a visibilidade do plano de chão.
Esta função é otimizada para recriar meshes apenas quando necessário, mas a lógica atual recria
para simplificar a atualização de cor e outras propriedades visuais baseadas em `colorMode` ou dados do equipamento.

## Parameters

### params

[`UpdateEquipmentMeshesParams`](../interfaces/UpdateEquipmentMeshesParams.md)

Os parâmetros para a função.

## Returns

`void`
