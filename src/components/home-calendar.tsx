import Link from "next/link"
import { club } from "@/content/club"
import { SvgUnderline } from "@/components/svg-underline"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function calendarEmbedUrl() {
  const { calendarId, timezone } = club.calendar
  if (!calendarId || calendarId === "TBD") return null

  const params = new URLSearchParams({
    src: calendarId,
    ctz: timezone,
    showTitle: "0",
    showPrint: "0",
    showTabs: "1",
    showCalendars: "0",
    mode: "MONTH",
  })

  return `https://calendar.google.com/calendar/embed?${params.toString()}`
}

function calendarSubscribeUrl() {
  const { calendarId } = club.calendar
  if (!calendarId || calendarId === "TBD") return null
  return `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`
}

export function HomeCalendar() {
  const embedUrl = calendarEmbedUrl()
  const subscribeUrl = calendarSubscribeUrl()

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {club.calendar.title}
            </h2>
            <SvgUnderline className="mt-2 h-4 w-36 text-gold" />
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Workshops, CTF nights, and speaker dates in one place.
            </p>
          </div>
          {subscribeUrl ? (
            <a
              href={subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-brand/30 text-brand no-underline hover:bg-brand/5"
              )}
            >
              Add to Google Calendar
            </a>
          ) : (
            <Link
              href="/events"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-brand/30 text-brand no-underline hover:bg-brand/5"
              )}
            >
              See events list
            </Link>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_50px_-30px_rgba(0,112,85,0.35)]">
          {embedUrl ? (
            <iframe
              title={`${club.name} Google Calendar`}
              src={embedUrl}
              loading="lazy"
              className="h-[min(70vh,720px)] w-full border-0"
            />
          ) : (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <p className="max-w-md text-muted-foreground">
                The live Google Calendar goes live once the club publishes its
                public calendar. Until then, check the events list for what is
                coming up.
              </p>
              <Link
                href="/events"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-brand px-6 text-brand-foreground no-underline hover:bg-brand/90"
                )}
              >
                View upcoming events
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
