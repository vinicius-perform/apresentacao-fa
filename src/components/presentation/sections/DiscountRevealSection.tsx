import { Reveal, Section } from "../primitives";
import { Percent } from "lucide-react";

export function DiscountRevealSection() {
  return (
    <Section 
      className="relative w-full min-h-screen py-20 md:py-28 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white border-t border-white/[0.03]"
      id="revelacao-desconto"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-zinc-800/10 blur-[120px] pointer-events-none" />

      {/* Architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Decorações douradas nos cantos (Keynote Style) */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none select-none opacity-40">
        <svg className="w-full h-full text-amber-500/20" viewBox="0 0 200 200" fill="none">
          <line x1="-50" y1="50" x2="150" y2="-150" stroke="currentColor" strokeWidth="0.75" />
          <line x1="-30" y1="70" x2="170" y2="-130" stroke="currentColor" strokeWidth="0.75" />
          <line x1="-10" y1="90" x2="190" y2="-110" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none select-none opacity-40">
        <svg className="w-full h-full text-amber-500/20" viewBox="0 0 200 200" fill="none">
          <line x1="50" y1="250" x2="250" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="70" y1="270" x2="270" y2="70" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Logo FA no canto inferior direito */}
      <div className="absolute bottom-8 right-12 z-10 select-none opacity-50">
        <span className="font-display text-3xl font-extrabold tracking-tighter text-amber-500/60">FA</span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col relative z-10 items-center justify-center text-center">
        
        {/* Ícone Monumental */}
        <Reveal>
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,158,11,0.15)] animate-pulse">
            <Percent className="w-11 h-11 sm:w-13 sm:h-13 text-amber-500" />
          </div>
        </Reveal>

        {/* Pergunta Provocativa */}
        <Reveal delay={0.2}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-12 select-none max-w-4xl leading-tight">
            Por 50% de desconto <br className="hidden md:block" /> você seria cliente hoje?
          </h2>
        </Reveal>

        {/* Revelação do Preço */}
        <Reveal delay={0.4}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-4 select-none">
            {/* Valor Anterior Cortado */}
            <div className="relative py-2 px-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-zinc-500">
                R$ 19.954,00
              </span>
              <div className="absolute top-1/2 left-0 w-full h-[3px] bg-red-600/80 -rotate-6 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            </div>

            {/* Seta/Transição sutil */}
            <div className="text-amber-500/40 text-xl md:text-2xl font-bold hidden md:block">➔</div>
            <div className="text-amber-500/40 text-xl md:text-2xl font-bold md:hidden">▼</div>

            {/* Novo Valor com Desconto */}
            <div className="bg-gradient-to-b from-neutral-900/80 to-zinc-950/95 border-2 border-amber-500/30 rounded-[2.5rem] py-6 px-10 md:py-8 md:px-12 shadow-[0_25px_60px_rgba(245,158,11,0.2)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600" />
              <span className="text-[10px] sm:text-xs font-mono text-amber-500/90 uppercase tracking-[0.3em] mb-1 block">
                VALOR COM 50% DE DESCONTO
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider block">
                R$ 9.977,00
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
