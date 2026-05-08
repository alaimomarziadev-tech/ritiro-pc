import { Contact } from "@/components/sections/Contact";
import { Coverage } from "@/components/sections/Coverage";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LocalSeo } from "@/components/sections/LocalSeo";
import { WhatWeCollect } from "@/components/sections/WhatWeCollect";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeCollect />
      <HowItWorks />
      <WhyChoose />
      <Coverage />
      <LocalSeo />
      <Contact />
    </>
  );
}
