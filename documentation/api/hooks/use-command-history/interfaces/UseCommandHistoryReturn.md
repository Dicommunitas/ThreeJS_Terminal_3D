[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / UseCommandHistoryReturn

# Interface: UseCommandHistoryReturn

Defined in: [src/hooks/use-command-history.ts:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L50)

Retorno do hook `useCommandHistory`.
 UseCommandHistoryReturn

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:55](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L55)

Verdadeiro se há comandos para refazer, falso caso contrário.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/hooks/use-command-history.ts:54](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L54)

Verdadeiro se há comandos para desfazer, falso caso contrário.

***

### commandHistory

> **commandHistory**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:56](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L56)

O array completo do histórico de comandos, principalmente para depuração.

***

### executeCommand()

> **executeCommand**: (`command`) => `void`

Defined in: [src/hooks/use-command-history.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L51)

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

Defined in: [src/hooks/use-command-history.ts:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L53)

Refaz o último comando desfeito, se houver.

#### Returns

`void`

***

### undo()

> **undo**: () => `void`

Defined in: [src/hooks/use-command-history.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/badc3233eff8eb21985e1864af032399a617b0af/src/hooks/use-command-history.ts#L52)

Desfaz o último comando executado, se houver.

#### Returns

`void`
