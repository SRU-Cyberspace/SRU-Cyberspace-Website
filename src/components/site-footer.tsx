import Link from "next/link"
import { club } from "@/content/club"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-2">
          <p className="text-lg font-semibold tracking-tight text-ink">
            {club.name}
          </p>
          <p className="text-sm text-muted-foreground">{club.formalName}</p>
          <p className="text-sm text-muted-foreground">
            Email us at{" "}
            <a className="font-medium text-brand hover:underline" href={`mailto:${club.email}`}>
              {club.email}
            </a>
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {club.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 no-underline hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          Built by {club.name} at Slippery Rock University.
        </p>
      </div>
    </footer>
  )
}
