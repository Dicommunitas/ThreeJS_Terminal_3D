[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-filter-manager](../README.md) / useFilterManager

# Function: useFilterManager()

> **useFilterManager**(`props`): [`UseFilterManagerReturn`](../interfaces/UseFilterManagerReturn.md)

Defined in: [src/hooks/use-filter-manager.ts:91](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/99a29fe17cab393c4120b6b5906a4ebb1fb3c239/src/hooks/use-filter-manager.ts#L91)

Hook customizado para gerenciar a lógica de filtragem de equipamentos.
Encapsula os estados dos filtros (termo de busca, sistema, área),
deriva as listas de opções de filtro disponíveis a partir dos dados dos equipamentos,
e calcula a lista resultante de equipamentos filtrados.

## Parameters

### props

[`UseFilterManagerProps`](../interfaces/UseFilterManagerProps.md)

As propriedades para o hook, incluindo `allEquipment` (a lista completa de equipamentos).

## Returns

[`UseFilterManagerReturn`](../interfaces/UseFilterManagerReturn.md)

Um objeto contendo o estado dos filtros, as funções para atualizá-los,
                                as listas de opções de filtro disponíveis e a lista de equipamentos filtrados.
