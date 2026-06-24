import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function PivotSection() {
  const c = presentationContent.pivot;
  return (
    <Section>
      <div className="relative z-10 text-center max-w-5xl space-y-16">
        <Reveal>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-fg-muted leading-tight text-balance">
            {c.line1}
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-balance">
            {c.line2}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
