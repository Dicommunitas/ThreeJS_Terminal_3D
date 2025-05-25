[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/command-history-panel](../README.md) / CommandHistoryPanelProps

# Interface: CommandHistoryPanelProps

Defined in: [src/components/command-history-panel.tsx:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/command-history-panel.tsx#L38)

Props para o componente CommandHistoryPanel.
 CommandHistoryPanelProps

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:40](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/command-history-panel.tsx#L40)

Indica se a ação de refazer está disponível.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:39](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/command-history-panel.tsx#L39)

Indica se a ação de desfazer está disponível.

***

### onRedo()

> **onRedo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/command-history-panel.tsx#L42)

Callback chamado quando o botão "Redo" é clicado.

#### Returns

`void`

***

### onUndo()

> **onUndo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:41](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/command-history-panel.tsx#L41)

Callback chamado quando o botão "Undo" é clicado.

#### Returns

`void`
