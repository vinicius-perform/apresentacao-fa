import { Kicker, Reveal, Section } from "@/components/presentation/primitives";
import { presentationContent } from "@/lib/presentation-content";

export function NovaSedeSection() {
  const { novaSede } = presentationContent;

  return (
    <Section className="flex flex-col justify-center pt-24 pb-4 !min-h-0" id="nova-sede">
      <div className="w-full max-w-5xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal>
            <Kicker>{novaSede.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              {novaSede.headline}
            </h2>
          </Reveal>
          {novaSede.description ? (
            <Reveal delay={0.2}>
              <p className="max-w-2xl mx-auto text-base md:text-lg text-fg-dim leading-relaxed">
                {novaSede.description}
              </p>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.3} className="w-full">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 group">
            <video
              className="w-full h-full object-cover"
              controls
              muted
              loop
              playsInline
              poster="https://fazendoacontecer.site/wp-content/uploads/2026/06/fe62b053-4107-419d-877b-3fb76ff26be2.webp"
            >
              {/* Prioriza o vídeo da nova sede fornecido pelo usuário */}
              <source src="https://fazendoacontecer.site/wp-content/uploads/2026/06/video-completo.webm" type="video/webm" />
              <source src="/videos/nova-sede.mp4" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-with-people-working-40348-large.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            
            {/* Efeito estético de borda/brilho */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 ring-1 ring-white/10" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

