import { Reveal, Section } from "../primitives";
import { 
  Compass, 
  Database, 
  Cpu, 
  Users, 
  Target, 
  Share2, 
  Palette, 
  Video, 
  Trophy, 
  MessageSquare, 
  LayoutDashboard, 
  Calendar, 
  TrendingUp 
} from "lucide-react";

export function ValueAnchoringSection() {
  const services = [
    {
      title: "Estruturação Estratégica",
      price: "R$ 2.500,00",
      icon: Compass,
    },
    {
      title: "Treinamento de CRM",
      price: "R$ 1.200,00",
      icon: Database,
    },
    {
      title: "Implantação do CRM + Integrações",
      price: "R$ 2.900,00",
      icon: Cpu,
    },
    {
      title: "Treinamento do Time Comercial",
      price: "R$ 1.800,00",
      icon: Users,
    },
    {
      title: "Gestão de Tráfego Pago",
      price: "R$ 2.500,00",
      icon: Target,
    },
    {
      title: "Social Media",
      price: "R$ 1.990,00",
      icon: Share2,
    },
    {
      title: "Designer de Criativos",
      price: "R$ 1.200,00",
      icon: Palette,
    },
    {
      title: "Editor de Vídeos para Anúncios",
      price: "R$ 1.500,00",
      icon: Video,
    },
    {
      title: "Goals",
      price: "R$ 990,00",
      icon: Trophy,
    },
    {
      title: "Acompanhamento WhatsApp",
      price: "R$ 497,00",
      icon: MessageSquare,
    },
    {
      title: "Bônus 1 - Relatório em Dashboard",
      price: "R$ 997,00",
      icon: LayoutDashboard,
    },
    {
      title: "Bônus 2 - Alinhamento Quinzenal",
      price: "R$ 990,00",
      icon: Calendar,
    },
    {
      title: "Bônus 3 - Implantação de OKRs",
      price: "R$ 890,00",
      icon: TrendingUp,
    },
  ];

  // Divide os itens em duas colunas para o desktop (7 na esquerda, 6 na direita)
  const leftColumn = services.slice(0, 7);
  const rightColumn = services.slice(7);

  return (
    <Section 
      className="relative w-full min-h-screen py-20 md:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white border-t border-white/[0.03]"
      id="ancoragem-valor"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] rounded-full bg-yellow-600/3 blur-[130px] pointer-events-none" />

      {/* Architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

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
            Entregáveis e Valor Agregado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent uppercase tracking-wider mb-16 select-none leading-tight">
            Ancoragem de Valor
          </h2>
        </Reveal>

        {/* Lista em Linhas de Serviços - Grid de 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 w-full max-w-5xl mb-16 text-left">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-6">
            {leftColumn.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="flex items-end w-full group select-none">
                    {/* Ícone sutil à esquerda */}
                    <div className="w-8 h-8 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center mr-3 group-hover:bg-amber-500/15 group-hover:border-amber-500/35 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-amber-500/80 group-hover:text-amber-400 transition-all duration-300" />
                    </div>
                    {/* Título */}
                    <span className="text-[11px] sm:text-xs font-black text-zinc-300 group-hover:text-white uppercase tracking-widest leading-none pb-0.5 whitespace-nowrap transition-colors duration-300">
                      {service.title}
                    </span>
                    {/* Linha pontilhada conectora */}
                    <div className="flex-grow border-b border-dotted border-white/10 group-hover:border-amber-500/20 mx-3 mb-1.5 transition-colors duration-300" />
                    {/* Preço individual */}
                    <span className="text-xs sm:text-sm font-mono font-bold text-amber-500 pb-0.5 whitespace-nowrap group-hover:text-amber-400 transition-colors duration-300">
                      {service.price}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-6">
            {rightColumn.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Reveal key={index + 7} delay={(index + 7) * 0.05}>
                  <div className="flex items-end w-full group select-none">
                    {/* Ícone sutil à esquerda */}
                    <div className="w-8 h-8 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center mr-3 group-hover:bg-amber-500/15 group-hover:border-amber-500/35 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-amber-500/80 group-hover:text-amber-400 transition-all duration-300" />
                    </div>
                    {/* Título */}
                    <span className="text-[11px] sm:text-xs font-black text-zinc-300 group-hover:text-white uppercase tracking-widest leading-none pb-0.5 whitespace-nowrap transition-colors duration-300">
                      {service.title}
                    </span>
                    {/* Linha pontilhada conectora */}
                    <div className="flex-grow border-b border-dotted border-white/10 group-hover:border-amber-500/20 mx-3 mb-1.5 transition-colors duration-300" />
                    {/* Preço individual */}
                    <span className="text-xs sm:text-sm font-mono font-bold text-amber-500 pb-0.5 whitespace-nowrap group-hover:text-amber-400 transition-colors duration-300">
                      {service.price}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Caixa de Totalização Monumental */}
        <Reveal delay={0.4}>
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900/60 to-zinc-950/90 border-2 border-amber-500/20 rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full mx-auto shadow-[0_25px_50px_rgba(245,158,11,0.12)] relative overflow-hidden group select-none">
            <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600" />
            
            <span className="text-[10px] sm:text-xs font-mono text-amber-500/80 uppercase tracking-[0.3em] mb-2 block">
              VALOR TOTAL ACUMULADO
            </span>
            
            <h3 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider font-mono whitespace-nowrap">
              R$ 19.954,00
            </h3>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
