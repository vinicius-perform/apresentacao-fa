import { Kicker, Reveal, Section } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";

export function WhatIsSection() {
  const c = presentationContent.whatIs;
  return (
    <Section>
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-8">
          <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              {c.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-fg-muted text-balance text-base md:text-lg max-w-xl leading-relaxed">
              {c.body}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 space-y-3">
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

        <div className="space-y-4">
          <Reveal delay={0.15}>
            <MediaPlaceholder label="Vídeo · Cultura FA" />
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.25}><MediaPlaceholder label="Equipe" aspect="aspect-square" /></Reveal>
            <Reveal delay={0.35}><MediaPlaceholder label="Bastidores" aspect="aspect-square" /></Reveal>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-fg-dim">{c.mediaCaption}</p>
        </div>
      </div>
    </Section>
  );
}
