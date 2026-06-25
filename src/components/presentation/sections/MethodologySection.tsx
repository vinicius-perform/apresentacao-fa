import { useState, useEffect, RefObject } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Phone, MessageSquare, Eye } from "lucide-react";
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
  const [activeSlide, setActiveSlide] = useState(0); // 0: Introdução GVD, 1: Geração de Demanda, 2: DotSales CRM, 3: Vendas, 4: Rotinas, 5: Daily (5 Passos), 6: Rituais, 7: Dados, 8: Depoimento, 9: Valor x Preço, 10: Investimento, 11: Desconto, 12: Transição Protagonista, 13: Valor Protagonista

  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos (300 segundos)
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  useEffect(() => {
    if (activeSlide !== 11) return;
    
    // Reinicia o timer ao entrar no slide de desconto
    setTimeLeft(300);
    
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
  }, [activeSlide]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };


  // Interpolações de cor de texto da seção baseadas no progresso compartilhado
  const color = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  
  // Interpolações para elementos secundários e kicker
  const colorMuted = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.6)", "rgba(0, 0, 0, 0.6)"]);
  const bgLine = useTransform(scrollYProgress, [0.3, 0.95], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"]);

  // Interpolações do botão (inverte as cores junto com o fundo)
  const btnBg = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);
  const btnColor = useTransform(scrollYProgress, [0.3, 0.95], ["#000000", "#ffffff"]);

  // Reinicia o slide ativo e estados relacionados quando o modal fecha/abre
  useEffect(() => {
    if (!isModalOpen) {
      setActiveSlide(0);
      setShowTotalPrice(false);
    }
  }, [isModalOpen]);

  // Reinicia a exibição do preço ao mudar de slide
  useEffect(() => {
    if (activeSlide !== 10) {
      setShowTotalPrice(false);
    }
  }, [activeSlide]);

  // Listener para navegação com as teclas de seta e fechamento com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight" && activeSlide < 13) {
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

              {activeSlide < 13 && (
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
                                Stories Diários<br/>+ 3 Postagens<br/>por Semana
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
                ) : activeSlide === 2 ? (
                  /* Slide 3: Apresentação da Ferramenta DotSales CRM */
                  <motion.div
                    key="slide-dotsales"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
                    {/* Cabeçalho do Slide 3 */}
                    <div className="w-full flex justify-between items-center mb-8 md:mb-10 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Cérebro Comercial</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          DotSales CRM
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        DotSales
                      </span>
                    </div>

                    {/* DotSales Content Box */}
                    <div className="w-full flex-grow flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 overflow-y-auto no-scrollbar pb-16">
                      
                      {/* Left Side: Mockup & Action */}
                      <div className="w-full md:w-[48%] flex flex-col items-center text-center">
                        {/* Browser mockup */}
                        <div className="w-full rounded-xl bg-neutral-900 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                          {/* Browser Top Bar */}
                          <div className="flex items-center gap-1.5 px-4 py-3 bg-neutral-950/80 border-b border-white/[0.04] w-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <div className="h-4 w-40 rounded bg-white/[0.03] border border-white/[0.05] mx-auto flex items-center justify-center">
                              <span className="text-[7px] text-zinc-500 font-mono tracking-wide">sales.dottech.ai/funil</span>
                            </div>
                          </div>
                          {/* Image */}
                          <div className="relative aspect-[16/10] bg-black/40 overflow-hidden group">
                            <img src={crmFunil} alt="DotSales Pipeline" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                          </div>
                        </div>

                        {/* Action button */}
                        <a 
                          href="https://sales.dottech.ai/dashboard/pipeline/funil?id=71479906-111c-462c-af1d-69e76009057b"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-extrabold rounded-full transition-all duration-300 uppercase tracking-wider text-xs md:text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] mt-6 cursor-pointer border-0"
                        >
                          <span>Acessar DotSales na Prática</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Right Side: Features Grid */}
                      <div className="w-full md:w-[52%] grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Pipeline Inteligente",
                            desc: "Mapeamento visual de cada estágio da negociação para tomada de decisão ágil e gestão de gargalos no funil.",
                            idx: "01"
                          },
                          {
                            title: "Cadência Automática",
                            desc: "Régua de relacionamento automatizada que orienta o time comercial na rotina diária de contatos.",
                            idx: "02"
                          },
                          {
                            title: "Métricas de Performance",
                            desc: "Indicadores precisos de conversão por vendedor, volume sob gestão, CAC e tempos de resposta.",
                            idx: "03"
                          },
                          {
                            title: "Histórico Centralizado",
                            desc: "Inteligência de dados através da gravação de históricos completos das jornadas e interações dos leads.",
                            idx: "04"
                          }
                        ].map(feat => (
                          <div key={feat.idx} className="relative p-5 rounded-xl border border-white/[0.04] bg-neutral-950/60 backdrop-blur-sm hover:border-amber-500/20 hover:bg-neutral-950/80 transition-all duration-300 group">
                            {/* Tech index */}
                            <span className="font-mono text-[9px] text-amber-500/70 group-hover:text-amber-500 transition-colors tracking-widest block mb-2">[ {feat.idx} ]</span>
                            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider group-hover:text-amber-500 transition-colors">{feat.title}</h4>
                            <p className="text-xs text-fg-muted/70 group-hover:text-zinc-300 transition-colors mt-2 leading-relaxed">{feat.desc}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                ) : activeSlide === 3 ? (
                  /* Slide 4: Mapa Mental Vendas (Pilar V) - 2 Colunas: Playbook, Rotinas */
                  <motion.div
                    key="slide-v-pillar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 4 */}
                    <div className="w-full flex justify-between items-center mb-2 md:mb-4 px-4 flex-shrink-0">
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
                    <div className="w-full flex-grow flex items-center justify-center relative pb-16">
                      
                      {/* Versão Mobile (Vertical Simplificada) */}
                      <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
                        {/* Bloco Raiz "Vendas" */}
                        <div className="w-full bg-zinc-950/90 border border-amber-500/40 rounded-2xl py-3.5 text-center shadow-lg shadow-amber-500/5">
                          <span className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase tracking-[0.2em]">Vendas</span>
                        </div>

                        {/* Coluna 1: Playbook de Vendas */}
                        <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] border-t-white/20 rounded-2xl p-5 shadow-xl backdrop-blur-md">
                          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-xl py-2.5 px-4 text-center mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                            <h3 className="text-xs font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent uppercase tracking-widest">Playbook de Vendas</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 text-xs">
                            {[
                              "MÉTODOS DE VENDAS",
                              "SCRIPTS DE VENDAS",
                              "FLUXO DE CADÊNCIA",
                              "GATILHOS MENTAIS",
                              "NÍVEIS DE CONSCIÊNCIA"
                            ].map(item => (
                              <div key={item} className="flex items-center gap-2.5 py-2 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 active:border-l-amber-500 transition-all">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                <span className="font-sans text-[10px] tracking-wide text-zinc-300 font-bold uppercase">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coluna 2: Rotinas */}
                        <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] border-t-white/20 rounded-2xl p-5 shadow-xl backdrop-blur-md">
                          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-xl py-2.5 px-4 text-center mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                            <h3 className="text-xs font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent uppercase tracking-widest">Rotinas</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 text-xs">
                            {[
                              "DAILY",
                              "WEEKLY",
                              "MONTHLY",
                              "COACHING TÉCNICO",
                              "ONE A ONE",
                              "ROLE PLAY"
                            ].map(item => (
                              <div key={item} className="flex items-center gap-2.5 py-2 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 active:border-l-amber-500 transition-all">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                <span className="font-sans text-[10px] tracking-wide text-zinc-300 font-bold uppercase">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Versão Desktop Unificada por Coordenadas Internas ao SVG (ForeignObject) */}
                      <div className="hidden md:block w-full max-w-[98vw] h-[74vh]">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                          <style>{`
                            @keyframes flow-pulse {
                              to {
                                stroke-dashoffset: -20;
                              }
                            }
                            .flowing-fiber {
                              stroke-dasharray: 6 10;
                              animation: flow-pulse 1.2s linear infinite;
                              filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.8));
                            }
                          `}</style>
                          
                          {/* Definições de Marcadores e Gradientes */}
                          <defs>
                            <marker id="arrow-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
                            </marker>
                            <linearGradient id="amber-line" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                              <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>

                          {/* Linhas Conectivas com Curvas Suaves - Efeito Neon Glow Symmetrical */}
                          {/* Coluna Esquerda (Playbook) */}
                          <path d="M 500,55 L 500,75 Q 500,90 485,90 L 325,90 Q 310,90 310,98 L 310,106" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                          <path d="M 500,55 L 500,75 Q 500,90 485,90 L 325,90 Q 310,90 310,98 L 310,106" stroke="url(#amber-line)" strokeWidth="1.5" className="flowing-fiber" fill="none" />

                          {/* Coluna Direita (Rotinas) */}
                          <path d="M 500,55 L 500,75 Q 500,90 515,90 L 675,90 Q 690,90 690,98 L 690,106" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                          <path d="M 500,55 L 500,75 Q 500,90 515,90 L 675,90 Q 690,90 690,98 L 690,106" stroke="url(#amber-line)" strokeWidth="1.5" className="flowing-fiber" fill="none" />

                          {/* Bloco Raiz "VENDAS" no topo centralizado - Glassmorphism com borda neon e glow */}
                          <foreignObject x="380" y="5" width="240" height="65">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="relative overflow-hidden w-[180px] h-[42px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.03] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                                {/* Top highlight bevel */}
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                <span className="font-montserrat text-[11px] font-black tracking-[0.35em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                  VENDAS
                                </span>
                              </div>
                            </div>
                          </foreignObject>

                          {/* Coluna 1: Playbook de Vendas */}
                          {/* Título */}
                          <foreignObject x="180" y="98" width="260" height="60">
                            <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                              <div className="w-[242px] h-[44px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                  PLAYBOOK DE VENDAS
                                </span>
                              </div>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="180" y="152" width="260" height="210">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="w-[242px] h-[192px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/60 to-zinc-950/80 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(245,158,11,0.06)] transition-all duration-300">
                                <div className="flex flex-col gap-1.5 w-full">
                                  {[
                                    "MÉTODOS DE VENDAS",
                                    "SCRIPTS DE VENDAS",
                                    "FLUXO DE CADÊNCIA",
                                    "GATILHOS MENTAIS",
                                    "NÍVEIS DE CONSCIÊNCIA"
                                  ].map(item => (
                                    <div key={item} className="flex items-center gap-2.5 py-1.5 px-3 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 hover:border-l-amber-500 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent hover:border-white/[0.06] hover:translate-x-1.5 transition-all duration-300 group/item">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)] group-hover/item:scale-110 transition-all duration-300" />
                                      <span className="font-sans text-[9px] md:text-[10px] tracking-wide text-zinc-300 font-bold uppercase transition-colors duration-300 group-hover/item:text-white">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </foreignObject>

                          {/* Coluna 2: Rotinas */}
                          {/* Título */}
                          <foreignObject x="560" y="98" width="260" height="60">
                            <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                              <div className="w-[242px] h-[44px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                  ROTINAS
                                </span>
                              </div>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="560" y="152" width="260" height="210">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="w-[242px] h-[192px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/60 to-zinc-950/80 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(245,158,11,0.06)] transition-all duration-300">
                                <div className="flex flex-col gap-1 w-full">
                                  {[
                                    "DAILY",
                                    "WEEKLY",
                                    "MONTHLY",
                                    "COACHING TÉCNICO",
                                    "ONE A ONE",
                                    "ROLE PLAY"
                                  ].map(item => (
                                    <div key={item} className="flex items-center gap-2.5 py-1 px-3 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 hover:border-l-amber-500 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent hover:border-white/[0.06] hover:translate-x-1.5 transition-all duration-300 group/item">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)] group-hover/item:scale-110 transition-all duration-300" />
                                      <span className="font-sans text-[9px] md:text-[10px] tracking-wide text-zinc-300 font-bold uppercase transition-colors duration-300 group-hover/item:text-white">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </foreignObject>

                        </svg>
                      </div>

                    </div>
                  </motion.div>
                ) : activeSlide === 4 ? (
                  /* Slide 5: Detalhe das Rotinas (Daily / Weekly) */
                  <motion.div
                    key="slide-rotinas-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 5 */}
                    <div className="w-full flex justify-between items-center mb-2 md:mb-4 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Rotinas Comerciais
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Rotinas Detail Content Box */}
                    <div className="w-full flex-grow flex items-center justify-center relative pb-16">
                      
                      {/* Versão Mobile (Vertical Simplificada) */}
                      <div className="flex md:hidden flex-col w-full h-[60vh] overflow-y-auto space-y-6 px-2 pb-16 no-scrollbar">
                        {/* Bloco Raiz "Rotinas" */}
                        <div className="w-full bg-zinc-950/90 border border-amber-500/40 rounded-2xl py-3.5 text-center shadow-lg shadow-amber-500/5">
                          <span className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase tracking-[0.2em]">Rotinas</span>
                        </div>

                        {/* Coluna 1: Daily */}
                        <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] border-t-white/20 rounded-2xl p-5 shadow-xl backdrop-blur-md">
                          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-xl py-2.5 px-4 text-center mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                            <h3 className="text-xs font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent uppercase tracking-widest text-balance leading-tight">Daily / Diária (de 9h a 9h30)</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 text-xs">
                            {[
                              "Quantidade de ligação realizada.",
                              "Tempo em linha.",
                              "Número de Leads do dia anterior.",
                              "Evolução no funil de vendas.",
                              "Meta do mês/dia (ações micro diárias para resultado)."
                            ].map(item => (
                              <div key={item} className="flex items-center gap-2.5 py-2 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 active:border-l-amber-500 transition-all">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                <span className="font-sans text-[10px] tracking-wide text-zinc-300 font-bold uppercase">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coluna 2: Weekly */}
                        <div className="bg-gradient-to-b from-neutral-900/90 to-zinc-950/95 border border-white/[0.06] border-t-white/20 rounded-2xl p-5 shadow-xl backdrop-blur-md">
                          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-xl py-2.5 px-4 text-center mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                            <h3 className="text-xs font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent uppercase tracking-widest text-balance leading-tight">Weekly / Semanal</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 text-xs">
                            {[
                              "REUNIÃO DE OKRS",
                              "ENCAMINHAMENTOS",
                              "COBRANÇA DE ENCAMINHAMENTOS"
                            ].map(item => (
                              <div key={item} className="flex items-center gap-2.5 py-2 px-3.5 rounded-xl bg-white/[0.02] border border-white/[0.03] border-l-2 border-l-amber-500/30 active:border-l-amber-500 transition-all">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                <span className="font-sans text-[10px] tracking-wide text-zinc-300 font-bold uppercase">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Versão Desktop Unificada por Coordenadas Internas ao SVG (ForeignObject) */}
                      <div className="hidden md:block w-full max-w-[98vw] h-[74vh]">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                          <style>{`
                            @keyframes flow-pulse {
                              to {
                                stroke-dashoffset: -20;
                              }
                            }
                            .flowing-fiber {
                              stroke-dasharray: 6 10;
                              animation: flow-pulse 1.2s linear infinite;
                              filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.8));
                            }
                          `}</style>
                          
                          {/* Definições de Marcadores e Gradientes */}
                          <defs>
                            <marker id="arrow-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                              <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="rgba(255,255,255,0.4)" />
                            </marker>
                            <linearGradient id="amber-line" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                              <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>

                          {/* Linhas Conectivas com Curvas Suaves - Efeito Neon Glow Symmetrical */}
                          {/* Coluna Esquerda (Daily) */}
                          <path d="M 500,55 L 500,65 Q 500,70 485,70 L 325,70 Q 310,70 310,78 L 310,86" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                          <path d="M 500,55 L 500,65 Q 500,70 485,70 L 325,70 Q 310,70 310,78 L 310,86" stroke="url(#amber-line)" strokeWidth="1.5" className="flowing-fiber" fill="none" />

                          {/* Coluna Direita (Weekly) */}
                          <path d="M 500,55 L 500,65 Q 500,70 515,70 L 675,70 Q 690,70 690,78 L 690,86" stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.1" fill="none" />
                          <path d="M 500,55 L 500,65 Q 500,70 515,70 L 675,70 Q 690,70 690,78 L 690,86" stroke="url(#amber-line)" strokeWidth="1.5" className="flowing-fiber" fill="none" />

                          {/* Bloco Raiz "ROTINAS" no topo centralizado - Glassmorphism com borda neon e glow */}
                          <foreignObject x="380" y="5" width="240" height="65">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="relative overflow-hidden w-[180px] h-[42px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.03] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                                {/* Top highlight bevel */}
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                <span className="font-montserrat text-[11px] font-black tracking-[0.35em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                  ROTINAS
                                </span>
                              </div>
                            </div>
                          </foreignObject>

                          {/* Coluna 1: Daily */}
                          {/* Título */}
                          <foreignObject x="180" y="78" width="260" height="60">
                            <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                              <div className="w-[242px] h-[44px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                  DAILY / DIÁRIA (9h - 9h30)
                                </span>
                              </div>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="180" y="132" width="260" height="265">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="w-[242px] h-[245px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/60 to-zinc-950/80 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(245,158,11,0.06)] transition-all duration-300">
                                <div className="flex flex-col gap-1.5 w-full">
                                  {[
                                    "Quantidade de ligação realizada.",
                                    "Tempo em linha.",
                                    "Número de Leads do dia anterior.",
                                    "Evolução no funil de vendas.",
                                    "Meta do mês/dia (ações micro diárias)."
                                  ].map(item => (
                                    <div key={item} className="flex items-start gap-2 py-1 px-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02] border-l-2 border-l-amber-500/30 hover:border-l-amber-500 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent hover:border-white/[0.05] hover:translate-x-1 transition-all duration-300 group/item">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)] mt-1.5 flex-shrink-0 group-hover/item:scale-110 transition-all duration-300" />
                                      <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-wide text-zinc-300 font-bold uppercase transition-colors duration-300 group-hover/item:text-white leading-normal">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </foreignObject>

                          {/* Coluna 2: Weekly */}
                          {/* Título */}
                          <foreignObject x="560" y="78" width="260" height="60">
                            <div className="w-full h-full flex items-center justify-center p-1.5 select-none text-center">
                              <div className="w-[242px] h-[44px] flex items-center justify-center rounded-xl bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-amber-500/60 hover:scale-[1.02] transition-all duration-300">
                                <span className="font-display text-[10px] md:text-xs font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest uppercase leading-tight">
                                  WEEKLY / SEMANAL
                                </span>
                              </div>
                            </div>
                          </foreignObject>
                          {/* Conteúdo */}
                          <foreignObject x="560" y="132" width="260" height="265">
                            <div className="w-full h-full flex items-center justify-center p-2 select-none">
                              <div className="w-[242px] h-[245px] flex flex-col justify-start rounded-2xl bg-gradient-to-b from-neutral-950/60 to-zinc-950/80 backdrop-blur-md border border-white/[0.06] border-t-white/15 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(245,158,11,0.06)] transition-all duration-300">
                                <div className="flex flex-col gap-1.5 w-full">
                                  {[
                                    "REUNIÃO DE OKRS",
                                    "ENCAMINHAMENTOS",
                                    "COBRANÇA DE ENCAMINHAMENTOS"
                                  ].map(item => (
                                    <div key={item} className="flex items-start gap-2 py-2 px-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02] border-l-2 border-l-amber-500/30 hover:border-l-amber-500 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent hover:border-white/[0.05] hover:translate-x-1 transition-all duration-300 group/item">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.8)] mt-1.5 flex-shrink-0 group-hover/item:scale-110 transition-all duration-300" />
                                      <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-wide text-zinc-300 font-bold uppercase transition-colors duration-300 group-hover/item:text-white leading-normal">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </foreignObject>

                        </svg>
                      </div>

                    </div>
                  </motion.div>
                ) : activeSlide === 5 ? (
                  /* Slide 6: Daily Diária 5 Passos */
                  <motion.div
                    key="slide-daily-5-steps"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
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
                  </motion.div>
                ) : activeSlide === 6 ? (
                  /* Slide 7: Rituais */
                  <motion.div
                    key="slide-rituais"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
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
                  </motion.div>
                ) : activeSlide === 7 ? (
                  /* Slide 8: Dados */
                  <motion.div
                    key="slide-dados"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
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
                        <div className="hidden md:block w-full max-w-[98vw] h-[65vh]">
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
                  </motion.div>
                ) : activeSlide === 8 ? (
                  /* Slide 9: Depoimento */
                  <motion.div
                    key="slide-depoimento"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-left"
                  >
                    {/* Ambient background glows for Premium design */}
                    <div className="absolute top-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[20%] w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />

                    {/* Cabeçalho do Slide 9 */}
                    <div className="w-full flex justify-between items-center mb-6 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Depoimentos
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Content split wrapper (Left: Text, Right: Video) */}
                    <div className="w-full flex-grow flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-16 pb-16 px-4 overflow-y-auto no-scrollbar">
                      
                      {/* Left Quadrant: Titles and Texts */}
                      <div className="w-full md:w-[55%] flex flex-col justify-center text-left space-y-6 md:space-y-8 select-none">
                        <div className="space-y-3">
                          <span className="text-xs md:text-sm font-bold text-amber-500 tracking-[0.25em] uppercase">CASOS DE SUCESSO</span>
                          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-wide uppercase">
                            A METODOLOGIA GVD NA PRÁTICA
                          </h3>
                        </div>

                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans max-w-xl">
                          Confira o impacto real e a transformação gerada pela aplicação prática dos nossos rituais, rotinas e inteligência de dados comerciais. Tracionamos operações inteiras, reduzindo o CAC e trazendo máxima visibilidade comercial para o seu negócio.
                        </p>

                        {/* Premium Stats List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                          {[
                            { value: "+150%", label: "Geração de Demanda" },
                            { value: "3.2x", label: "Retorno sobre Ads (ROAS)" },
                            { value: "100%", label: "Visibilidade Comercial" }
                          ].map((stat, idx) => (
                            <div key={idx} className="relative p-4 rounded-xl border border-white/[0.04] bg-neutral-950/60 backdrop-blur-sm shadow-md hover:border-amber-500/20 transition-all duration-300">
                              <span className="font-montserrat text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent block mb-1">
                                {stat.value}
                              </span>
                              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-bold leading-tight block">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Quadrant: Vertical Video Player 9:16 */}
                      <div className="w-full md:w-[45%] flex items-center justify-center">
                        {/* Smartphone bezel mockup */}
                        <div className="relative aspect-[9/16] w-[240px] sm:w-[260px] md:w-[280px] rounded-[32px] border-4 border-zinc-800 bg-zinc-950 shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden group hover:scale-[1.02] hover:border-amber-500/40 transition-all duration-500">
                          {/* Top notch speaker mockup */}
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
                            <div className="w-8 h-1 bg-zinc-900 rounded-full" />
                          </div>

                          {/* HTML5 video element */}
                          <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-40090-large.mp4"
                            loop
                            playsInline
                            controls
                            className="w-full h-full object-cover rounded-[28px] bg-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ) : activeSlide === 9 ? (
                  /* Slide 10: Valor x Preço */
                  <motion.div
                    key="slide-valor-preco"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-center"
                  >
                    {/* Ambient background glows */}
                    <div className="absolute top-[25%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[95px] pointer-events-none" />
                    <div className="absolute bottom-[25%] right-[25%] w-[250px] h-[250px] rounded-full bg-emerald-500/5 blur-[95px] pointer-events-none" />

                    {/* Cabeçalho do Slide 10 */}
                    <div className="w-full flex justify-between items-center mb-6 px-4 flex-shrink-0 text-left">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Valor x Preço
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Main content grid */}
                    <div className="w-full flex-grow flex items-center justify-center px-4 max-w-5xl mx-auto pb-16">
                      <div className="flex flex-col sm:flex-row items-center justify-around w-full gap-8 md:gap-12">
                        
                        {/* VALOR Column */}
                        <div className="flex flex-col items-center justify-center flex-1">
                          {/* Badge container with orange/gold gradient */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-10 py-5 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600 shadow-[0_10px_40px_rgba(245,158,11,0.25)] border border-amber-300/30 flex items-center justify-center select-none"
                          >
                            <span className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider drop-shadow-md">
                              VALOR
                            </span>
                          </motion.div>
                          
                          {/* Dotted Line */}
                          <div className="h-16 md:h-20 w-0 border-l-[3px] border-dotted border-amber-500 my-4" />
                          
                          {/* Subtitle */}
                          <span className="font-sans text-sm sm:text-base font-bold text-zinc-400 tracking-[0.25em] uppercase">
                            QUANTO <span className="text-white">VALE</span>
                          </span>
                        </div>

                        {/* X Splitter */}
                        <div className="flex items-center justify-center">
                          <span className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-600/80 select-none animate-pulse">
                            X
                          </span>
                        </div>

                        {/* PREÇO Column */}
                        <div className="flex flex-col items-center justify-center flex-1">
                          {/* Badge container with green/lime gradient */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-10 py-5 rounded-[2rem] bg-gradient-to-b from-emerald-400 via-emerald-500 to-green-600 shadow-[0_10px_40px_rgba(16,185,129,0.25)] border border-emerald-300/30 flex items-center justify-center select-none"
                          >
                            <span className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider drop-shadow-md">
                              PREÇO
                            </span>
                          </motion.div>

                          {/* Dotted Line */}
                          <div className="h-16 md:h-20 w-0 border-l-[3px] border-dotted border-emerald-500 my-4" />

                          {/* Subtitle */}
                          <span className="font-sans text-sm sm:text-base font-bold text-zinc-400 tracking-[0.25em] uppercase">
                            QUANTO VOCÊ <span className="text-white font-extrabold">PAGA</span>
                          </span>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ) : activeSlide === 10 ? (
                  /* Slide 11: Investimento */
                  <motion.div
                    key="slide-investimento"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-4 text-left"
                  >
                    {/* Ambient background glows */}
                    <div className="absolute top-[20%] left-[25%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[95px] pointer-events-none" />
                    <div className="absolute bottom-[20%] right-[25%] w-[250px] h-[250px] rounded-full bg-orange-500/5 blur-[95px] pointer-events-none" />

                    {/* Cabeçalho do Slide 11 */}
                    <div className="w-full flex justify-between items-center mb-1 px-4 flex-shrink-0">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-wider mt-0.5 select-none">
                          Investimento
                        </h2>
                      </div>
                      <span className="font-montserrat text-2xl sm:text-3xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="w-full flex-grow flex flex-col items-center gap-2 pt-1 pb-16 px-4 overflow-y-auto no-scrollbar justify-start max-w-4xl mx-auto">
                      
                      {/* Big "INVESTIMENTO" Banner */}
                      <div className="relative overflow-hidden px-16 py-3 rounded-2xl bg-zinc-950/90 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center transition-all duration-300 hover:scale-[1.02] mb-3 flex-shrink-0 select-none">
                        <span className="font-montserrat text-3xl sm:text-5xl font-black tracking-[0.25em] bg-gradient-to-r from-amber-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                          INVESTIMENTO
                        </span>
                      </div>

                      {/* Dot-leader pricing list */}
                      <div className="w-full bg-neutral-950/60 backdrop-blur-md border border-white/[0.04] rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col gap-1.5 md:gap-2">
                        {[
                          { item: "Estruturação Estratégica", price: "R$ 5.000,00" },
                          { item: "Treinamento de CRM", price: "R$ 5.000,00" },
                          { item: "Implantação do CRM e Integrações + Automação Padrão", price: "R$ 7.000,00" },
                          { item: "Treinamento do Time Comercial", price: "R$ 10.000,00" },
                          { item: "Gestão de Tráfego Pago MetaAds e GoogleAds", price: "R$ 6.000,00" },
                          { item: "Social Media", price: "R$ 2.500,00" },
                          { item: "Designer de Criativos para Anúncios", price: "R$ 2.000,00" },
                          { item: "Editor de Vídeos para Anúncios", price: "R$ 5.000,00" },
                          { item: "Goals", price: "R$ 997,00" },
                          { item: "Grupo de Acompanhamento no WhatsApp", price: "BÔNUS", highlight: true },
                          { item: "Bônus 1 - Relatório em Dashboard", price: "R$ 5.000,00" },
                          { item: "Bônus 2 - Alinhamento Quinzenal", price: "BÔNUS", highlight: true },
                          { item: "Bônus 3 - Implantação de Metodologia de OKRs", price: "R$ 15.000,00" }
                        ].map((row, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs sm:text-sm font-sans tracking-wide leading-none group/item">
                            <span className="font-bold text-zinc-300 group-hover/item:text-white transition-colors">{row.item}</span>
                            
                            {/* Dot Leader */}
                            <div className="flex-grow border-b border-dotted border-white/10 mx-2 group-hover/item:border-white/30 transition-colors" />

                            <span className={`font-mono font-bold ${row.highlight ? "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" : "text-white"}`}>
                              {row.price}
                            </span>
                          </div>
                        ))}

                        {/* Total Anchor Price */}
                        <div className="flex justify-end mt-4 pt-3 border-t border-white/[0.08] min-h-[58px] items-center">
                          <AnimatePresence mode="wait">
                            {!showTotalPrice ? (
                              <motion.button
                                key="reveal-btn"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={() => setShowTotalPrice(true)}
                                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-sans text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-amber-400/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                              >
                                <Eye className="w-4 h-4 text-white" />
                                <span>Revelar Preço Total</span>
                              </motion.button>
                            ) : (
                              <motion.div
                                key="price-display"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="px-5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/[0.06] shadow-md flex items-center gap-3"
                              >
                                <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">Total:</span>
                                <span className="font-sans text-lg sm:text-xl font-black text-white tracking-wide">R$ 63.497,00</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Subtitle anchor prompt */}
                      <div className="mt-4 text-center select-none">
                        <span className="font-sans text-sm md:text-base font-bold text-zinc-400 tracking-wide block">
                          Se você pudesse ter um <span className="text-amber-500 font-black">desconto de 30%</span> desse valor...
                        </span>
                      </div>

                    </div>
                  </motion.div>
                ) : activeSlide === 11 ? (
                  /* Slide 12: Desconto (Sentimento de Ansiedade) */
                  <motion.div
                    key="slide-desconto-ansiedade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-6 text-center overflow-hidden"
                  >
                    {/* Pulsating background glows (heartbeat feeling) */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.06, 1],
                        opacity: [0.25, 0.45, 0.25]
                      }}
                      transition={{ 
                        duration: 0.8, // 75 bpm heartbeat
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)] pointer-events-none"
                    />
                    <div className="absolute top-[25%] left-[20%] w-[300px] h-[300px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[25%] right-[20%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

                    {/* Cabeçalho do Slide 12 */}
                    <div className="w-full flex justify-between items-center mb-6 px-4 flex-shrink-0 text-left">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-red-500 uppercase animate-pulse">Oferta de Tempo Limitado</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Condição Especial
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-red-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(239,68,68,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full flex-grow flex flex-col items-center justify-center gap-8 md:gap-10 pb-16 px-4 max-w-4xl mx-auto">
                      
                      {/* Anchor Price Slashed */}
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-widest">Valor Original</span>
                        <div className="relative inline-block select-none whitespace-nowrap">
                          <span className="text-3xl sm:text-5xl font-extrabold text-zinc-500 tracking-wider font-mono">
                            R$ 63.497,00
                          </span>
                          {/* Animated Red Slasher */}
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "105%" }}
                            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                            className="absolute top-1/2 left-[-2.5%] h-1.5 md:h-2 bg-red-600 -translate-y-1/2 rotate-[-3.5deg] origin-left shadow-[0_0_15px_rgba(239,68,68,0.9)] rounded"
                          />
                        </div>
                      </div>

                      {/* 30% OFF Tag popping in */}
                      <motion.div
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: -5 }}
                        transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 10 }}
                        className="px-8 py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs sm:text-sm tracking-widest rounded-xl shadow-[0_0_25px_rgba(239,68,68,0.5)] border border-red-400/20 uppercase select-none animate-bounce"
                      >
                        🔥 30% de Desconto Exclusivo 🔥
                      </motion.div>

                      {/* Massive Pulsing Discount Price */}
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.4 }}
                        className="text-center w-full px-4"
                      >
                        <span className="text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] block mb-2 select-none">
                          Valor com Desconto
                        </span>
                        <motion.h1 
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="font-montserrat text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(245,158,11,0.65)] tracking-tight select-none whitespace-nowrap block w-full text-center"
                        >
                          R$ 44.447,90
                        </motion.h1>
                      </motion.div>

                      {/* Live Ticking Countdown Timer */}
                      <div className="flex flex-col items-center gap-3 mt-4">
                        <span className="text-[10px] sm:text-xs font-bold text-red-500/80 tracking-[0.4em] uppercase animate-pulse">
                          ESTA OFERTA EXPIRA EM
                        </span>
                        <div className="font-mono text-3xl sm:text-4xl font-black text-red-500 tracking-wider flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-red-950/20 border border-red-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_20px_rgba(239,68,68,0.15)] select-none">
                          <span>{formatTime(timeLeft)}</span>
                        </div>
                      </div>

                      {/* Call to action pitch */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.0, duration: 0.5 }}
                        className="mt-6 text-center select-none"
                      >
                        <span className="font-sans text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                          Você seria um cliente hoje?
                        </span>
                      </motion.div>

                    </div>
                  </motion.div>
                ) : activeSlide === 12 ? (
                  /* Slide 13: Transição Protagonista */
                  <motion.div
                    key="slide-transicao-protagonista"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-center h-full w-full py-8 text-center px-4 max-w-4xl mx-auto"
                  >
                    {/* Ambient background glows */}
                    <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-amber-600/5 blur-[100px] pointer-events-none" />

                    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-2xl">
                      <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.3em] text-amber-500 uppercase select-none">
                        Foco na Acessibilidade
                      </span>
                      
                      <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-300 leading-relaxed tracking-wide select-none">
                        Entendemos que este <span className="text-white underline decoration-amber-500 decoration-2 underline-offset-4">ainda está um valor alto</span> para investir de uma única vez...
                      </h2>

                      {/* Divider icon */}
                      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-4" />

                      <p className="font-sans text-sm sm:text-lg text-zinc-400 font-medium leading-relaxed tracking-wide select-none">
                        Para garantir que você não perca a tração comercial e possa implementar a Metodologia GVD imediatamente, criamos uma condição sob medida:
                      </p>

                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-6 px-10 py-5 rounded-[2rem] bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600 shadow-[0_10px_40px_rgba(245,158,11,0.25)] border border-amber-300/30 flex items-center justify-center select-none"
                      >
                        <span className="font-sans text-2xl sm:text-4xl font-black text-white uppercase tracking-[0.15em] drop-shadow-md">
                          VALOR PROTAGONISTA
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  /* Slide 14: Oferta Final (Valor Protagonista) */
                  <motion.div
                    key="slide-oferta-protagonista"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col items-center justify-start h-full w-full py-4 text-center px-4 max-w-4xl mx-auto"
                  >
                    {/* Ambient background glows */}
                    <div className="absolute top-[25%] left-[25%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[25%] right-[25%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

                    {/* Cabeçalho do Slide 14 */}
                    <div className="w-full flex justify-between items-center mb-6 flex-shrink-0 text-left">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Metodologia GVD</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider mt-1 select-none">
                          Valor Protagonista
                        </h2>
                      </div>
                      <span className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-b from-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)] select-none">
                        GVD
                      </span>
                    </div>

                    {/* Main Offer Content */}
                    <div className="w-full flex-grow flex flex-col items-center justify-center gap-6 sm:gap-8 pb-16">
                      
                      {/* Badge Protagonista */}
                      <div className="px-8 py-2.5 bg-neutral-950/80 border border-amber-500/35 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.15)] select-none">
                        <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.25em] bg-gradient-to-r from-amber-300 via-white to-amber-400 bg-clip-text text-transparent uppercase">
                          ⚡ CONTRATO PROTAGONISTA ⚡
                        </span>
                      </div>

                      {/* Symmetrical Grid for Duration & Pricing */}
                      <div className="w-full max-w-2xl bg-neutral-950/70 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col items-center gap-6 sm:gap-8 relative overflow-hidden group hover:border-amber-500/20 transition-all duration-500">
                        {/* Internal hover glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* 3 Months Duration */}
                        <div className="flex flex-col items-center">
                          <span className="font-sans text-xs sm:text-sm font-bold text-zinc-500 tracking-[0.3em] uppercase mb-1">Duração do Programa</span>
                          <span className="font-montserrat text-4xl sm:text-5xl font-black text-white uppercase tracking-wider select-none">
                            3 MESES
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-24 h-[1px] bg-white/10" />

                        {/* Price */}
                        <div className="flex flex-col items-center w-full">
                          <span className="font-sans text-xs sm:text-sm font-bold text-zinc-400 tracking-[0.2em] uppercase mb-2 select-none">
                            Por Apenas
                          </span>
                          
                          <div className="flex flex-col items-center select-none w-full">
                            <span className="font-sans text-2xl sm:text-3xl font-bold text-zinc-400 tracking-wide mb-1">
                              12x de
                            </span>
                            <motion.h1
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
                              className="font-montserrat text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.6)] tracking-tight whitespace-nowrap block w-full text-center"
                            >
                              R$ 699,00
                            </motion.h1>
                          </div>
                        </div>

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
