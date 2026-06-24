import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function WhySection() {
  const c = presentationContent.why;
  return (
    <Section>
      <div className="relative z-10 text-center">
        <Reveal>
          <h2 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-semibold tracking-tight leading-none neon-text">
            {c.word}
          </h2>
        </Reveal>
      </div>
    </Section>
  );
}
