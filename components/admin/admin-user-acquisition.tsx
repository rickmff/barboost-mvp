"use client"

import { useTheme } from "@/components/theme-provider"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Nov", estabelecimentos: 35, fornecedores: 18 },
  { name: "Dez", estabelecimentos: 42, fornecedores: 24 },
  { name: "Jan", estabelecimentos: 58, fornecedores: 29 },
  { name: "Fev", estabelecimentos: 45, fornecedores: 26 },
  { name: "Mar", estabelecimentos: 62, fornecedores: 32 },
  { name: "Abr", estabelecimentos: 78, fornecedores: 36 },
]

export function AdminUserAcquisition() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
        <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} tick={{ fill: isDark ? "#888" : "#666" }} />
        <YAxis stroke={isDark ? "#888" : "#666"} tick={{ fill: isDark ? "#888" : "#666" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#e5e7eb" : "#374151",
          }}
        />
        <Legend />
        <Bar dataKey="estabelecimentos" name="Estabelecimentos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="fornecedores" name="Fornecedores" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

