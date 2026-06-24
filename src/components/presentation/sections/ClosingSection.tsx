import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function ClosingSection() {
  const c = presentationContent.closing;
  return (
    <Section fullBleed>
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/nova-sede.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-14 md:space-y-20">
          {c.lines.map((line, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <p
                className={
                  i === c.lines.length - 1
                    ? "font-display text-4xl md:text-6xl lg:text-7xl font-semibold neon-text text-balance"
                    : "font-display text-3xl md:text-5xl lg:text-6xl font-medium text-balance"
                }
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
