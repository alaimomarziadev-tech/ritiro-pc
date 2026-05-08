import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { CalendarCheck, MessageSquare, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "Mi contatti",
    description:
      "Email, modulo o WhatsApp: descrivi in due righe cosa avete in magazzino o in ufficio.",
    icon: MessageSquare,
  },
  {
    title: "Concordiamo il ritiro",
    description:
      "Definiamo giorno, fascia oraria e accessi: niente tempi incerti o slittamenti continui.",
    icon: CalendarCheck,
  },
  {
    title: "Passo direttamente da voi",
    description:
      "Carico e organizzo il materiale senza interrompere il lavoro degli uffici.",
    icon: Truck,
  },
  {
    title: "Recupero, RAEE e canali abilitati",
    description:
      "Il materiale non più riutilizzabile che rientra nella disciplina RAEE viene avviato verso soggetti e centri autorizzati, con attenzione alla tracciabilità. Per le parti recuperabili resta la logica del riuso tecnico ove possibile.",
    icon: ShieldCheck,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="come-funziona"
      aria-labelledby="how-heading"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Come funziona"
            id="how-heading"
            title="Quattro passaggi chiari, dal primo messaggio al ritiro in sede"
            subtitle="Niente processi da call center: parli con la stessa persona dall’inizio alla fine, con tempi umani e spiegazioni in italiano semplice."
          />
        </FadeIn>

        <ol className="relative mx-auto max-w-3xl space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-12px)] before:w-px before:bg-emerald-900/15 md:before:left-1/2 md:before:-translate-x-1/2">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <li
                className={cn(
                  "relative grid gap-6 pl-14 md:grid-cols-2 md:items-center md:gap-12 md:pl-0",
                  index % 2 === 1 && "md:[&>div:first-child]:order-2",
                )}
              >
                <div className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-md ring-4 ring-white md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </div>
                <div className="md:pr-10">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-900/10">
                    <step.icon className="size-3.5" aria-hidden />
                    Passo {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-stone-600 md:pl-10">
                  {step.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
