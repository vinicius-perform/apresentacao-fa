import { useState, useEffect, RefObject, useRef } from "react";
import { ArrowUpRight, Phone, MessageSquare, Eye, XCircle, Inbox, Kanban, Bot, Zap, CheckCircle2 } from "lucide-react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { motion, useInView, AnimatePresence } from "motion/react";
import crmFunil from "@/assets/crm-funil.png";

export function MethodologySection({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollYProgress?: any;
}) {
  const c = presentationContent.methodologyGvd;

  // Estados locais dos slides
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos (300 segundos)

  // Referência para iniciar o timer de desconto quando entrar em tela
  const discountRef = useRef<HTMLDivElement>(null);
  const isDiscountInView = useInView(discountRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isDiscountInView) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isDiscountInView]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Seção Inicial: Headline da Metodologia */}
      <Section
        className="py-32 md:py-48 flex flex-col justify-center items-center bg-[#050505] text-white transition-colors duration-100 border-b border-white/[0.03]"
      >
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4">
          {/* Kicker da seção */}
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] mb-8 md:mb-12">
              <span className="h-px w-8 bg-white/20" />
              <span className="text-white/60">{c.kicker}</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
          </Reveal>

          {/* Headline super elegante */}
          <Reveal delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto text-balance text-white">
              {c.headline}
            </h2>
          </Reveal>
        </div>
      </Section>

      {/* Círculos de Fundo Comuns (Comum a todos os slides escuros) */}
      <div className="relative w-full">
        {/* Slide 0: Introdução GVD */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-between   py-8 md:py-16 text-center">
                    {/* Texto Superior */}
                    <span className="font-display text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.45em] text-fg-dim uppercase">
                      Metodologia única e validada
                    </span>

                    {/* GVD Centralizado Gigante */}
                    <h1 className="font-montserrat text-8xl sm:text-[12rem] md:text-[18rem] lg:text-[24rem] xl:text-[28rem] 2xl:text-[32rem] font-black tracking-tight leading-none bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_20px_80px_rgba(245,158,11,0.4)] my-auto select-none">
                      GVD
                    </h1>

                    {/* Subtítulos Inferiores */}
                    <div className="flex flex-row justify-around sm:justify-between w-full max-w-5xl px-4 sm:px-12 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] text-white/70">
                      <span>GERAÇÃO DE DEMANDA</span>
                      <span className="hidden sm:inline text-white/20">|</span>
                      <span>VENDAS</span>
                      <span className="hidden sm:inline text-white/20">|</span>
                      <span>DADOS</span>
                    </div>
                  </div></motion.section>

        {/* Slide 1: Geração de Demanda */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-[90vw] mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-start   py-6 text-left">
                    {/* Cabeçalho do Slide 2 */}
                    <div className="w-full flex justify-between items-center mb-8 md:mb-12 px-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Geração de Demanda
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Mapa Mental Content Box */}
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      
                      {/* Versão Mobile (Vertical Simplificada) */}
                      <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
                        {/* Bloco Raiz */}
                        <div className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl p-4 text-center border border-amber-400/40 shadow-md">
                          <span className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase tracking-wide">Geração de Demanda</span>
                        </div>

                        {/* Seção Posicionamento */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[9px] font-bold uppercase tracking-wider">Mapeamento</span>
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Posicionamento</h3>
                          </div>
                          
                          {/* Detalhe Instagram */}
                          <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f9ce71] via-[#ee305a] to-[#6228d7] flex items-center justify-center flex-shrink-0 shadow-md">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-white">Instagram</h4>
                              <p className="text-[9px] text-yellow-500 font-semibold mt-0.5">Stories Diários + 3 Postagens por Semana</p>
                            </div>
                          </div>

                          {/* Lista de Recursos */}
                          <div className="grid grid-cols-3 gap-2">
                            {["Reels", "Depoimento", "Antes e Depois"].map(item => (
                              <div key={item} className="bg-white/[0.03] border border-white/[0.05] rounded p-2 text-center">
                                <span className="text-[9px] font-semibold text-white/80">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Seção Demanda */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[9px] font-bold uppercase tracking-wider">Conversão</span>
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Demanda</h3>
                          </div>

                          <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3 text-center">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Tráfego Pago</span>
                          </div>

                          {/* Plataformas Ads */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* Meta Ads */}
                            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-2.5 flex items-center justify-center gap-2">
                              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#0064e0]" fill="currentColor">
                                <path d="M17.472 6c-1.39 0-2.673.684-3.528 1.83C13.09 6.683 11.808 6 10.418 6C8.016 6 6 8.016 6 10.418c0 1.347.608 2.553 1.572 3.359C6.444 14.542 5 16.275 5 18c0 .553.447 1 1 1s1-.447 1-1c0-1.748 1.942-3.582 4.418-3.582c.983 0 1.921-.295 2.672-.835c.751.54 1.69.835 2.672.835c2.476 0 4.418 1.834 4.418 3.582c0 .553.448 1 1 1s1-.447 1-1c0-1.725-1.444-3.458-2.572-4.223A4.412 4.412 0 0 0 20.144 10.42C20.144 8.016 18.128 6 15.726 6h1.746zm-7.054 6.836c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418zm5.308 0c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418z"/>
                              </svg>
                              <span className="text-xs font-semibold text-white/95">Meta Ads</span>
                            </div>
                            {/* Google Ads */}
                            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-2.5 flex items-center justify-center gap-2">
                              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
                                <path fill="#4285F4" d="M16.5 6L8.5 20h8l8-14z"/>
                                <path fill="#FBBC05" d="M8.5 20L0 5.5l8-1.5 8.5 16z"/>
                              </svg>
                              <span className="text-xs font-semibold text-white/95">Google Ads</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Versão Desktop Unificada por Coordenadas Internas ao SVG (ForeignObject) */}
                      <div className="hidden md:block w-full max-w-full mx-auto aspect-[10/4] h-auto mt-4">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                          
                          {/* Definições de Marcadores e Gradientes */}
                          <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
                            </marker>
                          </defs>

                          {/* ---------------- LINHAS DE CONEXÃO ---------------- */}
                          {/* Curvas da Raiz para Posicionamento e Demanda */}
                          <path d="M 210,200 C 245,200 245,100 280,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 280,100 L 280,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" markerEnd="url(#arrow)" />
                          
                          <path d="M 210,200 C 245,200 245,300 280,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 280,300 L 280,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" markerEnd="url(#arrow)" />

                          {/* Linha Posicionamento -> Instagram */}
                          <path d="M 450,100 L 490,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* Curvas Instagram -> Reels, Depoimento, Antes e Depois */}
                          <path d="M 650,100 C 675,100 675,43 700,43" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                          <path d="M 650,100 L 700,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                          <path d="M 650,100 C 675,100 675,157 700,157" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

                          {/* Linha Demanda -> Tráfego Pago */}
                          <path d="M 450,300 L 490,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* Curvas Tráfego Pago -> Meta Ads e Google Ads */}
                          <path d="M 640,300 C 665,300 665,250 690,250" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 640,300 C 665,300 665,350 690,350" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* ---------------- ELEMENTOS HTML INTERNOS (ForeignObjects) ---------------- */}
                          
                          {/* Coluna 1: Bloco Raiz */}
                          <foreignObject x="10" y="150" width="200" height="100">
                            <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_20px_rgba(245,158,11,0.25)] border border-amber-400/40 p-3 text-center">
                              <span className="font-montserrat text-sm sm:text-base md:text-lg font-black text-white leading-tight uppercase">
                                Geração de Demanda
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 2: Sub-raízes */}
                          {/* Bloco Posicionamento */}
                          <foreignObject x="280" y="70" width="170" height="60">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-3 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-xs md:text-sm font-black text-white tracking-widest uppercase">
                                Posicionamento
                              </span>
                            </div>
                          </foreignObject>

                          {/* Bloco Demanda */}
                          <foreignObject x="280" y="270" width="170" height="60">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-3 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-xs md:text-sm font-black text-white tracking-widest uppercase">
                                Demanda
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 3: Canais / Mecanismos */}
                          {/* Bloco Instagram (Alinhado com Posicionamento no Y) */}
                          <foreignObject x="490" y="15" width="160" height="170">
                            <div className="w-full h-full flex flex-col items-center text-center">
                              {/* Logo Instagram */}
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f9ce71] via-[#ee305a] to-[#6228d7] flex items-center justify-center shadow-lg mb-1.5">
                                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                              </div>
                              <span className="font-sans text-xs md:text-sm font-black text-white">Instagram</span>
                              <span className="font-sans text-[10px] md:text-xs font-extrabold text-yellow-500 mt-1.5 leading-snug">
                                Stories Diários<br/>+ 3 Postagens<br/>por Semana
                              </span>
                            </div>
                          </foreignObject>

                          {/* Bloco Tráfego Pago (Alinhado com Demanda no Y) */}
                          <foreignObject x="490" y="270" width="150" height="60">
                            <div className="w-full h-full flex items-center justify-center text-center">
                              <span className="font-display text-sm md:text-base font-black text-white tracking-wide uppercase">
                                Tráfego Pago
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 4: Resultados / Plataformas */}
                          {/* Ramificação Instagram */}
                          <foreignObject x="700" y="20" width="140" height="46">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Reels</span>
                            </div>
                          </foreignObject>
                          <foreignObject x="700" y="77" width="140" height="46">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Depoimento</span>
                            </div>
                          </foreignObject>
                          <foreignObject x="700" y="134" width="140" height="46">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Antes e Depois</span>
                            </div>
                          </foreignObject>

                          {/* Ramificação Tráfego Pago */}
                          {/* Meta Ads */}
                          <foreignObject x="690" y="225" width="150" height="50">
                            <div className="w-full h-full flex items-center justify-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] px-2 transition-colors duration-300">
                              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#0064e0]" fill="currentColor">
                                <path d="M17.472 6c-1.39 0-2.673.684-3.528 1.83C13.09 6.683 11.808 6 10.418 6C8.016 6 6 8.016 6 10.418c0 1.347.608 2.553 1.572 3.359C6.444 14.542 5 16.275 5 18c0 .553.447 1 1 1s1-.447 1-1c0-1.748 1.942-3.582 4.418-3.582c.983 0 1.921-.295 2.672-.835c.751.54 1.69.835 2.672.835c2.476 0 4.418 1.834 4.418 3.582c0 .553.448 1 1 1s1-.447 1-1c0-1.725-1.444-3.458-2.572-4.223A4.412 4.412 0 0 0 20.144 10.42C20.144 8.016 18.128 6 15.726 6h1.746zm-7.054 6.836c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418zm5.308 0c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418z"/>
                              </svg>
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/95">Meta Ads</span>
                            </div>
                          </foreignObject>

                          {/* Google Ads */}
                          <foreignObject x="690" y="325" width="150" height="50">
                            <div className="w-full h-full flex items-center justify-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] px-2 transition-colors duration-300">
                              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
                                <path fill="#4285F4" d="M16.5 6L8.5 20h8l8-14z"/>
                                <path fill="#FBBC05" d="M8.5 20L0 5.5l8-1.5 8.5 16z"/>
                              </svg>
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/95">Google Ads</span>
                            </div>
                          </foreignObject>

                        </svg>
                      </div>

                    </div>
                  </div></motion.section>

                {/* Slide 3: Vendas */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-start   py-6 text-left">
  <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
  <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

  <div className="w-full flex justify-between items-center mb-4 px-4 flex-shrink-0">
    <div className="flex flex-col">
      <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
        Vendas
      </h2>
    </div>
    <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
      GVD
    </span>
  </div>

  <div className="w-full flex-grow flex items-center justify-center relative pb-16">
    {/* Versão Mobile (Vertical Simplificada) */}
    <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
      <div className="w-full bg-[#0a0a0a]/90 border border-amber-500/30 rounded-2xl py-3.5 text-center shadow-lg shadow-amber-500/10">
        <span className="font-montserrat text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Vendas</span>
      </div>

      {/* Coluna 1: Estruturação do CRM */}
      <div className="bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md flex flex-col items-center">
        <div className="w-full bg-[#0a0a0a]/95 border border-amber-500/20 rounded-xl py-2.5 px-4 text-center mb-4 shadow-md">
          <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Estruturação do CRM</h3>
        </div>
        <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] bg-black/40 aspect-[16/10] mb-4 shadow-inner">
          <img src={crmFunil} alt="DotSales Pipeline" className="w-full h-full object-cover opacity-90" />
        </div>
        <a 
          href="https://sales.dottech.ai/dashboard/pipeline/funil?id=71479906-111c-462c-af1d-69e76009057b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-xs font-black text-blue-400 hover:text-blue-300 tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md shadow-blue-500/5 hover:shadow-blue-500/15"
        >
          CRM na Prática
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Coluna 2: Playbook de Vendas */}
      <div className="bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">
        <div className="w-full bg-[#0a0a0a]/95 border border-amber-500/20 rounded-xl py-2.5 px-4 text-center mb-4 shadow-md">
          <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Playbook de Vendas</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5 text-xs text-zinc-300">
          {[
            "MÉTODOS DE VENDAS",
            "SCRIPTS DE VENDAS",
            "FLUXO DE CADÊNCIA",
            "GATILHOS MENTAIS",
            "NÍVEIS DE CONSCIÊNCIA"
          ].map(item => (
            <div key={item} className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300">
              <span className="font-sans text-[10px] tracking-widest text-zinc-200 font-extrabold uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna 3: Rotinas */}
      <div className="bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">
        <div className="w-full bg-[#0a0a0a]/95 border border-amber-500/20 rounded-xl py-2.5 px-4 text-center mb-4 shadow-md">
          <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Rotinas</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5 text-xs text-zinc-300">
          {[
            "DAILY",
            "WEEKLY",
            "MONTHLY",
            "COACHING TÉCNICO",
            "ONE A ONE",
            "ROLE PLAY"
          ].map(item => (
            <div key={item} className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300">
              <span className="font-sans text-[10px] tracking-widest text-zinc-200 font-extrabold uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna 4: Rituais */}
      <div className="bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">
        <div className="w-full bg-[#0a0a0a]/95 border border-amber-500/20 rounded-xl py-2.5 px-4 text-center mb-4 shadow-md">
          <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Rituais</h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5 text-xs text-zinc-300">
          {[
            "BOLA DE OURO",
            "NOVA RÉGUA",
            "BANDEIRAS",
            "SINO",
            "GRITO DE GERRA"
          ].map(item => (
            <div key={item} className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300">
              <span className="font-sans text-[10px] tracking-widest text-zinc-200 font-extrabold uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Versão Desktop */}
    <div className="hidden md:block w-full max-w-5xl mx-auto aspect-[10/4.5] h-auto mt-4">
      <svg className="w-full h-full" viewBox="0 0 1000 450" fill="none">
        <style>{`
          @keyframes flow-pulse-v {
            to {
              stroke-dashoffset: -20;
            }
          }
          .flowing-fiber-v {
            stroke-dasharray: 6 10;
            animation: flow-pulse-v 1.2s linear infinite;
            filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.8));
          }
        `}</style>
        
        <defs>
          <marker id="arrow-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
          </marker>
          <linearGradient id="amber-line-v" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Coluna 1 (CRM) */}
        <path d="M 500,50 L 500,70 C 500,85 450,85 140,85 L 140,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
        <path d="M 500,50 L 500,70 C 500,85 450,85 140,85 L 140,100" stroke="url(#amber-line-v)" strokeWidth="1.5" className="flowing-fiber-v" fill="none" />
        <path d="M 140,92 L 140,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" markerEnd="url(#arrow-v)" />

        {/* Coluna 2 (Playbook) */}
        <path d="M 500,50 L 500,70 C 500,85 450,85 380,85 L 380,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
        <path d="M 500,50 L 500,70 C 500,85 450,85 380,85 L 380,100" stroke="url(#amber-line-v)" strokeWidth="1.5" className="flowing-fiber-v" fill="none" />
        <path d="M 380,92 L 380,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" markerEnd="url(#arrow-v)" />

        {/* Coluna 3 (Rotinas) */}
        <path d="M 500,50 L 500,70 C 500,85 550,85 620,85 L 620,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
        <path d="M 500,50 L 500,70 C 500,85 550,85 620,85 L 620,100" stroke="url(#amber-line-v)" strokeWidth="1.5" className="flowing-fiber-v" fill="none" />
        <path d="M 620,92 L 620,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" markerEnd="url(#arrow-v)" />

        {/* Coluna 4 (Rituais) */}
        <path d="M 500,50 L 500,70 C 500,85 550,85 860,85 L 860,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
        <path d="M 500,50 L 500,70 C 500,85 550,85 860,85 L 860,100" stroke="url(#amber-line-v)" strokeWidth="1.5" className="flowing-fiber-v" fill="none" />
        <path d="M 860,92 L 860,100" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" markerEnd="url(#arrow-v)" />

        {/* Bloco Raiz */}
        <foreignObject x="380" y="5" width="240" height="55">
          <div className="w-full h-full flex items-center justify-center p-2 select-none">
            <div className="relative overflow-hidden w-[200px] h-[40px] flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 shadow-[0_4px_15px_rgba(245,158,11,0.4)] text-center border border-amber-300/30">
              <span className="font-montserrat text-sm font-black tracking-[0.25em] text-white">
                VENDAS
              </span>
            </div>
          </div>
        </foreignObject>

        {/* Coluna 1: Estruturação do CRM */}
        <foreignObject x="35" y="100" width="210" height="45">
          <div className="w-full h-full flex items-center justify-center p-1 select-none text-center">
            <div className="w-[195px] h-[36px] flex items-center justify-center rounded-lg bg-[#0a0a0a]/90 border border-amber-500/20 shadow-md shadow-amber-500/2 hover:border-amber-500/50 transition-colors duration-300">
              <span className="font-display text-[9px] md:text-[10px] font-black text-amber-500 tracking-widest uppercase leading-tight">
                ESTRUTURAÇÃO DO CRM
              </span>
            </div>
          </div>
        </foreignObject>
        <foreignObject x="35" y="150" width="210" height="290">
          <div className="w-full h-full flex flex-col items-center justify-start p-2">
            <div className="w-[195px] h-[270px] flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 p-3.5 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
              <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] bg-black/40 aspect-[16/10] shadow-inner">
                <img src={crmFunil} alt="DotSales Pipeline" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="w-full mt-2.5">
                <a 
                  href="https://sales.dottech.ai/dashboard/pipeline/funil?id=71479906-111c-462c-af1d-69e76009057b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-[10px] font-black text-blue-400 hover:text-blue-300 tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/5 hover:shadow-blue-500/15"
                >
                  CRM na Prática
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </foreignObject>

        {/* Coluna 2: Playbook de Vendas */}
        <foreignObject x="275" y="100" width="210" height="45">
          <div className="w-full h-full flex items-center justify-center p-1 select-none text-center">
            <div className="w-[195px] h-[36px] flex items-center justify-center rounded-lg bg-[#0a0a0a]/90 border border-amber-500/20 shadow-md shadow-amber-500/2 hover:border-amber-500/50 transition-colors duration-300">
              <span className="font-display text-[9px] md:text-[10px] font-black text-amber-500 tracking-widest uppercase leading-tight">
                PLAYBOOK DE VENDAS
              </span>
            </div>
          </div>
        </foreignObject>
        <foreignObject x="275" y="150" width="210" height="290">
          <div className="w-full h-full flex flex-col items-center justify-start p-2 select-none">
            <div className="w-[195px] h-[270px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 p-4 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col gap-2.5 w-full">
                {[
                  "MÉTODOS DE VENDAS",
                  "SCRIPTS DE VENDAS",
                  "FLUXO DE CADÊNCIA",
                  "GATILHOS MENTAIS",
                  "NÍVEIS DE CONSCIÊNCIA"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300 text-left">
                    <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-widest text-zinc-300 font-extrabold uppercase leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </foreignObject>

        {/* Coluna 3: Rotinas */}
        <foreignObject x="515" y="100" width="210" height="45">
          <div className="w-full h-full flex items-center justify-center p-1 select-none text-center">
            <div className="w-[195px] h-[36px] flex items-center justify-center rounded-lg bg-[#0a0a0a]/90 border border-amber-500/20 shadow-md shadow-amber-500/2 hover:border-amber-500/50 transition-colors duration-300">
              <span className="font-display text-[9px] md:text-[10px] font-black text-amber-500 tracking-widest uppercase leading-tight">
                ROTINAS
              </span>
            </div>
          </div>
        </foreignObject>
        <foreignObject x="515" y="150" width="210" height="290">
          <div className="w-full h-full flex flex-col items-center justify-start p-2 select-none">
            <div className="w-[195px] h-[270px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 p-4 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col gap-2 w-full">
                {[
                  "DAILY",
                  "WEEKLY",
                  "MONTHLY",
                  "COACHING TÉCNICO",
                  "ONE A ONE",
                  "ROLE PLAY"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 py-1 px-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300 text-left">
                    <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-widest text-zinc-300 font-extrabold uppercase leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </foreignObject>

        {/* Coluna 4: Rituais */}
        <foreignObject x="755" y="100" width="210" height="45">
          <div className="w-full h-full flex items-center justify-center p-1 select-none text-center">
            <div className="w-[195px] h-[36px] flex items-center justify-center rounded-lg bg-[#0a0a0a]/90 border border-amber-500/20 shadow-md shadow-amber-500/2 hover:border-amber-500/50 transition-colors duration-300">
              <span className="font-display text-[9px] md:text-[10px] font-black text-amber-500 tracking-widest uppercase leading-tight">
                RITUAIS
              </span>
            </div>
          </div>
        </foreignObject>
        <foreignObject x="755" y="150" width="210" height="290">
          <div className="w-full h-full flex flex-col items-center justify-start p-2 select-none">
            <div className="w-[195px] h-[270px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-900/80 to-zinc-950/90 border border-white/[0.06] border-t-white/10 p-4 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col gap-2.5 w-full">
                {[
                  "BOLA DE OURO",
                  "NOVA RÉGUA",
                  "BANDEIRAS",
                  "SINO",
                  "GRITO DE GUERRA"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-2 border-l-amber-500/80 hover:bg-white/[0.04] hover:border-l-amber-400 transition-all duration-300 text-left">
                    <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-widest text-zinc-300 font-extrabold uppercase leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  </div>
</div></motion.section>


{/* Slide 9: DotSales Stats (Fundo Branco) */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] text-black" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col justify-center items-center   text-center overflow-hidden bg-[#FAFAFA]">
                    {/* Very subtle architectural grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    {/* Header Top Left */}
                    <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col text-left z-20">
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase mb-0.5">Cérebro Comercial</span>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 uppercase tracking-widest flex items-center">
                        <span>dot</span>
                        <span className="text-amber-500">.Sales</span>
                      </h2>
                    </div>

                    <div className="w-full max-w-6xl px-8 relative z-10 flex flex-col items-center justify-center min-h-[60vh] mt-12">
                      {/* Main Headline */}
                      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-6 max-w-4xl text-balance">
                        O balcão da sua loja mudou de lugar
                      </h1>

                      {/* Professional Subtitle */}
                      <p className="font-sans text-neutral-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-balance">
                        O cliente não entra pela porta. Ele manda mensagem. É aí que a venda é ganha — ou perdida.
                      </p>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <span className="text-6xl sm:text-7xl font-display font-black text-amber-500 mb-4 tracking-tighter drop-shadow-sm">95%</span>
                          <span className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
                            das interações entre marcas e consumidores no Brasil acontecem no WhatsApp
                          </span>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <span className="text-6xl sm:text-7xl font-display font-black text-amber-500 mb-4 tracking-tighter drop-shadow-sm">98%</span>
                          <span className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
                            de taxa de leitura das mensagens — contra ~20% do e-mail
                          </span>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <span className="text-6xl sm:text-7xl font-display font-black text-amber-500 mb-4 tracking-tighter drop-shadow-sm">6x</span>
                          <span className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
                            mais conversão que o e-commerce tradicional
                          </span>
                        </div>
                      </div>

                      {/* Footer text */}
                      <div className="mt-16 text-neutral-400 text-xs sm:text-sm font-sans tracking-wide">
                        Fontes: Chat Commerce Report 2025 (OmniChat) · Opinion Box · Meta
                      </div>
                    </div>
                  </div></motion.section>
                ) :

        {/* Slide 10: DotSales Problem (Fundo Branco) */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] text-black" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col justify-center items-center   text-center overflow-hidden bg-[#FAFAFA]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col text-left z-20">
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase mb-0.5">Cérebro Comercial</span>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 uppercase tracking-widest flex items-center">
                        <span>dot</span><span className="text-amber-500">.Sales</span>
                      </h2>
                    </div>

                    <div className="w-full max-w-6xl px-8 relative z-10 flex flex-col items-start justify-center min-h-[60vh] mt-12 text-left">
                      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-4 max-w-5xl">
                        O problema não é gerar contato. <br/>É o que vem depois.
                      </h1>
                      
                      <div className="flex gap-2 mb-10">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Left Card: Red/Amber Tint */}
                        <div className="flex flex-col bg-red-50/50 border border-red-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                          <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-8 font-display">Como a maioria opera hoje</h3>
                          <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-4 text-neutral-700 font-medium text-sm sm:text-base">
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                              Lead cai numa caixa geral — ninguém é o dono
                            </li>
                            <li className="flex items-center gap-4 text-neutral-700 font-medium text-sm sm:text-base">
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                              Vários vendedores no mesmo número, conversas perdidas
                            </li>
                            <li className="flex items-center gap-4 text-neutral-700 font-medium text-sm sm:text-base">
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                              Resposta sai horas depois
                            </li>
                            <li className="flex items-center gap-4 text-neutral-700 font-medium text-sm sm:text-base">
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                              Não dá pra saber quem vende, quanto e por quê
                            </li>
                            <li className="flex items-center gap-4 text-neutral-700 font-medium text-sm sm:text-base">
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                              Cliente some e ninguém faz follow-up
                            </li>
                          </ul>
                        </div>

                        {/* Right Card: Dark Corporate */}
                        <div className="flex flex-col bg-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600" />
                          <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-8 font-display ml-2">O custo invisível disso</h3>
                          
                          <div className="flex flex-col ml-2">
                            <span className="text-7xl sm:text-[100px] font-black text-white font-display leading-none mb-4">21x</span>
                            <span className="text-zinc-300 font-medium text-sm sm:text-lg leading-relaxed mb-8">
                              mais chance de converter um lead respondido em até 5 minutos, comparado a 30 minutos de espera.
                            </span>
                            
                            <div className="w-full h-px bg-zinc-800 my-6" />
                            
                            <span className="text-zinc-400 font-medium text-sm sm:text-base">
                              <span className="text-amber-500 font-bold">23%</span> das empresas nem respondem o 1º contato.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-neutral-400 text-xs sm:text-sm font-sans tracking-wide">
                        Fontes: HubSpot · InsideSales
                      </div>
                    </div>
                  </div></motion.section>
                ) :

        {/* Slide 11: DotSales Features (Fundo Branco) */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] text-black" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col justify-center items-center   text-center overflow-hidden bg-[#FAFAFA]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col text-left z-20">
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase mb-0.5">Cérebro Comercial</span>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 uppercase tracking-widest flex items-center">
                        <span>dot</span><span className="text-amber-500">.Sales</span>
                      </h2>
                    </div>

                    <div className="w-full max-w-6xl px-8 relative z-10 flex flex-col items-start justify-center min-h-[60vh] mt-12 text-left">
                      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-4 max-w-5xl">
                        Tudo entre o primeiro "oi" e o fechamento, num só lugar
                      </h1>
                      
                      <div className="flex gap-2 mb-10">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {/* Caixa única */}
                        <div className="flex items-start gap-6 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Inbox className="w-8 h-8 text-amber-600" />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">Caixa única</h3>
                            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">WhatsApp, Instagram e Facebook numa só inbox do time.</p>
                          </div>
                        </div>
                        
                        {/* Funil visual */}
                        <div className="flex items-start gap-6 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Kanban className="w-8 h-8 text-amber-600" />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">Funil visual</h3>
                            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">Arrasta-e-solta entre etapas. Você vê onde cada lead está.</p>
                          </div>
                        </div>

                        {/* Agente de IA */}
                        <div className="flex items-start gap-6 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Bot className="w-8 h-8 text-amber-600" />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">Agente de IA</h3>
                            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">Responde 24/7, qualifica e move o lead sozinho.</p>
                          </div>
                        </div>

                        {/* Automações */}
                        <div className="flex items-start gap-6 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-8 h-8 text-amber-600" />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">Automações</h3>
                            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">Follow-up e mensagens disparados sem ninguém tocar.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></motion.section>
) :

        {/* Slide 12: DotSales SLA (Fundo Branco) */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFA] text-black" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col justify-center items-center   text-center overflow-hidden bg-[#FAFAFA]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col text-left z-20">
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase mb-0.5">Cérebro Comercial</span>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 uppercase tracking-widest flex items-center">
                        <span>dot</span><span className="text-amber-500">.Sales</span>
                      </h2>
                    </div>

                    <div className="w-full max-w-6xl px-8 relative z-10 flex flex-col items-start justify-center min-h-[60vh] mt-12 text-left">
                      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-4 max-w-5xl">
                        O que separa quem cresce: medir e cobrar tempo de resposta
                      </h1>
                      
                      <div className="flex gap-2 mb-10">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Left Card: SLA */}
                        <div className="flex flex-col bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                          <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mb-4 font-display">SLA: sua promessa de resposta, medida</h3>
                          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
                            É o tempo máximo que sua operação aceita levar para responder um lead. Sem ferramenta, é só discurso. Com dot.Sales, vira número.
                          </p>
                          <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-4 text-neutral-800 font-bold text-sm sm:text-base">
                              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                              Define a meta (ex.: responder em 5 min)
                            </li>
                            <li className="flex items-center gap-4 text-neutral-800 font-bold text-sm sm:text-base">
                              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                              O sistema mede cada atendimento
                            </li>
                            <li className="flex items-center gap-4 text-neutral-800 font-bold text-sm sm:text-base">
                              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                              Alerta antes de estourar o prazo
                            </li>
                            <li className="flex items-center gap-4 text-neutral-800 font-bold text-sm sm:text-base">
                              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                              Dashboard mostra conversão, ticket e ranking
                            </li>
                          </ul>
                        </div>

                        {/* Right Card: Chart */}
                        <div className="flex flex-col bg-zinc-950 border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600" />
                          <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-2 font-display ml-2">Por que isso é dinheiro</h3>
                          <p className="text-zinc-400 text-xs sm:text-sm mb-10 ml-2">Chance relativa de converter por tempo de resposta</p>
                          
                          <div className="flex items-end justify-around h-48 w-full border-b border-zinc-800 pb-2 px-4">
                            <div className="flex flex-col items-center gap-2 group">
                              <span className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">100</span>
                              <div className="w-16 sm:w-20 bg-amber-500 h-32 rounded-t-sm" />
                              <span className="text-zinc-400 text-xs sm:text-sm mt-2">até 5 min</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group">
                              <span className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">25</span>
                              <div className="w-16 sm:w-20 bg-amber-500/50 h-8 rounded-t-sm" />
                              <span className="text-zinc-400 text-xs sm:text-sm mt-2">10 min</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group">
                              <span className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">5</span>
                              <div className="w-16 sm:w-20 bg-amber-500/20 h-2 rounded-t-sm" />
                              <span className="text-zinc-400 text-xs sm:text-sm mt-2">30 min</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-neutral-400 text-xs sm:text-sm font-sans tracking-wide">
                        Fontes: HubSpot · InsideSales · Lead Response Management
                      </div>
                    </div>
                  </div></motion.section>

        {/* Slide 5: Daily Diária 5 Passos */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-start   py-6 text-left">
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 6 */}
                    <div className="w-full flex justify-between items-center mb-2 md:mb-4 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Daily Diária
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="w-full flex-grow flex flex-col items-center gap-6 md:gap-8 pt-4 md:pt-6 pb-16 px-4 overflow-y-auto no-scrollbar justify-start">
                      
                      {/* Top Badges */}
                      <div className="flex flex-col items-center gap-2 select-none flex-shrink-0">
                        <div className="relative overflow-hidden px-8 py-2.5 rounded-xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.03]">
                          <span className="font-montserrat text-[11px] font-black tracking-[0.35em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                            DAILY DIÁRIA
                          </span>
                        </div>
                        <span className="font-montserrat text-[10px] md:text-xs font-black text-amber-500/80 tracking-[0.4em] uppercase">
                          5 PASSOS
                        </span>
                      </div>

                      {/* Steps Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl">
                        {/* Column 1: Steps 1, 2, 3 */}
                        <div className="flex flex-col gap-4">
                          {[
                            {
                              num: 1,
                              time: "08h - 09h",
                              desc: "Quantidade de ligações realizadas"
                            },
                            {
                              num: 2,
                              time: "09h - 09h30",
                              desc: "Tempo em linha"
                            },
                            {
                              num: 3,
                              time: "09h30 - 11h30",
                              desc: "Número de leads do dia anterior"
                            }
                          ].map(step => (
                            <div key={step.num} className="flex items-center gap-5 p-5 md:p-6 rounded-xl bg-zinc-900/20 backdrop-blur-md border border-white/[0.05] border-t-white/10 hover:border-amber-500/30 hover:scale-[1.01] hover:bg-neutral-900/30 transition-all duration-300 group">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_12px_rgba(59,130,246,0.3)] text-white font-black flex items-center justify-center flex-shrink-0 text-base border border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                                {step.num}
                              </div>
                              <div>
                                <span className="text-xs font-bold text-amber-500/80 block uppercase tracking-wider">{step.time}</span>
                                <span className="text-[13px] md:text-sm font-bold text-zinc-200 uppercase tracking-wide group-hover:text-white transition-colors">{step.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Column 2: Steps 4, 5 */}
                        <div className="flex flex-col gap-4">
                          {[
                            {
                              num: 4,
                              time: "11h30 - 12h",
                              desc: "Evolução no funil de vendas"
                            },
                            {
                              num: 5,
                              time: "14h - 16h",
                              desc: "Meta de mês/dia (ações micro diárias para resultado)"
                            }
                          ].map(step => (
                            <div key={step.num} className="flex items-center gap-5 p-5 md:p-6 rounded-xl bg-zinc-900/20 backdrop-blur-md border border-white/[0.05] border-t-white/10 hover:border-amber-500/30 hover:scale-[1.01] hover:bg-neutral-900/30 transition-all duration-300 group">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_12px_rgba(59,130,246,0.3)] text-white font-black flex items-center justify-center flex-shrink-0 text-base border border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                                {step.num}
                              </div>
                              <div>
                                <span className="text-xs font-bold text-amber-500/80 block uppercase tracking-wider">{step.time}</span>
                                <span className="text-[13px] md:text-sm font-bold text-zinc-200 uppercase tracking-wide group-hover:text-white transition-colors">{step.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Panel (Meta Padrão SDR) */}
                      <div className="relative w-full max-w-5xl mt-6">
                        {/* Overlapping Pill badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-7 py-1.5 rounded-full bg-zinc-950 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.25),inset_0_1px_1px_rgba(255,255,255,0.1)] z-10 select-none">
                          <span className="font-montserrat text-[10px] md:text-[11px] font-black tracking-widest bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent">
                            META PADRÃO (SDR)
                          </span>
                        </div>
                        {/* Glassmorphic Metrics Card */}
                        <div className="w-full bg-gradient-to-b from-neutral-950/80 to-zinc-950/90 border border-white/[0.06] border-t-white/15 rounded-2xl py-8 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-around gap-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                          {/* Metric 1: Calls */}
                          <div className="flex items-center gap-5 hover:scale-[1.02] transition-transform duration-300 group/metric">
                            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover/metric:border-amber-400 group-hover/metric:text-amber-400 transition-colors">
                              <Phone className="w-7 h-7" />
                            </div>
                            <div>
                              <span className="text-2xl md:text-3xl font-black text-white tracking-wide block">60+ LIGAÇÕES</span>
                              <span className="text-xs font-bold text-fg-muted uppercase tracking-wider block mt-0.5">Por Dia</span>
                            </div>
                          </div>
                          
                          <div className="hidden sm:block h-12 w-px bg-white/[0.08]" />

                          {/* Metric 2: CRM Conversations */}
                          <div className="flex items-center gap-5 hover:scale-[1.02] transition-transform duration-300 group/metric">
                            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover/metric:border-amber-400 group-hover/metric:text-amber-400 transition-colors">
                              <MessageSquare className="w-7 h-7" />
                            </div>
                            <div>
                              <span className="text-2xl md:text-3xl font-black text-white tracking-wide block">150 CONVERSAS</span>
                              <span className="text-xs font-bold text-fg-muted uppercase tracking-wider block mt-0.5">No CRM</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div></motion.section>

        {/* Slide 6: Rituais */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-start   py-6 text-left">
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 7 */}
                    <div className="w-full flex justify-between items-center mb-2 md:mb-4 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Rituais
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="w-full flex-grow flex flex-col items-center gap-6 md:gap-8 pt-4 md:pt-6 pb-16 px-4 overflow-y-auto no-scrollbar justify-start">
                      
                      {/* Top Badges */}
                      <div className="flex flex-col items-center gap-2 select-none flex-shrink-0 mb-2">
                        <div className="relative overflow-hidden px-8 py-2.5 rounded-xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.03]">
                          <span className="font-montserrat text-[11px] font-black tracking-[0.35em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                            RITUAIS
                          </span>
                        </div>
                      </div>

                      {/* 5-Column Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-7xl">
                        {[
                          { name: "BOLA DE OURO", img: "https://fazendoacontecer.site/wp-content/uploads/2026/06/fdc8b814-26e0-4f07-acf4-85b923f34dc8.png" },
                          { name: "NOVA RÉGUA", img: "https://fazendoacontecer.site/wp-content/uploads/2026/06/55105218-00dd-46d1-b526-768734e5abc5.png" },
                          { name: "BANDEIRAS", img: "https://fazendoacontecer.site/wp-content/uploads/2026/06/c505f2f4-914f-4943-947f-acc2c039bf82.png" },
                          { name: "SINO", img: "https://fazendoacontecer.site/wp-content/uploads/2026/06/b02d0f9e-bf46-4920-9393-55c00fdd36e1.png" },
                          { name: "GRITO DE GUERRA", img: "https://fazendoacontecer.site/wp-content/uploads/2026/06/8c26d202-37f6-4167-94c5-5d708c58d76c.png" }
                        ].map(ritual => (
                          <div key={ritual.name} className="flex flex-col items-center group w-full">
                            {/* Card Container */}
                            <div className="relative w-full aspect-[3/4.2] rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950/40 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.04] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col justify-end">
                              
                              {/* Background Image */}
                              <img 
                                src={ritual.img} 
                                alt={ritual.name} 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 pointer-events-none opacity-85 group-hover:opacity-100" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                              
                              {/* Golden Label Overlapping Banner */}
                              <div className="relative z-10 mx-3.5 mb-5 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black text-center font-black uppercase text-xs tracking-widest rounded-lg shadow-[0_4px_15px_rgba(245,158,11,0.3)] select-none group-hover:from-amber-400 group-hover:to-yellow-400 transition-colors duration-300">
                                {ritual.name}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div></motion.section>

        {/* Slide 7: Dados */}
        <motion.section  className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}><div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col relative z-10 flex flex-col items-center justify-start   py-6 text-left">
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 8 */}
                    <div className="w-full flex justify-between items-center mb-2 md:mb-4 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Dados
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="w-full flex-grow flex flex-col items-center gap-4 pt-2 pb-16 px-4 overflow-y-auto no-scrollbar justify-start">

                      {/* Mindmap and Columns */}
                      <div className="w-full flex-grow flex items-center justify-center relative pb-16">
                        
                        {/* Versão Mobile (Vertical Simplificada) */}
                        <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
                          {/* Coluna 1: OKRS */}
                          <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] rounded-2xl p-5 shadow-xl backdrop-blur-md">
                            <div className="border border-amber-500/30 rounded-xl py-2 px-3 text-center mb-4 bg-zinc-900/40">
                              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Definição de OKR's</h3>
                            </div>
                            
                            {/* Table in Mobile */}
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse text-[10px] text-zinc-300">
                                <thead>
                                  <tr className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 text-white font-bold uppercase tracking-wider">
                                    <th className="p-2 border border-white/[0.08]">OKRS</th>
                                    <th className="p-2 border border-white/[0.08]">RESULTADO</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { k: "META MENSAL", v: "R$ 1.000.000" },
                                    { k: "META SEMANAL", v: "R$ 250.000" },
                                    { k: "REAL S1 ( D1 - 9 )", v: "R$ 284.452" },
                                    { k: "REAL S2 (D10-16)", v: "R$ 280.045" },
                                    { k: "REAL S3 (17 - 23)", v: "R$ 241.845" },
                                    { k: "REAL S4 (24-30)", v: "R$ 211.826" }
                                  ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                                      <td className="p-2 border border-white/[0.05] font-bold">{row.k}</td>
                                      <td className="p-2 border border-white/[0.05] font-mono text-right">{row.v}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="mt-4 text-center">
                              <a href="https://docs.google.com/spreadsheets/d/1ZrmUsdAaq4Oee_0rjEvXvugrPA1tPVOL/edit?gid=233443817#gid=233443817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wider">
                                Okr Modelo <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>

                          {/* Coluna 2: Funil de Vendas */}
                          <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] rounded-2xl p-5 shadow-xl backdrop-blur-md">
                            <div className="border border-amber-500/30 rounded-xl py-2 px-3 text-center mb-4 bg-zinc-900/40">
                              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Funil de Vendas</h3>
                            </div>
                            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-white p-2">
                              <img src="https://fazendoacontecer.site/wp-content/uploads/2026/06/Captura-de-tela-2026-06-25-024122.png" alt="Funil de Vendas" className="w-full h-auto object-contain rounded-lg" />
                            </div>
                            <div className="mt-4 text-center">
                              <a href="https://goals.dottech.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wider">
                                Goals <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>

                          {/* Coluna 3: Métricas */}
                          <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] rounded-2xl p-5 shadow-xl backdrop-blur-md">
                            <div className="border border-amber-500/30 rounded-xl py-2 px-3 text-center mb-4 bg-zinc-900/40">
                              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Métricas</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                              {[
                                "OKR",
                                "CAC",
                                "ROAS",
                                "ROI",
                                "VOLUME MÉDIO DE OPORTUNIDADE",
                                "TAXA DE CONVERSÃO",
                                "GAP DA META",
                                "PROJEÇÃO DE RESULTADO",
                                "DEFINIÇÃO DE METAS"
                              ].map(item => (
                                <div key={item} className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-white/[0.01] border border-white/[0.02] border-l-2 border-l-amber-500/40">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
                                  <span className="font-sans text-[10px] tracking-wide text-zinc-300 font-bold uppercase">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Versão Desktop Unificada por Coordenadas Internas ao SVG (ForeignObject) */}
                        <div className="hidden md:block w-full max-w-5xl mx-auto aspect-[10/4] h-auto mt-4">
                          <svg className="w-full h-full" viewBox="0 0 1000 430" fill="none">
                            <style>{`
                              @keyframes flow-pulse-dados {
                                to {
                                  stroke-dashoffset: -20;
                                }
                              }
                              .flowing-fiber-dados {
                                stroke-dasharray: 6 10;
                                animation: flow-pulse-dados 1.2s linear infinite;
                                filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.8));
                              }
                            `}</style>
                            
                            <defs>
                              <linearGradient id="amber-line-dados" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                                <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
                              </linearGradient>
                            </defs>

                            {/* Linhas Conectivas com Curvas Suaves - Neon Glow */}
                            {/* Linha Central (Funil de Vendas) */}
                            <path d="M 500,55 L 500,105" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                            <path d="M 500,55 L 500,105" stroke="url(#amber-line-dados)" strokeWidth="1.5" className="flowing-fiber-dados" fill="none" />

                            {/* Linha Esquerda (OKR's) */}
                            <path d="M 500,55 L 500,75 Q 500,90 485,90 L 195,90 Q 180,90 180,98 L 180,106" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                            <path d="M 500,55 L 500,75 Q 500,90 485,90 L 195,90 Q 180,90 180,98 L 180,106" stroke="url(#amber-line-dados)" strokeWidth="1.5" className="flowing-fiber-dados" fill="none" />

                            {/* Linha Direita (Métricas) */}
                            <path d="M 500,55 L 500,75 Q 500,90 515,90 L 805,90 Q 820,90 820,98 L 820,106" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                            <path d="M 500,55 L 500,75 Q 500,90 515,90 L 805,90 Q 820,90 820,98 L 820,106" stroke="url(#amber-line-dados)" strokeWidth="1.5" className="flowing-fiber-dados" fill="none" />

                            {/* Bloco Raiz "DADOS" no topo centralizado */}
                            <foreignObject x="380" y="5" width="240" height="65">
                              <div className="w-full h-full flex items-center justify-center p-2 select-none">
                                <div className="relative overflow-hidden w-[180px] h-[42px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.03] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                  <span className="font-montserrat text-[11px] font-black tracking-[0.35em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                    DADOS
                                  </span>
                                </div>
                              </div>
                            </foreignObject>

                            {/* Coluna 1: DEFINIÇÃO DE OKR's */}
                            {/* Título */}
                            <foreignObject x="50" y="98" width="260" height="50">
                              <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                                <div className="w-[242px] h-[38px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                  <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                    DEFINIÇÃO DE OKR'S
                                  </span>
                                </div>
                              </div>
                            </foreignObject>
                            {/* Conteúdo (Tabela de OKRs) */}
                            <foreignObject x="50" y="142" width="260" height="280">
                              <div className="w-full h-full flex flex-col items-center justify-start p-2">
                                <div className="w-[242px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/70 to-zinc-950/90 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.01] transition-all duration-300">
                                  <table className="w-full text-left border-collapse text-[8.5px] text-zinc-300 rounded-lg overflow-hidden">
                                    <thead>
                                      <tr className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white font-extrabold uppercase tracking-wider text-[8px] text-center">
                                        <th className="p-1.5 border border-white/[0.08]">OKRS</th>
                                        <th className="p-1.5 border border-white/[0.08]">RESULTADO</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {[
                                        { k: "META MENSAL", v: "R$ 1.000.000" },
                                        { k: "META SEMANAL", v: "R$ 250.000" },
                                        { k: "REAL S1 ( D1 - 9 )", v: "R$ 284.452" },
                                        { k: "REAL S2 (D10-16)", v: "R$ 280.045" },
                                        { k: "REAL S3 (17 - 23)", v: "R$ 241.845" },
                                        { k: "REAL S4 (24-30)", v: "R$ 211.826" }
                                      ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? "bg-white/[0.02] hover:bg-white/[0.04] transition-colors" : "bg-transparent hover:bg-white/[0.02] transition-colors"}>
                                          <td className="p-1.5 border border-white/[0.05] font-bold uppercase tracking-wider">{row.k}</td>
                                          <td className="p-1.5 border border-white/[0.05] font-mono font-extrabold text-right text-yellow-500/90">{row.v}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  
                                  <div className="mt-3 text-center border-t border-white/[0.06] pt-2">
                                    <a href="https://docs.google.com/spreadsheets/d/1ZrmUsdAaq4Oee_0rjEvXvugrPA1tPVOL/edit?gid=233443817#gid=233443817" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest">
                                      Okr Modelo <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </foreignObject>

                            {/* Coluna 2: FUNIL DE VENDAS */}
                            {/* Título */}
                            <foreignObject x="370" y="98" width="260" height="50">
                              <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                                <div className="w-[242px] h-[38px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                  <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                    FUNIL DE VENDAS
                                  </span>
                                </div>
                              </div>
                            </foreignObject>
                            {/* Conteúdo (Screenshot do Funil) */}
                            <foreignObject x="370" y="142" width="260" height="280">
                              <div className="w-full h-full flex flex-col items-center justify-start p-2">
                                <div className="w-[242px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/70 to-zinc-950/90 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.01] transition-all duration-300">
                                  
                                  {/* Funnel image mockup */}
                                  <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-white p-1 relative aspect-[4/3] group/img">
                                    <img src="https://fazendoacontecer.site/wp-content/uploads/2026/06/Captura-de-tela-2026-06-25-024122.png" alt="Funil de Vendas" className="w-full h-full object-contain rounded-lg opacity-90 group-hover/img:opacity-100 group-hover/img:scale-102 transition-all duration-500" />
                                  </div>
                                  
                                  <div className="mt-3 text-center border-t border-white/[0.06] pt-2">
                                    <a href="https://goals.dottech.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest">
                                      Goals <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </foreignObject>

                            {/* Coluna 3: MÉTRICAS */}
                            {/* Título */}
                            <foreignObject x="690" y="98" width="260" height="50">
                              <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                                <div className="w-[242px] h-[38px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                  <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                    MÉTRICAS
                                  </span>
                                </div>
                              </div>
                            </foreignObject>
                            {/* Conteúdo (Lista de Métricas) */}
                            <foreignObject x="690" y="142" width="260" height="280">
                              <div className="w-full h-full flex flex-col items-center justify-start p-2">
                                <div className="w-[242px] h-[225px] overflow-y-auto no-scrollbar flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/70 to-zinc-950/90 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.01] transition-all duration-300">
                                  <div className="flex flex-col gap-1 w-full">
                                    {[
                                      "OKR",
                                      "CAC",
                                      "ROAS",
                                      "ROI",
                                      "VOLUME MÉDIO DE OPORTUNIDADE",
                                      "TAXA DE CONVERSÃO",
                                      "GAP DA META",
                                      "PROJEÇÃO DE RESULTADO",
                                      "DEFINIÇÃO DE METAS"
                                    ].map((item, idx) => (
                                      <div key={item} className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02] border-l-2 border-l-amber-500/30 hover:border-l-amber-500 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent hover:translate-x-1 transition-all duration-300 group/item">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_6px_rgba(245,158,11,0.8)] flex-shrink-0" />
                                        <span className="font-sans text-[8.5px] tracking-wide text-zinc-300 font-extrabold uppercase leading-none group-hover/item:text-white transition-colors duration-300">{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </foreignObject>

                          </svg>
                        </div>

                      </div>

                    </div>
                  </div></motion.section>


        
      </div>
    </div>
  );
}
