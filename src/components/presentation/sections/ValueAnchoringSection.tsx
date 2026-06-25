import { Reveal, Section } from "../primitives";
import { Video, Target, Laptop, GraduationCap, Compass } from "lucide-react";

export function ValueAnchoringSection() {
  const services = [
    {
      title: "Produção de Conteúdo",
      price: "R$ 3.990",
      icon: Video,
    },
    {
      title: "Geração de Demanda",
      price: "R$ 4.990",
      icon: Target,
    },
    {
      title: "Implementação de CRM",
      price: "R$ 4.990",
      icon: Laptop,
    },
    {
      title: "Treinamento Comercial",
      price: "R$ 2.990",
      icon: GraduationCap,
    },
    {
      title: "Consultoria GVD",
      price: "R$ 2.994",
      icon: Compass,
    },
  ];

  return (
    <Section 
      className="relative w-full min-h-screen py-20 md:py-28 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white border-t border-white/[0.03]"
      id="ancoragem-valor"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-yellow-600/3 blur-[120px] pointer-events-none" />

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
            Investimento Individual dos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent uppercase tracking-wider mb-12 select-none leading-tight">
            Ancoragem de Valor
          </h2>
        </Reveal>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3 w-full max-w-5xl mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center justify-center bg-zinc-950/40 border border-white/[0.05] hover:border-amber-500/30 rounded-[2rem] p-6 backdrop-blur-md transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)] group h-[220px] md:h-[240px]">
                  {/* Ícone Monumental */}
                  <div className="w-16 h-16 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
                    <IconComponent className="w-7 h-7 text-amber-500/80 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  
                  {/* Título */}
                  <span className="text-[10px] md:text-xs font-black text-zinc-300 group-hover:text-white uppercase tracking-widest text-center select-none leading-tight min-h-[32px] flex items-center justify-center">
                    {service.title}
                  </span>
                  
                  {/* Linha Divisória */}
                  <div className="w-6 h-[1.5px] bg-amber-500/20 my-3 group-hover:w-10 group-hover:bg-amber-500/40 transition-all duration-500" />
                  
                  {/* Preço */}
                  <span className="text-sm md:text-base font-mono font-bold text-amber-500 select-none">
                    {service.price}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Caixa de Totalização */}
        <Reveal delay={0.6}>
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900/60 to-zinc-950/90 border-2 border-amber-500/20 rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full mx-auto shadow-[0_25px_50px_rgba(245,158,11,0.12)] relative overflow-hidden group select-none">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600" />
            
            <span className="text-[10px] sm:text-xs font-mono text-amber-500/80 uppercase tracking-[0.3em] mb-2 block">
              VALOR TOTAL DOS SERVIÇOS
            </span>
            
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider">
              R$ 19.954,00
            </h3>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
