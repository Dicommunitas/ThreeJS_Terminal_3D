[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/info-panel](../README.md) / InfoPanel

# Function: InfoPanel()

> **InfoPanel**(`props`): `null` \| `Element`

Defined in: [src/components/info-panel.tsx:88](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/f5c93cd9cb50877abddbfdd17b8806f71c23b36b/src/components/info-panel.tsx#L88)

Renderiza um painel flutuante com informações detalhadas sobre o equipamento selecionado.
Mostra detalhes apenas se um único equipamento estiver selecionado. Permite interações
como alterar estado operacional, produto e gerenciar anotações.

## Parameters

### props

[`InfoPanelProps`](../interfaces/InfoPanelProps.md)

As props do componente.

## Returns

`null` \| `Element`

O componente InfoPanel ou null se nenhum equipamento único estiver selecionado.
