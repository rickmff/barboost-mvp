import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wine } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/5 dark:via-background/30 dark:to-secondary/10 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md animate-fadeIn">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary text-white p-4 rounded-full mb-4 shadow-lg dark:shadow-primary/20">
            <Wine className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2">BarBoost</h1>
          <p className="text-muted-foreground text-center">
            Conectando estabelecimentos e fornecedores de bebidas de forma 100% digital
          </p>
        </div>

        <Card className="w-full bg-card/90 backdrop-blur-sm border-none shadow-lg dark:bg-card/70 dark:backdrop-blur-xl dark:shadow-xl dark:shadow-black/10">
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <div className="w-full space-y-4">
              <Button asChild className="w-full" size="lg">
                <Link href="/login">Entrar</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/20 dark:border-primary/30 dark:hover:bg-primary/10"
                size="lg"
              >
                <Link href="/register">Criar Conta</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

