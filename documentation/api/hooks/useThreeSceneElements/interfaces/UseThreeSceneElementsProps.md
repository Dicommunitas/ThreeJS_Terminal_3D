[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeSceneElements](../README.md) / UseThreeSceneElementsProps

# Interface: UseThreeSceneElementsProps

Defined in: [src/hooks/useThreeSceneElements.ts:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useThreeSceneElements.ts#L63)

Props para o hook `useThreeSceneElements`.
 UseThreeSceneElementsProps

## Properties

### coreReady

> **coreReady**: `boolean`

Defined in: [src/hooks/useThreeSceneElements.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useThreeSceneElements.ts#L65)

Flag que indica se o núcleo da cena (incluindo `sceneRef.current`) está pronto.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/useThreeSceneElements.ts:64](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7f008de5f667c67ad17e0952a263ff2bb1038f7c/src/hooks/useThreeSceneElements.ts#L64)

Ref para o objeto `THREE.Scene` onde os elementos serão adicionados.
