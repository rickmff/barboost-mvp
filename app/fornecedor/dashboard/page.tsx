"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, MapPin, Wine } from "lucide-react"
import MobileHeader from "@/components/mobile-header"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados de exemplo
const pedidosAbertos = [
  {
    id: 1,
    titulo: "Cervejas para final de semana",
    categoria: "Cervejas",
    subcategoria: "Pilsen",
    quantidade: "20 caixas",
    dataLimite: "15/04/2025",
    localizacao: "São Paulo, SP",
  },
  {
    id: 2,
    titulo: "Vinhos importados",
    categoria: "Vinhos",
    subcategoria: "Tinto",
    quantidade: "12 garrafas",
    dataLimite: "20/04/2025",
    localizacao: "Rio de Janeiro, RJ",
  },
  {
    id: 3,
    titulo: "Destilados premium",
    categoria: "Destilados",
    subcategoria: "Whisky",
    quantidade: "8 garrafas",
    dataLimite: "10/04/2025",
    localizacao: "Belo Horizonte, MG",
  },
  {
    id: 4,
    titulo: "Refrigerantes variados",
    categoria: "Não alcoólicos",
    subcategoria: "Refrigerantes",
    quantidade: "15 fardos",
    dataLimite: "25/04/2025",
    localizacao: "Curitiba, PR",
  },
]

export default function FornecedorDashboard() {
  const router = useRouter()
  const [userName] = useState("Distribuidora ABC")
  const [pedidos] = useState(pedidosAbertos)
  const [filteredPedidos, setFilteredPedidos] = useState(pedidosAbertos)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filtros
  const [filtros, setFiltros] = useState({
    categoria: "",
    localizacao: "",
  })

  const aplicarFiltros = () => {
    let resultado = pedidos

    if (filtros.categoria) {
      resultado = resultado.filter((p) => p.categoria === filtros.categoria)
    }

    if (filtros.localizacao) {
      resultado = resultado.filter((p) => p.localizacao.includes(filtros.localizacao))
    }

    setFilteredPedidos(resultado)
    setIsFilterOpen(false)
  }

  const limparFiltros = () => {
    setFiltros({
      categoria: "",
      localizacao: "",
    })
    setFilteredPedidos(pedidos)
    setIsFilterOpen(false)
  }

  // Opções para os filtros
  const categorias = ["Cervejas", "Vinhos", "Destilados", "Não alcoólicos"]
  const localizacoes = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MobileHeader title="Dashboard" showMenuButton userName={userName} userType="fornecedor" />

      <main className="flex-1 p-4">
        <div className="mb-6 animate-fadeIn">
          <h2 className="text-xl font-semibold">Bem-vindo, {userName}</h2>
          <p className="text-sm text-muted-foreground">Encontre pedidos abertos para enviar propostas</p>
        </div>

        <div className="flex justify-between items-center mb-6 animate-fadeIn">
          <h3 className="font-medium">Pedidos Disponíveis</h3>
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 rounded-full">
                <Filter className="h-4 w-4" /> Filtrar
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtrar Pedidos</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Select
                    value={filtros.categoria}
                    onValueChange={(value) => setFiltros({ ...filtros, categoria: value })}
                  >
                    <SelectTrigger id="categoria" className="h-11 rounded-lg">
                      <SelectValue placeholder="Todas as categorias" />
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

                <div className="space-y-2">
                  <Label htmlFor="localizacao">Localização</Label>
                  <Select
                    value={filtros.localizacao}
                    onValueChange={(value) => setFiltros({ ...filtros, localizacao: value })}
                  >
                    <SelectTrigger id="localizacao" className="h-11 rounded-lg">
                      <SelectValue placeholder="Todas as localizações" />
                    </SelectTrigger>
                    <SelectContent>
                      {localizacoes.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1" onClick={limparFiltros}>
                    Limpar
                  </Button>
                  <Button className="flex-1" onClick={aplicarFiltros}>
                    Aplicar
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="space-y-4">
          {filteredPedidos.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nenhum pedido encontrado com os filtros atuais.</p>
            </div>
          ) : (
            filteredPedidos.map((pedido, index) => (
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
                        <span className="text-sm text-muted-foreground">
                          {pedido.categoria} • {pedido.subcategoria}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border border-green-200">Aberto</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Quantidade</p>
                      <p>{pedido.quantidade}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Data Limite</p>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-primary" />
                        <p>{pedido.dataLimite}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-sm">
                    <p className="text-muted-foreground">Localização</p>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-primary" />
                      <p>{pedido.localizacao}</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="bg-muted/50 p-3">
                  <Button className="w-full" onClick={() => router.push(`/fornecedor/enviar-proposta/${pedido.id}`)}>
                    Enviar Proposta
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

