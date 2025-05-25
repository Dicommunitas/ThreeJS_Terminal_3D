[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-toast](../README.md) / Action

# Type Alias: Action

> **Action** = \{ `toast`: [`ToasterToast`](ToasterToast.md); `type`: `ActionType`\[`"ADD_TOAST"`\]; \} \| \{ `toast`: `Partial`\<[`ToasterToast`](ToasterToast.md)\>; `type`: `ActionType`\[`"UPDATE_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: `ActionType`\[`"DISMISS_TOAST"`\]; \} \| \{ `toastId?`: [`ToasterToast`](ToasterToast.md)\[`"id"`\]; `type`: `ActionType`\[`"REMOVE_TOAST"`\]; \}

Defined in: [src/hooks/use-toast.ts:38](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/hooks/use-toast.ts#L38)
