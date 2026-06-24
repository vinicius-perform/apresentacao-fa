import { motion } from "motion/react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function CultureSection() {
  const c = presentationContent.culture;

  return (
    <Section id="cultura-identidade" className="relative overflow-hidden">
      {/* Luz de fundo decorativa dourada/âmbar sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-16 px-4">
        
        {/* Cabeçalho "CULTURA = IDENTIDADE" estilizado em dourado premium */}
        <Reveal delay={0.2}>
          <div className="relative group inline-block bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 p-[1px] rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all duration-500">
            <div className="bg-black/95 px-8 py-3 rounded-[7px] transition-colors duration-500 group-hover:bg-black/90">
              <span className="font-montserrat text-xl sm:text-2xl md:text-3xl font-black tracking-[0.25em] bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent uppercase select-none">
                Cultura = Identidade
              </span>
            </div>
          </div>
        </Reveal>

        {/* Grade de 3 Colunas: Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full z-10">
          {c.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.35 + i * 0.15} className="w-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative flex flex-col justify-start p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.06)] group cursor-default overflow-hidden min-h-[320px] text-left"
              >
                {/* Efeito de brilho radial âmbar interno no hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Título do Pilar */}
                <h3 className="font-display text-2xl md:text-3xl font-black tracking-widest text-amber-500 group-hover:text-yellow-400 transition-colors duration-500 uppercase">
                  {pillar.title}
                </h3>

                {/* Subtítulo / Pergunta do Pilar */}
                <p className="text-xs md:text-sm font-semibold text-fg-dim tracking-wider uppercase mt-2 select-none">
                  {pillar.sub}
                </p>

                {/* Linha Divisória */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent my-6 group-hover:via-amber-500/20 transition-all duration-500" />

                {/* Lista de Itens */}
                <ul className="space-y-4 relative z-10">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {/* Marcador Âmbar Estilizado */}
                      <span className="mt-2 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-amber-500/40 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                      <span className="text-sm md:text-base text-fg-muted group-hover:text-white transition-colors duration-500 leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Barra Inferior Âmbar que se expande no Hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-600 to-yellow-400 transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
