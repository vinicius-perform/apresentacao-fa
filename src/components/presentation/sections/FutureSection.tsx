import { motion } from "motion/react";
import { Reveal, Section } from "../primitives";
import { presentationContent } from "@/lib/presentation-content";
import { LazyVideo } from "../LazyVideo";

export function FutureSection() {
  const c = presentationContent.future;
  return (
    <Section fullBleed>
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Placeholder for fullscreen video. Drop your file at /public/videos/nova-sede.mp4 */}
        <LazyVideo
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={c.videoPlaceholder} type="video/webm" />
        </LazyVideo>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <Reveal>
            <motion.h2 className="font-display text-balance text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02]">
              {c.headline}
            </motion.h2>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="mt-10 text-balance text-lg md:text-2xl text-fg-muted">{c.overlay}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
