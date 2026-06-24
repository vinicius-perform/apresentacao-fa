import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/presentation/SmoothScroll";
import { ProgressRail } from "@/components/presentation/ProgressRail";
import { TopBar } from "@/components/presentation/TopBar";
import { HeroSection } from "@/components/presentation/sections/HeroSection";
import { WhatIsSection } from "@/components/presentation/sections/WhatIsSection";
import { FutureSection } from "@/components/presentation/sections/FutureSection";
import { NovaSedeSection } from "@/components/presentation/sections/NovaSedeSection";
import { ExpansionSection } from "@/components/presentation/sections/ExpansionSection";


import { WhySection } from "@/components/presentation/sections/WhySection";
import { GrowthSection } from "@/components/presentation/sections/GrowthSection";
import { PivotSection } from "@/components/presentation/sections/PivotSection";
import { PainSection } from "@/components/presentation/sections/PainSection";
import { SecretSection } from "@/components/presentation/sections/SecretSection";
import { RevealSection } from "@/components/presentation/sections/RevealSection";
import { DotSalesSection } from "@/components/presentation/sections/DotSalesSection";
import { MachineSection } from "@/components/presentation/sections/MachineSection";
import { ImpactSection } from "@/components/presentation/sections/ImpactSection";
import { FutureBusinessSection } from "@/components/presentation/sections/FutureBusinessSection";
import { ClosingSection } from "@/components/presentation/sections/ClosingSection";
import { InviteSection } from "@/components/presentation/sections/InviteSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FA × DotSales — Keynote" },
      {
        name: "description",
        content:
          "A história da Fazendo Acontecer e a revelação do DotSales — o cérebro comercial que escala a operação.",
      },
      { property: "og:title", content: "FA × DotSales — Keynote" },
      {
        property: "og:description",
        content: "Uma jornada cinematográfica sobre crescimento, processos e tecnologia.",
      },
    ],
  }),
  component: Keynote,
});

function Keynote() {
  return (
    <main className="relative bg-bg text-fg">
      <SmoothScroll />
      <ProgressRail />
      <TopBar />

      <HeroSection />
      <WhatIsSection />
      <FutureSection />
      <NovaSedeSection />
      <ExpansionSection />


      <WhySection />
      <GrowthSection />
      <PivotSection />
      <PainSection />
      <SecretSection />
      <RevealSection />
      <DotSalesSection />
      <MachineSection />
      <ImpactSection />
      <FutureBusinessSection />
      <ClosingSection />
      <InviteSection />
    </main>
  );
}
