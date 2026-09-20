"use client"

import { ArrowRight } from "@phosphor-icons/react"
import { useReducedMotion } from "motion/react"
import { club } from "@/content/club"
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function JoinExpandCta({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <ExpandableScreen
      layoutId="join-the-club"
      triggerRadius="9999px"
      contentRadius="0px"
      animationDuration={reduceMotion ? 0 : 0.35}
      lockScroll
    >
      <ExpandableScreenTrigger>
        <span
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full bg-brand px-6 text-brand-foreground no-underline hover:bg-brand/90",
            className
          )}
        >
          Join the Club
        </span>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent
        className="bg-brand text-brand-foreground"
        closeButtonClassName="text-brand-foreground hover:bg-brand-foreground/10"
      >
        <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-20 text-center">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Official membership
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Continue on SRU Engage
            </h2>
            <p className="text-base text-brand-foreground/85 sm:text-lg">
              Club rosters and join requests live on CampusLabs. Open the
              Cyberspace Club page to register.
            </p>
          </div>
          <a
            href={club.membershipUrl}
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex items-center gap-2 rounded-full bg-gold px-8 text-gold-foreground no-underline hover:bg-gold/90"
            )}
          >
            Open CampusLabs
            <ArrowRight className="size-4" weight="bold" />
          </a>
          <a
            href={club.membershipUrl}
            className="text-sm text-brand-foreground/70 underline-offset-4 hover:text-brand-foreground hover:underline"
          >
            {club.membershipUrl.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  )
}
