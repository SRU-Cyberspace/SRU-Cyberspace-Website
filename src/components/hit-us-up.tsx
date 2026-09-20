import { club } from "@/content/club"
import { SocialLinkButton } from "@/components/social-link-button"
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
              <SocialLinkButton social={social} tone="home" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
