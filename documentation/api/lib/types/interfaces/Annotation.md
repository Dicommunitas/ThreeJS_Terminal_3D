[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [lib/types](../README.md) / Annotation

# Interface: Annotation

Defined in: [src/lib/types.ts:115](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/lib/types.ts#L115)

Representa uma anotação textual associada a um equipamento específico.
Cada equipamento pode ter no máximo uma anotação.

 Annotation

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [src/lib/types.ts:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/lib/types.ts#L118)

Data e hora em formato string ISO 8601 (e.g., "2023-10-27T10:30:00.000Z")
                               indicando quando a anotação foi criada ou atualizada pela última vez.

***

### equipmentTag

> **equipmentTag**: `string`

Defined in: [src/lib/types.ts:116](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/lib/types.ts#L116)

A tag do equipamento ao qual esta anotação está vinculada.
                                 Serve como chave estrangeira para o objeto `Equipment`.

***

### text

> **text**: `string`

Defined in: [src/lib/types.ts:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/lib/types.ts#L117)

O conteúdo textual da anotação.
