[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeSceneElements](../README.md) / UseThreeSceneElementsProps

# Interface: UseThreeSceneElementsProps

Defined in: [src/hooks/useThreeSceneElements.ts:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/useThreeSceneElements.ts#L62)

Props para o hook `useThreeSceneElements`.
 UseThreeSceneElementsProps

## Properties

### coreReady

> **coreReady**: `boolean`

Defined in: [src/hooks/useThreeSceneElements.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/useThreeSceneElements.ts#L64)

Flag que indica se o núcleo da cena (incluindo `sceneRef.current`) está pronto.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/useThreeSceneElements.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/d3a4c6e46069e0806d20629a3dc62ea6a87d736c/src/hooks/useThreeSceneElements.ts#L63)

Ref para o objeto `THREE.Scene` onde os elementos serão adicionados.
