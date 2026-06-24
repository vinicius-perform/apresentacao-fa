import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Kicker, Reveal } from "../primitives";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { presentationContent } from "@/lib/presentation-content";

function Scene({
  index,
  total,
  headline,
  label,
  image,
}: {
  index: number;
  total: number;
  headline: string;
  label: string;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const align = index % 2 === 0 ? "items-end" : "items-start";

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg/60" />

      <motion.div
        style={{ opacity }}
        className={`relative z-10 flex h-full ${align} px-6 md:px-16 lg:px-28 pb-20 pt-20`}
      >
        <div className="w-full max-w-5xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-fg-muted mb-6">
            <span className="h-px w-8 bg-neon shadow-[0_0_12px_var(--neon)]" />
            <span className="tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span>{label}</span>
          </div>
          <h3 className="font-display text-balance text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            {headline}
          </h3>
        </div>
      </motion.div>
    </section>
  );
}

function Mosaic() {
  const c = presentationContent.novaSede;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const lanes = [yA, yB, yC];

  return (
    <section ref={ref} className="relative min-h-screen w-full px-6 md:px-16 lg:px-28 py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Kicker>Visita guiada</Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
            Um espaço pensado para escalar pessoas, processos e cultura.
          </h3>
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-3 md:gap-5">
          {c.mosaic.map((tile, i) => {
            const aspects = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]"];
            return (
              <motion.div
                key={tile.label}
                style={{ y: lanes[i % 3] }}
                className={`overflow-hidden ${i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}`}
              >
                <motion.div
                  whileInView={{ scale: [1.08, 1] }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-10%" }}
                >
                  <MediaPlaceholder
                    label={tile.label}
                    aspect={i === 0 || i === 5 ? "aspect-[4/5]" : aspects[i % aspects.length]}
                    className="rounded-none"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function NovaSedeSection() {
  const c = presentationContent.novaSede;
  return (
    <div id="nova-sede" className="relative">
      <div className="sticky top-0 z-20 pointer-events-none">
        <div className="px-6 md:px-16 lg:px-28 pt-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-fg-muted">
            <span className="h-px w-8 bg-neon" />
            <span>{c.kicker}</span>
          </div>
        </div>
      </div>

      {c.scenes.map((scene, i) => (
        <Scene
          key={scene.label}
          index={i}
          total={c.scenes.length}
          headline={scene.headline}
          label={scene.label}
          image={scene.image}
        />
      ))}

      <Mosaic />
    </div>
  );
}
