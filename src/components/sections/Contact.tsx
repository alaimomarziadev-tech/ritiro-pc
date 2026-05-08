"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { getWhatsAppLink, siteConfig } from "@/lib/constants";
import { LinkedInGlyph } from "@/components/icons/LinkedInGlyph";
import { Check, Copy, Loader2, Mail, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setErrorMessage("Copia manuale non disponibile in questo browser.");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    if (!payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage("Email e messaggio sono obbligatori.");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Invio non riuscito. Riprova o usa WhatsApp.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Errore di rete. Scrivimi su WhatsApp.");
    }
  }

  return (
    <section
      id="contatti"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-stone-950 py-20 text-stone-100 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contatti diretti"
            id="contact-heading"
            title="Scrivimi per capire tempi e modalità — risposta umana"
            subtitle="Preferisci email, modulo o WhatsApp: ti rispondo in giornata lavorativa, senza liste di distribuzione anonime."
            align="center"
            theme="dark"
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1.05fr)]">
            <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_30px_90px_-60px_rgba(16,185,129,0.35)] backdrop-blur-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
                  Canali immediati
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  Contatto rapido
                </h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-stone-900/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200">
                        <Mail className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-stone-400">
                          Email
                        </p>
                        <a
                          href={`mailto:${siteConfig.contactEmail}`}
                          className="text-sm font-medium text-white hover:text-emerald-200"
                        >
                          {siteConfig.contactEmail}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/15"
                    >
                      {copied ? (
                        <>
                          <Check className="size-4" aria-hidden /> Copiato
                        </>
                      ) : (
                        <>
                          <Copy className="size-4" aria-hidden /> Copia email
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <ButtonLink
                  href={getWhatsAppLink(
                    `Ciao, sono interessato a un ritiro informatico in azienda. Zona indicativa:`,
                  )}
                  external
                  className={cn(
                    "w-full justify-center border-0 bg-emerald-500 text-emerald-950 hover:bg-emerald-400 min-h-[3rem]",
                  )}
                >
                  <MessageCircle className="size-[18px]" aria-hidden />
                  Apri WhatsApp
                </ButtonLink>

                <ButtonLink
                  href={siteConfig.linkedInUrl}
                  variant="secondary"
                  external
                  className={cn(
                    "w-full justify-center border-emerald-500/30 bg-white/10 text-white hover:bg-white/18 min-h-[3rem]",
                  )}
                >
                  <LinkedInGlyph className="size-[18px]" />
                  LinkedIn professionale
                </ButtonLink>
              </div>

              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/30 p-5 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/85">
                  QR codice LinkedIn
                </p>
                <div className="mx-auto inline-block rounded-2xl bg-white p-3">
                  <QRCode
                    value={siteConfig.linkedInUrl}
                    size={140}
                    bgColor="#ffffff"
                    fgColor="#0f172a"
                    aria-label="QR code per aprire il profilo LinkedIn"
                  />
                </div>
                <p className="mt-3 text-xs text-stone-300">
                  Inquadra con lo smartphone per salvare il profilo.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white p-7 text-stone-900 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.55)]">
              <h3 className="font-display text-2xl font-semibold text-stone-900">
                Modulo richiesta ritiro
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                Indica fascia oraria utile per richiamarti e qualche dettaglio
                sul materiale da ritirare.
              </p>
              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-stone-700">
                    Nome e cognome
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 outline-none ring-emerald-800/40 transition focus:bg-white focus:ring-2"
                    />
                  </label>
                  <label className="block text-sm font-medium text-stone-700">
                    Email di lavoro
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 outline-none ring-emerald-800/40 transition focus:bg-white focus:ring-2"
                    />
                  </label>
                  <label className="block text-sm font-medium text-stone-700">
                    Ragione sociale (facoltativo)
                    <input
                      name="company"
                      autoComplete="organization"
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 outline-none ring-emerald-800/40 transition focus:bg-white focus:ring-2"
                    />
                  </label>
                  <label className="block text-sm font-medium text-stone-700">
                    Telefono
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 outline-none ring-emerald-800/40 transition focus:bg-white focus:ring-2"
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium text-stone-700">
                  Messaggio
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-1.5 w-full resize-y rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-stone-900 outline-none ring-emerald-800/40 transition focus:bg-white focus:ring-2"
                    placeholder="Esempio: 14 desktop, monitor misti e due switch fuori uso. Sede a Seriate."
                  />
                </label>

                {errorMessage ? (
                  <p className="text-sm font-medium text-red-700">{errorMessage}</p>
                ) : null}
                {status === "ok" ? (
                  <p className="text-sm font-medium text-emerald-800">
                    Richiesta inviata correttamente. Ti rispondo a breve.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full min-h-[3rem] items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-stone-400"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden /> Invio
                      in corso…
                    </>
                  ) : (
                    <>
                      <Mail className="size-4" aria-hidden />
                      Invia richiesta ritiro gratuito
                    </>
                  )}
                </button>

                <p className="text-xs leading-relaxed text-stone-500">
                  Continuando, confermi di aver letto{" "}
                  <a href="/privacy-policy" className="underline hover:text-emerald-900">
                    l’informativa privacy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
