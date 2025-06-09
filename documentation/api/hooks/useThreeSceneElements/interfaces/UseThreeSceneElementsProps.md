[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeSceneElements](../README.md) / UseThreeSceneElementsProps

# Interface: UseThreeSceneElementsProps

Defined in: [src/hooks/useThreeSceneElements.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/hooks/useThreeSceneElements.ts#L64)

Props para o hook `useThreeSceneElements`.
 UseThreeSceneElementsProps

## Properties

### coreReady

> **coreReady**: `boolean`

Defined in: [src/hooks/useThreeSceneElements.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/hooks/useThreeSceneElements.ts#L66)

Flag que indica se o núcleo da cena (incluindo `sceneRef.current`) está pronto.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/useThreeSceneElements.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/20cf40967bd739fbee6d804c3e821483cc482c65/src/hooks/useThreeSceneElements.ts#L65)

Ref para o objeto `THREE.Scene` onde os elementos serão adicionados.
