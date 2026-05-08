"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getWhatsAppLink, siteConfig } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { LinkedInGlyph } from "@/components/icons/LinkedInGlyph";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-stone-950 scroll-mt-16"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2200"
          alt="Sala rack e infrastruttura IT in ambiente aziendale"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-90"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-950/78 to-emerald-950/55"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(216,252,234,0.09),_transparent_55%)]" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100 ring-1 ring-white/15 backdrop-blur-md">
            Freelance IT · ritiro · RAEE
          </p>

          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl md:text-[3.15rem] lg:text-[3.45rem]"
            >
              Ritiro gratuito PC e materiale informatico dismesso
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-stone-100/90 sm:text-xl">
              Servizio professionale di recupero hardware per aziende, uffici e
              attività — con gestione dello{" "}
              <strong className="font-semibold text-white">smaltimento RAEE</strong> lungo percorsi
              autorizzati quando il materiale è disciplinato dalla normativa. Area operativa
              comunicata entro circa {siteConfig.coverage.radiusKm}&nbsp;km in linea d’aria da{" "}
              {siteConfig.coverage.centerLabel}. Sedi più distanti si valutano in base al tragitto.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/#contatti"
              variant="primary"
              className="min-h-12 border border-white/10 bg-emerald-500 text-emerald-950 hover:bg-emerald-400"
            >
              <Mail className="size-4" aria-hidden />
              Contattami
            </ButtonLink>
            <ButtonLink
              href={getWhatsAppLink(
                `Ciao, ho bisogno di un ritiro hardware in azienda.`,
              )}
              variant="secondary"
              external
              className="min-h-12 border-emerald-700/30 bg-white text-emerald-950 hover:bg-emerald-50"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </ButtonLink>
            <ButtonLink
              href={siteConfig.linkedInUrl}
              variant="secondary"
              external
              className="min-h-12 border-emerald-700/30 bg-white/10 text-white hover:bg-white/15"
            >
              <LinkedInGlyph className="size-4" />
              LinkedIn
            </ButtonLink>
          </div>

          <p className="text-sm text-stone-300/90">
            Desktop, laptop, monitor, rack, accessori e apparati soggetti a RAEE quando
            applicabile:
            ordinato, veloce e comprensibile anche per chi non è tecnico.{" "}
            <Link href="#cosa-ritiriamo" className="font-medium text-emerald-200 underline-offset-4 hover:underline">
              Vedi cosa posso ritirare
            </Link>
            .
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
