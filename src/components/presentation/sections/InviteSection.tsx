import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { DotSalesLogo, FALogo, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function InviteSection() {
  const c = presentationContent.invite;
  const t = presentationContent.thanks;
  const [done, setDone] = useState(false);

  return (
    <Section>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.2 }}
            className="relative z-10 text-center max-w-3xl space-y-10"
          >
            <Reveal>
              <h2 className="font-display text-balance text-5xl md:text-7xl font-semibold leading-tight">
                {c.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-fg-muted text-balance">{c.sub}</p>
            </Reveal>
            <Reveal delay={0.4}>
              <button
                onClick={() => setDone(true)}
                className="group relative inline-flex items-center gap-3 rounded-full hairline px-7 py-3.5 text-sm md:text-base hover:bg-neon hover:text-black hover:border-neon transition-all duration-500"
              >
                <span>{c.cta}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </Reveal>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center space-y-16"
          >
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold neon-text">
              {t.title}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-fg-muted">
              <FALogo className="text-3xl md:text-4xl" />
              <span className="text-fg-dim text-xl">×</span>
              <DotSalesLogo className="text-3xl md:text-4xl" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-fg-dim">{t.sub}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
