"use client"

import { useTheme } from "@/components/theme-provider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "01/04", pedidos: 40, propostas: 24, acordos: 18 },
  { name: "05/04", pedidos: 30, propostas: 28, acordos: 22 },
  { name: "10/04", pedidos: 45, propostas: 35, acordos: 28 },
  { name: "15/04", pedidos: 50, propostas: 40, acordos: 32 },
  { name: "20/04", pedidos: 65, propostas: 55, acordos: 40 },
  { name: "25/04", pedidos: 60, propostas: 48, acordos: 38 },
  { name: "30/04", pedidos: 75, propostas: 62, acordos: 50 },
]

export function AdminOverviewChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
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
        <Line type="monotone" dataKey="pedidos" stroke="#0ea5e9" activeDot={{ r: 8 }} strokeWidth={2} />
        <Line type="monotone" dataKey="propostas" stroke="#10b981" strokeWidth={2} />
        <Line type="monotone" dataKey="acordos" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

