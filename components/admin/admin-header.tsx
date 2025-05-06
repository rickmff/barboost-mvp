import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

interface AdminHeaderProps {
  title: string
  description?: string
}

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <header className="z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 py-1">
      <div className="flex h-16 items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              5
            </span>
          </Button>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

