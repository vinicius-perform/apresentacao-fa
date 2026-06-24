import { Counter, Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function ImpactSection() {
  const c = presentationContent.impact;
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl space-y-16">
        <Reveal><Kicker>{c.kicker}</Kicker></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-xl overflow-hidden hairline">
          {c.metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-bg p-10 min-h-[220px] flex flex-col justify-between">
                <span className="text-xs text-fg-dim tabular-nums">0{i + 1}</span>
                <div>
                  <div className="font-display text-5xl md:text-6xl font-semibold tabular-nums">
                    <Counter to={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-fg-muted">{m.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-xs text-fg-dim text-center italic">{c.note}</p>
      </div>
    </Section>
  );
}
