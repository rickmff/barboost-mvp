"use client"

import { useTheme } from "@/components/theme-provider"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mai", valor: 120000 },
  { name: "Jun", valor: 132000 },
  { name: "Jul", valor: 145000 },
  { name: "Ago", valor: 162000 },
  { name: "Set", valor: 178000 },
  { name: "Out", valor: 195000 },
  { name: "Nov", valor: 210000 },
  { name: "Dez", valor: 232000 },
  { name: "Jan", valor: 198000 },
  { name: "Fev", valor: 215000 },
  { name: "Mar", valor: 230000 },
  { name: "Abr", valor: 248650 },
]

export function AdminRevenueChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
        <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} tick={{ fill: isDark ? "#888" : "#666" }} />
        <YAxis
          stroke={isDark ? "#888" : "#666"}
          tick={{ fill: isDark ? "#888" : "#666" }}
          tickFormatter={formatCurrency}
        />
        <Tooltip
          formatter={(value) => [formatCurrency(value as number), "Receita"]}
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#e5e7eb" : "#374151",
          }}
        />
        <Area type="monotone" dataKey="valor" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

