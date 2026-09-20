import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Pressable } from "@/components/pressable"
import { SocialIcon } from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import { club } from "@/content/club"

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
            <Button
              render={
                <a
                  href={discord?.href ?? `mailto:${club.email}`}
                  target={discord ? "_blank" : undefined}
                  rel={discord ? "noopener noreferrer" : undefined}
                />
              }
              className="rounded-full bg-brand px-6 text-brand-foreground hover:bg-brand/90"
              size="lg"
            >
              Open Discord
            </Button>
          </Pressable>
          <Pressable>
            <Button
              render={<a href={`mailto:${club.email}`} />}
              variant="outline"
              className="rounded-full border-brand/30 px-6 text-brand hover:bg-brand/5"
              size="lg"
            >
              Email {club.email}
            </Button>
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
                <Pressable>
                  <Link
                    href={social.href}
                    target={social.kind === "email" ? undefined : "_blank"}
                    rel={
                      social.kind === "email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={`${club.name} ${social.label}`}
                    className="grid size-12 place-items-center rounded-full bg-white/10 text-brand-foreground no-underline transition-colors hover:bg-gold hover:text-gold-foreground"
                  >
                    <SocialIcon kind={social.kind} className="size-5" />
                  </Link>
                </Pressable>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
