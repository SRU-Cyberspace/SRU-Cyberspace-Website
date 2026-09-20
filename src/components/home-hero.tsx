"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { club } from "@/content/club"
import { Pressable } from "@/components/pressable"
import { SvgUnderline } from "@/components/svg-underline"
import { buttonVariants } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"
import { cn } from "@/lib/utils"

export function HomeHero() {
  const mounted = useMounted()
  const reduceMotion = useReducedMotion()
  const animate = mounted && !reduceMotion

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="polka-gold pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-40 md:block"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:py-24">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {club.schoolYear}
          </p>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              {club.name}
            </h1>
            <SvgUnderline className="mt-2 h-4 w-48 text-gold sm:w-56" />
          </div>
          <p className="max-w-md text-lg text-muted-foreground text-balance">
            {club.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <Pressable>
              <Link
                href="/join"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-brand px-6 text-brand-foreground no-underline hover:bg-brand/90"
                )}
              >
                Join the Club
              </Link>
            </Pressable>
            <Pressable>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-brand/30 px-6 text-brand no-underline hover:bg-brand/5"
                )}
              >
                What We Do
              </Link>
            </Pressable>
          </div>
        </div>

        <motion.div
          className="relative"
          initial={false}
          animate={animate ? { y: [0, -6, 0] } : undefined}
          transition={
            animate
              ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          <div className="polka-gold absolute -inset-4 -z-10 rounded-[2rem] opacity-70 md:-inset-6" />
          <div className="overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-[0_24px_60px_-28px_rgba(0,112,85,0.45)]">
            <Image
              src={club.heroImage.src}
              alt={club.heroImage.alt}
              width={960}
              height={720}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
