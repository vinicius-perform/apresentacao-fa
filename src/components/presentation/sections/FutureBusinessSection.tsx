import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function FutureBusinessSection() {
  const c = presentationContent.futureBusiness;
  return (
    <Section>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 w-full max-w-6xl space-y-20">
        <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
        <div className="space-y-14 md:space-y-20">
          {c.lines.map((line, i) => {
            const last = line.split(" ").pop() ?? "";
            const head = line.slice(0, line.length - last.length);
            return (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight">
                  <span className="text-fg-muted">{head}</span>
                  <span className="text-neon">{last}.</span>
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
