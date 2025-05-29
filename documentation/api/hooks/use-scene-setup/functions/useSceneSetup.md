[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / useSceneSetup

# Function: useSceneSetup()

> **useSceneSetup**(`props`): [`UseSceneSetupReturn`](../interfaces/UseSceneSetupReturn.md)

Defined in: [src/hooks/use-scene-setup.ts:138](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/hooks/use-scene-setup.ts#L138)

A custom hook for handling the initial setup of a Three.js scene.
Encapsulates the creation of the scene, camera, renderers, controls, lighting, and ground plane.
Also manages the scene's readiness state and handles window resizing.
OrbitControls are configured by default for Left and Middle mouse buttons to rotate, and Right mouse button to pan.

## Parameters

### props

[`UseSceneSetupProps`](../interfaces/UseSceneSetupProps.md)

The properties for the hook.

## Returns

[`UseSceneSetupReturn`](../interfaces/UseSceneSetupReturn.md)

An object containing refs to the core scene elements and the readiness state.
