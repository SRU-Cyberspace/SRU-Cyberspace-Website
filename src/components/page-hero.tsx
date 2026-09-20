import { SvgUnderline } from "@/components/svg-underline"

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description: string
}) {
  return (
    <header className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <SvgUnderline className="mt-2 h-4 w-40 text-gold" />
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-balance">
          {description}
        </p>
      </div>
    </header>
  )
}
