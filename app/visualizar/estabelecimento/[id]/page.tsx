"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, MessageSquare, Phone, Star, Store, Wine } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Dados de exemplo para um estabelecimento
const estabelecimentoData = {
  id: "1",
  nome: "Bar do João",
  tipo: "Bar e Restaurante",
  descricao:
    "Bar especializado em cervejas artesanais e drinks especiais, com ambiente descontraído e música ao vivo nos finais de semana.",
  endereco: "Rua das Bebidas, 123 - Centro",
  cidade: "São Paulo",
  estado: "SP",
  telefone: "(11) 98765-4321",
  email: "contato@bardojoao.com.br",
  avaliacao: 4.7,
  totalAvaliacoes: 128,
  horarios: [
    { dia: "Segunda-feira", horario: "17:00 - 00:00" },
    { dia: "Terça-feira", horario: "17:00 - 00:00" },
    { dia: "Quarta-feira", horario: "17:00 - 00:00" },
    { dia: "Quinta-feira", horario: "17:00 - 01:00" },
    { dia: "Sexta-feira", horario: "17:00 - 02:00" },
    { dia: "Sábado", horario: "16:00 - 02:00" },
    { dia: "Domingo", horario: "16:00 - 00:00" },
  ],
  categorias: ["Cervejas", "Vinhos", "Destilados", "Não alcoólicos"],
  pedidosRecentes: [
    { id: 1, titulo: "Cervejas para final de semana", data: "10/04/2025", status: "Concluído" },
    { id: 2, titulo: "Vinhos importados", data: "25/03/2025", status: "Concluído" },
    { id: 3, titulo: "Destilados premium", data: "15/03/2025", status: "Concluído" },
  ],
  fotos: [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ],
}

export default function VisualizarEstabelecimento({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [estabelecimento] = useState(estabelecimentoData)

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
      <MobileHeader title="Perfil do Estabelecimento" showBackButton />

      <main className="flex-1 pb-6">
        {/* Cabeçalho do perfil */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-primary to-secondary dark:from-primary/70 dark:to-secondary/70"></div>
          <div className="absolute -bottom-16 left-4 flex items-end">
            <Avatar className="h-24 w-24 border-4 border-background shadow-md">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {getInitials(estabelecimento.nome)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-card text-primary border-none shadow-sm px-3 py-1 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{estabelecimento.avaliacao}</span>
              <span className="text-muted-foreground">({estabelecimento.totalAvaliacoes})</span>
            </Badge>
          </div>
        </div>

        {/* Informações básicas */}
        <div className="px-4 pt-20 pb-4">
          <h1 className="text-2xl font-bold">{estabelecimento.nome}</h1>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <Store className="h-4 w-4" />
            <span>{estabelecimento.tipo}</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {estabelecimento.endereco}, {estabelecimento.cidade} - {estabelecimento.estado}
            </span>
          </div>
          <p className="mt-3 text-sm">{estabelecimento.descricao}</p>

          <div className="flex gap-2 mt-4">
            <Button
              variant="default"
              className="flex-1 gap-2"
              onClick={() => (window.location.href = `tel:${estabelecimento.telefone}`)}
            >
              <Phone className="h-4 w-4" /> Ligar
            </Button>
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={() => router.push(`/chat/${estabelecimento.id}`)}
            >
              <MessageSquare className="h-4 w-4" /> Mensagem
            </Button>
          </div>
        </div>

        {/* Abas de conteúdo */}
        <Tabs defaultValue="sobre" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="sobre">Sobre</TabsTrigger>
            <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
          </TabsList>

          {/* Aba Sobre */}
          <TabsContent value="sobre" className="px-4 py-4">
            <div className="space-y-6">
              {/* Horários de funcionamento */}
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-primary" /> Horários de Funcionamento
                  </h3>
                  <div className="space-y-2">
                    {estabelecimento.horarios.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.dia}</span>
                        <span className="font-medium">{item.horario}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categorias de bebidas */}
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium flex items-center gap-2 mb-3">
                    <Wine className="h-4 w-4 text-primary" /> Categorias de Interesse
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {estabelecimento.categorias.map((categoria, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {categoria}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Informações de contato */}
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium flex items-center gap-2 mb-3">
                    <Phone className="h-4 w-4 text-primary" /> Informações de Contato
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{estabelecimento.telefone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{estabelecimento.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aba Pedidos */}
          <TabsContent value="pedidos" className="px-4 py-4">
            <div className="space-y-4">
              <h3 className="font-medium">Pedidos Recentes</h3>

              {estabelecimento.pedidosRecentes.map((pedido) => (
                <Card key={pedido.id} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{pedido.titulo}</h4>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">{pedido.data}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-900">
                        {pedido.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center mt-6">
                <Button variant="outline">Ver Todos os Pedidos</Button>
              </div>
            </div>
          </TabsContent>

          {/* Aba Fotos */}
          <TabsContent value="fotos" className="px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {estabelecimento.fotos.map((foto, index) => (
                <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={foto || "/placeholder.svg"}
                    alt={`Foto do ${estabelecimento.nome}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// Componente Mail para ícone de e-mail
function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

