import { motion } from "motion/react";
import { GVDLogo, Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function RevealSection() {
  const c = presentationContent.reveal;
  return (
    <Section>
      <div className="absolute inset-0 vignette" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-neon-soft blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GVDLogo className="text-4xl md:text-6xl justify-center" />
        </motion.div>
        <Reveal delay={0.6}>
          <h2 className="font-display text-balance text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            {c.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.9}>
          <p className="text-balance text-base md:text-xl text-fg-muted max-w-2xl mx-auto">
            {c.sub}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
