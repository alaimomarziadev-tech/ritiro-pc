import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";
import {
  Cable,
  Cpu,
  HardDrive,
  Laptop,
  Monitor,
  Network,
  Package,
  PcCase,
  Server,
  ShieldCheck,
} from "lucide-react";

const items: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "PC desktop",
    description: "Torri, workstation e postazioni fisse anche in parco numeroso.",
    icon: PcCase,
  },
  {
    title: "Notebook",
    description: "Portatili aziendali, caricabatterie e docking collegati.",
    icon: Laptop,
  },
  {
    title: "Monitor",
    description: "LCD, LED e accessori da scrivania o call center.",
    icon: Monitor,
  },
  {
    title: "Switch e rete",
    description: "Switch managed, router, firewall rack e cablaggio in eccesso.",
    icon: Network,
  },
  {
    title: "Server e rack",
    description: "Macchine fuori garanzia o sostituite da upgrade recenti.",
    icon: Server,
  },
  {
    title: "NAS e storage",
    description: "NAS, array esterni e dischi dove presenti unità complete.",
    icon: HardDrive,
  },
  {
    title: "Componenti hardware",
    description: "RAM, alimentatori, schede madri e kit ancora imballati.",
    icon: Cpu,
  },
  {
    title: "Materiale IT inutilizzato",
    description: "Stock fermo in magazzino: tastiere, mouse, docking, cavi.",
    icon: Package,
  },
  {
    title: "Smaltimento RAEE (percorsi conformi)",
    description:
      "Apparecchiature elettriche ed elettroniche assoggettabili a RAEE: dopo il ritiro il lotto viene indirizzato verso canali autorizzati, con cura alla tracciabilità richiesta dalla normativa.",
    icon: ShieldCheck,
  },
];

export function WhatWeCollect() {
  return (
    <section
      id="cosa-ritiriamo"
      aria-labelledby="collect-heading"
      className="scroll-mt-24 bg-[color:var(--color-surface-soft)] py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Cosa ritiro"
            id="collect-heading"
            title="Attrezzatura informatica dismessa che occupa spazio e tempo"
            subtitle="Intervengo su lotti misti: dall’ufficio amministrativo alla piccola server room — incluso materiale ICT che può essere assoggettato allo smaltimento RAEE quando la normativa lo richiede. Su WhatsApp basta un elenco sintetico: ti confermo cosa rientra nel ritiro gratuito e come gestiamo la parte RAEE."
          />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <article
                className={cn(
                  "flex h-full flex-col gap-4 rounded-3xl border border-emerald-900/8 bg-white p-6 shadow-[0_12px_40px_-34px_rgba(15,118,110,0.65)] transition hover:-translate-y-[2px] hover:border-emerald-800/25 hover:shadow-[0_18px_55px_-34px_rgba(15,118,110,0.55)]",
                )}
              >
                <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-900/10">
                  <item.icon className="size-[22px] text-emerald-950" aria-hidden />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  <Cable className="size-3.5" aria-hidden />
                  Compatibile con pickup in blocco
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
