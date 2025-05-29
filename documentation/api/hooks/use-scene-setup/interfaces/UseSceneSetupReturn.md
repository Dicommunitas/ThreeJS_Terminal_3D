[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / UseSceneSetupReturn

# Interface: UseSceneSetupReturn

Defined in: [src/hooks/use-scene-setup.ts:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L117)

Return value of the useSceneSetup hook.
 UseSceneSetupReturn

## Properties

### cameraRef

> **cameraRef**: `RefObject`\<`null` \| `PerspectiveCamera`\>

Defined in: [src/hooks/use-scene-setup.ts:119](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L119)

Ref to the Three.js Camera.

***

### composerRef

> **composerRef**: `RefObject`\<`null` \| `EffectComposer`\>

Defined in: [src/hooks/use-scene-setup.ts:123](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L123)

Ref to the EffectComposer.

***

### controlsRef

> **controlsRef**: `RefObject`\<`null` \| `OrbitControls`\>

Defined in: [src/hooks/use-scene-setup.ts:122](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L122)

Ref to the OrbitControls.
          Configured for Left and Middle mouse buttons to rotate, and Right mouse button to pan.

***

### groundMeshRef

> **groundMeshRef**: `RefObject`\<`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

Defined in: [src/hooks/use-scene-setup.ts:125](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L125)

Ref to the ground plane mesh.

***

### isSceneReady

> **isSceneReady**: `boolean`

Defined in: [src/hooks/use-scene-setup.ts:126](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L126)

State indicating if the scene setup is complete.

***

### labelRendererRef

> **labelRendererRef**: `RefObject`\<`null` \| `CSS2DRenderer`\>

Defined in: [src/hooks/use-scene-setup.ts:121](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L121)

Ref to the CSS2DRenderer.

***

### outlinePassRef

> **outlinePassRef**: `RefObject`\<`null` \| `OutlinePass`\>

Defined in: [src/hooks/use-scene-setup.ts:124](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L124)

Ref to the OutlinePass.

***

### rendererRef

> **rendererRef**: `RefObject`\<`null` \| `WebGLRenderer`\>

Defined in: [src/hooks/use-scene-setup.ts:120](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L120)

Ref to the WebGLRenderer.

***

### sceneRef

> **sceneRef**: `RefObject`\<`null` \| `Scene`\>

Defined in: [src/hooks/use-scene-setup.ts:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L118)

Ref to the Three.js Scene.
