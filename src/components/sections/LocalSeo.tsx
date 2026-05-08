import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

export function LocalSeo() {
  const { radiusKm, centerLabel } = siteConfig.coverage;

  return (
    <section
      id="seo-locale"
      aria-labelledby="seo-heading"
      className="scroll-mt-24 border-t border-emerald-900/8 bg-[color:var(--color-surface-soft)] py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Servizio sul territorio"
            id="seo-heading"
            title={`Ritiro gratuito nell’area di circa ${radiusKm} km da ${centerLabel}`}
            subtitle="Testo orientato a chi cerca informazioni pratiche sul ritiro hardware senza passare da intermediari anonimi."
          />
        </FadeIn>
        <FadeIn delay={0.06}>
          <article className="mx-auto max-w-3xl space-y-6 leading-relaxed text-stone-600">
            <p>
              Piccole e medie imprese, professionisti e punti vendita tra la bergamasca e
              i territori compresi nel cerchio geografico dichiarato sopra (misurato da{" "}
              {centerLabel}) si ritrovano spesso
              con scaffali pieni di{" "}
              <strong className="font-semibold text-stone-900">
                pc usati, monitor, switch e materiale di rete fuori linea
              </strong>
              . Il raggio di circa {radiusKm} chilometri in linea d’aria da{" "}
              <strong className="font-semibold text-stone-900">{centerLabel}</strong> descrive
              l’area pubblicata sul sito; la compatibilità finale si verifica sempre con indirizzo o
              pin sulla mappa prima di fissare giorno e fascia oraria dell’intervento.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Ritiro hardware aziendale a Bergamo
            </h3>
            <p>
              Se cerchi un{" "}
              <strong className="font-semibold text-stone-900">
                ritiro hardware aziendale Bergamo
              </strong>
              , parliamo di lotti misti da prelevare in sede — workstation, notebook, monitor in
              surplus e, se inclusi nell’accordo, elementi rack. L’idea è liberare tempo alle persone che non possono gestire anche la logistica del dismesso.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Smaltimento RAEE e apparecchiature elettroniche
            </h3>
            <p>
              Per chi cerca anche lo{" "}
              <strong className="font-semibold text-stone-900">smaltimento RAEE</strong>
              delle apparecchiature elettriche ed elettroniche, il ritiro in sede è il punto di ingresso pubblico:
              dopo il caricamento il lotto destinato allo smaltimento segue percorsi verso soggetti abilitati, con cura alla tracciabilità richiesta dalla normativa. Una breve scheda tecnica via email (tipo e quantità di apparati)
              accelera il dialogo sulla gestione dopo la data concordata.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Monza Brianza e verso Milano
            </h3>
            <p>
              Alcuni comuni del nord della provincia{" "}
              <strong className="font-semibold text-stone-900">di Monza e della Brianza</strong> possono ricadere
              nello stesso cerchio; il centro della città di Milano, in molti casi,
              eccede questo raggio rispetto a {centerLabel}. Anche cercando parole come{" "}
              <strong className="font-semibold text-stone-900">
                ritiro pc Monza Brianza
              </strong>{" "}
              il flusso non cambia: sintesi tecnica sulla posta elettronica, posizione sulla cartina,
              riscontro onesto sulla distanza e poi eventuale appuntamento in sede.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Smaltimento pc da ufficio in sicurezza
            </h3>
            <p>
              Chi associa parole come{" "}
              <strong className="font-semibold text-stone-900">
                smaltimento pc ufficio Bergamo
              </strong>{" "}
              a procedure ordinate apprezza quando il ritiro viene programmato, non improvvisato sul
              marciapiede: meno confusione sugli asset con dati residui e meno fermi alle postazioni mentre si smonta fisicamente l’hardware.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Server usati e infrastruttura in Lombardia
            </h3>
            <p>
              Il{" "}
              <strong className="font-semibold text-stone-900">
                ritiro server usati Lombardia
              </strong>{" "}
              nell’area di raggio richiede dettaglio su elevatori, scalinate di servizio e ingombri
              effettivi: più informazioni sono chiare sulla mail tecnica prima del passaggio, più è semplice
              arrivare sul posto preparati al caricamento.
            </p>
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Recupero pc dismessi dalle imprese
            </h3>
            <p>
              Chi ricerca{" "}
              <strong className="font-semibold text-stone-900">
                recupero pc dismessi aziende
              </strong>{" "}
              spesso vuole chiudere un capitolo logistico nei magazzini. Un freelance che risponde in prima persona riduce gli attriti e rende trasparenti i tempi sul calendario rispetto al raggio operativo comunicato sulla pagina.
            </p>
            <p>
              Indica posizione sulla mappa e tipologia degli apparati: riceverai in giornata lavorativa
              un riscontro chiaro sulla compatibilità con il raggio operativo di circa {radiusKm}{" "}
              km (punto di misura: {centerLabel}) e sulla pianificazione del ritiro gratuito concordato.
            </p>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
