[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/three-scene](../README.md) / ThreeSceneProps

# Interface: ThreeSceneProps

Defined in: [src/components/three-scene.tsx:94](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L94)

## Properties

### allEquipmentData

> **allEquipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/components/three-scene.tsx:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L98)

Lista completa de todos os equipamentos, para contexto (e.g., anotações no `ThreeScene`).

***

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/components/three-scene.tsx:102](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L102)

Lista de anotações a serem exibidas.

***

### cameraState

> **cameraState**: `undefined` \| [`CameraState`](../../../lib/types/interfaces/CameraState.md)

Defined in: [src/components/three-scene.tsx:112](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L112)

O estado atual da câmera (posição, lookAt).

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/three-scene.tsx:120](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L120)

O modo de colorização atual para os equipamentos.

***

### equipment

> **equipment**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/components/three-scene.tsx:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L96)

Lista de equipamentos filtrados a serem renderizados na cena.

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `undefined` \| `null` \| `string`

Defined in: [src/components/three-scene.tsx:108](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L108)

Tag do equipamento atualmente sob o cursor.

***

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/components/three-scene.tsx:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L118)

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

Defined in: [src/components/three-scene.tsx:116](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L116)

Posição inicial da câmera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

***

### layers

> **layers**: [`Layer`](../../../lib/types/interfaces/Layer.md)[]

Defined in: [src/components/three-scene.tsx:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L100)

Configuração das camadas de visibilidade.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/components/three-scene.tsx:114](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L114)

Callback para quando o estado da câmera muda devido à interação do usuário na cena.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

#### Returns

`void`

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelectModifierPressed`) => `void`

Defined in: [src/components/three-scene.tsx:106](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L106)

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

Defined in: [src/components/three-scene.tsx:124](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L124)

Callback chamado após a câmera terminar de enquadrar um sistema.

#### Returns

`void`

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `undefined` \| `string`[]

Defined in: [src/components/three-scene.tsx:104](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L104)

Tags dos equipamentos atualmente selecionados.

***

### setHoveredEquipmentTag()

> **setHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/components/three-scene.tsx:110](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L110)

Callback para definir o equipamento em hover.

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/components/three-scene.tsx:122](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/fa305a5866f8e322e02a0c9af5d13b645eb5703c/src/components/three-scene.tsx#L122)

O sistema que deve ser enquadrado pela câmera (se houver).
