import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-16">
      <div className="max-w-md space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          SRU Cyberspace
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          Sign in to club tools
        </h1>
        <p className="text-sm text-muted-foreground">
          Members use Clerk to reach internships and the resume grader.
        </p>
      </div>
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-none border border-border",
          },
        }}
      />
    </main>
  )
}
