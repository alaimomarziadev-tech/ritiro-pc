import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Informativa sul trattamento dei dati personali per il sito del servizio di ritiro gratuito PC e hardware aziendale.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="border-b border-emerald-900/8 bg-white py-16 md:py-24">
      <Container>
        <nav className="mb-10 text-sm text-stone-500">
          <Link href="/" className="font-medium text-emerald-900 hover:underline">
            ← Torna alla home
          </Link>
        </nav>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-stone-900">
          Privacy policy
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Ultimo aggiornamento: maggio 2026 · Modello informativa da adattare al
          titolare reale del trattamento e al caso concreto.
        </p>
        <div className="mt-10 max-w-3xl space-y-6 text-[15px] leading-relaxed text-stone-600">
          <p>
            La presente informativa descrive modalità e finalità del trattamento
            dei dati personali raccolti tramite il presente sito e i canali di
            contatto (modulo richieste, email, WhatsApp collegati al pulsante sul
            sito). Questo testo ha valore orientativo finché il titolare del
            trattamento — ad esempio il libero professionista che offre il
            ritiro materiale IT — non lo completa con riferimento normativo
            preciso alla propria struttura.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Titolare del trattamento
          </h2>
          <p>
            Inserisci qui identità completi del titolare del trattamento, sede —
            anche come libero professionista — e contatto dedicato privacy.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Tipologie di dati trattati
          </h2>
          <p>
            Tramite modulo contatti sono trattati, in caso di compilazione volontaria,
            nominativo, recapito email, denominazione dell’azienda, numero di
            telefono e contenuto della richiesta. Dati tecnici minimi sono
            trattati attraverso i log ordinari dei server ospitanti il sito
            conformemente alla configurazione del provider scelto in fase di
            deploy sulla VPS/Linux.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Finalità e base giuridica
          </h2>
          <p>
            I dati forniti attraverso i form o le email sono trattati per
            ricontattarti in merito alla richiesta di ritiro hardware, per
            organizzare sopralluoghi verbali da remoto e per documentare gli
            scambi indispensabili allo svolgimento del servizio. La base
            giuridica ordinaria sarà quella dell’esecuzione di misure
            precontrattuali richieste dall’interessato ovvero, ove configurabile,
            del legittimo interesse a rispondere alle richieste di contatto ben
            delimitato.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Conservazione
          </h2>
          <p>
            Conserva gli incarti solo per il tempo utile allo svolgimento del ritiro,
            allo svolgimento degli obblighi contabili o fiscali e per eventuali
            contestazioni nei termini ordinari di legge, salvo rinunce o anonimizzazioni
            anticipate.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Diritti dell’interessato
          </h2>
          <p>
            Gli utenti beneficiano dei diritti previsti dall’ordinamento sulla
            privacy applicabile richiedendo al titolare del trattamento accesso,
            rettifica, cancellazione nei casi compatibili, limitazione di
            trattamento, opposizione ove configurabile nonché lamentela al
            Garante per la protezione dei dati personali per l’Italia.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Cookie tecnici ed eventuali strumenti di misurazione
          </h2>
          <p>
            Solo cookie strettamente necessari al corretto funzionamento tecnico di
            questa esperienza vengono considerati nell’implementazione minimal del
            sito così consegnato. Per qualunque strumento aggiuntivo di statistica
            o newsletter integrato in futuro è necessaria un’analisi caso per caso,
            anche con riferimento al cookie policy correlata.
          </p>
          <p>
            Hai bisogno di personalizzazioni legali dedicate? Affidati sempre a uno
            studio specializzato: questa è una cornice tecnica pensata non per
            sostituirne il ruolo ma per essere coerente con un servizio chiaro e locale.
          </p>
        </div>
      </Container>
    </article>
  );
}
