import { CheckCircle2, Clock, XCircle } from "lucide-react"

export function AdminPlatformHealth() {
  const services = [
    { name: "API Principal", status: "operational", uptime: "99.98%", responseTime: "124ms" },
    { name: "Banco de Dados", status: "operational", uptime: "99.95%", responseTime: "45ms" },
    { name: "Serviço de Autenticação", status: "operational", uptime: "99.99%", responseTime: "87ms" },
    { name: "Processamento de Pagamentos", status: "degraded", uptime: "98.75%", responseTime: "312ms" },
    { name: "Serviço de Notificações", status: "operational", uptime: "99.92%", responseTime: "156ms" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "degraded":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "down":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return <span className="text-green-500">Operacional</span>
      case "degraded":
        return <span className="text-yellow-500">Degradado</span>
      case "down":
        return <span className="text-red-500">Inoperante</span>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Uptime Geral</div>
          <div className="text-2xl font-bold">99.92%</div>
          <div className="text-xs text-muted-foreground mt-1">Últimos 30 dias</div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Tempo Médio de Resposta</div>
          <div className="text-2xl font-bold">145ms</div>
          <div className="text-xs text-muted-foreground mt-1">Últimas 24 horas</div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Incidentes Ativos</div>
          <div className="text-2xl font-bold">1</div>
          <div className="text-xs text-muted-foreground mt-1">Resolução em andamento</div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-3 bg-muted/50 text-sm font-medium">
          <div className="col-span-4">Serviço</div>
          <div className="col-span-3">Status</div>
          <div className="col-span-2">Uptime</div>
          <div className="col-span-3">Tempo de Resposta</div>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-12 gap-4 p-3 text-sm ${index !== services.length - 1 ? "border-b" : ""}`}
          >
            <div className="col-span-4 font-medium">{service.name}</div>
            <div className="col-span-3 flex items-center gap-2">
              {getStatusIcon(service.status)}
              {getStatusText(service.status)}
            </div>
            <div className="col-span-2">{service.uptime}</div>
            <div className="col-span-3">{service.responseTime}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

