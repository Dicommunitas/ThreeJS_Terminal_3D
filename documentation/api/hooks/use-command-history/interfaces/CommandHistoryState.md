[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / CommandHistoryState

# Interface: CommandHistoryState

Defined in: [src/hooks/use-command-history.ts:51](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/hooks/use-command-history.ts#L51)

Interface para o estado interno do histórico de comandos.
 CommandHistoryState

## Properties

### currentIndex

> **currentIndex**: `number`

Defined in: [src/hooks/use-command-history.ts:53](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/hooks/use-command-history.ts#L53)

Índice do comando atual no array `history`.
                                 -1 se o histórico estiver vazio ou todos os comandos foram desfeitos.

***

### history

> **history**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:52](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/hooks/use-command-history.ts#L52)

Array de objetos de comando que foram executados.
