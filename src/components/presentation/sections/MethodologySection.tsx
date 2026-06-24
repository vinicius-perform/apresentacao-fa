import { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { motion, useTransform, type MotionValue } from "motion/react";

export function MethodologySection({
  containerRef,
  scrollYProgress,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}) {
  const c = presentationContent.methodologyGvd;

  // Interpolações de cor de texto da seção baseadas no progresso compartilhado
  const color = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  
  // Interpolações para elementos secundários e kicker
  const colorMuted = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.6)", "rgba(0, 0, 0, 0.6)"]);
  const bgLine = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"]);

  // Interpolações do botão (inverte as cores junto com o fundo)
  const btnBg = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  const btnColor = useTransform(scrollYProgress, [0.3, 0.95], ["#000000", "#ffffff"]);

  return (
    <div ref={containerRef} className="w-full">
      <Section
        style={{ color }}
        className="py-32 md:py-48 flex flex-col justify-center items-center bg-transparent transition-colors duration-100"
      >
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4">
          
          {/* Kicker da seção */}
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] mb-8 md:mb-12">
              <motion.span className="h-px w-8" style={{ backgroundColor: bgLine }} />
              <motion.span style={{ color: colorMuted }}>{c.kicker}</motion.span>
              <motion.span className="h-px w-8" style={{ backgroundColor: bgLine }} />
            </div>
          </Reveal>

          {/* Headline super elegante */}
          <Reveal delay={0.2}>
            <motion.h2 
              style={{ color }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto text-balance"
            >
              {c.headline}
            </motion.h2>
          </Reveal>

          {/* Botão de chamada externa */}
          <Reveal delay={0.4}>
            <div className="mt-12 md:mt-20">
              <motion.a
                href={c.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: btnBg, color: btnColor }}
                className="inline-flex items-center gap-3 font-sans text-sm md:text-base font-semibold px-8 py-4 md:px-10 md:py-5 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{c.buttonText}</span>
                <motion.span
                  className="inline-flex items-center justify-center"
                  animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.span>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
