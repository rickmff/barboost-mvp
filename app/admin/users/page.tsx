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
  Package,
  Plus,
  Trash2,
  Upload,
  Users,
} from "lucide-react"
import { AdminHeader } from "@/components/admin/admin-header"

// Dados de exemplo
const users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    type: "estabelecimento",
    location: "São Paulo, SP",
    status: "ativo",
    createdAt: "10/04/2025",
  },
  {
    id: 2,
    name: "Distribuidora ABC",
    email: "contato@distribuidoraabc.com",
    type: "fornecedor",
    location: "Rio de Janeiro, RJ",
    status: "ativo",
    createdAt: "05/03/2025",
  },
  {
    id: 3,
    name: "Bar do Pedro",
    email: "contato@bardopedro.com",
    type: "estabelecimento",
    location: "Belo Horizonte, MG",
    status: "ativo",
    createdAt: "15/02/2025",
  },
  {
    id: 4,
    name: "Bebidas Express",
    email: "contato@bebidasexpress.com",
    type: "fornecedor",
    location: "Curitiba, PR",
    status: "ativo",
    createdAt: "20/01/2025",
  },
  {
    id: 5,
    name: "Restaurante Gourmet",
    email: "contato@restaurantegourmet.com",
    type: "estabelecimento",
    location: "Brasília, DF",
    status: "inativo",
    createdAt: "12/12/2024",
  },
  {
    id: 6,
    name: "Vinhos Importados Ltda",
    email: "contato@vinhosimportados.com",
    type: "fornecedor",
    location: "Porto Alegre, RS",
    status: "pendente",
    createdAt: "05/11/2024",
  },
  {
    id: 7,
    name: "Café Central",
    email: "contato@cafecentral.com",
    type: "estabelecimento",
    location: "Salvador, BA",
    status: "ativo",
    createdAt: "18/10/2024",
  },
  {
    id: 8,
    name: "Distribuidora Nacional",
    email: "contato@distribuidoranacional.com",
    type: "fornecedor",
    location: "Recife, PE",
    status: "ativo",
    createdAt: "22/09/2024",
  },
]

export default function UsersPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ativo":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Ativo</Badge>
      case "inativo":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Inativo</Badge>
      case "pendente":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pendente</Badge>
        )
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    return type === "estabelecimento" ? (
      <Building2 className="h-4 w-4 text-blue-500" />
    ) : (
      <Package className="h-4 w-4 text-green-500" />
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader title="Usuários" description="Gerenciar usuários da plataforma" />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Todos os Usuários</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" />
              Importar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Adicionar Usuário
            </Button>
          </div>
        </div>

        <Card>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input placeholder="Buscar usuários..." className="w-[300px]" />
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
                    <DropdownMenuItem>Estabelecimentos</DropdownMenuItem>
                    <DropdownMenuItem>Fornecedores</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Ativos</DropdownMenuItem>
                    <DropdownMenuItem>Inativos</DropdownMenuItem>
                    <DropdownMenuItem>Pendentes</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="text-sm text-muted-foreground">
                Mostrando <strong>8</strong> de <strong>8</strong> usuários
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Nome <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Cadastro</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(user.type)}
                      <span>{user.type === "estabelecimento" ? "Estabelecimento" : "Fornecedor"}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.createdAt}</TableCell>
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
            <div className="text-sm text-muted-foreground">Mostrando 8 resultados de 8 registros</div>
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

