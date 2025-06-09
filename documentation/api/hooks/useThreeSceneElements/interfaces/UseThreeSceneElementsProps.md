[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/useThreeSceneElements](../README.md) / UseThreeSceneElementsProps

# Interface: UseThreeSceneElementsProps

Defined in: [src/hooks/useThreeSceneElements.ts:65](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/useThreeSceneElements.ts#L65)

Props para o hook `useThreeSceneElements`.
 UseThreeSceneElementsProps

## Properties

### coreReady

> **coreReady**: `boolean`

Defined in: [src/hooks/useThreeSceneElements.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/useThreeSceneElements.ts#L67)

Flag que indica se o núcleo da cena (incluindo `sceneRef.current`) está pronto.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/useThreeSceneElements.ts:66](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/hooks/useThreeSceneElements.ts#L66)

Ref para o objeto `THREE.Scene` onde os elementos serão adicionados.
