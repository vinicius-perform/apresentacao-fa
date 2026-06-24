import { Kicker, Reveal, Section } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";

export function EcosystemSection() {
  const c = presentationContent.ecosystem;
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-balance text-4xl md:text-6xl font-semibold leading-tight">
                {c.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-fg-muted text-balance text-base md:text-lg leading-relaxed">
              {c.body}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <Reveal delay={0.1}>
            <MediaPlaceholder label="Novo prédio" aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-3 md:gap-4 h-full">
              <MediaPlaceholder label="Cultura" aspect="aspect-square" />
              <MediaPlaceholder label="Pessoas" aspect="aspect-square" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <MediaPlaceholder label="Vídeo institucional" aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={0.25} className="md:col-span-2">
            <MediaPlaceholder label="Crescimento" aspect="aspect-[2/1] md:aspect-[2.2/1]" />
          </Reveal>
          <Reveal delay={0.3}>
            <MediaPlaceholder label="Bastidores" aspect="aspect-[2/1] md:aspect-square" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
