[**nextn**](../../../README.md)

***

[nextn](../../../modules.md) / [hooks/use-toast](../README.md) / Action

# Type Alias: Action

> **Action** = \{ `toast`: [`ToasterToast`](ToasterToast.md); `type`: [`ActionType`](ActionType.md)\[`"ADD_TOAST"`\]; \} \| \{ `toast`: `Partial`\<[`ToasterToast`](ToasterToast.md)\>; `type`: [`ActionType`](ActionType.md)\[`"UPDATE_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"DISMISS_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"REMOVE_TOAST"`\]; \}

Defined in: [src/hooks/use-toast.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c2331e405b00973e4f5e87258cdaf1d7c733b058/src/hooks/use-toast.ts#L38)
