"use client";

import { getWhatsAppLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  return (
    <a
      href={getWhatsAppLink(
        "Ciao, vorrei organizzare un ritiro di materiale informatico per la mia attività.",
      )}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_12px_40px_-10px_rgba(5,150,105,0.85)] transition hover:scale-105 hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 md:bottom-8 md:right-8"
      aria-label="Apri WhatsApp per contattarmi subito"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="size-7" strokeWidth={2} aria-hidden />
    </a>
  );
}
