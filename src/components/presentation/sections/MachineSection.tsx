import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function MachineSection() {
  const c = presentationContent.machine;
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl space-y-20">
        <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-balance text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
            Como uma operação previsível se constrói.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/40 to-transparent hidden md:block" />
          <div className="space-y-6 md:space-y-10">
            {c.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div
                  className={`grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-display text-xs text-neon tabular-nums tracking-[0.3em]">
                      ETAPA {s.n}
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl font-semibold">{s.label}</h3>
                    <p className="text-fg-muted text-sm md:text-base">{s.desc}</p>
                  </div>
                  <div className="relative h-32 md:h-40 hairline rounded-xl bg-bg-elev/40 grid place-items-center overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="relative font-display text-7xl md:text-8xl font-bold text-fg-dim/40">
                      {s.n}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
