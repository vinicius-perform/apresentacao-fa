import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function PivotSection() {
  const c = presentationContent.pivot;

  // Destaca dinamicamente as palavras chaves da frase para dar ênfase visual
  const renderHighlightedLine2 = () => {
    const text = c.line2;
    const parts = text.split(/(sua empresa|crescer também)/g);
    
    return parts.map((part, i) => {
      if (part === "sua empresa" || part === "crescer também") {
        return (
          <span key={i} className="text-neon neon-text font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Luz de fundo neon decorativa e sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-neon/5 blur-[120px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl space-y-10 md:space-y-12">
        {/* Primeira Linha (Preparação) */}
        <Reveal delay={0.15}>
          <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-fg-dim leading-tight text-balance">
            {c.line1}
          </p>
        </Reveal>

        {/* Conector minimalista vertical */}
        <Reveal delay={0.65} y={15}>
          <div className="flex flex-col items-center justify-center">
            <div className="h-16 w-px bg-gradient-to-b from-line via-neon/40 to-line shadow-[0_0_8px_rgba(124,255,91,0.2)]" />
          </div>
        </Reveal>

        {/* Segunda Linha (Destaque e Pivot) */}
        <Reveal delay={1.15}>
          <p className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-balance text-fg">
            {renderHighlightedLine2()}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
