import { Counter, Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function ExpansionSection() {
  const c = presentationContent.expansion;
  return (
    <Section>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <Reveal>
          <Kicker>{c.kicker}</Kicker>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: growth counter */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-8 border-t border-line pt-10">
              <div className="flex flex-col gap-3">
                <span className="font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-fg-dim leading-none">
                  {c.growth.from}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fg-muted">
                  {c.growth.label}
                </span>
              </div>

              <div className="flex items-center gap-4 text-neon">
                <span className="h-px w-8 bg-neon shadow-[0_0_12px_var(--neon)]" />
                <span className="font-display text-2xl">↓</span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight neon-text leading-none">
                  <Counter from={c.growth.from} to={c.growth.to} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fg-muted">
                  {c.growth.label}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: title + support */}
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-8 lg:pl-12 lg:border-l border-line">
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight whitespace-pre-line">
                {c.title}
              </h3>
              <p className="text-fg-muted text-lg md:text-xl leading-relaxed text-balance max-w-md">
                {c.support}
              </p>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-fg-dim">
                <span className="h-px w-8 bg-line" />
                <span>+150% de capacidade operacional</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
