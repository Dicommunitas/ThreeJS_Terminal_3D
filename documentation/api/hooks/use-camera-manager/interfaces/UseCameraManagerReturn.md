[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-camera-manager](../README.md) / UseCameraManagerReturn

# Interface: UseCameraManagerReturn

Defined in: [src/hooks/use-camera-manager.ts:77](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L77)

Retorno do hook `useCameraManager`.
 UseCameraManagerReturn

## Properties

### currentCameraState

> **currentCameraState**: `undefined` \| [`CameraState`](../../../lib/types/interfaces/CameraState.md)

Defined in: [src/hooks/use-camera-manager.ts:78](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L78)

O estado atual da câmera (posição e ponto de observação).
                                                      Pode ser `undefined` antes da inicialização completa.

***

### defaultInitialCameraLookAt

> **defaultInitialCameraLookAt**: `object`

Defined in: [src/hooks/use-camera-manager.ts:84](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L84)

Exporta o ponto de observação inicial padrão da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### defaultInitialCameraPosition

> **defaultInitialCameraPosition**: `object`

Defined in: [src/hooks/use-camera-manager.ts:83](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L83)

Exporta a posição inicial padrão da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### handleCameraChangeFromScene()

> **handleCameraChangeFromScene**: (`newSceneCameraState`) => `void`

Defined in: [src/hooks/use-camera-manager.ts:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L81)

Manipula mudanças de câmera provenientes da cena 3D
                                                                                   (e.g., interações do usuário com OrbitControls)
                                                                                   e as registra no histórico de comandos.

#### Parameters

##### newSceneCameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

#### Returns

`void`

***

### handleSetCameraViewForSystem()

> **handleSetCameraViewForSystem**: (`systemName`) => `void`

Defined in: [src/hooks/use-camera-manager.ts:80](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L80)

Função para definir o sistema alvo para a câmera enquadrar.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onSystemFramed()

> **onSystemFramed**: () => `void`

Defined in: [src/hooks/use-camera-manager.ts:82](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L82)

Callback para ser chamado pela `ThreeScene` após o enquadramento do sistema ser concluído.
                                      Isso reseta o `targetSystemToFrame`.

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/hooks/use-camera-manager.ts:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-camera-manager.ts#L79)

O nome do sistema alvo para a câmera enquadrar.
                                               Null se nenhum sistema estiver sendo focado.
