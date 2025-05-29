[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/command-history-panel](../README.md) / CommandHistoryPanelProps

# Interface: CommandHistoryPanelProps

Defined in: [src/components/command-history-panel.tsx:46](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/command-history-panel.tsx#L46)

Props para o componente CommandHistoryPanel.
 CommandHistoryPanelProps

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:48](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/command-history-panel.tsx#L48)

Indica se a ação de refazer está disponível.

***

### canUndo

> **canUndo**: `boolean`

Defined in: [src/components/command-history-panel.tsx:47](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/command-history-panel.tsx#L47)

Indica se a ação de desfazer está disponível.

***

### onRedo()

> **onRedo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:50](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/command-history-panel.tsx#L50)

Callback chamado quando o botão "Redo" é clicado.

#### Returns

`void`

***

### onUndo()

> **onUndo**: () => `void`

Defined in: [src/components/command-history-panel.tsx:49](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/components/command-history-panel.tsx#L49)

Callback chamado quando o botão "Undo" é clicado.

#### Returns

`void`
