"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import ProfileMenu from "./profile-menu"
import { ThemeToggle } from "./theme-toggle"

interface MobileHeaderProps {
  title: string
  showBackButton?: boolean
  showMenuButton?: boolean
  onMenuClick?: () => void
  userName?: string
  userType?: "estabelecimento" | "fornecedor"
}

export default function MobileHeader({
  title,
  showBackButton = false,
  showMenuButton = false,
  onMenuClick,
  userName = "",
  userType = "estabelecimento",
}: MobileHeaderProps) {
  const router = useRouter()
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card border-b shadow-sm">
        <div className="flex items-center">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          {showMenuButton && (
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
        <h1 className="text-lg font-semibold absolute left-1/2 -translate-x-1/2">{title}</h1>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {showProfileMenu && (
        <ProfileMenu
          userName={userName || (userType === "estabelecimento" ? "Bar do João" : "Distribuidora ABC")}
          userType={userType}
          onClose={() => setShowProfileMenu(false)}
        />
      )}
    </>
  )
}

