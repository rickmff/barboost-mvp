import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import type { ReactNode } from "react"

interface AdminMetricCardProps {
  title: string
  value: string
  trend: string
  trendDirection: "up" | "down" | "neutral"
  description: string
  icon: ReactNode
}

export function AdminMetricCard({ title, value, trend, trendDirection, description, icon }: AdminMetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {trendDirection === "up" && (
            <span className="text-green-500 inline-flex items-center">
              <ArrowUpIcon className="h-3 w-3 mr-1" /> {trend}
            </span>
          )}
          {trendDirection === "down" && (
            <span className="text-red-500 inline-flex items-center">
              <ArrowDownIcon className="h-3 w-3 mr-1" /> {trend}
            </span>
          )}
          {trendDirection === "neutral" && (
            <span className="text-muted-foreground inline-flex items-center">{trend}</span>
          )}{" "}
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

