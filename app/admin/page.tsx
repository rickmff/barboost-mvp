import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  Building2,
  CheckCircle2,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"
import { AdminHeader } from "@/components/admin/admin-header"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">

      <AdminHeader title="BARBOOST BACKOFFICE" />
      <main className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 px-3 sm:px-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Usuários Totais</CardTitle>
              <Users className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="text-xl sm:text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowUpIcon className="h-3 w-3 mr-1" /> +12.5%
                </span>{" "}
                desde o último mês
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 px-3 sm:px-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Estabelecimentos</CardTitle>
              <Building2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="text-xl sm:text-2xl font-bold">842</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowUpIcon className="h-3 w-3 mr-1" /> +8.2%
                </span>{" "}
                desde o último mês
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 px-3 sm:px-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Fornecedores</CardTitle>
              <Package className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="text-xl sm:text-2xl font-bold">406</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowUpIcon className="h-3 w-3 mr-1" /> +5.7%
                </span>{" "}
                desde o último mês
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 px-3 sm:px-6">
              <CardTitle className="text-xs sm:text-sm font-medium">Pedidos Ativos</CardTitle>
              <ShoppingCart className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="text-xl sm:text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 inline-flex items-center">
                  <ArrowDownIcon className="h-3 w-3 mr-1" /> -2.1%
                </span>{" "}
                desde a semana passada
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Platform Health & Quick Actions */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
          <Card className="md:col-span-5 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base sm:text-lg font-medium">Saúde da Plataforma</CardTitle>
              <CardDescription>Status dos serviços e desempenho do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Uptime Geral</div>
                    <div className="text-xl sm:text-2xl font-bold">99.92%</div>
                    <div className="text-xs text-muted-foreground mt-1">Últimos 30 dias</div>
                  </div>

                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Tempo Médio de Resposta</div>
                    <div className="text-xl sm:text-2xl font-bold">145ms</div>
                    <div className="text-xs text-muted-foreground mt-1">Últimas 24 horas</div>
                  </div>

                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Incidentes Ativos</div>
                    <div className="text-xl sm:text-2xl font-bold">1</div>
                    <div className="text-xs text-muted-foreground mt-1">Resolução em andamento</div>
                  </div>
                </div>

                <ScrollArea className="w-full">
                  <div className="border rounded-lg overflow-hidden min-w-[640px]">
                    <div className="grid grid-cols-12 gap-2 sm:gap-4 p-2 sm:p-3 bg-muted/50 text-xs sm:text-sm font-medium">
                      <div className="col-span-4">Serviço</div>
                      <div className="col-span-3">Status</div>
                      <div className="col-span-2">Uptime</div>
                      <div className="col-span-3">Tempo de Resposta</div>
                    </div>

                    {[
                      { name: "API Principal", status: "operational", uptime: "99.98%", responseTime: "124ms" },
                      { name: "Banco de Dados", status: "operational", uptime: "99.95%", responseTime: "45ms" },
                      { name: "Serviço de Autenticação", status: "operational", uptime: "99.99%", responseTime: "87ms" },
                      {
                        name: "Processamento de Pagamentos",
                        status: "degraded",
                        uptime: "98.75%",
                        responseTime: "312ms",
                      },
                      { name: "Serviço de Notificações", status: "operational", uptime: "99.92%", responseTime: "156ms" },
                    ].map((service, index, array) => (
                      <div
                        key={index}
                        className={`grid grid-cols-12 gap-2 sm:gap-4 p-2 sm:p-3 text-xs sm:text-sm ${index !== array.length - 1 ? "border-b" : ""}`}
                      >
                        <div className="col-span-4 font-medium">{service.name}</div>
                        <div className="col-span-3 flex items-center gap-1 sm:gap-2">
                          {service.status === "operational" ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                              <span className="text-green-500">Operacional</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                              <span className="text-yellow-500">Degradado</span>
                            </>
                          )}
                        </div>
                        <div className="col-span-2">{service.uptime}</div>
                        <div className="col-span-3">{service.responseTime}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base sm:text-lg font-medium">Ações Rápidas</CardTitle>
              <CardDescription>Tarefas administrativas comuns</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { icon: <Users className="h-4 w-4" />, label: "Adicionar Usuário", href: "/admin/users/new" },
                  { icon: <ShoppingCart className="h-4 w-4" />, label: "Gerenciar Pedidos", href: "/admin/orders" },
                  {
                    icon: <Building2 className="h-4 w-4" />,
                    label: "Ver Estabelecimentos",
                    href: "/admin/establishments",
                  },
                  { icon: <Package className="h-4 w-4" />, label: "Ver Fornecedores", href: "/admin/suppliers" },
                  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Aprovar Propostas", href: "/admin/proposals" },
                ].map((action, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start rounded-none h-12 sm:h-14 px-3 sm:px-6" asChild>
                    <a href={action.href}>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-md">{action.icon}</div>
                        <span className="text-sm sm:text-base">{action.label}</span>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <div className="overflow-x-auto pb-2">
            <TabsList className="w-fit">
              <TabsTrigger value="overview" className="text-xs sm:text-sm">Visão Geral</TabsTrigger>
              <TabsTrigger value="users" className="text-xs sm:text-sm">Usuários</TabsTrigger>
              <TabsTrigger value="transactions" className="text-xs sm:text-sm">Transações</TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs sm:text-sm">Análises</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
              <Card className="lg:col-span-4 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-medium">Atividade da Plataforma</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] sm:h-[250px] lg:h-[300px] flex items-center justify-center text-muted-foreground">
                    Gráfico de atividade da plataforma
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-medium">Atividades Recentes</CardTitle>
                  <CardDescription>Últimas atividades na plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      {
                        user: "João Silva",
                        userType: "estabelecimento",
                        action: "criou um novo pedido",
                        target: "Cervejas para final de semana",
                        time: "há 5 minutos",
                      },
                      {
                        user: "Distribuidora ABC",
                        userType: "fornecedor",
                        action: "enviou uma proposta para",
                        target: "Vinhos importados",
                        time: "há 12 minutos",
                      },
                      {
                        user: "Bar do Pedro",
                        userType: "estabelecimento",
                        action: "aceitou a proposta de",
                        target: "Distribuidora XYZ",
                        time: "há 25 minutos",
                      },
                      {
                        user: "Maria Souza",
                        userType: "estabelecimento",
                        action: "registrou-se na plataforma",
                        target: "",
                        time: "há 42 minutos",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {activity.userType === "estabelecimento" ? (
                            <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                          ) : (
                            <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                          )}
                        </div>
                        <div className="space-y-0.5 sm:space-y-1 min-w-0">
                          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                            <span className="font-medium text-sm truncate">{activity.user}</span>
                            <span
                              className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${activity.userType === "estabelecimento"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                }`}
                            >
                              {activity.userType === "estabelecimento" ? "Estabelecimento" : "Fornecedor"}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {activity.action}{" "}
                            {activity.target && <span className="font-medium">{activity.target}</span>}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="px-3 sm:px-6 py-2 sm:py-3 border-t">
                  <Button variant="ghost" size="sm" className="w-full justify-center gap-1 text-xs sm:text-sm">
                    Ver todas as atividades <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
              <Card className="lg:col-span-4 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-medium">Distribuição Geográfica</CardTitle>
                  <CardDescription>Distribuição de usuários por região</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] sm:h-[250px] lg:h-[300px] flex items-center justify-center text-muted-foreground">
                    Mapa de distribuição geográfica
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-medium">Categorias Populares</CardTitle>
                  <CardDescription>Categorias mais populares em pedidos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Cervejas", percentage: 42 },
                      { name: "Vinhos", percentage: 28 },
                      { name: "Destilados", percentage: 18 },
                      { name: "Não alcoólicos", percentage: 12 },
                    ].map((category) => (
                      <div key={category.name} className="flex items-center">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs sm:text-sm">{category.name}</span>
                            <span className="text-xs sm:text-sm font-medium">{category.percentage}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                            <div
                              className="bg-primary h-1.5 sm:h-2 rounded-full"
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="h-[300px] sm:h-[400px] flex items-center justify-center text-muted-foreground">
            Conteúdo da aba de usuários será exibido aqui
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent
            value="transactions"
            className="h-[300px] sm:h-[400px] flex items-center justify-center text-muted-foreground"
          >
            Conteúdo da aba de transações será exibido aqui
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="h-[300px] sm:h-[400px] flex items-center justify-center text-muted-foreground">
            Conteúdo da aba de análises será exibido aqui
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

