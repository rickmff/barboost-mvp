"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Wine } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"

// Dados de exemplo
const pedidos = [
  {
    id: 1,
    titulo: "Cervejas para final de semana",
    categoria: "Cervejas",
    quantidade: "20 caixas",
    dataLimite: "15/04/2025",
    status: "Aberto",
    propostas: 3,
  },
  {
    id: 2,
    titulo: "Vinhos importados",
    categoria: "Vinhos",
    quantidade: "12 garrafas",
    dataLimite: "20/04/2025",
    status: "Acordado",
    propostas: 5,
  },
  {
    id: 3,
    titulo: "Destilados premium",
    categoria: "Destilados",
    quantidade: "8 garrafas",
    dataLimite: "10/04/2025",
    status: "Expirado",
    propostas: 0,
  },
  {
    id: 4,
    titulo: "Refrigerantes variados",
    categoria: "Não alcoólicos",
    quantidade: "15 fardos",
    dataLimite: "25/04/2025",
    status: "Cancelado",
    propostas: 2,
  },
]

export default function EstabelecimentoDashboard() {
  const router = useRouter()
  const [userName] = useState("Bar do João")

  // Função para determinar a cor do badge de status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aberto":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-950/50 dark:text-green-400 dark:border-green-900"
      case "Acordado":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-900"
      case "Expirado":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-900"
      case "Cancelado":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-900"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MobileHeader title="Dashboard" showMenuButton userName={userName} userType="estabelecimento" />

      <main className="flex-1 p-4">
        <div className="mb-6 animate-fadeIn">
          <h2 className="text-xl font-semibold">Bem-vindo, {userName}</h2>
          <p className="text-sm text-muted-foreground">Gerencie seus pedidos de bebidas</p>
        </div>

        <Button
          className="w-full mb-6 gap-2 shadow-md h-12 animate-fadeIn"
          size="lg"
          onClick={() => router.push("/estabelecimento/novo-pedido")}
        >
          <Plus className="h-5 w-5" /> Novo Pedido
        </Button>

        <div className="space-y-4">
          <h3 className="font-medium">Seus Pedidos</h3>

          {pedidos.map((pedido, index) => (
            <Card
              key={pedido.id}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow animate-slideInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{pedido.titulo}</h4>
                    <div className="flex items-center mt-1">
                      <Wine className="h-4 w-4 text-primary mr-1" />
                      <span className="text-sm text-muted-foreground">{pedido.categoria}</span>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(pedido.status)} border`}>{pedido.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Quantidade</p>
                    <p>{pedido.quantidade}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Data Limite</p>
                    <p>{pedido.dataLimite}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-muted/50 dark:bg-muted/10 p-3 flex justify-between items-center">
                <span className="text-sm">
                  {pedido.propostas} {pedido.propostas === 1 ? "proposta" : "propostas"}
                </span>
                <Button
                  variant={pedido.propostas > 0 ? "default" : "outline"}
                  size="sm"
                  onClick={() => router.push(`/estabelecimento/propostas/${pedido.id}`)}
                  disabled={pedido.propostas === 0}
                  className={pedido.propostas > 0 ? "bg-primary hover:bg-primary/90" : ""}
                >
                  Ver Propostas
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

