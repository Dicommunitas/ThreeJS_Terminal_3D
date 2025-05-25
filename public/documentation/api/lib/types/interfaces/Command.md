[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [lib/types](../README.md) / Command

# Interface: Command

Defined in: [src/lib/types.ts:96](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L96)

Representa um comando executável e reversível para o sistema de Undo/Redo.
Cada ação do usuário que pode ser desfeita (e.g., mover a câmera, alternar visibilidade de camada,
selecionar equipamento) deve ser encapsulada como um `Command`.

 Command

## Properties

### description

> **description**: `string`

Defined in: [src/lib/types.ts:101](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L101)

Descrição textual do comando, usada para logging ou exibição na UI (e.g., em toasts de undo/redo).

***

### execute()

> **execute**: () => `void`

Defined in: [src/lib/types.ts:99](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L99)

Função que realiza a ação do comando.

#### Returns

`void`

***

### id

> **id**: `string`

Defined in: [src/lib/types.ts:97](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L97)

Identificador único do comando, geralmente incluindo um timestamp para unicidade.

***

### type

> **type**: `"CAMERA_MOVE"` \| `"LAYER_VISIBILITY"` \| `"EQUIPMENT_SELECT"`

Defined in: [src/lib/types.ts:98](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L98)

Tipo do comando, para categorização.

***

### undo()

> **undo**: () => `void`

Defined in: [src/lib/types.ts:100](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/31531b560b5bf5acf587cf3f1c2c703355c09988/src/lib/types.ts#L100)

Função que reverte a ação do comando, restaurando o estado anterior.

#### Returns

`void`
