"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Store, User, Wine } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RegisterPage() {
  const router = useRouter()
  const { theme } = useTheme()
  const [userType, setUserType] = useState("estabelecimento")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de registro - redirecionaria para o dashboard apropriado
    if (userType === "estabelecimento") {
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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div
            className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: "1.5s" }}
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
            <CardTitle className="text-2xl text-center">Criar Conta</CardTitle>
            <CardDescription className="text-center">Preencha os dados para se cadastrar no BarBoost</CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground dark:text-foreground/90">
                  Nome
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Nome completo ou do estabelecimento"
                    required
                    className="h-11 pl-10 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                  />
                </div>
              </div>

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
                    required
                    className="h-11 pl-10 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground dark:text-foreground/90">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-11 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground dark:text-foreground/90">
                  Localização
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Cidade, Estado"
                    required
                    className="h-11 pl-10 rounded-lg bg-background dark:bg-background/50 dark:focus:bg-background/80 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-foreground dark:text-foreground/90">Tipo de conta</Label>
                <RadioGroup
                  defaultValue="estabelecimento"
                  className="grid grid-cols-2 gap-4"
                  onValueChange={setUserType}
                >
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      userType === "estabelecimento"
                        ? "border-primary bg-primary/5 dark:bg-primary/10 dark:border-primary/80"
                        : "border-muted dark:border-muted/50"
                    }`}
                  >
                    <Store
                      className={`h-6 w-6 mb-2 ${
                        userType === "estabelecimento"
                          ? "text-primary"
                          : "text-muted-foreground dark:text-muted-foreground/70"
                      }`}
                    />
                    <RadioGroupItem value="estabelecimento" id="estabelecimento" className="sr-only" />
                    <Label
                      htmlFor="estabelecimento"
                      className={`cursor-pointer ${
                        userType === "estabelecimento" ? "text-primary font-medium" : "dark:text-muted-foreground/90"
                      }`}
                    >
                      Estabelecimento
                    </Label>
                  </div>
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      userType === "fornecedor"
                        ? "border-primary bg-primary/5 dark:bg-primary/10 dark:border-primary/80"
                        : "border-muted dark:border-muted/50"
                    }`}
                  >
                    <Wine
                      className={`h-6 w-6 mb-2 ${
                        userType === "fornecedor"
                          ? "text-primary"
                          : "text-muted-foreground dark:text-muted-foreground/70"
                      }`}
                    />
                    <RadioGroupItem value="fornecedor" id="fornecedor" className="sr-only" />
                    <Label
                      htmlFor="fornecedor"
                      className={`cursor-pointer ${
                        userType === "fornecedor" ? "text-primary font-medium" : "dark:text-muted-foreground/90"
                      }`}
                    >
                      Fornecedor
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full h-11 mt-4 bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 dark:text-primary-foreground transition-all shadow-md hover:shadow-lg dark:shadow-primary/20"
              >
                Criar Conta
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center relative z-10">
            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/90 transition-colors font-medium"
              >
                Entrar
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

