[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / UseCommandHistoryReturn

# Interface: UseCommandHistoryReturn

Defined in: [src/hooks/use-command-history.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L51)

Retorno do hook `useCommandHistory`.
 UseCommandHistoryReturn

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L56)

Verdadeiro se há comandos para refazer, falso caso contrário.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L55)

Verdadeiro se há comandos para desfazer, falso caso contrário.

***

### commandHistory

> **commandHistory**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L57)

O array completo do histórico de comandos, principalmente para depuração.

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-command-history.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L52)

Executa um novo comando e o adiciona ao histórico.
                                                       Limpa o histórico de "redo" futuro.

#### Parameters

##### command

[`Command`](../../../lib/types/interfaces/Command.md)

#### Returns

`void`

***

### redo()

> **redo**: () => `void`

Defined in: [src/hooks/use-command-history.ts:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L54)

Refaz o último comando desfeito, se houver.

#### Returns

`void`

***

### undo()

> **undo**: () => `void`

Defined in: [src/hooks/use-command-history.ts:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/afa16084199c8b26e5e606d73d21408027534f3a/src/hooks/use-command-history.ts#L53)

Desfaz o último comando executado, se houver.

#### Returns

`void`
