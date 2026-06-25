import { Reveal, Section } from "../primitives";
import { Target, Laptop, Video, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import whatsappQr from "@/assets/whatsapp-qr.png";

export function ProtagonistValueSection() {
  return (
    <Section 
      className="relative w-full min-h-screen py-20 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white border-t border-white/[0.03]"
      id="valor-protagonista"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[25%] left-[5%] w-[450px] h-[450px] rounded-full bg-zinc-800/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[5%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      {/* Architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Decorações douradas nos cantos (Keynote Style) */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none select-none opacity-30">
        <svg className="w-full h-full text-amber-500/20" viewBox="0 0 200 200" fill="none">
          <line x1="-50" y1="50" x2="150" y2="-150" stroke="currentColor" strokeWidth="0.75" />
          <line x1="-30" y1="70" x2="170" y2="-130" stroke="currentColor" strokeWidth="0.75" />
          <line x1="-10" y1="90" x2="190" y2="-110" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none select-none opacity-30">
        <svg className="w-full h-full text-amber-500/20" viewBox="0 0 200 200" fill="none">
          <line x1="50" y1="250" x2="250" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="70" y1="270" x2="270" y2="70" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Logo FA no canto inferior direito */}
      <div className="absolute bottom-8 right-12 z-10 select-none opacity-40">
        <span className="font-display text-3xl font-extrabold tracking-tighter text-amber-500/50">FA</span>
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

        {/* Grid de Opções + QR Code (Com Hierarquia Visual) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-6 w-full max-w-5xl">
          
          {/* Card 1: R$ 1.497 (Escala 95% para criar hierarquia) */}
          <Reveal delay={0.1} className="flex w-full max-w-[340px] lg:max-w-[310px] xl:max-w-[330px]">
            <div className="w-full flex flex-col items-center justify-between bg-zinc-950/30 border border-white/[0.04] rounded-[2.5rem] p-8 transition-all duration-500 hover:border-white/[0.1] hover:bg-zinc-950/50 shadow-xl relative overflow-hidden select-none lg:scale-95 lg:hover:scale-98">
              
              {/* Top Section - Icons */}
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                    <Target className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                    <Laptop className="w-5 h-5 text-zinc-400" />
                  </div>
                </div>

                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.25em] mb-4">
                  OPÇÃO 01
                </span>
                
                {/* Preço Diagramado Estilo Apple */}
                <div className="flex items-start justify-center font-sans">
                  <span className="text-xl md:text-2xl font-bold text-zinc-500 mr-1 mt-1">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tight whitespace-nowrap">
                    1.497
                  </span>
                </div>
              </div>

              {/* Linha Divisória Fina */}
              <div className="w-12 h-[1px] bg-zinc-800/80 my-8" />

              {/* Serviços inclusos (Sem descrições pequenas) */}
              <div className="text-center w-full min-h-[48px] flex items-center justify-center">
                <span className="text-[11px] sm:text-xs font-black text-zinc-300 uppercase tracking-widest leading-relaxed">
                  Tráfego Pago <br className="hidden xl:block" />+ CRM
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: R$ 2.497 (O Destaque - 105% Scale + Borda Premium + Glow) */}
          <Reveal delay={0.25} className="flex w-full max-w-[360px] lg:max-w-[330px] xl:max-w-[350px] z-10">
            <div className="w-full flex flex-col items-center justify-between bg-gradient-to-b from-neutral-900/60 via-zinc-950/80 to-amber-950/10 border-2 border-amber-500/30 rounded-[2.5rem] p-9 transition-all duration-500 hover:border-amber-500/50 shadow-[0_25px_50px_rgba(245,158,11,0.15)] hover:shadow-[0_30px_60px_rgba(245,158,11,0.22)] relative overflow-hidden group select-none lg:scale-105 lg:hover:scale-108">
              {/* Badge de Destaque no topo */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600" />
              
              {/* Top Section - Icons */}
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2.5 mb-6">
                  <div className="w-11 h-11 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-300">
                    <Target className="w-4.5 h-4.5 text-amber-500/90 group-hover:scale-105 transition-all duration-300" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-300">
                    <Laptop className="w-4.5 h-4.5 text-amber-500/90 group-hover:scale-105 transition-all duration-300" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/25 transition-all duration-300">
                    <Video className="w-4.5 h-4.5 text-amber-500/90 group-hover:scale-105 transition-all duration-300" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                  <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-[0.25em]">
                    OPÇÃO 02 (MAIS COMPLETA)
                  </span>
                </div>
                
                {/* Preço Diagramado Estilo Apple com Destaque Dourado */}
                <div className="flex items-start justify-center font-sans">
                  <span className="text-xl md:text-2xl font-bold text-amber-500/80 mr-1 mt-1">R$</span>
                  <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                    2.497
                  </span>
                </div>
              </div>

              {/* Linha Divisória Dourada */}
              <div className="w-12 h-[1px] bg-amber-500/20 my-8 group-hover:w-16 group-hover:bg-amber-500/40 transition-all duration-500" />

              {/* Serviços inclusos (Sem descrições pequenas) */}
              <div className="text-center w-full min-h-[48px] flex items-center justify-center">
                <span className="text-[11px] sm:text-xs font-black bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent uppercase tracking-widest leading-relaxed">
                  Tráfego + CRM <br className="hidden xl:block" />+ Produção de Conteúdo
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: QR Code WhatsApp (Escala 95% + Gradiente Verde Esmeralda Discreto) */}
          <Reveal delay={0.4} className="flex w-full max-w-[340px] lg:max-w-[310px] xl:max-w-[330px]">
            <div className="w-full flex flex-col items-center justify-between bg-zinc-950/30 border border-white/[0.04] rounded-[2.5rem] p-8 transition-all duration-500 hover:border-emerald-500/20 hover:bg-zinc-950/50 shadow-xl relative overflow-hidden select-none group lg:scale-95 lg:hover:scale-98">
              
              {/* Top Section - WhatsApp Icon */}
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2.5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/15 group-hover:border-emerald-500/25 transition-all duration-300">
                    <MessageSquare className="w-5 h-5 text-emerald-400/90" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400/80 font-bold uppercase tracking-[0.25em]">
                    ACESSO IMEDIATO
                  </span>
                </div>
                
                {/* QR Code Container Premium */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 bg-white p-3 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-amber-500/10 hover:border-emerald-500/30 transition-all duration-500 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                  <img 
                    src={whatsappQr} 
                    alt="QR Code WhatsApp" 
                    className="w-full h-full object-contain select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Linha Divisória Fina */}
              <div className="w-12 h-[1px] bg-zinc-800/80 my-7 group-hover:bg-emerald-800/30 transition-colors duration-500" />

              {/* Instrução Chamativa */}
              <div className="text-center w-full">
                <span className="text-[11px] sm:text-xs font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent uppercase tracking-widest block leading-relaxed font-bold">
                  GARANTA SUA VAGA <br className="hidden xl:block" />VIA WHATSAPP
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </Section>
  );
}
