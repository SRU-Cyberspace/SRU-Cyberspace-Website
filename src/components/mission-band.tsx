import Image from "next/image"
import { club } from "@/content/club"
import { SvgUnderline } from "@/components/svg-underline"

export function MissionBand() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-14 md:py-20">
        <div className="overflow-hidden rounded-2xl border border-white/15 shadow-lg">
          <Image
            src={club.missionImage.src}
            alt={club.missionImage.alt}
            width={960}
            height={720}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <SvgUnderline className="mt-2 h-4 w-40 text-gold" />
          </div>
          <p className="max-w-prose text-base leading-relaxed text-brand-foreground/90 sm:text-lg">
            {club.mission}
          </p>
        </div>
      </div>
    </section>
  )
}
