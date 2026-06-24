import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Kicker, Reveal, Section } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";
import { cn } from "@/lib/utils";

export function FuturoFaSection() {
  const c = presentationContent.futuroFa;
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
    <Section id="futuro-fa" fullBleed className="py-24">
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
                    <div className="relative">
                      <MediaPlaceholder
                        label={slide.label ?? `Imagem ${String(i + 1).padStart(2, "0")}`}
                        aspect="aspect-[16/10]"
                      />
                      {(slide.title || slide.caption) && (
                        <div className="mt-5 flex items-baseline justify-between gap-6">
                          <div>
                            {slide.title && (
                              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                                {slide.title}
                              </h3>
                            )}
                            {slide.caption && (
                              <p className="mt-2 text-fg-muted text-sm md:text-base max-w-md">
                                {slide.caption}
                              </p>
                            )}
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.3em] text-fg-dim tabular-nums">
                            {String(i + 1).padStart(2, "0")} / {String(c.slides.length).padStart(2, "0")}
                          </span>
                        </div>
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
                      "h-px transition-all duration-500",
                      i === selected ? "w-10 bg-neon shadow-[0_0_12px_var(--neon)]" : "w-6 bg-line hover:bg-fg-dim",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={scrollPrev}
                  aria-label="Anterior"
                  className="h-11 w-11 rounded-full hairline flex items-center justify-center text-fg-muted hover:text-neon hover:border-neon/40 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Próxima"
                  className="h-11 w-11 rounded-full hairline flex items-center justify-center text-fg-muted hover:text-neon hover:border-neon/40 transition-colors"
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
