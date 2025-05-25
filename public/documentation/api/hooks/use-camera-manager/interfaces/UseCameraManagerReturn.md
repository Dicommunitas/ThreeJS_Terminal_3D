[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-camera-manager](../README.md) / UseCameraManagerReturn

# Interface: UseCameraManagerReturn

Defined in: [src/hooks/use-camera-manager.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L66)

Retorno do hook `useCameraManager`.
 UseCameraManagerReturn

## Properties

### currentCameraState

> **currentCameraState**: `undefined` \| [`CameraState`](../../../lib/types/interfaces/CameraState.md)

Defined in: [src/hooks/use-camera-manager.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L67)

O estado atual da câmera (posição e ponto de observação).
                                                      Pode ser `undefined` antes da inicialização completa.

***

### defaultInitialCameraLookAt

> **defaultInitialCameraLookAt**: `object`

Defined in: [src/hooks/use-camera-manager.ts:73](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L73)

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

Defined in: [src/hooks/use-camera-manager.ts:72](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L72)

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

Defined in: [src/hooks/use-camera-manager.ts:70](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L70)

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

Defined in: [src/hooks/use-camera-manager.ts:69](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L69)

Função para definir o sistema alvo para a câmera enquadrar.

#### Parameters

##### systemName

`string`

#### Returns

`void`

***

### onSystemFramed()

> **onSystemFramed**: () => `void`

Defined in: [src/hooks/use-camera-manager.ts:71](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L71)

Callback para ser chamado pela `ThreeScene` após o enquadramento do sistema ser concluído.
                                      Isso reseta o `targetSystemToFrame`.

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/hooks/use-camera-manager.ts:68](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/hooks/use-camera-manager.ts#L68)

O nome do sistema alvo para a câmera enquadrar.
                                               Null se nenhum sistema estiver sendo focado.
