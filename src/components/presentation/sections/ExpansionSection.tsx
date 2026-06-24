import { Counter, Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function ExpansionSection() {
  const c = presentationContent.expansion;
  return (
    <Section>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 w-full max-w-7xl">
        <Reveal><Kicker>{c.kicker}</Kicker></Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {c.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-4 border-t border-line pt-8">
                <div className="font-display text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight">
                  {s.to === s.from ? (
                    <span>{s.to}</span>
                  ) : (
                    <Counter from={s.from} to={s.to} suffix={s.suffix} />
                  )}
                </div>
                <span className="text-fg-muted text-sm md:text-base uppercase tracking-[0.25em]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-32 text-center">
            <h3 className="font-display text-6xl md:text-8xl font-semibold neon-text">
              {c.closing}
            </h3>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
