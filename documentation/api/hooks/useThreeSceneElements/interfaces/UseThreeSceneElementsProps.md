[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeSceneElements](../README.md) / UseThreeSceneElementsProps

# Interface: UseThreeSceneElementsProps

Defined in: [src/hooks/useThreeSceneElements.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/hooks/useThreeSceneElements.ts#L64)

Props para o hook `useThreeSceneElements`.
 UseThreeSceneElementsProps

## Properties

### coreReady

> **coreReady**: `boolean`

Defined in: [src/hooks/useThreeSceneElements.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/hooks/useThreeSceneElements.ts#L66)

Flag que indica se o núcleo da cena (incluindo `sceneRef.current`) está pronto.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/useThreeSceneElements.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/hooks/useThreeSceneElements.ts#L65)

Ref para o objeto `THREE.Scene` onde os elementos serão adicionados.
