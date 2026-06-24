import { motion, useInView, useMotionValue, useTransform, animate, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  fullBleed = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
} & HTMLMotionProps<"section">) {
  return (
    <motion.section
      id={id}
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden",
        !fullBleed && "px-6 md:px-16 lg:px-28 py-24",
        className,
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.32em] text-fg-muted">
      <span className="h-px w-8 bg-neon" />
      <span>{children}</span>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-15% 0px -15% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  from = 0,
  to,
  duration = 2.4,
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("pt-BR"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function FALogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-montserrat font-extrabold", className)}>
      <span className="relative">
        <span className="text-fg">FA</span>
        <span className="absolute -right-2 top-0 h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]" />
      </span>
    </div>
  );
}

export function DotSalesLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-display font-semibold tracking-tight", className)}>
      <span className="relative inline-flex items-center justify-center h-3 w-3 rounded-full bg-neon shadow-[0_0_24px_var(--neon)]" />
      <span>DotSales</span>
    </div>
  );
}

export function GVDLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 font-montserrat font-extrabold tracking-tight uppercase", className)}>
      <span className="relative inline-flex items-center justify-center h-3.5 w-3.5 rounded-full bg-neon shadow-[0_0_24px_var(--neon)]" />
      <span>Método GVD</span>
    </div>
  );
}
