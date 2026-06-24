import { useState, useEffect, RefObject } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { motion, AnimatePresence, useTransform, type MotionValue } from "motion/react";
import crmFunil from "@/assets/crm-funil.png";

export function MethodologySection({
  containerRef,
  scrollYProgress,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}) {
  const c = presentationContent.methodologyGvd;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // 0: Introdução GVD, 1: Fluxograma Geração de Demanda, 2: Mapa Mental Vendas

  // Interpolações de cor de texto da seção baseadas no progresso compartilhado
  const color = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  
  // Interpolações para elementos secundários e kicker
  const colorMuted = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.6)", "rgba(0, 0, 0, 0.6)"]);
  const bgLine = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"]);

  // Interpolações do botão (inverte as cores junto com o fundo)
  const btnBg = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  const btnColor = useTransform(scrollYProgress, [0.3, 0.95], ["#000000", "#ffffff"]);

  // Reinicia o slide ativo quando o modal fecha/abre
  useEffect(() => {
    if (!isModalOpen) {
      setActiveSlide(0);
    }
  }, [isModalOpen]);

  // Listener para navegação com as teclas de seta e fechamento com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight" && activeSlide < 2) {
        setActiveSlide(prev => prev + 1);
      } else if (e.key === "ArrowLeft" && activeSlide > 0) {
        setActiveSlide(prev => prev - 1);
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, activeSlide]);

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

      {/* Modal / Popup Exclusivo da Metodologia GVD (Mini-Apresentação) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-50 flex flex-col justify-center items-center select-none overflow-hidden"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full h-full flex flex-col justify-center items-center p-6 sm:p-12 md:p-24"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão de Fechar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all duration-300 cursor-pointer z-30 border-0"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Botões de Navegação de Slide Laterais */}
              {activeSlide > 0 && (
                <button
                  onClick={() => setActiveSlide(prev => prev - 1)}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all duration-300 cursor-pointer border-0 z-40"
                  title="Slide Anterior (Seta Esquerda)"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {activeSlide < 2 && (
                <button
                  onClick={() => setActiveSlide(prev => prev + 1)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all duration-300 cursor-pointer border-0 z-40"
                  title="Próximo Slide (Seta Direita)"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}

              {/* Linhas / Círculos de Fundo Concêntricos (Comum a ambos os slides) */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <div className="absolute w-[250px] h-[250px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[500px] h-[500px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[750px] h-[750px] border border-white/[0.02] rounded-full" />
                <div className="absolute w-[1000px] h-[1000px] border border-white/[0.015] rounded-full" />
                <div className="absolute w-[1250px] h-[1250px] border border-white/[0.01] rounded-full" />
                <div className="absolute w-[1500px] h-[1500px] border border-white/[0.005] rounded-full" />
                <div className="absolute w-[1800px] h-[1800px] border border-white/[0.003] rounded-full" />
                <div className="absolute w-[2100px] h-[2100px] border border-white/[0.002] rounded-full" />
                <div className="absolute w-[2400px] h-[2400px] border border-white/[0.001] rounded-full" />
                {/* Degradê radial escuro adicional */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,0.9)_85%)]" />
              </div>

              {/* RENDERIZAÇÃO DOS SLIDES COM TRANSIÇÃO */}
              <AnimatePresence mode="wait">
                {activeSlide === 0 ? (
                  /* Slide 1: Introdução GVD Clássica */
                  <motion.div
                    key="slide-intro"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-between h-full w-full py-8 md:py-16 text-center"
                  >
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
                  </motion.div>
                ) : activeSlide === 1 ? (
                  /* Slide 2: Mapa Mental Geração de Demanda (Pilar G) */
                  <motion.div
                    key="slide-g-pillar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
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
                              <p className="text-[9px] text-yellow-500 font-semibold mt-0.5">Stories Diário + 5 Postagens por Semana</p>
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
                      <div className="hidden md:block w-full max-w-[98vw] h-[86vh]">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                          
                          {/* Definições de Marcadores e Gradientes */}
                          <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
                            </marker>
                          </defs>

                          {/* ---------------- LINHAS DE CONEXÃO ---------------- */}
                          {/* Curvas da Raiz para Posicionamento e Demanda */}
                          <path d="M 190,200 C 235,200 240,100 270,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 270,100 L 280,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" markerEnd="url(#arrow)" />
                          
                          <path d="M 190,200 C 235,200 240,300 270,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 270,300 L 280,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" markerEnd="url(#arrow)" />

                          {/* Linha Posicionamento -> Instagram */}
                          <path d="M 435,100 L 480,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* Curvas Instagram -> Reels, Depoimento, Antes e Depois */}
                          <path d="M 620,100 C 660,100 665,43 705,43" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                          <path d="M 620,100 L 705,100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                          <path d="M 620,100 C 660,100 665,157 705,157" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

                          {/* Linha Demanda -> Tráfego Pago */}
                          <path d="M 435,300 L 480,300" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* Curvas Tráfego Pago -> Meta Ads e Google Ads */}
                          <path d="M 600,300 C 635,300 645,250 680,250" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                          <path d="M 600,300 C 635,300 645,350 680,350" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />

                          {/* ---------------- ELEMENTOS HTML INTERNOS (ForeignObjects) ---------------- */}
                          
                          {/* Coluna 1: Bloco Raiz */}
                          <foreignObject x="10" y="165" width="180" height="70">
                            <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_20px_rgba(245,158,11,0.25)] border border-amber-400/40 p-3 text-center">
                              <span className="font-montserrat text-xs sm:text-sm font-bold text-white leading-tight uppercase">
                                Geração de Demanda
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 2: Sub-raízes */}
                          {/* Bloco Posicionamento */}
                          <foreignObject x="285" y="78" width="150" height="44">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-3 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase">
                                Posicionamento
                              </span>
                            </div>
                          </foreignObject>

                          {/* Bloco Demanda */}
                          <foreignObject x="285" y="278" width="150" height="44">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-3 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase">
                                Demanda
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 3: Canais / Mecanismos */}
                          {/* Bloco Instagram (Alinhado com Posicionamento no Y) */}
                          <foreignObject x="480" y="25" width="140" height="150">
                            <div className="w-full h-full flex flex-col items-center text-center">
                              {/* Logo Instagram */}
                              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f9ce71] via-[#ee305a] to-[#6228d7] flex items-center justify-center shadow-lg mb-1.5">
                                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                              </div>
                              <span className="font-sans text-[11px] md:text-xs font-bold text-white">Instagram</span>
                              <span className="font-sans text-[8px] md:text-[9px] font-semibold text-yellow-500 mt-1 leading-snug">
                                Stories Diário<br/>+ 5 Postagens<br/>por Semana
                              </span>
                            </div>
                          </foreignObject>

                          {/* Bloco Tráfego Pago (Alinhado com Demanda no Y) */}
                          <foreignObject x="480" y="280" width="120" height="40">
                            <div className="w-full h-full flex items-center justify-center text-center">
                              <span className="font-display text-xs md:text-sm font-bold text-white tracking-wide uppercase">
                                Tráfego Pago
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 4: Resultados / Plataformas */}
                          {/* Ramificação Instagram */}
                          <foreignObject x="705" y="25" width="110" height="36">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Reels</span>
                            </div>
                          </foreignObject>
                          <foreignObject x="705" y="82" width="110" height="36">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Depoimento</span>
                            </div>
                          </foreignObject>
                          <foreignObject x="705" y="139" width="110" height="36">
                            <div className="w-full h-full flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors duration-300 text-center">
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/90">Antes e Depois</span>
                            </div>
                          </foreignObject>

                          {/* Ramificação Tráfego Pago */}
                          {/* Meta Ads */}
                          <foreignObject x="680" y="230" width="110" height="40">
                            <div className="w-full h-full flex items-center justify-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] px-2 transition-colors duration-300">
                              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#0064e0]" fill="currentColor">
                                <path d="M17.472 6c-1.39 0-2.673.684-3.528 1.83C13.09 6.683 11.808 6 10.418 6C8.016 6 6 8.016 6 10.418c0 1.347.608 2.553 1.572 3.359C6.444 14.542 5 16.275 5 18c0 .553.447 1 1 1s1-.447 1-1c0-1.748 1.942-3.582 4.418-3.582c.983 0 1.921-.295 2.672-.835c.751.54 1.69.835 2.672.835c2.476 0 4.418 1.834 4.418 3.582c0 .553.448 1 1 1s1-.447 1-1c0-1.725-1.444-3.458-2.572-4.223A4.412 4.412 0 0 0 20.144 10.42C20.144 8.016 18.128 6 15.726 6h1.746zm-7.054 6.836c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418zm5.308 0c-1.332 0-2.418-1.086-2.418-2.418s1.086-2.418 2.418-2.418s2.418 1.086 2.418 2.418s-1.086 2.418-2.418 2.418z"/>
                              </svg>
                              <span className="font-sans text-[10px] md:text-xs font-semibold text-white/95">Meta Ads</span>
                            </div>
                          </foreignObject>

                          {/* Google Ads */}
                          <foreignObject x="680" y="330" width="110" height="40">
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
                  </motion.div>
                ) : (
                  /* Slide 3: Mapa Mental Vendas (Pilar V) */
                  <motion.div
                    key="slide-v-pillar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
                    {/* Cabeçalho do Slide 3 */}
                    <div className="w-full flex justify-between items-center mb-8 md:mb-12 px-4">
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

                    {/* Vendas Content Box */}
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      
                      {/* Versão Mobile (Vertical Simplificada) */}
                      <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
                        {/* Bloco Raiz "Vendas" */}
                        <div className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl p-4 text-center border border-amber-400/40 shadow-md">
                          <span className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase tracking-wide">Vendas</span>
                        </div>

                        {/* Coluna 1: Estruturação do CRM */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-4">
                          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Estruturação do CRM</h3>
                          <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-video bg-black/40">
                            <img src={crmFunil} alt="CRM Preview" className="w-full h-full object-cover" />
                          </div>
                          <div className="text-center">
                            <a 
                              href="https://sales.dottech.ai/dashboard/pipeline/funil?id=71479906-111c-462c-af1d-69e76009057b"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:text-blue-300 font-bold underline transition-colors duration-200"
                            >
                              CRM na Prática
                            </a>
                          </div>
                        </div>

                        {/* Coluna 2: Playbook de Vendas */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-3">
                          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Playbook de Vendas</h3>
                          <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside">
                            <li>MÉTODOS DE VENDAS</li>
                            <li>SCRIPTS DE VENDAS</li>
                            <li>FLUXO DE CADÊNCIA</li>
                            <li>GATILHOS MENTAIS</li>
                            <li>NÍVEIS DE CONSCIÊNCIA</li>
                          </ul>
                        </div>

                        {/* Coluna 3: Rotinas */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-3">
                          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Rotinas</h3>
                          <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside">
                            <li>DAILY</li>
                            <li>WEEKLE</li>
                            <li>MONTHLY</li>
                            <li>COACHING TÉCNICO</li>
                            <li>ONE A ONE</li>
                            <li>ROLE PLAY</li>
                          </ul>
                        </div>

                        {/* Coluna 4: Rituais */}
                        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 space-y-3">
                          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">Rituais</h3>
                          <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside">
                            <li>BOLA DE OURO</li>
                            <li>NOVA RÉGUA</li>
                            <li>BANDEIRAS</li>
                            <li>SINO</li>
                            <li>GRITO DE GUERRA</li>
                          </ul>
                        </div>
                      </div>

                      {/* Versão Desktop Unificada por Coordenadas Internas ao SVG (ForeignObject) */}
                      <div className="hidden md:block w-full max-w-[98vw] h-[86vh]">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                          
                          {/* Definições de Marcadores e Gradientes */}
                          <defs>
                            <marker id="arrow-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
                            </marker>
                          </defs>

                          {/* Linhas Conectivas com Curvas Suaves (Saída de VENDAS para as 4 Colunas) */}
                          <path d="M 500,80 L 500,95 Q 500,110 485,110 L 147.5,110 Q 132.5,110 132.5,125 L 132.5,130" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                          <path d="M 500,80 L 500,95 Q 500,110 485,110 L 392.5,110 Q 377.5,110 377.5,125 L 377.5,130" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                          <path d="M 500,80 L 500,95 Q 500,110 515,110 L 607.5,110 Q 622.5,110 622.5,125 L 622.5,130" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                          <path d="M 500,80 L 500,95 Q 500,110 515,110 L 852.5,110 Q 867.5,110 867.5,125 L 867.5,130" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />

                          {/* Bloco Raiz "VENDAS" no topo centralizado */}
                          <foreignObject x="380" y="30" width="240" height="50">
                            <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_25px_rgba(245,158,11,0.3)] border border-amber-400/40 text-center">
                              <span className="font-montserrat text-base font-extrabold text-white leading-tight uppercase tracking-wider">
                                VENDAS
                              </span>
                            </div>
                          </foreignObject>

                          {/* Coluna 1: Estruturação do CRM */}
                          {/* Título */}
                          <foreignObject x="25" y="130" width="215" height="50">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-2 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase leading-tight">
                                Estruturação<br/>do CRM
                              </span>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="25" y="190" width="215" height="195">
                            <div className="w-full h-full flex flex-col justify-between items-center rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center shadow-lg backdrop-blur-sm">
                              <div className="w-full flex-grow relative rounded-lg overflow-hidden border border-white/10 bg-black/40 aspect-[16/10]">
                                <img src={crmFunil} alt="CRM Preview" className="w-full h-full object-cover" />
                              </div>
                              <div className="mt-2 pt-2 border-t border-white/[0.05] w-full">
                                <a 
                                  href="https://sales.dottech.ai/dashboard/pipeline/funil?id=71479906-111c-462c-af1d-69e76009057b"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-sans text-xs text-blue-400 hover:text-blue-300 font-extrabold underline transition-colors duration-200 uppercase tracking-wider hover:scale-105 inline-block"
                                >
                                  CRM na Prática
                                </a>
                              </div>
                            </div>
                          </foreignObject>

                          {/* Coluna 2: Playbook de Vendas */}
                          {/* Título */}
                          <foreignObject x="270" y="130" width="215" height="50">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-2 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase leading-tight">
                                Playbook<br/>de Vendas
                              </span>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="270" y="190" width="215" height="195">
                            <div className="w-full h-full flex flex-col justify-start rounded-xl bg-white/[0.92] border border-white p-4 shadow-xl text-left">
                              <ul className="space-y-2 text-[10px] md:text-[11px] font-bold text-zinc-800 leading-tight">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>MÉTODOS DE VENDAS</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>SCRIPTS DE VENDAS</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>FLUXO DE CADÊNCIA</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>GATILHOS MENTAIS</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>NÍVEIS DE CONSCIÊNCIA</span>
                                </li>
                              </ul>
                            </div>
                          </foreignObject>

                          {/* Coluna 3: Rotinas */}
                          {/* Título */}
                          <foreignObject x="515" y="130" width="215" height="50">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-2 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase leading-tight">
                                Rotinas
                              </span>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="515" y="190" width="215" height="195">
                            <div className="w-full h-full flex flex-col justify-start rounded-xl bg-white/[0.92] border border-white p-4 shadow-xl text-left">
                              <ul className="space-y-2 text-[10px] md:text-[11px] font-bold text-zinc-800 leading-tight">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>DAILY</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>WEEKLE</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>MONTHLY</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>COACHING TÉCNICO</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>ONE A ONE</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>ROLE PLAY</span>
                                </li>
                              </ul>
                            </div>
                          </foreignObject>

                          {/* Coluna 4: Rituais */}
                          {/* Título */}
                          <foreignObject x="760" y="130" width="215" height="50">
                            <div className="w-full h-full flex items-center justify-center rounded-lg bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] text-center px-2 hover:border-amber-400 transition-colors duration-300">
                              <span className="font-display text-[10px] md:text-xs font-bold text-white tracking-widest uppercase leading-tight">
                                Rituais
                              </span>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="760" y="190" width="215" height="195">
                            <div className="w-full h-full flex flex-col justify-start rounded-xl bg-white/[0.92] border border-white p-4 shadow-xl text-left">
                              <ul className="space-y-2 text-[10px] md:text-[11px] font-bold text-zinc-800 leading-tight">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>BOLA DE OURO</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>NOVA RÉGUA</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>BANDEIRAS</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>SINO</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-black">•</span>
                                  <span>GRITO DE GUERRA</span>
                                </li>
                              </ul>
                            </div>
                          </foreignObject>

                        </svg>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
