import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-full bg-secondary/40">
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Members only
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-ink">
              Club tools
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-full border-brand/30 text-brand no-underline"
              )}
            >
              Back to site
            </Link>
            <UserButton />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        {children}
      </div>
    </div>
  )
}
