import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function PainSection() {
  const c = presentationContent.pain;
  return (
    <Section>
      <div className="relative z-10 w-full max-w-5xl">
        <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
        <div className="mt-20 space-y-20 md:space-y-28">
          {c.questions.map((q, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-6 md:gap-10">
                <span className="font-display text-xs text-neon mt-3 tabular-nums">
                  0{i + 1}
                </span>
                <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-balance leading-tight">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
