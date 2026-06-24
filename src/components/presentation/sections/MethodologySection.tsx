import { useState, RefObject } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { motion, AnimatePresence, useTransform, type MotionValue } from "motion/react";

export function MethodologySection({
  containerRef,
  scrollYProgress,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}) {
  const c = presentationContent.methodologyGvd;
  const [isModalOpen, setIsModalOpen] = useState(false);

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

          {/* Botão de chamada externa / Popup */}
          <Reveal delay={0.4}>
            <div className="mt-12 md:mt-20">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: btnBg, color: btnColor }}
                className="inline-flex items-center gap-3 font-sans text-sm md:text-base font-semibold px-8 py-4 md:px-10 md:py-5 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer border-0"
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
              </motion.button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Modal / Popup Exclusivo da Metodologia GVD */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-[96vw] h-[96vh] max-w-[1700px] max-h-[950px] bg-[#050505] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.95),_0_0_60px_rgba(245,158,11,0.08)] flex flex-col justify-center items-center p-8 md:p-16 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão de Fechar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all duration-300 cursor-pointer z-30 border-0"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Linhas / Círculos de Fundo Concêntricos (Design da Imagem) */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <div className="absolute w-[250px] h-[250px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[500px] h-[500px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[750px] h-[750px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[1000px] h-[1000px] border border-white/[0.015] rounded-full" />
                <div className="absolute w-[1250px] h-[1250px] border border-white/[0.01] rounded-full" />
                <div className="absolute w-[1500px] h-[1500px] border border-white/[0.005] rounded-full" />
                <div className="absolute w-[1800px] h-[1800px] border border-white/[0.003] rounded-full" />
                {/* Degradê radial escuro adicional */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,5,5,0.85)_85%)]" />
              </div>

              {/* Conteúdo do Slide */}
              <div className="relative z-10 flex flex-col items-center justify-between h-full w-full py-4 text-center">
                
                {/* Texto Superior */}
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="font-display text-xs sm:text-sm md:text-base font-bold tracking-[0.4em] text-fg-dim uppercase"
                >
                  Metodologia única e validada
                </motion.span>

                {/* GVD Centralizado Gigante */}
                <motion.h1 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.25, type: "spring" }}
                  className="font-montserrat text-8xl sm:text-[11rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] font-black tracking-tight leading-none bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_16px_64px_rgba(245,158,11,0.35)] my-auto select-none"
                >
                  GVD
                </motion.h1>

                {/* Subtítulos Inferiores */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-row justify-around sm:justify-between w-full max-w-4xl px-2 sm:px-6 text-xs sm:text-sm md:text-base font-bold tracking-[0.28em] text-white/70"
                >
                  <span>GERAÇÃO DE DEMANDA</span>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <span>VENDAS</span>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <span>DADOS</span>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
