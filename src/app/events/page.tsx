import { club } from "@/content/club"

export const metadata = {
  title: "Events",
}

export default function EventsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Events</h1>
      <p className="text-muted-foreground">
        Upcoming nights and workshops for {club.shortName}. Dates land once
        officers confirm the calendar.
      </p>
    </main>
  )
}
