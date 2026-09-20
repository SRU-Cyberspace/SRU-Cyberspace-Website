import Link from "next/link"
import { club } from "@/content/club"
import { Pressable } from "@/components/pressable"
import { SocialIcon } from "@/components/social-icon"
import { SvgUnderline } from "@/components/svg-underline"

export function HitUsUp() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 md:py-20">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Hit us up
          </h2>
          <SvgUnderline className="mx-auto mt-2 h-4 w-36 text-gold" />
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {club.socials.map((social) => (
            <li key={social.kind}>
              <Pressable>
                <Link
                  href={social.href}
                  target={social.kind === "email" ? undefined : "_blank"}
                  rel={
                    social.kind === "email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={`${club.name} ${social.label}`}
                  className="grid size-14 place-items-center rounded-full border border-border bg-secondary text-brand no-underline transition-colors hover:border-brand/40 hover:bg-brand hover:text-brand-foreground"
                >
                  <SocialIcon kind={social.kind} className="size-6" />
                </Link>
              </Pressable>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
