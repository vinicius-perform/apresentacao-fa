import { Kicker, Reveal, Section } from "@/components/presentation/primitives";
import { CheckCircle2, TrendingUp, DollarSign, Target } from "lucide-react";

export function ItapipocaCaseSection() {
  return (
    <Section className="flex flex-col justify-center py-24 !min-h-0 bg-[#050505] text-white border-t border-white/[0.03]" id="case-itapipoca">
      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Coluna da Esquerda: Textos */}
        <div className="md:col-span-7 space-y-8 text-left">
          <Reveal>
            <Kicker>Depoimento & Resultados</Kicker>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-white">
              Case de Sucesso de <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black underline decoration-amber-500/30">Itapipoca</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium">
              Como essa médica fatura mais de <span className="text-amber-400 font-bold">R$ 500 mil</span> com investimento de apenas <span className="text-amber-400 font-bold">R$ 12 mil</span>.
            </p>
          </Reveal>

          {/* Premium Cards de Métricas */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-500" /> Investimento
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-white">R$ 12 mil</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500" /> Faturamento
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-white">R$ 500 mil+</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-500" /> Retorno (ROI)
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">41x ROI</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3 text-zinc-400 text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                Estruturação e processos desenhados sob medida.
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                Time treinado e focado na conversão de alta performance.
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                Previsibilidade e controle total sobre cada lead gerado.
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Coluna da Direita: Vídeo Vertical */}
        <div className="md:col-span-5 flex justify-center">
          <Reveal delay={0.3} className="w-full max-w-[340px]">
            <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 group">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                loop
                preload="metadata"
              >
                <source src="https://fazendoacontecer.site/wp-content/uploads/2026/06/0625.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/5 ring-1 ring-white/10" />
            </div>
          </Reveal>
        </div>

      </div>
    </Section>
  );
}
