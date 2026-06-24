import { motion } from "framer-motion";
import { Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";

export function GrowthSection() {
  const c = presentationContent.growth;
  return (
    <Section>
      {/* Subtle particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20" />
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-neon"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              boxShadow: "0 0 10px var(--neon)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.6, 0.2] }}
            transition={{
              duration: 4,
              delay: (i % 8) * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            viewport={{ once: false }}
          />
        ))}
        {/* Green glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--neon) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center w-full px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-display font-bold tracking-tight leading-none text-fg"
          style={{
            fontSize: "clamp(4rem, 18vw, 18rem)",
            textShadow:
              "0 0 60px color-mix(in oklab, var(--neon) 35%, transparent), 0 0 120px color-mix(in oklab, var(--neon) 18%, transparent)",
          }}
        >
          {c.word}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 text-[11px] uppercase tracking-[0.4em] text-fg-muted"
        >
          {c.caption}
        </motion.p>
      </div>
    </Section>
  );
}
