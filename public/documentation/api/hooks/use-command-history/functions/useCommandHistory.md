[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-command-history](../README.md) / useCommandHistory

# Function: useCommandHistory()

> **useCommandHistory**(`initialState?`): `UseCommandHistoryReturn`

Defined in: [src/hooks/use-command-history.ts:68](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/48170ffd573f70d66a1c284f1f35045f3d98e94f/src/hooks/use-command-history.ts#L68)

Hook customizado para gerenciar um histórico de comandos, permitindo Undo e Redo.
Armazena uma lista de comandos e o índice atual, permitindo navegar para frente e para trás
através das ações do usuário que foram encapsuladas como comandos.

## Parameters

### initialState?

`CommandHistoryState`

Estado inicial opcional para o histórico.
                                            Padrão: histórico vazio (`history: []`) e `currentIndex: -1`.

## Returns

`UseCommandHistoryReturn`

Um objeto com funções para executar, desfazer, refazer comandos,
e flags indicando se undo/redo são possíveis, além do próprio histórico.
