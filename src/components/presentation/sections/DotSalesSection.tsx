import { motion } from "motion/react";
import { Kicker, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

function Mockup() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Macbook frame */}
      <div className="relative rounded-t-2xl bg-bg-elev hairline overflow-hidden aspect-[16/10]">
        {/* top bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-4 text-[10px] uppercase tracking-[0.3em] text-fg-dim">dotsales.app</span>
        </div>
        {/* app body */}
        <div className="grid grid-cols-[180px_1fr_280px] h-[calc(100%-41px)]">
          {/* sidebar */}
          <div className="border-r border-line p-3 space-y-2">
            {["Inbox", "Pipeline", "Leads", "Automação", "Relatórios"].map((s, i) => (
              <div key={s} className={`text-[11px] px-2 py-1.5 rounded ${i === 1 ? "bg-neon/10 text-neon" : "text-fg-muted"}`}>
                {s}
              </div>
            ))}
          </div>
          {/* pipeline */}
          <div className="p-3 grid grid-cols-4 gap-2 overflow-hidden">
            {["Novo", "Qualificado", "Proposta", "Fechado"].map((col, ci) => (
              <div key={col} className="flex flex-col gap-2">
                <div className="text-[10px] uppercase tracking-wider text-fg-dim">{col}</div>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + ci * 0.1 + i * 0.05, duration: 0.6 }}
                    className="rounded-md bg-bg hairline p-2 space-y-1"
                  >
                    <div className="h-1.5 w-3/4 rounded bg-white/15" />
                    <div className="h-1 w-1/2 rounded bg-white/8" />
                    {i === 0 && ci === 1 && <div className="h-1 w-8 rounded-full bg-neon" />}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          {/* inbox */}
          <div className="border-l border-line p-3 space-y-2">
            <div className="text-[10px] uppercase tracking-wider text-fg-dim">Inbox</div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-md bg-bg hairline p-2 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-neon/30" />
                  <div className="h-1.5 flex-1 rounded bg-white/15" />
                </div>
                <div className="h-1 w-3/4 rounded bg-white/8 ml-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* macbook base */}
      <div className="mx-auto h-3 max-w-[90%] rounded-b-2xl bg-bg-elev/80 hairline border-t-0" />
      <div className="mx-auto h-1 w-32 rounded-b-xl bg-bg-elev" />
    </div>
  );
}

export function DotSalesSection() {
  const c = presentationContent.dotsales;
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl space-y-20">
        <div className="space-y-6 max-w-3xl">
          <Reveal><Kicker>{c.kicker}</Kicker></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl md:text-6xl font-semibold leading-tight">
              {c.headline}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Mockup />
        </Reveal>

        {/* Flow */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-0 items-center">
            {c.flow.map((step, i) => (
              <div key={step} className="flex items-center justify-center md:contents">
                <div className="rounded-full hairline px-5 py-3 text-xs md:text-sm whitespace-nowrap bg-bg-elev/60 backdrop-blur">
                  <span className="text-neon mr-2 tabular-nums">0{i + 1}</span>
                  {step}
                </div>
                {i < c.flow.length - 1 && (
                  <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-neon/50 to-line mx-2" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-xl overflow-hidden hairline">
          {c.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="bg-bg p-8 h-full space-y-3 hover:bg-bg-elev transition-colors duration-500">
                <div className="font-display text-xs text-neon tabular-nums">0{i + 1}</div>
                <h3 className="font-display text-xl md:text-2xl font-semibold">{f.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
