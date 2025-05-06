"use client"

import type React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell, CreditCard, HelpCircle, LogOut, Settings, Store, User, Wine } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProfileMenuProps {
  userName: string
  userType: "estabelecimento" | "fornecedor"
  onClose: () => void
}

export default function ProfileMenu({ userName, userType, onClose }: ProfileMenuProps) {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
    onClose()
  }

  const handleNavigate = (path: string) => {
    router.push(path)
    onClose()
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="fixed inset-0 bg-black/20 dark:bg-black/50 z-50 animate-fadeIn" onClick={onClose}>
      <div className="absolute top-16 right-4 w-64 animate-slideInUp" onClick={(e) => e.stopPropagation()}>
        <Card className="overflow-hidden shadow-lg border-none">
          <div className="bg-gradient-to-r from-primary to-secondary p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarFallback className="bg-primary-foreground text-primary">{getInitials(userName)}</AvatarFallback>
              </Avatar>
              <div className="text-white">
                <h3 className="font-medium">{userName}</h3>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  {userType === "estabelecimento" ? (
                    <>
                      <Store className="h-3 w-3" /> Estabelecimento
                    </>
                  ) : (
                    <>
                      <Wine className="h-3 w-3" /> Fornecedor
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="p-2">
            <MenuItem
              icon={<User className="h-4 w-4" />}
              label="Meu Perfil"
              onClick={() => handleNavigate("/perfil")}
            />
            <MenuItem icon={<Bell className="h-4 w-4" />} label="Notificações" badge="3" />
            <MenuItem icon={<CreditCard className="h-4 w-4" />} label="Pagamentos" />
            <MenuItem icon={<Settings className="h-4 w-4" />} label="Configurações" />
            <MenuItem icon={<HelpCircle className="h-4 w-4" />} label="Ajuda e Suporte" />

            <div className="pt-2 mt-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  badge?: string
  onClick?: () => void
}

function MenuItem({ icon, label, badge, onClick }: MenuItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start h-10 px-3 my-1 rounded-md" onClick={onClick}>
      <span className="mr-2">{icon}</span>
      {label}
      {badge && (
        <span className="ml-auto bg-primary text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
          {badge}
        </span>
      )}
    </Button>
  )
}

