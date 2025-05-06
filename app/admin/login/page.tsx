"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { Eye, EyeOff, Lock, LogIn, User, Wine } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { theme } = useTheme()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de login - redirecionaria para o dashboard
    router.push("/admin")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background com efeitos diferentes para light/dark mode */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/5 dark:via-background/30 dark:to-secondary/10 z-0" />

      {/* Efeito de partículas/círculos apenas no dark mode */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </>
      )}

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md animate-fadeIn z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4 shadow-lg dark:shadow-primary/20">
            <Wine className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2 dark:text-primary">BarBoost Admin</h1>
          <p className="text-muted-foreground text-center">Painel administrativo da plataforma BarBoost</p>
        </div>

        <Card className="w-full border-none shadow-xl dark:shadow-2xl dark:shadow-black/10 overflow-hidden">
          {/* Gradiente na borda superior do card apenas no dark mode */}
          {theme === "dark" && (
            <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-secondary/80 to-primary/80"></div>
          )}

          <div className="absolute inset-0 bg-card/80 backdrop-blur-xl dark:bg-card/70 dark:backdrop-blur-xl z-0"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-center">Login Administrativo</CardTitle>
            <CardDescription className="text-center">Entre com suas credenciais de administrador</CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground dark:text-foreground/90">
                  Email
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@barboost.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 pl-10 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-foreground dark:text-foreground/90">
                    Senha
                  </Label>
                  <a
                    href="#"
                    className="text-xs text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/90 transition-colors"
                  >
                    Esqueci a senha
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 pl-10 pr-10 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-11 px-3 py-0 hover:bg-transparent dark:hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                    )}
                    <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 mt-4 gap-2 bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 dark:text-primary-foreground transition-all shadow-md hover:shadow-lg dark:shadow-primary/20"
              >
                <LogIn className="h-4 w-4" /> Entrar
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center relative z-10">
            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
              Acesso restrito a administradores da plataforma
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

