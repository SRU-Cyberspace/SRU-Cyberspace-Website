import Link from "next/link"
import { club } from "@/content/club"

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
        {club.schoolYear}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink">
        {club.name}
      </h1>
      <p className="max-w-prose text-lg text-muted-foreground">{club.tagline}</p>
      <p className="text-sm text-muted-foreground">
        Scaffold is live. Site chrome and pages land in follow-up PRs.
      </p>
      <ul className="flex flex-wrap gap-3 text-sm font-medium text-brand">
        {club.nav.map((item) => (
          <li key={item.href}>
            <Link className="hover:underline" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
