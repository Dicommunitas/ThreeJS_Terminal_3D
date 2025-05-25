[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-camera-manager](../README.md) / useCameraManager

# Function: useCameraManager()

> **useCameraManager**(`props`): [`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Defined in: [src/hooks/use-camera-manager.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/2ffad36b03338064b23ef8f941c65d1facfc3d76/src/hooks/use-camera-manager.ts#L82)

Hook customizado para gerenciar o estado e as interações da câmera 3D.
Responsável pelo estado da câmera, foco em sistemas e integração com o histórico de comandos.

## Parameters

### props

[`UseCameraManagerProps`](../interfaces/UseCameraManagerProps.md)

As props do hook, incluindo `executeCommand` para integração com o histórico.

## Returns

[`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Um objeto contendo o estado da câmera e funções para interagir com ela.
