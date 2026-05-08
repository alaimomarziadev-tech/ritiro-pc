import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Informazioni sintetiche sull’uso dei cookie per il sito del servizio di ritiro gratuito PC e materiale IT.",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <article className="border-b border-emerald-900/8 bg-white py-16 md:py-24">
      <Container>
        <nav className="mb-10 text-sm text-stone-500">
          <Link href="/" className="font-medium text-emerald-900 hover:underline">
            ← Torna alla home
          </Link>
        </nav>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-stone-900">
          Cookie policy
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Aggiornata a maggio 2026 · Versione tecnica sobria pensata insieme al
          perimetro dati pubblicato sulla privacy policy.
        </p>
        <div className="mt-10 max-w-3xl space-y-6 text-[15px] leading-relaxed text-stone-600">
          <p>
            Il sito viene rilasciato con un contenuto contenuto allo stretto necessario:
            gli unici cookie o memorizzazioni locali attesi sono legati al funzionamento
            dell’account amministratore del CMS (non presente) o agli analytics che
            deciderai di aggiungere in autonomia sull’infrastruttura Linux/VPS. In
            questo stato minimo sono previsti soltanto eventuali cookie tecnici dei
            servizi inclusi dall’hosting o dal reverse proxy configurato sulla macchina di
            produzione.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Come gestisco i banner e il consenso
          </h2>
          <p>
            Se non installi tracker di marketing o analitiche di terze parti senza il
            relativo modulo di consenso, il sito nella sua forma pubblicata non richiede
            alcun banner aggiuntivo oltre a eventuali comunicazioni dovute dall’ente
            di hosting selezionato. Integrando uno strumento di misurazione, ricorda il
            tracciamento degli eventi di preferenza e gli archivi delle richieste
            utente nei termini del regolatore competente Italiani UE.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Disattivazione
          </h2>
          <p>
            Tutti i browser moderni permettono di bloccare cookie di terzi o di rimuovere
            quelli già persistiti dalla scheda sicurezza. Per maggiori indicazioni fai
            riferimento all’assistenza dell’hardware o del software produttori del tuo strumento.
          </p>
          <p>
            Hai domande sulla conformità tecnica sulla tua VPS? Documenta sempre la
            catena degli strumenti (reverse proxy certificazioni SSL modulo log) perché sia
            semplice dimostrare l’uso responsabile degli accessi.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-block pt-4 text-emerald-900 underline-offset-4 hover:underline"
          >
            Vai anche alla privacy policy
          </Link>
        </div>
      </Container>
    </article>
  );
}
