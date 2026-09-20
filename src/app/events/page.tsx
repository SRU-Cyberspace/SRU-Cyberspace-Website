import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Pressable } from "@/components/pressable"
import { Button } from "@/components/ui/button"
import { club } from "@/content/club"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, CTF practice, and speaker nights from Cyberspace Club at SRU.",
}

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Calendar"
        title="Events and initiatives"
        description="Workshop nights, CTF practice, and speakers. Exact dates stay TBA until officers publish the fall schedule."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Upcoming
        </h2>
        <ul className="mt-8 space-y-6">
          {club.events.map((event) => (
            <li
              key={event.title}
              className="grid gap-3 border-t border-border py-6 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                  {event.status === "tba" ? "Date TBA" : event.status}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {event.date}
                </p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink">{event.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                  {event.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Ongoing initiatives
          </h2>
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
          <div className="mt-12">
            <Pressable>
              <Button
                render={<Link href="/join" />}
                className="rounded-full bg-brand px-6 text-brand-foreground hover:bg-brand/90"
                size="lg"
              >
                Join and get updates
              </Button>
            </Pressable>
          </div>
        </div>
      </section>
    </main>
  )
}
