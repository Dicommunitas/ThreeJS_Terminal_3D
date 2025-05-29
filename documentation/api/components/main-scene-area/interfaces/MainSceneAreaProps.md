[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/main-scene-area](../README.md) / MainSceneAreaProps

# Interface: MainSceneAreaProps

Defined in: [src/components/main-scene-area.tsx:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L96)

Props para o componente MainSceneArea.
Estas props são, em grande parte, repassadas para `ThreeScene` e `InfoPanel`.

 MainSceneAreaProps

## Properties

### allEquipmentData

> **allEquipmentData**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/components/main-scene-area.tsx:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L98)

Lista completa de todos os equipamentos, para contexto (e.g., anotações no `ThreeScene`).

***

### annotations

> **annotations**: [`Annotation`](../../../lib/types/interfaces/Annotation.md)[]

Defined in: [src/components/main-scene-area.tsx:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L100)

Lista de anotações a serem exibidas.

***

### availableOperationalStatesList

> **availableOperationalStatesList**: `string`[]

Defined in: [src/components/main-scene-area.tsx:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L117)

Lista de estados operacionais disponíveis.

***

### availableProductsList

> **availableProductsList**: `string`[]

Defined in: [src/components/main-scene-area.tsx:119](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L119)

Lista de produtos disponíveis.

***

### cameraState

> **cameraState**: `undefined` \| [`CameraState`](../../../lib/types/interfaces/CameraState.md)

Defined in: [src/components/main-scene-area.tsx:105](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L105)

O estado atual da câmera (posição, lookAt).

***

### colorMode

> **colorMode**: [`ColorMode`](../../../lib/types/type-aliases/ColorMode.md)

Defined in: [src/components/main-scene-area.tsx:109](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L109)

O modo de colorização atual para os equipamentos.

***

### equipment

> **equipment**: [`Equipment`](../../../lib/types/interfaces/Equipment.md)[]

Defined in: [src/components/main-scene-area.tsx:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L97)

Lista de equipamentos filtrados a serem renderizados na cena.

***

### equipmentAnnotation

> **equipmentAnnotation**: `null` \| [`Annotation`](../../../lib/types/interfaces/Annotation.md)

Defined in: [src/components/main-scene-area.tsx:113](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L113)

Anotação do equipamento único selecionado (para InfoPanel).

***

### hoveredEquipmentTag

> **hoveredEquipmentTag**: `null` \| `string`

Defined in: [src/components/main-scene-area.tsx:103](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L103)

Tag do equipamento atualmente sob o cursor.

***

### initialCameraLookAt

> **initialCameraLookAt**: `object`

Defined in: [src/components/main-scene-area.tsx:108](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L108)

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

Defined in: [src/components/main-scene-area.tsx:107](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L107)

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

Defined in: [src/components/main-scene-area.tsx:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L99)

Configuração das camadas de visibilidade.

***

### onCameraChange()

> **onCameraChange**: (`cameraState`) => `void`

Defined in: [src/components/main-scene-area.tsx:106](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L106)

Callback para quando o estado da câmera muda devido à interação do usuário na cena.

#### Parameters

##### cameraState

[`CameraState`](../../../lib/types/interfaces/CameraState.md)

#### Returns

`void`

***

### onDeleteAnnotation()

> **onDeleteAnnotation**: (`equipmentTag`) => `void`

Defined in: [src/components/main-scene-area.tsx:115](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L115)

Callback para excluir uma anotação.

#### Parameters

##### equipmentTag

`string`

#### Returns

`void`

***

### onOpenAnnotationDialog()

> **onOpenAnnotationDialog**: () => `void`

Defined in: [src/components/main-scene-area.tsx:114](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L114)

Callback para abrir o diálogo de anotação.

#### Returns

`void`

***

### onOperationalStateChange()

> **onOperationalStateChange**: (`equipmentTag`, `newState`) => `void`

Defined in: [src/components/main-scene-area.tsx:116](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L116)

Callback para alterar o estado operacional de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newState

`string`

#### Returns

`void`

***

### onProductChange()

> **onProductChange**: (`equipmentTag`, `newProduct`) => `void`

Defined in: [src/components/main-scene-area.tsx:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L118)

Callback para alterar o produto de um equipamento.

#### Parameters

##### equipmentTag

`string`

##### newProduct

`string`

#### Returns

`void`

***

### onSelectEquipment()

> **onSelectEquipment**: (`tag`, `isMultiSelect`) => `void`

Defined in: [src/components/main-scene-area.tsx:102](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L102)

Callback para quando um equipamento é selecionado/deselecionado.

#### Parameters

##### tag

`null` | `string`

##### isMultiSelect

`boolean`

#### Returns

`void`

***

### onSystemFramed()

> **onSystemFramed**: () => `void`

Defined in: [src/components/main-scene-area.tsx:111](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L111)

Callback chamado após a câmera terminar de enquadrar um sistema.

#### Returns

`void`

***

### selectedEquipmentDetails

> **selectedEquipmentDetails**: `null` \| [`Equipment`](../../../lib/types/interfaces/Equipment.md)

Defined in: [src/components/main-scene-area.tsx:112](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L112)

Detalhes do equipamento único selecionado (para InfoPanel).

***

### selectedEquipmentTags

> **selectedEquipmentTags**: `string`[]

Defined in: [src/components/main-scene-area.tsx:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L101)

Tags dos equipamentos atualmente selecionados.

***

### setHoveredEquipmentTag()

> **setHoveredEquipmentTag**: (`tag`) => `void`

Defined in: [src/components/main-scene-area.tsx:104](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L104)

Callback para definir o equipamento em hover.

#### Parameters

##### tag

`null` | `string`

#### Returns

`void`

***

### targetSystemToFrame

> **targetSystemToFrame**: `null` \| `string`

Defined in: [src/components/main-scene-area.tsx:110](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/components/main-scene-area.tsx#L110)

O sistema que deve ser enquadrado pela câmera (se houver).
