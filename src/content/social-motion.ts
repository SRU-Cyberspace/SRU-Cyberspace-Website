import type { SocialLink } from "@/content/club"

export const socialMotion = {
  discord: "social-motion-discord",
  instagram: "social-motion-instagram",
  linkedin: "social-motion-linkedin",
  github: "social-motion-github",
  email: "social-motion-email",
} as const satisfies Record<SocialLink["kind"], string>
