[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/three-scene](../README.md) / ThreeSceneProps

# Interface: ThreeSceneProps

Defined in: [src/components/three-scene.tsx:79](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L79)

## Properties

### allEquipmentData

> **allEquipmentData**: `Equipment`[]

Defined in: [src/components/three-scene.tsx:83](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L83)

Lista completa de todos os equipamentos, para contexto (e.g., anotações no `ThreeScene`).

***

### annotations

> **annotations**: `Annotation`[]

Defined in: [src/components/three-scene.tsx:87](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L87)

Lista de anotações a serem exibidas.

***

### cameraState

> **cameraState**: `undefined` \| `CameraState`

Defined in: [src/components/three-scene.tsx:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L97)

O estado atual da câmera (posição, lookAt).

***

### colorMode

> **colorMode**: `ColorMode`

Defined in: [src/components/three-scene.tsx:105](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L105)

O modo de colorização atual para os equipamentos.

***

### equipment

> **equipment**: `Equipment`[]

Defined in: [src/components/three-scene.tsx:81](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L81)

Lista de equipamentos filtrados a serem renderizados na cena.

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/components/three-scene.tsx:93](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L93)

Tag do equipamento atualmente sob o cursor.

***

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/components/three-scene.tsx:103](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L103)

Ponto de observação (lookAt) inicial da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### initialCameraPosition

> **initialCameraPosition**: `object`

Defined in: [src/components/three-scene.tsx:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L101)

Posição inicial da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### layers

> **layers**: `Layer`[]

Defined in: [src/components/three-scene.tsx:85](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L85)

Configuração das camadas de visibilidade.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/components/three-scene.tsx:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L99)

Callback para quando o estado da câmera muda devido à interação do usuário na cena.

#### Parameters

##### cameraState

`CameraState`

#### Returns

`void`

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/components/three-scene.tsx:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L91)

Callback para quando um equipamento é selecionado/deselecionado.

#### Parameters

##### tag

`null` | `string`

##### isMultiSelectModifierPressed

`boolean`

#### Returns

`void`

***

### onSystemFramed()

> **onSystemFramed**: () => `void`

Defined in: [src/components/three-scene.tsx:109](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L109)

Callback chamado após a câmera terminar de enquadrar um sistema.

#### Returns

`void`

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/components/three-scene.tsx:89](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L89)

Tags dos equipamentos atualmente selecionados.

***

### setHoveredEquipmentTag()

> **setHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/components/three-scene.tsx:95](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L95)

Callback para definir o equipamento em hover.

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/components/three-scene.tsx:107](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/3fbd351dd3271531d3a02300dce1fb3d97e4435b/src/components/three-scene.tsx#L107)

O sistema que deve ser enquadrado pela câmera (se houver).
