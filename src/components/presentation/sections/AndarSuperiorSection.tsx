import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Kicker, Reveal, Section } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";
import { cn } from "@/lib/utils";

export function AndarSuperiorSection() {
  const c = presentationContent.andarSuperior;
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla]);

  return (
    <Section id="andar-superior" fullBleed className="py-24 bg-bg text-fg">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 w-full">
        <div className="px-6 md:px-16 lg:px-28 max-w-7xl mx-auto">
          <Reveal>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
              {c.headline}
            </h2>
          </Reveal>
          {c.description && (
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-fg-muted text-lg md:text-xl leading-relaxed">
                {c.description}
              </p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-16 relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {c.slides.map((slide, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 grow-0 basis-[88%] md:basis-[72%] lg:basis-[64%] px-3 md:px-5"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-bg-elev">
                      {slide.image ? (
                        <img
                          src={slide.image}
                          alt={slide.label ?? `Andar Superior - Imagem ${i + 1}`}
                          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <MediaPlaceholder
                          label={slide.label ?? `Imagem ${String(i + 1).padStart(2, "0")}`}
                          aspect="aspect-[16/10]"
                          className="border-none"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 px-6 md:px-16 lg:px-28 max-w-7xl mx-auto flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                {snaps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    aria-label={`Ir para imagem ${i + 1}`}
                    className={cn(
                      "h-px transition-all duration-500 cursor-pointer",
                      i === selected ? "w-10 bg-neon shadow-[0_0_12px_var(--neon)]" : "w-6 bg-line hover:bg-fg-dim",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={scrollPrev}
                  aria-label="Anterior"
                  className="h-11 w-11 rounded-full hairline flex items-center justify-center text-fg-muted hover:text-neon hover:border-neon/40 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Próxima"
                  className="h-11 w-11 rounded-full hairline flex items-center justify-center text-fg-muted hover:text-neon hover:border-neon/40 transition-colors cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
