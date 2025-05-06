"use client"

import { useTheme } from "@/components/theme-provider"

export function AdminGeographicDistribution() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Simplified Brazil map representation
  const regions = [
    { id: "SE", name: "Sudeste", percentage: 45, color: "#0ea5e9" },
    { id: "S", name: "Sul", percentage: 22, color: "#10b981" },
    { id: "NE", name: "Nordeste", percentage: 18, color: "#8b5cf6" },
    { id: "CO", name: "Centro-Oeste", percentage: 10, color: "#f59e0b" },
    { id: "N", name: "Norte", percentage: 5, color: "#ef4444" },
  ]

  return (
    <div className="h-[300px] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="flex items-center justify-center">
          {/* Simplified map visualization */}
          <div className="relative w-48 h-48 bg-muted/50 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Mapa do Brasil
            </div>

            {/* Simplified region representation */}
            <div className="absolute bottom-0 left-0 right-0">
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="h-2 transition-all"
                  style={{
                    width: `${region.percentage}%`,
                    backgroundColor: region.color,
                    opacity: isDark ? 0.8 : 1,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium">Distribuição por Região</h4>

          {regions.map((region) => (
            <div key={region.id} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{region.name}</span>
                  <span className="text-sm font-medium">{region.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

