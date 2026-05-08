import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";
import { BadgePercent, Leaf, MapPin, Recycle, Scale, Timer, Wallet } from "lucide-react";

export function WhyChoose() {
  const { radiusKm, centerLabel } = siteConfig.coverage;

  const cards = [
    {
      title: "Ritiro gratuito",
      body: "Per i lotti concordati non aggiungo costi nascosti: il servizio resta chiaro nella proposta e nelle email che ci scambiamo.",
      icon: Wallet,
    },
    {
      title: "Nessun costo per voi",
      body: "Niente tariffari complicati o voci da consulenza: parliamo di numeri solo se servono optional extra, mai per il ritiro base.",
      icon: BadgePercent,
    },
    {
      title: "Recupero ecosostenibile",
      body: "Flussi di recupero ordinati rispetto all’abbandono del cassonetto o del magazzino dimenticato.",
      icon: Leaf,
    },
    {
      title: "Riduzione sprechi elettronici",
      body: "Meno apparecchi che finiscono dispersi: organizzo il carico e la destinazione con attenzione al ciclo del materiale.",
      icon: Recycle,
    },
    {
      title: "Smaltimento RAEE ordinato",
      body: "Le apparecchiature elettroniche che devono uscire dall’azienda con percorsi RAEE non restano in corridoi senza destinazione: dopo il ritiro seguono imbocchi verso soggetti e centri autorizzati, nel rispetto della tracciabilità richiesta dalla normativa sui rifiuti da apparecchiature elettriche ed elettroniche.",
      icon: Scale,
    },
    {
      title: "Rapidità",
      body: "Risposta in giornata lavorativa e passaggio in sede senza lunghe attese o form infiniti.",
      icon: Timer,
    },
    {
      title: "Freelance IT locale",
      body: `Interlocutore unico sulla tratta tra ${centerLabel} e tutte le sedi incluse nell’area di circa ${radiusKm} km: capisce uffici reali, non brochure.`,
      icon: MapPin,
    },
  ];

  return (
    <section
      id="perche-scegliere"
      aria-labelledby="why-heading"
      className="scroll-mt-24 border-y border-emerald-900/8 bg-[color:var(--color-surface-soft)] py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Perché scegliere me"
            id="why-heading"
            title="Professionalità locale, linguaggio chiaro e impegno concreto"
            subtitle="Non vendo licenze o abbonamenti: recupero materiale informatico dismesso con attenzione alla compliance e alla gestione ordinata degli spazi aziendali."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-[0_16px_50px_-36px_rgba(6,78,59,0.65)]">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-stone-900 text-emerald-200 shadow-inner">
                  <card.icon className="size-[22px]" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">{card.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
