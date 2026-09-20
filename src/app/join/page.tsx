import { club } from "@/content/club"

export const metadata = {
  title: "Join",
}

export default function JoinPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Join</h1>
      <p className="text-muted-foreground">{club.joinBlurb}</p>
    </main>
  )
}
