import { getWhatsAppLink, siteConfig } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.35fr_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold text-stone-900">
              Ritiro gratuito hardware aziendale
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-stone-600">
              Pickup gratuito per sedi nell’area operativa comunicata (~
              {siteConfig.coverage.radiusKm} km in linea d’aria da{" "}
              {siteConfig.coverage.centerLabel}): uffici, negozi e liberi
              professionisti; smaltimento RAEE su percorsi abilitati quando il lotto lo richiede. Coerenza, tempi chiari e niente sorprese sui costi.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div className="space-y-3">
              <p className="font-semibold text-stone-900">Collegamenti</p>
              <ul className="space-y-2 text-stone-600">
                <li>
                  <Link href="/privacy-policy" className="hover:text-emerald-900">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-emerald-900">
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link href="/#seo-locale" className="hover:text-emerald-900">
                    Informazioni utili locali
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-stone-900">Contatto rapido</p>
              <ul className="space-y-2 text-stone-600">
                <li>
                  <a
                    className="hover:text-emerald-900"
                    href={`mailto:${siteConfig.contactEmail}`}
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-emerald-900"
                    href={getWhatsAppLink()}
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:text-emerald-900"
                    href={siteConfig.linkedInUrl}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} · {siteConfig.businessName}. Tutti i diritti riservati.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed sm:text-right">
            P.IVA e dati societari vanno inseriti qui se operi in forma
            strutturata; in alternativa indica chiaramente che operi come
            libero professionista.
          </p>
        </div>
      </div>
    </footer>
  );
}
