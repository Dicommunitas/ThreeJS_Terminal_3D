[**3D Terminal System API Documentation**](../../../README.md)

***

[3D Terminal System API Documentation](../../../README.md) / [components/info-panel](../README.md) / InfoPanel

# Function: InfoPanel()

> **InfoPanel**(`props`): `null` \| `Element`

Defined in: [src/components/info-panel.tsx:74](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/bf102b883b1f46260971486ec9fa4290f009e866/src/components/info-panel.tsx#L74)

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
