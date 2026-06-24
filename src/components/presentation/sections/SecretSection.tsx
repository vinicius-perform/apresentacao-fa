import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function SecretSection() {
  const c = presentationContent.secret;
  return (
    <Section>
      <div className="relative z-10 text-center max-w-5xl space-y-16 md:space-y-24">
        {c.lines.map((line, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <p
              className={
                i === c.lines.length - 1
                  ? "font-display text-4xl md:text-6xl lg:text-7xl font-semibold neon-text text-balance leading-tight"
                  : "font-display text-3xl md:text-5xl lg:text-6xl font-medium text-balance leading-tight"
              }
            >
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
