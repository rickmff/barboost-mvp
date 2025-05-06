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
  Check,
  ChevronDown,
  Download,
  Edit,
  Eye,
  FileText,
  MoreHorizontal,
  Package,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react"
import { AdminHeader } from "@/components/admin/admin-header"

// Dados de exemplo
const proposals = [
  {
    id: 1,
    order: "Cervejas para final de semana",
    orderId: 1,
    establishment: "Bar do João",
    supplier: "Distribuidora ABC",
    value: "R$ 2.450,00",
    deliveryDate: "15/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "10/04/2025",
  },
  {
    id: 2,
    order: "Vinhos importados",
    orderId: 2,
    establishment: "Restaurante Gourmet",
    supplier: "Vinhos Especiais Ltda",
    value: "R$ 3.850,00",
    deliveryDate: "18/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Aceita",
    statusBarboost: "Pendente",
    createdAt: "06/04/2025",
  },
  {
    id: 3,
    order: "Cervejas para final de semana",
    orderId: 1,
    establishment: "Bar do João",
    supplier: "Bebidas Express",
    value: "R$ 2.380,00",
    deliveryDate: "14/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "11/04/2025",
  },
  {
    id: 4,
    order: "Vinhos importados",
    orderId: 2,
    establishment: "Restaurante Gourmet",
    supplier: "Distribuidora Nacional",
    value: "R$ 4.120,00",
    deliveryDate: "19/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Recusada",
    statusBarboost: "Pendente",
    createdAt: "07/04/2025",
  },
  {
    id: 5,
    order: "Cervejas artesanais",
    orderId: 5,
    establishment: "Pub Inglês",
    supplier: "Distribuidora ABC",
    value: "R$ 3.200,00",
    deliveryDate: "17/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "13/04/2025",
  },
  {
    id: 6,
    order: "Espumantes para evento",
    orderId: 6,
    establishment: "Buffet Festas",
    supplier: "Vinhos Especiais Ltda",
    value: "R$ 5.760,00",
    deliveryDate: "28/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "15/04/2025",
  },
  {
    id: 7,
    order: "Espumantes para evento",
    orderId: 6,
    establishment: "Buffet Festas",
    supplier: "Distribuidora Nacional",
    value: "R$ 6.100,00",
    deliveryDate: "29/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "15/04/2025",
  },
  {
    id: 8,
    order: "Espumantes para evento",
    orderId: 6,
    establishment: "Buffet Festas",
    supplier: "Bebidas Express",
    value: "R$ 5.890,00",
    deliveryDate: "27/04/2025",
    statusProposta: "Ativa",
    statusFornecedor: "Pendente",
    statusBarboost: "Pendente",
    createdAt: "16/04/2025",
  },
]

export default function ProposalsPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pendente":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pendente</Badge>
      case "Aceita":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Aceita</Badge>
      case "Recusada":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Recusada</Badge>
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Propostas" description="Gerenciar propostas de fornecedores" />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Todas as Propostas</h2>
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
                <Input placeholder="Buscar propostas..." className="w-[300px]" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Filtrar <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Todas</DropdownMenuItem>
                    <DropdownMenuItem>Pendentes</DropdownMenuItem>
                    <DropdownMenuItem>Aceitas</DropdownMenuItem>
                    <DropdownMenuItem>Recusadas</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="text-sm text-muted-foreground">
                Mostrando <strong>8</strong> de <strong>8</strong> propostas
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">ID</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1 cursor-pointer">
                      Pedido <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Estabelecimento</TableHead>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Entrega</TableHead>
                  <TableHead>Status Proposta</TableHead>
                  <TableHead>Status Fornecedor</TableHead>
                  <TableHead>Status Barboost</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposals.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell className="font-medium">{proposal.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <ShoppingCart className="h-4 w-4 text-primary" />
                        <span className="font-medium">{proposal.order}</span>
                        <span className="text-xs text-muted-foreground">#{proposal.orderId}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4 text-blue-500" />
                        <span>{proposal.establishment}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4 text-green-500" />
                        <span>{proposal.supplier}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{proposal.value}</TableCell>
                    <TableCell>{proposal.deliveryDate}</TableCell>
                    <TableCell>{getStatusBadge(proposal.statusProposta)}</TableCell>
                    <TableCell>{getStatusBadge(proposal.statusFornecedor)}</TableCell>
                    <TableCell>{getStatusBadge(proposal.statusBarboost)}</TableCell>
                    <TableCell>{proposal.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {proposal.statusFornecedor === "Aceita" && (
                          <>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Eye className="h-4 w-4" /> Ver detalhes
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-red-600 dark:text-red-400">
                              <Trash2 className="h-4 w-4" /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 border-t flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Mostrando 8 resultados de 8 registros</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
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