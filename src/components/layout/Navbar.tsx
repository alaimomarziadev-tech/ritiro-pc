"use client";

import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig, getWhatsAppLink } from "@/lib/constants";
import { LinkedInGlyph } from "@/components/icons/LinkedInGlyph";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#cosa-ritiriamo", label: "Cosa ritiro" },
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#perche-scegliere", label: "Perché scegliere me" },
  { href: "#zona-coperta", label: "Zona coperta" },
  { href: "#contatti", label: "Contatti" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors",
        scrolled && "border-stone-200/90 bg-[color:var(--color-surface-solid)] shadow-sm shadow-stone-200/60",
        !scrolled && "bg-[color:var(--color-surface-solid)]/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/#hero"
          className="group flex shrink-0 flex-col gap-0.5"
          aria-label="Torna alla home"
        >
          <span className="font-display text-base font-semibold tracking-tight text-stone-900 sm:text-lg">
            Ritiro PC gratuito
          </span>
          <span className="text-xs text-stone-500 group-hover:text-stone-600 sm:text-sm">
            ~{siteConfig.coverage.radiusKm}&nbsp;km da {siteConfig.coverage.centerLabel}
          </span>
        </Link>

        <nav
          aria-label="Principale"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink
            href={`mailto:${siteConfig.contactEmail}`}
            variant="ghost"
            className="rounded-full px-3 py-2 text-sm"
          >
            Email rapida
          </ButtonLink>
          <ButtonLink
            href={getWhatsAppLink(
              `Ciao, vorrei parlare di un ritiro hardware per la mia azienda.`,
            )}
            variant="secondary"
            className="px-4 py-2"
            external
          >
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex rounded-full border border-stone-200 p-2 text-stone-800 transition-colors hover:bg-stone-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-stone-100 bg-[color:var(--color-surface-solid)] md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-950"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-stone-100 pt-3">
            <ButtonLink
              href={getWhatsAppLink()}
              variant="primary"
              className="w-full justify-center"
              external
            >
              <MessageCircle className="size-4" aria-hidden />
              Scrivimi su WhatsApp
            </ButtonLink>
            <ButtonLink
              href={siteConfig.linkedInUrl}
              variant="secondary"
              className="w-full justify-center"
              external
            >
              <LinkedInGlyph className="size-4" />
              Profilo LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
