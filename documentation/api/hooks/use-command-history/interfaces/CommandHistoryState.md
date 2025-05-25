[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / CommandHistoryState

# Interface: CommandHistoryState

Defined in: [src/hooks/use-command-history.ts:33](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-command-history.ts#L33)

Interface para o estado interno do histórico de comandos.
 CommandHistoryState

## Properties

### currentIndex

> **currentIndex**: `number`

Defined in: [src/hooks/use-command-history.ts:35](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-command-history.ts#L35)

Índice do comando atual no array `history`.
                                 -1 se o histórico estiver vazio ou todos os comandos foram desfeitos.

***

### history

> **history**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:34](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/hooks/use-command-history.ts#L34)

Array de objetos de comando que foram executados.
