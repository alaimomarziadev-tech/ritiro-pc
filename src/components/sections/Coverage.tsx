import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";
import { CircleDot, MapPinOff, Radar, Route } from "lucide-react";

export function Coverage() {
  const { radiusKm, centerLabel } = siteConfig.coverage;
  const r = `${radiusKm} km`;

  return (
    <section
      id="zona-coperta"
      aria-labelledby="coverage-heading"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Zona coperta"
            id="coverage-heading"
            title={`Tutti i comuni entro circa ${r} (${centerLabel})`}
            subtitle="Non elenco tutti i comuni sulla pagina — sarebbe lungo e poco chiaro: se la tua sede rientra nel raggio, il ritiro segue sempre la stessa procedura trasparente."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center">
            <div
              role="img"
              aria-label={`Area operativa schematica di circa ${r} in linea d’aria dal punto di riferimento ${centerLabel}`}
              className="relative overflow-hidden rounded-[32px] border border-emerald-900/10 bg-gradient-to-br from-emerald-50 via-white to-stone-50 p-8 shadow-[0_30px_80px_-52px_rgba(15,118,110,0.75)]"
            >
              <svg
                viewBox="0 0 480 340"
                className="mx-auto w-full max-w-lg"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <defs>
                  <linearGradient id="covFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ecfdf5" />
                    <stop offset="100%" stopColor="#f8fafc" />
                  </linearGradient>
                  <linearGradient id="covRing" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#047857" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#065f46" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="480"
                  height="340"
                  rx="20"
                  fill="url(#covFill)"
                />
                <ellipse
                  cx="240"
                  cy="175"
                  rx="168"
                  ry="128"
                  fill="url(#covRing)"
                  stroke="#065f46"
                  strokeOpacity="0.55"
                  strokeWidth="2.5"
                  strokeDasharray="10 14"
                />
                <ellipse
                  cx="240"
                  cy="175"
                  rx="168"
                  ry="128"
                  fill="none"
                  stroke="#0f766e"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                  strokeDasharray="4 8"
                  transform="rotate(-6 240 175)"
                />
                <circle cx="240" cy="175" r="8" fill="#022c22" stroke="#bbf7d0" strokeWidth="2" />
                <text
                  x="240"
                  y="198"
                  textAnchor="middle"
                  fill="#1c1917"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                >
                  {centerLabel}
                </text>
              </svg>
              <div className="mt-6 flex justify-center">
                <p className="rounded-full bg-emerald-950 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-100 ring-2 ring-emerald-400/30">
                  Raggio pubblico circa {radiusKm}&nbsp;km · in linea d’aria
                </p>
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-stone-500">
                Schema indicativo: il raggio si intende tra {centerLabel} e la sede (in linea d’aria,
                da verificare con indirizzo o pin). Percorso su strada e tempi si concordano a parte.
              </p>
            </div>

            <div className="space-y-5">
              <ul className="space-y-3">
                <li className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 px-4 py-3.5 text-sm text-stone-700">
                  <Radar className="mt-0.5 size-5 shrink-0 text-emerald-900" aria-hidden />
                  <span>
                    <strong className="font-semibold text-stone-900">
                      Tutti i comuni nel raggio
                    </strong>
                    {" — "}
                    La copertura è per raggio di circa {r} in linea d’aria da{" "}
                    {centerLabel}: rientrano
                    tutti i centri comunali — città, paesi e frazioni rilevanti per la sede —
                    finché ricadono nel cerchio sulla mappa. Nessun elenco incompleto: se il territorio comunale ricade nell’area, vale lo stesso servizio gratuito promesso sulla pagina.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3.5 text-sm text-stone-700 shadow-sm">
                  <CircleDot className="mt-0.5 size-5 shrink-0 text-emerald-800" aria-hidden />
                  <span>
                    <strong className="font-semibold text-stone-900">
                      Come sapere subito se ci sei dentro
                    </strong>
                    {" — "}
                    mandami CAP o un pin sulla mappa: ti confermo prima se sei nel cerchio dichiarato, così concordiamo giorno e orario senza tentativi a vuoto.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3.5 text-sm text-stone-700 shadow-sm">
                  <Route className="mt-0.5 size-5 shrink-0 text-emerald-800" aria-hidden />
                  <span>
                    <strong className="font-semibold text-stone-900">
                      Fuori dal raggio pubblicato
                    </strong>
                    {" — "}
                    posizioni più lontane dal punto di partenza sulla mappa (es. parti molto più a sud dell’area) si valutano sul tragitto: scrivimi posizione sintetica e tipologia di materiale così vediamo se conviene comunque intervenire.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm text-stone-600">
                  <MapPinOff className="mt-0.5 size-5 shrink-0 text-stone-500" aria-hidden />
                  <span>
                    Il valore pubblicato ({r}) descrive l’area ordinaria degli interventi: resta sempre un controllo sulla mappa con indirizzo o pin prima di confermare giorno ed ora dell’uscita effettiva.
                  </span>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-stone-600">
                Una volta verificato che la sede rientra nell’area dei circa {radiusKm}&nbsp;km, organizzo il passaggio in sede con citofono, fascia oraria e eventuali procedure di sicurezza dello stabilimento.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
