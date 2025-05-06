"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, Wine } from "lucide-react"

// Dados de exemplo
const pedidoInfo = {
  id: 1,
  titulo: "Cervejas para final de semana",
  categoria: "Cervejas",
  subcategoria: "Pilsen",
  quantidade: "20 caixas",
  dataLimite: "15/04/2025",
  localizacao: "São Paulo, SP",
  descricao:
    "Precisamos de cervejas para evento no próximo final de semana. Preferência por marcas nacionais populares.",
}

export default function EnviarProposta({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [pedido] = useState(pedidoInfo)
  const [formData, setFormData] = useState({
    preco: "",
    quantidade: "",
    observacoes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria enviado para a API
    console.log(formData)
    // Redireciona para o dashboard após enviar a proposta
    router.push("/fornecedor/dashboard")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title="Enviar Proposta" showBackButton />

      <main className="flex-1 p-4">
        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">{pedido.titulo}</h2>
            <div className="flex items-center mt-1">
              <Wine className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-sm text-muted-foreground">
                {pedido.categoria} • {pedido.subcategoria}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div>
                <p className="text-muted-foreground">Quantidade</p>
                <p>{pedido.quantidade}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Data Limite</p>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <p>{pedido.dataLimite}</p>
                </div>
              </div>
            </div>

            <div className="mt-2 text-sm">
              <p className="text-muted-foreground">Localização</p>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <p>{pedido.localizacao}</p>
              </div>
            </div>

            {pedido.descricao && (
              <div className="mt-4 text-sm">
                <p className="text-muted-foreground">Descrição</p>
                <p className="mt-1">{pedido.descricao}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sua Proposta</CardTitle>
          </CardHeader>
          <CardContent>
            <form id="enviar-proposta-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="preco">Preço Proposto</Label>
                <Input
                  id="preco"
                  name="preco"
                  placeholder="Ex: R$ 1.800,00"
                  value={formData.preco}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantidade">Quantidade Disponível</Label>
                <Input
                  id="quantidade"
                  name="quantidade"
                  placeholder="Ex: 20 caixas"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  name="observacoes"
                  placeholder="Detalhes adicionais sobre sua proposta..."
                  rows={4}
                  value={formData.observacoes}
                  onChange={handleChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="enviar-proposta-form" className="w-full">
              Enviar Proposta
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

