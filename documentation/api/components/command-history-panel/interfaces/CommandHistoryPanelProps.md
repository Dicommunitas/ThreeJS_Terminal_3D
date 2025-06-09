[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/command-history-panel](../README.md) / CommandHistoryPanelProps

# Interface: CommandHistoryPanelProps

Defined in: [src/components/command-history-panel.tsx:59](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/components/command-history-panel.tsx#L59)

Props para o componente CommandHistoryPanel.
 CommandHistoryPanelProps

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:61](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/components/command-history-panel.tsx#L61)

Indica se a ação de refazer está disponível.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:60](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/components/command-history-panel.tsx#L60)

Indica se a ação de desfazer está disponível.

***

### onRedo()

> **onRedo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:63](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/components/command-history-panel.tsx#L63)

Callback chamado quando o botão "Redo" é clicado.

#### Returns

`void`

***

### onUndo()

> **onUndo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:62](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/1e74b7c848780edcc8caac62c0023b31b5be34f5/src/components/command-history-panel.tsx#L62)

Callback chamado quando o botão "Undo" é clicado.

#### Returns

`void`
