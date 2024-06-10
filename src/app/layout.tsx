import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "Simple Quicks",
  description: "Simple Quicks"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <div className="bg-[#333333] flex">
          <aside className="w-64 bg-[#4F4F4F] h-screen p-4"></aside>
          <div className="container flex-1">
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white" />
              <Input type="search" className="w-full rounded-lg bg-[#4F4F4F] pl-8 border-none" />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
