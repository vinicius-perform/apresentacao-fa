import { Reveal, Section } from "../primitives";
import { Target, Laptop, Video } from "lucide-react";

export function ProtagonistValueSection() {
  return (
    <Section 
      className="relative w-full min-h-screen py-20 md:py-28 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white border-t border-white/[0.03]"
      id="valor-protagonista"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[25%] left-[5%] w-[400px] h-[400px] rounded-full bg-zinc-800/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[5%] w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />

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

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 items-center justify-center text-center">
        
        {/* Título Principal */}
        <Reveal>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-amber-500 uppercase mb-3 select-none">
            Opções de Contratação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent uppercase tracking-wider mb-16 select-none leading-tight">
            Valor Protagonista
          </h2>
        </Reveal>

        {/* Cards de Opções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl items-stretch">
          
          {/* Card 1: R$ 1.497 */}
          <Reveal delay={0.2} className="flex">
            <div className="w-full max-w-[380px] min-h-[400px] mx-auto flex flex-col items-center justify-between bg-zinc-950/45 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.1] shadow-xl relative overflow-hidden select-none">
              
              {/* Ícones no topo */}
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                  <Target className="w-7 h-7 text-zinc-400" />
                </div>
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                  <Laptop className="w-7 h-7 text-zinc-400" />
                </div>
              </div>

              {/* Título e Valor */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] mb-2">
                  OPÇÃO 01
                </span>
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wider block font-mono">
                  R$ 1.497
                </span>
              </div>

              {/* Linha Divisória */}
              <div className="w-8 h-[2px] bg-zinc-800 mb-6" />

              {/* Serviços inclusos (Sem descrições pequenas) */}
              <div className="text-center">
                <span className="text-xs sm:text-sm font-black text-zinc-300 uppercase tracking-widest block leading-relaxed">
                  Tráfego Pago + CRM
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: R$ 2.497 */}
          <Reveal delay={0.4} className="flex">
            <div className="w-full max-w-[380px] min-h-[400px] mx-auto flex flex-col items-center justify-between bg-gradient-to-b from-neutral-900/60 to-zinc-950/90 border-2 border-amber-500/25 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:border-amber-500/40 shadow-[0_20px_50px_rgba(245,158,11,0.12)] relative overflow-hidden group select-none">
              <div className="absolute top-0 left-0 w-full h-[4.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 animate-pulse" />
              
              {/* Ícones no topo */}
              <div className="flex gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-500">
                  <Target className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="w-14 h-14 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-500">
                  <Laptop className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="w-14 h-14 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-500">
                  <Video className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              {/* Título e Valor */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-[10px] sm:text-xs font-mono text-amber-500/90 uppercase tracking-[0.2em] mb-2 font-bold">
                  OPÇÃO 02 (MAIS COMPLETA)
                </span>
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wider block font-mono">
                  R$ 2.497
                </span>
              </div>

              {/* Linha Divisória Dourada */}
              <div className="w-8 h-[2px] bg-amber-500/30 mb-6 group-hover:w-14 group-hover:bg-amber-500/60 transition-all duration-500" />

              {/* Serviços inclusos (Sem descrições pequenas) */}
              <div className="text-center">
                <span className="text-xs sm:text-sm font-black bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent uppercase tracking-widest block leading-relaxed">
                  Tráfego + CRM + Produção de Conteúdo
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
