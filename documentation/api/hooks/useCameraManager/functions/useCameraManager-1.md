[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useCameraManager](../README-1.md) / useCameraManager

# Function: useCameraManager()

> **useCameraManager**(`props`): [`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn-1.md)

Defined in: [src/hooks/useCameraManager.ts:123](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/useCameraManager.ts#L123)

Hook customizado para gerenciar o estado e as interações da câmera 3D.
Responsável pelo estado da câmera, foco em sistemas e integração com o histórico de comandos.

## Parameters

### props

[`UseCameraManagerProps`](../interfaces/UseCameraManagerProps-1.md)

As props do hook, incluindo `executeCommand` para integração com o histórico.

## Returns

[`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn-1.md)

Um objeto contendo o estado da câmera e funções para interagir com ela.
