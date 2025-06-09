[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / UseCommandHistoryReturn

# Interface: UseCommandHistoryReturn

Defined in: [src/hooks/use-command-history.ts:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L54)

Retorno do hook `useCommandHistory`.
 UseCommandHistoryReturn

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L59)

Verdadeiro se há comandos para refazer, falso caso contrário.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:58](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L58)

Verdadeiro se há comandos para desfazer, falso caso contrário.

***

### commandHistory

> **commandHistory**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L60)

O array completo do histórico de comandos, principalmente para depuração.

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-command-history.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L55)

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

Defined in: [src/hooks/use-command-history.ts:57](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L57)

Refaz o último comando desfeito, se houver.

#### Returns

`void`

***

### undo()

> **undo**: () => `void`

Defined in: [src/hooks/use-command-history.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99674efc74a324fa412d902012012a3688e22f0e/src/hooks/use-command-history.ts#L56)

Desfaz o último comando executado, se houver.

#### Returns

`void`
