[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / CommandHistoryState

# Interface: CommandHistoryState

Defined in: [src/hooks/use-command-history.ts:33](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/hooks/use-command-history.ts#L33)

Interface para o estado interno do histórico de comandos.
 CommandHistoryState

## Properties

### currentIndex

> **currentIndex**: `number`

Defined in: [src/hooks/use-command-history.ts:35](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/hooks/use-command-history.ts#L35)

Índice do comando atual no array `history`.
                                 -1 se o histórico estiver vazio ou todos os comandos foram desfeitos.

***

### history

> **history**: `Command`[]

Defined in: [src/hooks/use-command-history.ts:34](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/hooks/use-command-history.ts#L34)

Array de objetos de comando que foram executados.
