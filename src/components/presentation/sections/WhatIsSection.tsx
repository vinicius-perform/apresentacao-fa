import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { cn } from "@/lib/utils";

export function WhatIsSection() {
  const c = presentationContent.whatIs;
  return (
    <Section id="metodologia-gvd">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="space-y-16 md:space-y-20">
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>{c.kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                {c.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-fg-muted leading-relaxed max-w-3xl">
                {c.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-line bg-line">
              {c.pillars.map((pillar, i) => (
                <PillarBlock
                  key={pillar.letter}
                  letter={pillar.letter}
                  title={pillar.title}
                  desc={pillar.desc}
                  index={i}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-fg-muted">
              <span className="font-display text-lg font-semibold tracking-tight text-fg">
                {c.methodName}
              </span>
              <span className="h-px w-12 bg-line" />
              <span>{c.methodFull}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function PillarBlock({
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
        "group relative flex flex-col justify-between bg-bg p-8 md:p-10 lg:p-12 min-h-[380px] md:min-h-[460px]",
        "transition-colors duration-500 hover:bg-bg-elev",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-fg transition-colors duration-500 group-hover:text-neon">
          {letter}
        </span>
        <span className="text-[10px] font-display text-fg-dim tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="space-y-3 md:space-y-4">
        <h3 className="font-display text-base md:text-lg font-semibold uppercase tracking-wide text-fg">
          {title}
        </h3>
        <p className="text-sm md:text-base text-fg-muted leading-relaxed max-w-xs">
          {desc}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon transition-all duration-700 ease-out group-hover:w-full" />
    </div>
  );
}
