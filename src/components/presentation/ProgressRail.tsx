import { motion, useScroll, useSpring } from "motion/react";

export function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-neon origin-left z-50"
      style={{ scaleX }}
    />
  );
}
