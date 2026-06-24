import { Kicker, Reveal, Section } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";
import { cn } from "@/lib/utils";

export function WhatIsSection() {
  const c = presentationContent.whatIs;
  return (
    <Section id="metodologia-gvd">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column: narrative + timeline */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <Reveal>
                <Kicker>{c.kicker}</Kicker>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                  {c.headline}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4 text-fg-muted text-balance text-base md:text-lg leading-relaxed">
                  <p>{c.intro.line1}</p>
                  <p>{c.intro.line2}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="space-y-3">
                {c.timeline.map((t, i) => (
                  <div
                    key={t.year}
                    className="flex items-baseline gap-6 border-t border-line py-3 group"
                  >
                    <span className="font-display text-sm tabular-nums text-neon w-14">{t.year}</span>
                    <span className="text-fg text-sm md:text-base">{t.label}</span>
                    <span className="ml-auto text-xs text-fg-dim">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column: GVD methodology */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.15}>
              <div className="border border-line bg-bg-elev/40 p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-fg">
                    {c.methodName}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-fg-muted text-right">
                    {c.methodFull.split(" · ").map((part) => (
                      <span key={part} className="block">{part}</span>
                    ))}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {c.pillars.map((pillar, i) => (
                    <PillarCard
                      key={pillar.letter}
                      letter={pillar.letter}
                      title={pillar.title}
                      desc={pillar.desc}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="space-y-3 text-fg-muted text-sm md:text-base leading-relaxed max-w-2xl">
                {c.methodDescription.map((line) => (
                  <p key={line} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="text-fg text-balance text-base md:text-lg leading-relaxed max-w-2xl">
                {c.methodClosing}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Reveal delay={0.55}>
                <MediaPlaceholder label="Equipe" aspect="aspect-[4/3]" />
              </Reveal>
              <Reveal delay={0.65}>
                <MediaPlaceholder label="Bastidores" aspect="aspect-[4/3]" />
              </Reveal>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-fg-dim">{c.mediaCaption}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PillarCard({
  letter,
  title,
  desc,
  index,
}: {
  letter: string;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group relative p-5 md:p-6 border border-line bg-bg transition-colors hover:bg-bg-elev",
        "flex flex-col gap-4",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-fg transition-colors group-hover:text-neon">
          {letter}
        </span>
        <span className="text-[10px] font-display text-fg-dim tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-sm md:text-base font-semibold uppercase tracking-wide text-fg">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-fg-muted leading-relaxed">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
