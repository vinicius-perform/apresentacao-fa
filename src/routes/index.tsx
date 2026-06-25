import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { SmoothScroll } from "@/components/presentation/SmoothScroll";
import { ProgressRail } from "@/components/presentation/ProgressRail";
import { TopBar } from "@/components/presentation/TopBar";
import { HeroSection } from "@/components/presentation/sections/HeroSection";
import { WhatIsSection } from "@/components/presentation/sections/WhatIsSection";
import { CultureSection } from "@/components/presentation/sections/CultureSection";
import { FutureSection } from "@/components/presentation/sections/FutureSection";
import { NovaSedeSection } from "@/components/presentation/sections/NovaSedeSection";
import { AndarSuperiorSection } from "@/components/presentation/sections/AndarSuperiorSection";
import { ExpansionSection } from "@/components/presentation/sections/ExpansionSection";
import { PivotSection } from "@/components/presentation/sections/PivotSection";
import { AllocatorsSection } from "@/components/presentation/sections/AllocatorsSection";
import { MethodologySection } from "@/components/presentation/sections/MethodologySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FA - Aceleração Comercial" },
      {
        name: "description",
        content:
          "A história da Fazendo Acontecer e a revelação do DotSales — o cérebro comercial que escala a operação.",
      },
      { property: "og:title", content: "FA - Aceleração Comercial" },
      {
        property: "og:description",
        content: "Uma jornada cinematográfica sobre crescimento, processos e tecnologia.",
      },
    ],
  }),
  component: Keynote,
});

function Keynote() {
  const methodologyRef = useRef<HTMLDivElement>(null);

  // Monitora a entrada da MethodologySection na viewport
  const { scrollYProgress } = useScroll({
    target: methodologyRef,
    offset: ["start end", "start start"],
  });

  // Interpola o background e cor de texto globais do site
  const backgroundColor = useTransform(scrollYProgress, [0.3, 0.95], ["#000000", "#ffffff"]);
  const color = useTransform(scrollYProgress, [0.3, 0.95], ["#ffffff", "#000000"]);

  return (
    <motion.main 
      style={{ backgroundColor, color }}
      className="relative bg-bg text-fg transition-colors duration-100"
    >
      <SmoothScroll />
      <ProgressRail />
      <TopBar />

      <HeroSection />
      <WhatIsSection />
      <CultureSection />
      <FutureSection />
      <NovaSedeSection />
      <AndarSuperiorSection />
      <ExpansionSection />
      <PivotSection />
      <AllocatorsSection />
      <MethodologySection containerRef={methodologyRef} scrollYProgress={scrollYProgress} />
    </motion.main>
  );
}

