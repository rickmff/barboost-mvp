"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Camera, MapPin, Store, Wine } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export default function PerfilPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"estabelecimento" | "fornecedor">("estabelecimento")
  const [userName, setUserName] = useState(userType === "estabelecimento" ? "Bar do João" : "Distribuidora ABC")

  // Estados para os formulários
  const [formData, setFormData] = useState({
    nome: userName,
    email: "contato@exemplo.com",
    telefone: "(11) 98765-4321",
    endereco: "Rua das Bebidas, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    descricao:
      userType === "estabelecimento"
        ? "Bar especializado em cervejas artesanais e drinks especiais."
        : "Distribuidora de bebidas com foco em produtos premium.",
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
    notificacoes: {
      email: true,
      app: true,
      novosNegocios: true,
      atualizacoes: false,
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      notificacoes: {
        ...prev.notificacoes,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria enviado para a API
    console.log(formData)
    // Feedback de sucesso
    alert("Perfil atualizado com sucesso!")
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MobileHeader title="Meu Perfil" showBackButton userName={userName} userType={userType} />

      <main className="flex-1 p-4">
        <div className="flex flex-col items-center mb-6 animate-fadeIn">
          <div className="relative mb-2">
            <Avatar className="h-24 w-24 border-4 border-white shadow-md">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {getInitials(userName)}
              </AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md">
              <Camera className="h-4 w-4" />
              <span className="sr-only">Alterar foto</span>
            </Button>
          </div>
          <h2 className="text-xl font-semibold">{userName}</h2>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            {userType === "estabelecimento" ? (
              <>
                <Store className="h-3.5 w-3.5 mr-1" /> Estabelecimento
              </>
            ) : (
              <>
                <Wine className="h-3.5 w-3.5 mr-1" /> Fornecedor
              </>
            )}
            <span className="mx-2">•</span>
            <MapPin className="h-3.5 w-3.5 mr-1" /> São Paulo, SP
          </div>
        </div>

        <Tabs defaultValue="informacoes" className="animate-fadeIn">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="informacoes">Informações</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          </TabsList>

          <TabsContent value="informacoes">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="h-11 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="h-11 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea
                      id="descricao"
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      rows={4}
                      className="rounded-lg resize-none"
                      placeholder="Descreva seu estabelecimento ou serviços..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit(e)
                    }}
                  >
                    Salvar Alterações
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguranca">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="senhaAtual">Senha Atual</Label>
                    <Input
                      id="senhaAtual"
                      name="senhaAtual"
                      type="password"
                      value={formData.senhaAtual}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="novaSenha">Nova Senha</Label>
                    <Input
                      id="novaSenha"
                      name="novaSenha"
                      type="password"
                      value={formData.novaSenha}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmarSenha">Confirmar Nova Senha</Label>
                    <Input
                      id="confirmarSenha"
                      name="confirmarSenha"
                      type="password"
                      value={formData.confirmarSenha}
                      onChange={handleChange}
                      className="h-11 rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit(e)
                    }}
                  >
                    Atualizar Senha
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificacoes">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Preferências de Notificação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Canais de Notificação</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Notificações por E-mail</Label>
                        <p className="text-sm text-muted-foreground">Receba atualizações no seu e-mail</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={formData.notificacoes.email}
                        onCheckedChange={(checked) => handleSwitchChange("email", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-notifications">Notificações no Aplicativo</Label>
                        <p className="text-sm text-muted-foreground">Receba notificações push no aplicativo</p>
                      </div>
                      <Switch
                        id="app-notifications"
                        checked={formData.notificacoes.app}
                        onCheckedChange={(checked) => handleSwitchChange("app", checked)}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Tipos de Notificação</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="business-notifications">Novos Negócios</Label>
                        <p className="text-sm text-muted-foreground">Propostas, pedidos e oportunidades</p>
                      </div>
                      <Switch
                        id="business-notifications"
                        checked={formData.notificacoes.novosNegocios}
                        onCheckedChange={(checked) => handleSwitchChange("novosNegocios", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="updates-notifications">Atualizações do Sistema</Label>
                        <p className="text-sm text-muted-foreground">Novos recursos e melhorias na plataforma</p>
                      </div>
                      <Switch
                        id="updates-notifications"
                        checked={formData.notificacoes.atualizacoes}
                        onCheckedChange={(checked) => handleSwitchChange("atualizacoes", checked)}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full h-11 mt-4"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit(e)
                    }}
                  >
                    Salvar Preferências
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

