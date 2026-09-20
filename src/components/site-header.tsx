"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { club } from "@/content/club"
import { Pressable } from "@/components/pressable"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-md bg-brand text-sm font-bold text-brand-foreground"
          >
            SR
          </span>
          <span className="hidden sm:inline">{club.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {club.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors",
                  active
                    ? "text-brand"
                    : "text-foreground/80 hover:text-brand"
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Pressable className="ml-2">
            <Button
              render={<Link href="/join" />}
              className="rounded-full bg-brand px-5 text-brand-foreground hover:bg-brand/90"
              size="lg"
            >
              Join
            </Button>
          </Pressable>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {club.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground no-underline hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Pressable className="mt-2 w-full">
              <Button
                render={<Link href="/join" onClick={() => setOpen(false)} />}
                className="w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/90"
                size="lg"
              >
                Join
              </Button>
            </Pressable>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
