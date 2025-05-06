"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  Clock,
  ExternalLink,
  Globe,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Star,
  Truck,
  Wine,
} from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Dados de exemplo para um fornecedor
const fornecedorData = {
  id: "1",
  nome: "Distribuidora ABC",
  tipo: "Distribuidor de Bebidas",
  descricao:
    "Distribuidora especializada em bebidas premium, com foco em cervejas artesanais, vinhos importados e destilados de alta qualidade.",
  endereco: "Av. das Indústrias, 456",
  cidade: "São Paulo",
  estado: "SP",
  telefone: "(11) 3456-7890",
  email: "contato@distribuidoraabc.com.br",
  website: "www.distribuidoraabc.com.br",
  avaliacao: 4.8,
  totalAvaliacoes: 95,
  areasAtendimento: ["São Paulo - SP", "Campinas - SP", "Santos - SP", "Guarulhos - SP"],
  tempoEntrega: "24-48 horas",
  categorias: ["Cervejas", "Vinhos", "Destilados", "Não alcoólicos"],
  marcas: [
    { nome: "Cervejaria Artesanal X", logo: "/placeholder.svg?height=60&width=120" },
    { nome: "Vinícola Premium Y", logo: "/placeholder.svg?height=60&width=120" },
    { nome: "Destilaria Z", logo: "/placeholder.svg?height=60&width=120" },
    { nome: "Importadora W", logo: "/placeholder.svg?height=60&width=120" },
  ],
  produtos: [
    {
      id: 1,
      nome: "Cerveja IPA Premium",
      categoria: "Cervejas",
      imagem: "/placeholder.svg?height=100&width=100",
      preco: "R$ 18,90/unidade",
      disponibilidade: "Em estoque",
    },
    {
      id: 2,
      nome: "Vinho Tinto Reserva",
      categoria: "Vinhos",
      imagem: "/placeholder.svg?height=100&width=100",
      preco: "R$ 89,90/unidade",
      disponibilidade: "Em estoque",
    },
    {
      id: 3,
      nome: "Whisky 12 anos",
      categoria: "Destilados",
      imagem: "/placeholder.svg?height=100&width=100",
      preco: "R$ 159,90/unidade",
      disponibilidade: "Em estoque",
    },
    {
      id: 4,
      nome: "Água Mineral Premium",
      categoria: "Não alcoólicos",
      imagem: "/placeholder.svg?height=100&width=100",
      preco: "R$ 4,50/unidade",
      disponibilidade: "Em estoque",
    },
  ],
}

export default function VisualizarFornecedor({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [fornecedor] = useState(fornecedorData)

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
      <MobileHeader title="Perfil do Fornecedor" showBackButton />

      <main className="flex-1 pb-6">
        {/* Cabeçalho do perfil */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-secondary to-primary dark:from-secondary/70 dark:to-primary/70"></div>
          <div className="absolute -bottom-16 left-4 flex items-end">
            <Avatar className="h-24 w-24 border-4 border-background shadow-md">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {getInitials(fornecedor.nome)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-card text-primary border-none shadow-sm px-3 py-1 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{fornecedor.avaliacao}</span>
              <span className="text-muted-foreground">({fornecedor.totalAvaliacoes})</span>
            </Badge>
          </div>
        </div>

        {/* Informações básicas */}
        <div className="px-4 pt-20 pb-4">
          <h1 className="text-2xl font-bold">{fornecedor.nome}</h1>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>{fornecedor.tipo}</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {fornecedor.endereco}, {fornecedor.cidade} - {fornecedor.estado}
            </span>
          </div>
          <p className="mt-3 text-sm">{fornecedor.descricao}</p>

          <div className="flex gap-2 mt-4">
            <Button
              variant="default"
              className="flex-1 gap-2"
              onClick={() => (window.location.href = `tel:${fornecedor.telefone}`)}
            >
              <Phone className="h-4 w-4" /> Ligar
            </Button>
            <Button variant="outline" className="flex-1 gap-2" onClick={() => router.push(`/chat/${fornecedor.id}`)}>
              <MessageSquare className="h-4 w-4" /> Mensagem
            </Button>
          </div>
        </div>

        {/* Abas de conteúdo */}
        <Tabs defaultValue="sobre" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="sobre">Sobre</TabsTrigger>
            <TabsTrigger value="produtos">Produtos</TabsTrigger>
            <TabsTrigger value="marcas">Marcas</TabsTrigger>
          </TabsList>

          {/* Aba Sobre */}
          <TabsContent value="sobre" className="px-4 py-4">
            <div className="space-y-6">
              {/* Áreas de atendimento */}
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium flex items-center gap-2 mb-3">
                    <Truck className="h-4 w-4 text-primary" /> Áreas de Atendimento
                  </h3>
                  <div className="space-y-2">
                    {fornecedor.areasAtendimento.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Tempo médio de entrega:</span>
                    <span className="font-medium ml-1">{fornecedor.tempoEntrega}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Categorias de bebidas */}
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium flex items-center gap-2 mb-3">
                    <Wine className="h-4 w-4 text-primary" /> Categorias de Produtos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {fornecedor.categorias.map((categoria, index) => (
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
                      <span>{fornecedor.telefone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{fornecedor.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>{fornecedor.website}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aba Produtos */}
          <TabsContent value="produtos" className="px-4 py-4">
            <div className="space-y-4">
              <h3 className="font-medium">Catálogo de Produtos</h3>

              {fornecedor.produtos.map((produto) => (
                <Card key={produto.id} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden relative flex-shrink-0">
                        <Image
                          src={produto.imagem || "/placeholder.svg"}
                          alt={produto.nome}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{produto.nome}</h4>
                        <div className="flex items-center mt-1">
                          <Badge variant="outline" className="text-xs">
                            {produto.categoria}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-medium text-primary">{produto.preco}</span>
                          <Badge className="bg-green-100 text-green-800 border border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-900">
                            {produto.disponibilidade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center mt-6">
                <Button variant="outline">Ver Catálogo Completo</Button>
              </div>
            </div>
          </TabsContent>

          {/* Aba Marcas */}
          <TabsContent value="marcas" className="px-4 py-4">
            <div className="space-y-4">
              <h3 className="font-medium">Marcas Representadas</h3>

              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {fornecedor.marcas.map((marca, index) => (
                      <div key={index} className="flex flex-col items-center p-3 border rounded-lg dark:border-muted">
                        <div className="h-12 w-24 relative mb-2">
                          <Image
                            src={marca.logo || "/placeholder.svg"}
                            alt={marca.nome}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-center">{marca.nome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-6">
                <Button variant="outline">Ver Todas as Marcas</Button>
              </div>
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

