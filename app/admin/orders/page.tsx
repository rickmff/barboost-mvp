import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpDown,
  Building2,
  ChevronDown,
  Download,
  Edit,
  Eye,
  MoreHorizontal,
  ShoppingCart,
  Trash2,
  Wine,
} from "lucide-react"
import { AdminHeader } from "@/components/admin/admin-header"

// Dados de exemplo
const orders = [
  {
    id: 1,
    title: "Cervejas para final de semana",
    establishment: "Bar do João",
    category: "Cervejas",
    quantity: "20 caixas",
    deadline: "15/04/2025",
    status: "Aberto",
    proposals: 3,
    createdAt: "10/04/2025",
  },
  {
    id: 2,
    title: "Vinhos importados",
    establishment: "Restaurante Gourmet",
    category: "Vinhos",
    quantity: "12 garrafas",
    deadline: "20/04/2025",
    status: "Acordado",
    proposals: 5,
    createdAt: "05/04/2025",
  },
  {
    id: 3,
    title: "Destilados premium",
    establishment: "Bar do Pedro",
    category: "Destilados",
    quantity: "8 garrafas",
    deadline: "10/04/2025",
    status: "Expirado",
    proposals: 0,
    createdAt: "01/04/2025",
  },
  {
    id: 4,
    title: "Refrigerantes variados",
    establishment: "Café Central",
    category: "Não alcoólicos",
    quantity: "15 fardos",
    deadline: "25/04/2025",
    status: "Cancelado",
    proposals: 2,
    createdAt: "08/04/2025",
  },
  {
    id: 5,
    title: "Cervejas artesanais",
    establishment: "Pub Inglês",
    category: "Cervejas",
    quantity: "10 caixas",
    deadline: "18/04/2025",
    status: "Aberto",
    proposals: 1,
    createdAt: "12/04/2025",
  },
  {
    id: 6,
    title: "Espumantes para evento",
    establishment: "Buffet Festas",
    category: "Vinhos",
    quantity: "24 garrafas",
    deadline: "30/04/2025",
    status: "Aberto",
    proposals: 4,
    createdAt: "14/04/2025",
  },
]

export default function OrdersPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aberto":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Aberto</Badge>
      case "Acordado":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Acordado</Badge>
      case "Expirado":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Expirado</Badge>
        )
      case "Cancelado":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Cancelado</Badge>
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Pedidos" description="Gerenciar pedidos da plataforma" />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Todos os Pedidos</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        <Card>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input placeholder="Buscar pedidos..." className="w-[300px]" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Filtrar <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Todos</DropdownMenuItem>
                    <DropdownMenuItem>Cervejas</DropdownMenuItem>
                    <DropdownMenuItem>Vinhos</DropdownMenuItem>
                    <DropdownMenuItem>Destilados</DropdownMenuItem>
                    <DropdownMenuItem>Não alcoólicos</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Abertos</DropdownMenuItem>
                    <DropdownMenuItem>Acordados</DropdownMenuItem>
                    <DropdownMenuItem>Expirados</DropdownMenuItem>
                    <DropdownMenuItem>Cancelados</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="text-sm text-muted-foreground">
                Mostrando <strong>6</strong> de <strong>6</strong> pedidos
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Título <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Estabelecimento</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Data Limite</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Propostas</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4 text-blue-500" />
                      <span>{order.establishment}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Wine className="h-4 w-4 text-primary" />
                      <span>{order.category}</span>
                    </div>
                  </TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {order.proposals}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4" /> Ver detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="h-4 w-4" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600 dark:text-red-400">
                          <Trash2 className="h-4 w-4" /> Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 border-t flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Mostrando 6 resultados de 6 registros</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" disabled>
                Próximo
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

