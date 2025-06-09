[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [components/ui/chart](../README.md) / ChartConfig

# Type Alias: ChartConfig

> **ChartConfig** = \{ \[k in string\]: \{ icon?: React.ComponentType; label?: React.ReactNode \} & (\{ color?: string; theme?: never \} \| \{ color?: never; theme: Record\<keyof typeof THEMES, string\> \}) \}

Defined in: [src/components/ui/chart.tsx:42](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/5b477f54175762d5c4c643839351148d429f45bb/src/components/ui/chart.tsx#L42)

Configuração para os gráficos, permitindo a definição de rótulos, ícones e cores
para cada item de dados do gráfico. As cores podem ser definidas diretamente ou
através de um objeto de tema para suportar diferentes temas (claro/escuro).

## Example

```ts
const chartConfig = {
  visitors: {
    label: "Visitantes",
    color: "hsl(var(--chart-1))",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-2))",
    icon: ChromeIcon, // Exemplo de ícone
  },
  safari: {
    label: "Safari",
    theme: { // Exemplo de cores baseadas em tema
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-5))",
    }
  },
} satisfies ChartConfig;
```
