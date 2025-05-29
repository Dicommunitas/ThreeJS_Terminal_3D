[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [hooks/use-filter-manager](../README.md) / useFilterManager

# Function: useFilterManager()

> **useFilterManager**(`props`): [`UseFilterManagerReturn`](../interfaces/UseFilterManagerReturn.md)

Defined in: [src/hooks/use-filter-manager.ts:85](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/7e8c963a689af2f4b56042f0dd4bd67cbf96b13b/src/hooks/use-filter-manager.ts#L85)

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
