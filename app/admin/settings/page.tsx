import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdminHeader } from "@/components/admin/admin-header"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Configurações" description="Gerenciar configurações da plataforma" />

      <main className="flex-1 p-6">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Plataforma</CardTitle>
                <CardDescription>Configurações gerais da plataforma BarBoost</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Nome da Plataforma</Label>
                  <Input id="platform-name" defaultValue="BarBoost" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="platform-description">Descrição</Label>
                  <Textarea
                    id="platform-description"
                    defaultValue="Conectando estabelecimentos e fornecedores de bebidas de forma 100% digital"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email de Contato</Label>
                  <Input id="contact-email" type="email" defaultValue="contato@barboost.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="support-phone">Telefone de Suporte</Label>
                  <Input id="support-phone" defaultValue="(11) 99999-9999" />
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Regionais</CardTitle>
                <CardDescription>Defina as configurações regionais da plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma Padrão</Label>
                    <Select defaultValue="pt-BR">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Selecione um idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Fuso Horário</Label>
                    <Select defaultValue="America/Sao_Paulo">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Selecione um fuso horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/Sao_Paulo">América/São Paulo</SelectItem>
                        <SelectItem value="America/New_York">América/Nova York</SelectItem>
                        <SelectItem value="Europe/London">Europa/Londres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Notificações</CardTitle>
                <CardDescription>Gerencie como as notificações são enviadas aos usuários</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Notificações por Email</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-new-orders">Novos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">Notificar fornecedores sobre novos pedidos</p>
                    </div>
                    <Switch id="email-new-orders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-new-proposals">Novas Propostas</Label>
                      <p className="text-sm text-muted-foreground">Notificar estabelecimentos sobre novas propostas</p>
                    </div>
                    <Switch id="email-new-proposals" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-status-updates">Atualizações de Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Notificar sobre mudanças de status em pedidos e propostas
                      </p>
                    </div>
                    <Switch id="email-status-updates" defaultChecked />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Notificações no Aplicativo</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-new-orders">Novos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">Notificar fornecedores sobre novos pedidos</p>
                    </div>
                    <Switch id="app-new-orders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-new-proposals">Novas Propostas</Label>
                      <p className="text-sm text-muted-foreground">Notificar estabelecimentos sobre novas propostas</p>
                    </div>
                    <Switch id="app-new-proposals" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-messages">Mensagens</Label>
                      <p className="text-sm text-muted-foreground">Notificar sobre novas mensagens recebidas</p>
                    </div>
                    <Switch id="app-messages" defaultChecked />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Segurança</CardTitle>
                <CardDescription>Gerencie as configurações de segurança da plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Autenticação</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Autenticação de Dois Fatores</Label>
                      <p className="text-sm text-muted-foreground">
                        Exigir autenticação de dois fatores para administradores
                      </p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Tempo Limite de Sessão</Label>
                      <p className="text-sm text-muted-foreground">Encerrar sessões inativas após um período</p>
                    </div>
                    <Select defaultValue="60">
                      <SelectTrigger id="session-timeout" className="w-[180px]">
                        <SelectValue placeholder="Selecione um tempo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                        <SelectItem value="240">4 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Política de Senhas</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-complexity">Complexidade de Senha</Label>
                      <p className="text-sm text-muted-foreground">
                        Exigir senhas fortes com letras, números e símbolos
                      </p>
                    </div>
                    <Switch id="password-complexity" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-expiration">Expiração de Senha</Label>
                      <p className="text-sm text-muted-foreground">Exigir alteração de senha periodicamente</p>
                    </div>
                    <Select defaultValue="90">
                      <SelectTrigger id="password-expiration" className="w-[180px]">
                        <SelectValue placeholder="Selecione um período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 dias</SelectItem>
                        <SelectItem value="60">60 dias</SelectItem>
                        <SelectItem value="90">90 dias</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de API</CardTitle>
                <CardDescription>Gerencie as chaves de API e integrações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Chaves de API</h3>

                  <div className="space-y-2">
                    <Label htmlFor="api-key">Chave de API</Label>
                    <div className="flex gap-2">
                      <Input id="api-key" value="sk_live_51NxXXXXXXXXXXXXXXXXXXXXXX" readOnly className="font-mono" />
                      <Button variant="outline">Copiar</Button>
                      <Button variant="outline">Regenerar</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Esta chave dá acesso completo à API. Mantenha-a segura!
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Webhooks</h3>

                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">URL do Webhook</Label>
                    <Input id="webhook-url" placeholder="https://seu-dominio.com/webhook" />
                  </div>

                  <div className="space-y-2">
                    <Label>Eventos</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Switch id="event-new-order" defaultChecked />
                        <Label htmlFor="event-new-order">Novo Pedido</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="event-new-proposal" defaultChecked />
                        <Label htmlFor="event-new-proposal">Nova Proposta</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="event-status-change" defaultChecked />
                        <Label htmlFor="event-status-change">Mudança de Status</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="event-new-user" defaultChecked />
                        <Label htmlFor="event-new-user">Novo Usuário</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

