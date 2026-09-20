import Link from "next/link"
import { ArrowRight, FileText, Briefcase } from "@phosphor-icons/react/dist/ssr"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const tools = [
  {
    href: "/tools/internships",
    title: "Internship board",
    description:
      "Tech and security internships curated for Cyberspace members. Live feed comes next.",
    icon: Briefcase,
  },
  {
    href: "/tools/resume",
    title: "Resume grader",
    description:
      "Check your resume against the top tech-industry resume points. Rubric scorer comes next.",
    icon: FileText,
  },
] as const

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Internal tooling
        </h2>
        <p className="text-muted-foreground text-balance">
          You are signed in. These tools stay behind Clerk so only club members
          can use them. Internship DB sync and the full resume grader land in
          follow-up PRs.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <li key={tool.href}>
              <Link href={tool.href} className="group block no-underline">
                <Card className="h-full transition-colors group-hover:border-brand/40">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="size-5" weight="fill" aria-hidden />
                    </div>
                    <CardTitle className="flex items-center gap-2 text-ink">
                      {tool.title}
                      <ArrowRight
                        className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
                        weight="bold"
                        aria-hidden
                      />
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
