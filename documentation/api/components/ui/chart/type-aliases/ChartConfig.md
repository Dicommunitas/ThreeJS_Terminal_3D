[**3D Terminal System API Documentation**](../../../../README.md)

***

[3D Terminal System API Documentation](../../../../README.md) / [components/ui/chart](../README.md) / ChartConfig

# Type Alias: ChartConfig

> **ChartConfig** = \{ \[k in string\]: \{ icon?: React.ComponentType; label?: React.ReactNode \} & (\{ color?: string; theme?: never \} \| \{ color?: never; theme: Record\<keyof typeof THEMES, string\> \}) \}

Defined in: [src/components/ui/chart.tsx:43](https://github.com/Dicommunitas/ThreeJS_Terminal_3D/blob/6f042d4d64a35f8821f49bdbe82798f7999e9e5c/src/components/ui/chart.tsx#L43)

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
