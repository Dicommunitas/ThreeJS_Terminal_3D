[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-command-history](../README.md) / UseCommandHistoryReturn

# Interface: UseCommandHistoryReturn

Defined in: [src/hooks/use-command-history.ts:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L49)

Retorno do hook `useCommandHistory`.

## Interface

UseCommandHistoryReturn

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L54)

Verdadeiro se há comandos para refazer, falso caso contrário.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L53)

Verdadeiro se há comandos para desfazer, falso caso contrário.

***

### commandHistory

> **commandHistory**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L55)

O array completo do histórico de comandos, principalmente para depuração.

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-command-history.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L50)

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

Defined in: [src/hooks/use-command-history.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L52)

Refaz o último comando desfeito, se houver.

#### Returns

`void`

***

### undo()

> **undo**: () => `void`

Defined in: [src/hooks/use-command-history.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-command-history.ts#L51)

Desfaz o último comando executado, se houver.

#### Returns

`void`
