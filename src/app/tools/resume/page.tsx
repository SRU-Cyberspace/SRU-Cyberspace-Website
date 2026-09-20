import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ToolsResumePage() {
  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">
        Resume grader
      </h2>
      <p className="text-muted-foreground">
        Auth is live. The top-10 tech resume rubric and upload flow land next.
        This page confirms members can reach the gated area.
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
