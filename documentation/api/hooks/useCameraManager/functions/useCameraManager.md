[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useCameraManager](../README.md) / useCameraManager

# Function: useCameraManager()

> **useCameraManager**(`props`): [`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Defined in: [src/hooks/useCameraManager.ts:124](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/hooks/useCameraManager.ts#L124)

Hook customizado para gerenciar o estado e as interações da câmera 3D.
Responsável pelo estado da câmera, foco em sistemas e integração com o histórico de comandos.

## Parameters

### props

[`UseCameraManagerProps`](../interfaces/UseCameraManagerProps.md)

As props do hook, incluindo `executeCommand` para integração com o histórico.

## Returns

[`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Um objeto contendo o estado da câmera e funções para interagir com ela.
