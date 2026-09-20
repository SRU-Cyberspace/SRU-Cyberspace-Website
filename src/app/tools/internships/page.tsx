import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ToolsInternshipsPage() {
  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        Internship board
      </h2>
      <p className="text-muted-foreground">
        Auth is live. Listings will load from Supabase once the ingest runner is
        hooked up. Until then this page confirms members can reach the gated
        area.
      </p>
      <Link
        href="/tools"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "rounded-full border-brand/30 text-brand no-underline"
        )}
      >
        Back to tools
      </Link>
    </div>
  )
}
