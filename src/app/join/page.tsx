import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Pressable } from "@/components/pressable"
import { SocialLinkButton } from "@/components/social-link-button"
import { buttonVariants } from "@/components/ui/button"
import { club } from "@/content/club"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Join",
  description: club.joinBlurb,
}

const steps = [
  {
    title: "Come to a meeting",
    body: "Walk in for the next workshop or kickoff. Bring a laptop if you have one. Curiosity is enough.",
  },
  {
    title: "Hop in Discord",
    body: "Announcements, homework help adjacent chats, and CTF team-ups live there once the invite is published.",
  },
  {
    title: "Email the officers",
    body: `Questions about joining, presenting, or sponsoring can go to ${club.email}.`,
  },
] as const

export default function JoinPage() {
  const discord = club.socials.find((social) => social.kind === "discord")

  return (
    <main>
      <PageHero
        eyebrow="Membership"
        title="Join Cyberspace"
        description={club.joinBlurb}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="space-y-3 border-t border-gold pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                Step {index + 1}
              </p>
              <h2 className="text-xl font-semibold text-ink">{step.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Pressable>
            <a
              href={discord?.href ?? `mailto:${club.email}`}
              target={discord ? "_blank" : undefined}
              rel={discord ? "noopener noreferrer" : undefined}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-brand px-6 text-brand-foreground no-underline hover:bg-brand/90"
              )}
            >
              Open Discord
            </a>
          </Pressable>
          <Pressable>
            <a
              href={`mailto:${club.email}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-brand/30 px-6 text-brand no-underline hover:bg-brand/5"
              )}
            >
              Email {club.email}
            </a>
          </Pressable>
        </div>
      </section>

      <section className="border-t border-border bg-brand text-brand-foreground">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Prefer socials?
            </h2>
            <p className="text-brand-foreground/90">
              Follow along while the Discord invite and officer roster get filled
              in. Some links below are placeholders until officers publish the
              final ones.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {club.socials.map((social) => (
              <li key={social.kind}>
                <SocialLinkButton social={social} tone="join" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
