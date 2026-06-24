import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Kicker, Reveal, Section } from "@/components/presentation/primitives";
import { presentationContent } from "@/lib/presentation-content";

function Scene({
  index,
  total,
  image,
  title,
  caption,
}: {
  index: number;
  total: number;
  image: string;
  title: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg/60" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 md:px-16 lg:px-28 pb-20"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-fg-muted mb-6">
          <span className="h-px w-8 bg-neon" />
          <span className="tabular-nums">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-fg max-w-4xl leading-[1.05]">
          {title}
        </h3>
        {caption ? (
          <p className="mt-4 text-sm md:text-base text-fg-dim max-w-2xl">
            {caption}
          </p>
        ) : null}
      </motion.div>
    </section>
  );
}

export function NovaSedeSection() {
  const { novaSede } = presentationContent;
  const scenes = novaSede.scenes;

  return (
    <div id="nova-sede" className="relative">
      <Section className="!min-h-[60vh]">
        <div className="max-w-5xl">
          <Reveal>
            <Kicker>{novaSede.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
              {novaSede.headline}
            </h2>
          </Reveal>
          {novaSede.description ? (
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-fg-dim leading-relaxed">
                {novaSede.description}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Section>

      {scenes.map((scene, i) => (
        <Scene
          key={scene.title}
          index={i + 1}
          total={scenes.length}
          image={scene.image}
          title={scene.title}
          caption={scene.caption}
        />
      ))}

      <Section className="!min-h-[80vh]">
        <div className="w-full max-w-7xl">
          <Reveal>
            <Kicker>Mosaico</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-6 font-display text-3xl md:text-5xl font-semibold tracking-tight">
              Um ecossistema em construção.
            </h3>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {scenes.map((scene, i) => (
              <motion.div
                key={`m-${scene.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "relative overflow-hidden rounded-xl hairline group " +
                  (i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]")
                }
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-[11px] uppercase tracking-[0.3em] text-fg-dim">
                  {scene.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
