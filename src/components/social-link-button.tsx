"use client"

import Link from "next/link"
import { club, type SocialLink } from "@/content/club"
import { socialMotion } from "@/content/social-motion"
import { Pressable } from "@/components/pressable"
import { SocialIcon } from "@/components/social-icon"
import { cn } from "@/lib/utils"

const toneClass = {
  home: "size-14 border border-border bg-secondary text-brand hover:border-brand/40 hover:bg-brand hover:text-brand-foreground",
  join: "size-12 bg-white/10 text-brand-foreground hover:bg-gold hover:text-gold-foreground",
} as const

const iconSize = {
  home: "size-6",
  join: "size-5",
} as const

export function SocialLinkButton({
  social,
  tone = "home",
}: {
  social: SocialLink
  tone?: keyof typeof toneClass
}) {
  const external = social.kind !== "email"

  return (
    <Pressable>
      <Link
        href={social.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`${club.name} ${social.label}`}
        className={cn(
          "group grid place-items-center rounded-full no-underline transition-colors",
          toneClass[tone]
        )}
      >
        <span className={cn("inline-block", socialMotion[social.kind])}>
          <SocialIcon kind={social.kind} className={iconSize[tone]} />
        </span>
      </Link>
    </Pressable>
  )
}
