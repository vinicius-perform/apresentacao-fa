import { motion } from "motion/react";
import { Clock, DollarSign, Zap } from "lucide-react";
import { Reveal, Section } from "../primitives";

export function AllocatorsSection() {
  return (
    <Section id="alocadores" className="relative overflow-hidden">
      {/* Luz de fundo decorativa verde neon sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-neon/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-16 md:space-y-24 px-4">
        
        {/* Centro: Mensagem Principal */}
        <div className="space-y-6 md:space-y-8 w-full">
          <Reveal delay={0.2}>
            <span className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-[0.35em] text-fg-dim font-medium block">
              Todos nós somos
            </span>
          </Reveal>
          <Reveal delay={0.35}>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.1em] text-white leading-none uppercase select-none">
              Alocadores
            </h2>
          </Reveal>
        </div>

        {/* Linha divisória minimalista */}
        <Reveal delay={0.5} y={10}>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-line to-transparent" />
        </Reveal>

        {/* Pilares: Tempo, Energia e Dinheiro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl mx-auto z-10">
          
          {/* Pilar 1: Tempo */}
          <Reveal delay={0.55} className="w-full">
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative flex flex-col items-center justify-center p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 hover:border-neon/40 hover:shadow-[0_0_40px_rgba(124,255,91,0.08)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.12)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Container de ícone com Glow Ampliado */}
              <div className="relative z-10 mb-8 flex items-center justify-center w-28 h-28 rounded-2xl bg-black/40 border border-neon/20 group-hover:border-neon/60 transition-all duration-500 shadow-[inset_0_0_15px_rgba(124,255,91,0.08),_0_0_20px_rgba(124,255,91,0.05)] group-hover:shadow-[0_0_35px_rgba(124,255,91,0.35)] overflow-hidden">
                {/* Aura de glow constante e mais brilhante no hover */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/15 blur-lg opacity-70 group-hover:opacity-100 group-hover:bg-neon/30 transition-all duration-500 pointer-events-none" />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Clock className="w-12 h-12 text-neon drop-shadow-[0_0_12px_rgba(124,255,91,0.65)] group-hover:drop-shadow-[0_0_20px_rgba(124,255,91,0.9)] transition-all duration-500" strokeWidth={2.0} />
                </motion.div>
              </div>
              <span className="relative z-10 font-display text-lg md:text-xl font-bold tracking-[0.25em] text-white transition-colors duration-500 group-hover:text-neon group-hover:drop-shadow-[0_0_8px_rgba(124,255,91,0.35)]">
                Tempo
              </span>
            </motion.div>
          </Reveal>

          {/* Pilar 2: Energia */}
          <Reveal delay={0.65} className="w-full">
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative flex flex-col items-center justify-center p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 hover:border-neon/40 hover:shadow-[0_0_40px_rgba(124,255,91,0.08)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.12)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Container de ícone com Glow Ampliado */}
              <div className="relative z-10 mb-8 flex items-center justify-center w-28 h-28 rounded-2xl bg-black/40 border border-neon/20 group-hover:border-neon/60 transition-all duration-500 shadow-[inset_0_0_15px_rgba(124,255,91,0.08),_0_0_20px_rgba(124,255,91,0.05)] group-hover:shadow-[0_0_35px_rgba(124,255,91,0.35)] overflow-hidden">
                {/* Aura de glow constante e mais brilhante no hover */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/15 blur-lg opacity-70 group-hover:opacity-100 group-hover:bg-neon/30 transition-all duration-500 pointer-events-none" />

                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Zap className="w-12 h-12 text-neon drop-shadow-[0_0_12px_rgba(124,255,91,0.65)] group-hover:drop-shadow-[0_0_20px_rgba(124,255,91,0.9)] transition-all duration-500" strokeWidth={2.0} />
                </motion.div>
              </div>
              <span className="relative z-10 font-display text-lg md:text-xl font-bold tracking-[0.25em] text-white transition-colors duration-500 group-hover:text-neon group-hover:drop-shadow-[0_0_8px_rgba(124,255,91,0.35)]">
                Energia
              </span>
            </motion.div>
          </Reveal>

          {/* Pilar 3: Dinheiro */}
          <Reveal delay={0.75} className="w-full">
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative flex flex-col items-center justify-center p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 hover:border-neon/40 hover:shadow-[0_0_40px_rgba(124,255,91,0.08)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.12)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Container de ícone com Glow Ampliado */}
              <div className="relative z-10 mb-8 flex items-center justify-center w-28 h-28 rounded-2xl bg-black/40 border border-neon/20 group-hover:border-neon/60 transition-all duration-500 shadow-[inset_0_0_15px_rgba(124,255,91,0.08),_0_0_20px_rgba(124,255,91,0.05)] group-hover:shadow-[0_0_35px_rgba(124,255,91,0.35)] overflow-hidden">
                {/* Aura de glow constante e mais brilhante no hover */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/15 blur-lg opacity-70 group-hover:opacity-100 group-hover:bg-neon/30 transition-all duration-500 pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <DollarSign className="w-12 h-12 text-neon drop-shadow-[0_0_12px_rgba(124,255,91,0.65)] group-hover:drop-shadow-[0_0_20px_rgba(124,255,91,0.9)] transition-all duration-500" strokeWidth={2.0} />
                </motion.div>
              </div>
              <span className="relative z-10 font-display text-lg md:text-xl font-bold tracking-[0.25em] text-white transition-colors duration-500 group-hover:text-neon group-hover:drop-shadow-[0_0_8px_rgba(124,255,91,0.35)]">
                Dinheiro
              </span>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
