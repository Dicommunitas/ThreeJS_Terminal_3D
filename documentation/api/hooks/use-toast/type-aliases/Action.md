[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-toast](../README.md) / Action

# Type Alias: Action

> **Action** = \{ `toast`: [`ToasterToast`](ToasterToast.md); `type`: [`ActionType`](ActionType.md)\[`"ADD_TOAST"`\]; \} \| \{ `toast`: `Partial`\<[`ToasterToast`](ToasterToast.md)\>; `type`: [`ActionType`](ActionType.md)\[`"UPDATE_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"DISMISS_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"REMOVE_TOAST"`\]; \}

Defined in: [src/hooks/use-toast.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/4466777f13a6776beed134cf281b05ece637d113/src/hooks/use-toast.ts#L38)
