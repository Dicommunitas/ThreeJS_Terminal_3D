[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [lib/types](../README.md) / Annotation

# Interface: Annotation

Defined in: [src/lib/types.ts:115](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/lib/types.ts#L115)

Representa uma anotação textual associada a um equipamento específico.
Cada equipamento pode ter no máximo uma anotação.

 Annotation

## Properties

### createdAt

> **createdAt**: `string`

Defined in: [src/lib/types.ts:118](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/lib/types.ts#L118)

Data e hora em formato string ISO 8601 (e.g., "2023-10-27T10:30:00.000Z")
                               indicando quando a anotação foi criada ou atualizada pela última vez.

***

### equipmentTag

> **equipmentTag**: `string`

Defined in: [src/lib/types.ts:116](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/lib/types.ts#L116)

A tag do equipamento ao qual esta anotação está vinculada.
                                 Serve como chave estrangeira para o objeto `Equipment`.

***

### text

> **text**: `string`

Defined in: [src/lib/types.ts:117](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/c0b82ba8679b8f85845255448514bad599eca08d/src/lib/types.ts#L117)

O conteúdo textual da anotação.
