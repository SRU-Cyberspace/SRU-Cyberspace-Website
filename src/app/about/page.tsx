import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { club } from "@/content/club"

export const metadata: Metadata = {
  title: "About",
  description: club.aboutBlurb,
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={club.formalName}
        title="About the club"
        description={club.aboutBlurb}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Who we are
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {club.mission}
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Meetings mix short talks with time on the keyboard. You can show up
            for one workshop or stick around all semester. Majors, minors, and
            first-year explorers are all welcome.
          </p>
        </div>

        <aside className="space-y-4 rounded-2xl bg-brand p-6 text-brand-foreground md:p-8">
          <h2 className="text-xl font-semibold tracking-tight">Quick facts</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-foreground/90">
            <li>Open to every Slippery Rock University student</li>
            <li>Focus on ethical cybersecurity practice and community</li>
            <li>Workshops, CTF nights, speakers, and career help</li>
            <li>Campus home base in {club.location}</li>
          </ul>
        </aside>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Officers
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The {club.schoolYear} board.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {club.officers.map((officer) => (
              <li
                key={officer.role}
                className="border-t border-gold pt-4"
              >
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand">
                  {officer.role}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {officer.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
