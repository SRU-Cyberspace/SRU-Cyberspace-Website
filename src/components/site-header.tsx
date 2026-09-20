"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { club } from "@/content/club"
import { Pressable } from "@/components/pressable"
import { SvgUnderline } from "@/components/svg-underline"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const easeOut = [0.23, 1, 0.32, 1] as const

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const activeHref =
    club.nav.find((item) => isActivePath(pathname, item.href))?.href ?? "/"
  const underlineHref = hoveredHref ?? activeHref

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

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
          onMouseLeave={() => setHoveredHref(null)}
        >
          {club.nav.map((item) => {
            const active = isActivePath(pathname, item.href)
            const showUnderline = underlineHref === item.href
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredHref(item.href)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative z-10 block rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors",
                    active || hoveredHref === item.href
                      ? "text-brand"
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
                {showUnderline ? (
                  <motion.div
                    layoutId={reduceMotion ? undefined : "nav-gold-underline"}
                    className="pointer-events-none absolute inset-x-2 bottom-0.5"
                    transition={{ duration: 0.25, ease: easeOut }}
                  >
                    <SvgUnderline className="h-2 w-full text-gold" />
                  </motion.div>
                ) : null}
              </div>
            )
          })}
          <Pressable className="ml-2">
            <Link
              href="/join"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-brand px-5 text-brand-foreground no-underline hover:bg-brand/90"
              )}
            >
              Join
            </Link>
          </Pressable>
        </nav>

        <motion.button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ duration: 0.15, ease: easeOut }}
        >
          <span className="relative block size-5" aria-hidden>
            <motion.span
              className="absolute left-0 top-[4px] block h-[2px] w-5 origin-center rounded-full bg-ink"
              animate={
                open
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2, ease: easeOut }}
            />
            <motion.span
              className="absolute left-0 top-[9px] block h-[2px] w-5 origin-center rounded-full bg-ink"
              animate={
                open
                  ? { opacity: 0, scaleX: 0.4 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.15, ease: easeOut }}
            />
            <motion.span
              className="absolute left-0 top-[14px] block h-[2px] w-5 origin-center rounded-full bg-ink"
              animate={
                open
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2, ease: easeOut }}
            />
          </span>
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            className="overflow-hidden border-t border-border bg-background md:hidden"
            initial={
              reduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              reduceMotion
                ? { opacity: 1, height: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.22, ease: easeOut }}
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Mobile"
            >
              {club.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: -6 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: reduceMotion ? 0 : 0.04 + index * 0.04,
                    ease: easeOut,
                  }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground no-underline hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-2"
                initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: reduceMotion ? 0 : 0.04 + club.nav.length * 0.04,
                  ease: easeOut,
                }}
              >
                <Pressable className="w-full">
                  <Link
                    href="/join"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full rounded-full bg-brand text-brand-foreground no-underline hover:bg-brand/90"
                    )}
                  >
                    Join
                  </Link>
                </Pressable>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
