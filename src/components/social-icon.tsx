import {
  DiscordLogo,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr"
import type { SocialLink } from "@/content/club"

const iconMap = {
  discord: DiscordLogo,
  instagram: InstagramLogo,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  email: EnvelopeSimple,
} as const

export function SocialIcon({
  kind,
  className,
}: {
  kind: SocialLink["kind"]
  className?: string
}) {
  const Icon = iconMap[kind]
  return <Icon aria-hidden className={className} weight="fill" />
}
