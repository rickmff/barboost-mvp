import type React from "react"
import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "BarBoost Admin",
  description: "Painel administrativo do BarBoost",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col lg:flex-row bg-background">
      <div className="w-full lg:w-64 lg:shrink-0">
        <AdminSidebar />
      </div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </ThemeProvider>
    </div>
  )
}

