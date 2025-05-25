[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-scene-setup](../README.md) / useSceneSetup

# Function: useSceneSetup()

> **useSceneSetup**(`props`): [`UseSceneSetupReturn`](../interfaces/UseSceneSetupReturn.md)

Defined in: [src/hooks/use-scene-setup.ts:112](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/8075b8a92723c99d6c5409bf1c44d7734e99d256/src/hooks/use-scene-setup.ts#L112)

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
