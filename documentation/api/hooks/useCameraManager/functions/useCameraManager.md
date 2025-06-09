[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useCameraManager](../README.md) / useCameraManager

# Function: useCameraManager()

> **useCameraManager**(`props`): [`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Defined in: [src/hooks/useCameraManager.ts:122](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/useCameraManager.ts#L122)

Hook customizado para gerenciar o estado e as interações da câmera 3D.
Responsável pelo estado da câmera, foco em sistemas e integração com o histórico de comandos.

## Parameters

### props

[`UseCameraManagerProps`](../interfaces/UseCameraManagerProps.md)

As props do hook, incluindo `executeCommand` para integração com o histórico.

## Returns

[`UseCameraManagerReturn`](../interfaces/UseCameraManagerReturn.md)

Um objeto contendo o estado da câmera e funções para interagir com ela.
