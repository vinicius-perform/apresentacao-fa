import { Counter, Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function ExpansionSection() {
  const c = presentationContent.expansion;
  return (
    <Section className="pt-16 pb-24 !min-h-0">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-16">
        
        {/* Top: Centralized Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Expansão da Empresa
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fg-dim text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {c.support}
            </p>
          </Reveal>
        </div>

        {/* Bottom: Centralized Numbers on Vertical */}
        <div className="flex justify-center items-center w-full">
          
          {/* Centered growth counters */}
          <Reveal delay={0.2} className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-8 w-full max-w-sm mx-auto border-t border-line pt-10 items-center text-center">
              
              <div className="flex flex-col gap-3 items-center">
                <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-fg-dim leading-none">
                  {c.growth.from}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-fg-muted">
                  {c.growth.label}
                </span>
              </div>

              <div className="flex items-center gap-6 text-neon justify-center w-full my-4">
                <span className="h-px w-16 bg-neon/20" />
                <span className="font-display text-4xl md:text-5xl">↓</span>
                <span className="h-px w-16 bg-neon/20" />
              </div>

              <div className="flex flex-col gap-4 items-center">
                <span className="font-display text-9xl sm:text-[9rem] md:text-[12rem] lg:text-[16rem] font-extrabold tracking-tighter neon-text leading-none">
                  <Counter from={c.growth.from} to={c.growth.to} />
                </span>
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-fg-muted font-medium">
                  {c.growth.label}
                </span>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

