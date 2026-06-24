import { motion } from "motion/react";
import { FALogo, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function HeroSection() {
  const c = presentationContent.opening;
  return (
    <Section className="vignette">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <FALogo className="text-5xl md:text-6xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance mt-16 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.02]"
        >
          {c.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-balance text-base md:text-lg text-fg-muted"
        >
          {c.sub}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-fg-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">{c.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-fg-dim to-transparent"
        />
      </motion.div>
    </Section>
  );
}
