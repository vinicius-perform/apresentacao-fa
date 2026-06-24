import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FALogo } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function HeroSection() {
  const c = presentationContent.opening;
  const containerRef = useRef<HTMLDivElement>(null);

  // Mapeia a rolagem do container de 200vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animações do logo "FA" baseadas no scroll (deslocamento inicial à esquerda)
  const faX = useTransform(scrollYProgress, [0, 0.7], ["-25vw", "0vw"]);
  const faY = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-6vh"]);
  const faScale = useTransform(scrollYProgress, [0, 0.7], [10, 3.6]);

  // Animações da Pergunta que surge abaixo do logo
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.35, 0.75], [40, 0]);

  // Animações do indicador de scroll
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      {/* Container sticky que fica fixado na tela durante a rolagem do Hero */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-bg vignette">
        <div className="absolute inset-0 grid-bg" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6">
          
          {/* Logo "FA" que se move da esquerda para o centro e encolhe */}
          <motion.div
            style={{
              x: faX,
              y: faY,
              scale: faScale,
            }}
            className="relative origin-center select-none flex items-center"
          >
            <FALogo className="text-4xl" />
          </motion.div>

          {/* Pergunta posicionada de forma absoluta para surgir perfeitamente abaixo do FA */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
            }}
            className="absolute top-[56%] left-1/2 -translate-x-1/2 w-[90%] max-w-3xl text-center"
          >
            <p className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-fg">
              {c.sub}
            </p>
          </motion.div>
        </div>

        {/* Indicador de rolagem (desaparece ao rolar) */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-fg-dim"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">{c.scrollHint}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-fg-dim to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

