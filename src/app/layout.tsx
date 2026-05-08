import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { siteConfig } from "@/lib/constants";
import { buildLocalBusinessJsonLd } from "@/lib/schema";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const canonical = siteConfig.siteUrl.replace(/\/$/, "");
const rk = siteConfig.coverage.radiusKm;
const ck = siteConfig.coverage.centerLabel;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default:
      `Ritiro gratuito PC e materiale IT | circa ${rk} km da ${ck}`,
    template: "%s | Ritiro PC gratuito Lombardia",
  },
  description:
    `Ritiro gratuito di desktop, notebook, monitor, server e materiale IT per aziende e uffici; smaltimento RAEE tramite percorsi conformi quando il lotto rientra negli obblighi normativi. Area operativa di circa ${rk} km in linea d’aria da ${ck} (verifica con CAP o indirizzo). Contatto rapido via email o WhatsApp.`,
  keywords: [
    "ritiro pc usati bergamo",
    "ritiro hardware aziendale bergamo",
    "smaltimento pc ufficio bergamo",
    "ritiro server usati lombardia",
    "recupero pc dismessi aziende",
    "ritiro gratuito informatica aziende",
    "recupero hardware uffici bergamo",
    "ritiro pc monza brianza",
    "ritiro hardware aziendale monza",
    "smaltimento pc ufficio monza brianza",
    "ritiro pc 40 km bergamo",
    "smaltimento RAEE aziende",
    "smaltimento RAEE ufficio",
    "ritiro RAEE informatica",
    "gestione RAEE Lombardia",
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: canonical,
    siteName: siteConfig.businessName,
    title:
      `Ritiro gratuito materiale IT per aziende — circa ${rk} km da ${ck}`,
    description:
      `Ritiri ordinati di PC, monitor e rack; smaltimento RAEE su percorsi autorizzati ove necessario. Area ~${rk} km da ${ck}.`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `Ritiro gratuito materiale IT — circa ${rk} km da ${ck}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ritiro hardware aziendale | ~${rk} km da ${ck}`,
    description:
      `PC, notebook, rack nell’area ~${rk} km; recupero ICT e conferimento RAEE ove dovuto.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical,
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecfdf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f3d2e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildLocalBusinessJsonLd();
  return (
    <html
      lang="it"
      className={`relative ${dmSans.variable} ${dmSerif.variable} scroll-smooth`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="flex min-h-screen flex-col bg-[color:var(--color-surface-soft)] font-sans text-stone-900 antialiased">
        <a
          href="#main"
          className="absolute left-4 top-0 z-[200] block -translate-y-24 rounded-xl bg-emerald-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-900 focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          Vai al contenuto principale
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
