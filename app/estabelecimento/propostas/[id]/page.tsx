"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Store, X } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"

// Dados de exemplo
const pedidoInfo = {
  id: 1,
  titulo: "Cervejas para final de semana",
  categoria: "Cervejas",
  quantidade: "20 caixas",
  dataLimite: "15/04/2025",
  status: "Aberto",
}

const propostas = [
  {
    id: 1,
    fornecedor: "Distribuidora ABC",
    preco: "R$ 1.800,00",
    quantidade: "20 caixas",
    comentarios: "Entrega em até 2 dias úteis. Temos todas as marcas solicitadas.",
  },
  {
    id: 2,
    fornecedor: "Bebidas Express",
    preco: "R$ 1.950,00",
    quantidade: "22 caixas",
    comentarios: "Podemos entregar amanhã. Oferecemos 2 caixas extras como cortesia para primeira compra.",
  },
  {
    id: 3,
    fornecedor: "Cervejaria Direto",
    preco: "R$ 1.750,00",
    quantidade: "20 caixas",
    comentarios: "Somos fabricantes. Entrega em até 3 dias úteis com frete grátis.",
  },
]

export default function VisualizarPropostas({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [pedido] = useState(pedidoInfo)
  const [propostasList] = useState(propostas)

  const handleAceitar = (propostaId: number) => {
    // Aqui seria enviado para a API
    console.log(`Proposta ${propostaId} aceita`)
    router.push("/estabelecimento/dashboard")
  }

  const handleRejeitar = (propostaId: number) => {
    // Aqui seria enviado para a API
    console.log(`Proposta ${propostaId} rejeitada`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title="Propostas Recebidas" showBackButton />

      <main className="flex-1 p-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{pedido.titulo}</h2>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-muted-foreground">
              {pedido.categoria} • {pedido.quantidade}
            </span>
            <Badge className="bg-green-100 text-green-800">{pedido.status}</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">{propostasList.length} Propostas Recebidas</h3>

          {propostasList.map((proposta) => (
            <Card key={proposta.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Store className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{proposta.fornecedor}</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Preço</p>
                        <p className="font-medium">{proposta.preco}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Quantidade</p>
                        <p>{proposta.quantidade}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-sm">Comentários</p>
                      <p className="text-sm mt-1">{proposta.comentarios}</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-muted/50 p-3 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleRejeitar(proposta.id)}
                >
                  <X className="h-4 w-4 mr-1" /> Rejeitar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
                  onClick={() => handleAceitar(proposta.id)}
                >
                  <Check className="h-4 w-4 mr-1" /> Aceitar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

