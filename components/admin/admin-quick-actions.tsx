import { Button } from "@/components/ui/button"
import { FileText, MessageSquare, RefreshCw, Settings, UserPlus } from "lucide-react"

export function AdminQuickActions() {
  const actions = [
    {
      icon: <UserPlus className="h-4 w-4" />,
      label: "Adicionar Usuário",
      href: "/admin/users/new",
    },
    {
      icon: <FileText className="h-4 w-4" />,
      label: "Gerar Relatório",
      href: "/admin/reports/new",
    },
    {
      icon: <MessageSquare className="h-4 w-4" />,
      label: "Enviar Notificação",
      href: "/admin/notifications/new",
    },
    {
      icon: <RefreshCw className="h-4 w-4" />,
      label: "Atualizar Cache",
      href: "#",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      label: "Configurações",
      href: "/admin/settings",
    },
  ]

  return (
    <div className="divide-y">
      {actions.map((action, index) => (
        <Button key={index} variant="ghost" className="w-full justify-start rounded-none h-14 px-6" asChild>
          <a href={action.href}>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-1.5 rounded-md">{action.icon}</div>
              <span>{action.label}</span>
            </div>
          </a>
        </Button>
      ))}
    </div>
  )
}

