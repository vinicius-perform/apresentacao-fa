import { motion } from "motion/react";
import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { Target, Compass, Diamond } from "lucide-react";

const ICONS = [Target, Compass, Diamond];

export function WhatIsSection() {
  const whatIs = presentationContent.whatIs;
  const culture = presentationContent.culture;

  return (
    <Section id="metodologia-gvd" className="relative overflow-hidden min-h-fit pb-16 md:pb-32 pt-24 md:pt-32">
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-green-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col space-y-24 md:space-y-36">
          
          {/* Parte 1: O que é a Fazendo Acontecer? */}
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500">{whatIs.kicker}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-2 font-display text-balance text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-fg block">O que é a</span>
                <span className="bg-gradient-to-r from-emerald-200 via-green-400 to-emerald-500 bg-clip-text text-transparent inline-block pb-2">
                  Fazendo Acontecer?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg md:text-xl text-fg-muted leading-relaxed max-w-3xl font-light">
                {whatIs.description}
              </p>
            </Reveal>
          </div>

          {/* Parte 2: Cultura = Identidade */}
          <div className="flex flex-col items-center text-center space-y-16 w-full max-w-6xl mx-auto relative">
            <Reveal delay={0.2}>
              <div className="relative group inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="font-montserrat text-sm sm:text-base font-bold tracking-[0.3em] text-white uppercase select-none relative z-10 flex items-center gap-4">
                    <span className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500/50 hidden sm:block" />
                    {culture.title}
                    <span className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500/50 hidden sm:block" />
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full z-10">
              {culture.pillars.map((pillar, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <Reveal key={pillar.title} delay={0.3 + i * 0.15} className="w-full h-full">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative flex flex-col justify-start p-8 md:p-10 rounded-[2rem] border border-white/[0.05] bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/[0.04] overflow-hidden min-h-[380px] text-left h-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    >
                      {/* Spotlight Effect */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-emerald-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Icon Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                          <Icon className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors duration-500 uppercase">
                            {pillar.title}
                          </h3>
                          <p className="text-xs font-semibold text-emerald-500/60 tracking-wider uppercase mt-1 select-none">
                            {pillar.sub}
                          </p>
                        </div>
                      </div>

                      {/* Line Separator */}
                      <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-8 group-hover:from-emerald-500/30 group-hover:via-emerald-500/10 transition-colors duration-500" />

                      {/* Items */}
                      <ul className="space-y-5 relative z-10 flex-1">
                        {pillar.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 group/item">
                            <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-emerald-400 group-hover/item:scale-150 transition-all duration-300 group-hover/item:shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                            <span className="text-sm md:text-base text-fg-muted group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Glow Line */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-green-300 transition-all duration-700 ease-out group-hover:w-full opacity-70" />
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
