import { HitUsUp } from "@/components/hit-us-up"
import { HomeCalendar } from "@/components/home-calendar"
import { HomeHero } from "@/components/home-hero"
import { MissionBand } from "@/components/mission-band"
import { club } from "@/content/club"

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <MissionBand />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          What we run
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Workshops, CTF practice, and career nights for students who want more
          than a syllabus.
        </p>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {club.initiatives.map((item) => (
            <li key={item.title} className="space-y-2 border-t border-gold pt-5">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <HomeCalendar />
      <HitUsUp />
    </main>
  )
}
