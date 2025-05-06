"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff, Lock, Mail, Wine } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  const router = useRouter()
  const { theme } = useTheme()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de login - redirecionaria para o dashboard apropriado7
    if (email.includes("estabelecimento")) {
      router.push("/estabelecimento/dashboard")
    } else {
      router.push("/fornecedor/dashboard")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
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
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-background/80 dark:hover:bg-background/20"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <div className="flex items-center gap-2">
            <Wine className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">BarBoost</span>
          </div>
        </div>

        <Card className="w-full border-none shadow-xl dark:shadow-2xl dark:shadow-black/10 overflow-hidden">
          {/* Gradiente na borda superior do card apenas no dark mode */}
          {theme === "dark" && (
            <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-secondary/80 to-primary/80"></div>
          )}

          <div className="absolute inset-0 bg-card/90 backdrop-blur-sm dark:bg-card/70 dark:backdrop-blur-xl z-0"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-center">Entrar</CardTitle>
            <CardDescription className="text-center">Acesse sua conta no BarBoost</CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground dark:text-foreground/90">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
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
                  <Link
                    href="/esqueci-senha"
                    className="text-xs text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/90 transition-colors"
                  >
                    Esqueci a senha
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
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
                className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 dark:text-primary-foreground transition-all shadow-md hover:shadow-lg dark:shadow-primary/20"
              >
                Entrar
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center relative z-10">
            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/90 transition-colors font-medium"
              >
                Criar conta
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

