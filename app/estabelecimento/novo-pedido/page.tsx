"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"

export default function NovoPedido() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    subcategoria: "",
    quantidade: "",
    dataLimite: "",
    observacoes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria enviado para a API
    console.log(formData)
    // Redireciona para o dashboard após criar o pedido
    router.push("/estabelecimento/dashboard")
  }

  // Opções para os selects
  const categorias = ["Cervejas", "Vinhos", "Destilados", "Não alcoólicos"]
  const subcategorias = {
    Cervejas: ["Pilsen", "IPA", "Stout", "Weiss", "Lager"],
    Vinhos: ["Tinto", "Branco", "Rosé", "Espumante"],
    Destilados: ["Whisky", "Vodka", "Gin", "Tequila", "Rum"],
    "Não alcoólicos": ["Refrigerantes", "Sucos", "Águas", "Energéticos"],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title="Novo Pedido" showBackButton />

      <main className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Criar Novo Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <form id="novo-pedido-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título do Pedido</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  placeholder="Ex: Cervejas para o final de semana"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select onValueChange={(value) => handleSelectChange("categoria", value)} required>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.categoria && (
                <div className="space-y-2">
                  <Label htmlFor="subcategoria">Subcategoria</Label>
                  <Select onValueChange={(value) => handleSelectChange("subcategoria", value)} required>
                    <SelectTrigger id="subcategoria">
                      <SelectValue placeholder="Selecione uma subcategoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategorias[formData.categoria as keyof typeof subcategorias]?.map((subcat) => (
                        <SelectItem key={subcat} value={subcat}>
                          {subcat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="quantidade">Quantidade Aproximada</Label>
                <Input
                  id="quantidade"
                  name="quantidade"
                  placeholder="Ex: 20 caixas, 15 garrafas"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataLimite">Data Limite de Resposta</Label>
                <Input
                  id="dataLimite"
                  name="dataLimite"
                  type="date"
                  value={formData.dataLimite}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  name="observacoes"
                  placeholder="Detalhes adicionais sobre o pedido..."
                  rows={4}
                  value={formData.observacoes}
                  onChange={handleChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="novo-pedido-form" className="w-full">
              Publicar Pedido
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

