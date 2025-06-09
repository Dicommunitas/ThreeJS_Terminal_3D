[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-toast](../README.md) / Action

# Type Alias: Action

> **Action** = \{ `toast`: [`ToasterToast`](ToasterToast.md); `type`: [`ActionType`](ActionType.md)\[`"ADD_TOAST"`\]; \} \| \{ `toast`: `Partial`\<[`ToasterToast`](ToasterToast.md)\>; `type`: [`ActionType`](ActionType.md)\[`"UPDATE_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"DISMISS_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: [`ActionType`](ActionType.md)\[`"REMOVE_TOAST"`\]; \}

Defined in: [src/hooks/use-toast.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7fd8b10cda6dfa2ead7725805530e34c65402bbf/src/hooks/use-toast.ts#L38)
