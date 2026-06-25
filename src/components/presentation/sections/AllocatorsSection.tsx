import { motion } from "motion/react";
import { Clock, DollarSign, Zap } from "lucide-react";
import { Reveal, Section } from "../primitives";

export function AllocatorsSection() {
  return (
    <Section id="alocadores" className="relative overflow-hidden">
      {/* Definições de Gradiente SVG para os Ícones */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A3FF8D" />
            <stop offset="100%" stopColor="#7CFF5B" />
          </linearGradient>
        </defs>
      </svg>

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
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-neon mt-4 md:mt-6 neon-text leading-tight">
                de recursos
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Linha divisória minimalista */}
        <Reveal delay={0.5} y={10}>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-line to-transparent" />
        </Reveal>

        {/* Pilares: Tempo, Energia e Dinheiro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto z-10">
          
          {/* Pilar 1: Tempo */}
          <Reveal delay={0.55} className="w-full">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative flex flex-col items-center justify-between p-8 min-h-[420px] rounded-2xl border border-white/[0.05] bg-gradient-to-b from-neutral-950/80 to-neutral-950/20 backdrop-blur-xl transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_50px_rgba(124,255,91,0.06),_inset_0_1px_2px_rgba(255,255,255,0.05)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Grid cibernético de fundo no hover */}
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />

              {/* Top Tech Label */}
              <div className="w-full flex justify-between items-center z-10 border-b border-white/[0.03] pb-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-neon/60 group-hover:text-neon transition-colors duration-500">[ 01 ]</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-fg-dim uppercase">LIMITLESS ASSET</span>
              </div>

              {/* Icon Container with rotating tech rings */}
              <div className="relative z-10 my-4 flex items-center justify-center w-36 h-36 rounded-full bg-neutral-900/60 border border-white/[0.04] group-hover:border-neon/20 transition-all duration-500">
                {/* Tech Ring 1: Dotted rotating */}
                <div className="absolute inset-2 rounded-full border border-dashed border-neon/10 group-hover:border-neon/30 animate-[spin_60s_linear_infinite] pointer-events-none" />
                {/* Tech Ring 2: Double solid rotating reverse */}
                <div className="absolute inset-4 rounded-full border-2 border-double border-white/[0.02] group-hover:border-neon/15 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
                
                {/* Icon Background Aura */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/10 blur-xl opacity-60 group-hover:opacity-100 group-hover:bg-neon/25 transition-all duration-500 pointer-events-none" />
                
                {/* Secondary large background icon */}
                <Clock className="absolute w-24 h-24 text-neon/[0.02] group-hover:text-neon/[0.05] transition-all duration-700 pointer-events-none" strokeWidth={1} />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Clock className="w-14 h-14 text-neon drop-shadow-[0_0_15px_rgba(124,255,91,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(124,255,91,0.8)] transition-all duration-500" strokeWidth={1.5} stroke="url(#neonGradient)" />
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 text-center w-full flex-grow flex flex-col justify-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-neon group-hover:drop-shadow-[0_0_10px_rgba(124,255,91,0.2)] transition-colors duration-500">
                  Tempo
                </h3>
                <p className="text-xs sm:text-sm text-fg-muted/80 group-hover:text-white transition-colors duration-500 leading-relaxed max-w-[240px] mx-auto mt-3">
                  O ativo supremo e não renovável. Investido obsessivamente onde gera alavancagem real.
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="w-full flex justify-center z-10 mt-6 pt-4 border-t border-white/[0.03]">
                <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:bg-neon/5 group-hover:border-neon/20 transition-all duration-500 font-mono text-[9px] tracking-[0.2em] text-fg-dim group-hover:text-neon uppercase">
                  Recurso Finito
                </span>
              </div>
            </motion.div>
          </Reveal>

          {/* Pilar 2: Energia */}
          <Reveal delay={0.65} className="w-full">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative flex flex-col items-center justify-between p-8 min-h-[420px] rounded-2xl border border-white/[0.05] bg-gradient-to-b from-neutral-950/80 to-neutral-950/20 backdrop-blur-xl transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_50px_rgba(124,255,91,0.06),_inset_0_1px_2px_rgba(255,255,255,0.05)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Grid cibernético de fundo no hover */}
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />

              {/* Top Tech Label */}
              <div className="w-full flex justify-between items-center z-10 border-b border-white/[0.03] pb-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-neon/60 group-hover:text-neon transition-colors duration-500">[ 02 ]</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-fg-dim uppercase">FORCE MULTIPLIER</span>
              </div>

              {/* Icon Container with rotating tech rings */}
              <div className="relative z-10 my-4 flex items-center justify-center w-36 h-36 rounded-full bg-neutral-900/60 border border-white/[0.04] group-hover:border-neon/20 transition-all duration-500">
                {/* Tech Ring 1: Dotted rotating */}
                <div className="absolute inset-2 rounded-full border border-dashed border-neon/10 group-hover:border-neon/30 animate-[spin_60s_linear_infinite] pointer-events-none" />
                {/* Tech Ring 2: Double solid rotating reverse */}
                <div className="absolute inset-4 rounded-full border-2 border-double border-white/[0.02] group-hover:border-neon/15 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
                
                {/* Icon Background Aura */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/10 blur-xl opacity-60 group-hover:opacity-100 group-hover:bg-neon/25 transition-all duration-500 pointer-events-none" />
                
                {/* Secondary large background icon */}
                <Zap className="absolute w-24 h-24 text-neon/[0.02] group-hover:text-neon/[0.05] transition-all duration-700 pointer-events-none" strokeWidth={1} />
                
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Zap className="w-14 h-14 text-neon drop-shadow-[0_0_15px_rgba(124,255,91,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(124,255,91,0.8)] transition-all duration-500" strokeWidth={1.5} stroke="url(#neonGradient)" />
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 text-center w-full flex-grow flex flex-col justify-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-neon group-hover:drop-shadow-[0_0_10px_rgba(124,255,91,0.2)] transition-colors duration-500">
                  Energia
                </h3>
                <p className="text-xs sm:text-sm text-fg-muted/80 group-hover:text-white transition-colors duration-500 leading-relaxed max-w-[240px] mx-auto mt-3">
                  O motor de execução da equipe. Canalizado com foco cirúrgico no que realmente move o ponteiro.
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="w-full flex justify-center z-10 mt-6 pt-4 border-t border-white/[0.03]">
                <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:bg-neon/5 group-hover:border-neon/20 transition-all duration-500 font-mono text-[9px] tracking-[0.2em] text-fg-dim group-hover:text-neon uppercase">
                  Impacto Máximo
                </span>
              </div>
            </motion.div>
          </Reveal>

          {/* Pilar 3: Dinheiro */}
          <Reveal delay={0.75} className="w-full">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative flex flex-col items-center justify-between p-8 min-h-[420px] rounded-2xl border border-white/[0.05] bg-gradient-to-b from-neutral-950/80 to-neutral-950/20 backdrop-blur-xl transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_50px_rgba(124,255,91,0.06),_inset_0_1px_2px_rgba(255,255,255,0.05)] group cursor-pointer overflow-hidden"
            >
              {/* Efeito de brilho radial verde neon interno ao passar o mouse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Grid cibernético de fundo no hover */}
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />

              {/* Top Tech Label */}
              <div className="w-full flex justify-between items-center z-10 border-b border-white/[0.03] pb-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-neon/60 group-hover:text-neon transition-colors duration-500">[ 03 ]</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-fg-dim uppercase">SCALING FUEL</span>
              </div>

              {/* Icon Container with rotating tech rings */}
              <div className="relative z-10 my-4 flex items-center justify-center w-36 h-36 rounded-full bg-neutral-900/60 border border-white/[0.04] group-hover:border-neon/20 transition-all duration-500">
                {/* Tech Ring 1: Dotted rotating */}
                <div className="absolute inset-2 rounded-full border border-dashed border-neon/10 group-hover:border-neon/30 animate-[spin_60s_linear_infinite] pointer-events-none" />
                {/* Tech Ring 2: Double solid rotating reverse */}
                <div className="absolute inset-4 rounded-full border-2 border-double border-white/[0.02] group-hover:border-neon/15 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
                
                {/* Icon Background Aura */}
                <div className="absolute w-16 h-16 rounded-full bg-neon/10 blur-xl opacity-60 group-hover:opacity-100 group-hover:bg-neon/25 transition-all duration-500 pointer-events-none" />
                
                {/* Secondary large background icon */}
                <DollarSign className="absolute w-24 h-24 text-neon/[0.02] group-hover:text-neon/[0.05] transition-all duration-700 pointer-events-none" strokeWidth={1} />
                
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <DollarSign className="w-14 h-14 text-neon drop-shadow-[0_0_15px_rgba(124,255,91,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(124,255,91,0.8)] transition-all duration-500" strokeWidth={1.5} stroke="url(#neonGradient)" />
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 text-center w-full flex-grow flex flex-col justify-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-neon group-hover:drop-shadow-[0_0_10px_rgba(124,255,91,0.2)] transition-colors duration-500">
                  Dinheiro
                </h3>
                <p className="text-xs sm:text-sm text-fg-muted/80 group-hover:text-white transition-colors duration-500 leading-relaxed max-w-[240px] mx-auto mt-3">
                  O combustível para a escala acelerada. Alocado para multiplicar retornos de forma eficiente.
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="w-full flex justify-center z-10 mt-6 pt-4 border-t border-white/[0.03]">
                <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:bg-neon/5 group-hover:border-neon/20 transition-all duration-500 font-mono text-[9px] tracking-[0.2em] text-fg-dim group-hover:text-neon uppercase">
                  Vetor de Tração
                </span>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
