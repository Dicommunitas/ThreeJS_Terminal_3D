[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / CommandHistoryState

# Interface: CommandHistoryState

Defined in: [src/hooks/use-command-history.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/use-command-history.ts#L38)

Interface para o estado interno do histórico de comandos.
 CommandHistoryState

## Properties

### currentIndex

> **currentIndex**: `number`

Defined in: [src/hooks/use-command-history.ts:40](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/use-command-history.ts#L40)

Índice do comando atual no array `history`.
                                 -1 se o histórico estiver vazio ou todos os comandos foram desfeitos.

***

### history

> **history**: [`Command`](../../../lib/types/interfaces/Command.md)[]

Defined in: [src/hooks/use-command-history.ts:39](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/use-command-history.ts#L39)

Array de objetos de comando que foram executados.
