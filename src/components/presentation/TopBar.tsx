import { motion } from "motion/react";
import { FALogo } from "./primitives";

export function TopBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5"
    >
      <FALogo className="text-base" />
      <div className="text-[10px] uppercase tracking-[0.4em] text-fg-dim">
        Keynote · 2026
      </div>
    </motion.header>
  );
}
