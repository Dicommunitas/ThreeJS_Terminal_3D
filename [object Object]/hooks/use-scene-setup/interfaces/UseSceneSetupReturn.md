[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / UseSceneSetupReturn

# Interface: UseSceneSetupReturn

Defined in: [src/hooks/use-scene-setup.ts:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L91)

Return value of the useSceneSetup hook.
 UseSceneSetupReturn

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-scene-setup.ts:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L93)

Ref to the Three.js Camera.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/use-scene-setup.ts:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L97)

Ref to the EffectComposer.

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-scene-setup.ts:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L96)

Ref to the OrbitControls.
          Configured for Left and Middle mouse buttons to rotate, and Right mouse button to pan.

***

### groundMeshRef

> **groundMeshRef**: `RefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/hooks/use-scene-setup.ts:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L99)

Ref to the ground plane mesh.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-scene-setup.ts:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L100)

State indicating if the scene setup is complete.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-scene-setup.ts:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L95)

Ref to the CSS2DRenderer.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/use-scene-setup.ts:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L98)

Ref to the OutlinePass.

***

### rendererRef

> **rendererRef**: `RefObject`\<`null` \| `WebGLRenderer`\>

Defined in: [src/hooks/use-scene-setup.ts:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L94)

Ref to the WebGLRenderer.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-scene-setup.ts:92](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-scene-setup.ts#L92)

Ref to the Three.js Scene.
