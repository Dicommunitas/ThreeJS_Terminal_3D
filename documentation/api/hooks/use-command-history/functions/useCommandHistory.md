[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / useCommandHistory

# Function: useCommandHistory()

> **useCommandHistory**(`initialState?`): [`UseCommandHistoryReturn`](../interfaces/UseCommandHistoryReturn.md)

Defined in: [src/hooks/use-command-history.ts:67](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/a3c5b1c59fdfa3d9f217f579fadf3e59d797e664/src/hooks/use-command-history.ts#L67)

Hook customizado para gerenciar um histórico de comandos, permitindo Undo e Redo.
Armazena uma lista de comandos e o índice atual, permitindo navegar para frente e para trás
através das ações do usuário que foram encapsuladas como comandos.

## Parameters

### initialState?

[`CommandHistoryState`](../interfaces/CommandHistoryState.md)

Estado inicial opcional para o histórico.
                                            Padrão: histórico vazio (`history: []`) e `currentIndex: -1`.

## Returns

[`UseCommandHistoryReturn`](../interfaces/UseCommandHistoryReturn.md)

Um objeto com funções para executar, desfazer, refazer comandos,
e flags indicando se undo/redo são possíveis, além do próprio histórico.
