import type { Metadata } from "next"
import { Geist_Mono, Outfit } from "next/font/google"
import { SiteShell } from "@/components/site-shell"
import { club } from "@/content/club"
import "./globals.css"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `${club.name} | ${club.formalName}`,
    template: `%s | ${club.name}`,
  },
  description: club.mission,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
