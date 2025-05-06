import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "João Silva",
    userType: "estabelecimento",
    action: "criou um novo pedido",
    target: "Cervejas para final de semana",
    time: "há 5 minutos",
  },
  {
    id: 2,
    user: "Distribuidora ABC",
    userType: "fornecedor",
    action: "enviou uma proposta para",
    target: "Vinhos importados",
    time: "há 12 minutos",
  },
  {
    id: 3,
    user: "Bar do Pedro",
    userType: "estabelecimento",
    action: "aceitou a proposta de",
    target: "Distribuidora XYZ",
    time: "há 25 minutos",
  },
  {
    id: 4,
    user: "Maria Souza",
    userType: "estabelecimento",
    action: "registrou-se na plataforma",
    target: "",
    time: "há 42 minutos",
  },
  {
    id: 5,
    user: "Bebidas Express",
    userType: "fornecedor",
    action: "atualizou o catálogo de produtos",
    target: "",
    time: "há 1 hora",
  },
  {
    id: 6,
    user: "Restaurante Gourmet",
    userType: "estabelecimento",
    action: "cancelou o pedido",
    target: "Destilados premium",
    time: "há 2 horas",
  },
]

export function AdminRecentActivity() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const getUserTypeColor = (type: string) => {
    return type === "estabelecimento"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">{getInitials(activity.user)}</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">{activity.user}</span>
              <Badge variant="outline" className={getUserTypeColor(activity.userType)}>
                {activity.userType === "estabelecimento" ? "Estabelecimento" : "Fornecedor"}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              {activity.action} {activity.target && <span className="font-medium">{activity.target}</span>}
            </p>

            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

