/** Raggio operativo pubblico dichiarato (km in linea d’aria). */
const radiusKm = Number(process.env.NEXT_PUBLIC_COVERAGE_RADIUS_KM) || 40;

export const siteConfig = {
  businessName:
    process.env.NEXT_PUBLIC_BUSINESS_PUBLIC_NAME ??
    `Ritiro gratuito PC — circa ${radiusKm} km da Brembate`,
  professionalName: "Marzia Alaimo · consulenza IT",
  tagline:
    "Recupero responsabile di hardware aziendale, con percorsi di smaltimento RAEE ordinati quando il materiale rientra negli apparati disciplinati dalla normativa.",
  coverage: {
    /** Punto di riferimento per la misura del raggio sulla mappa pubblica */
    centerLabel:
      process.env.NEXT_PUBLIC_COVERAGE_CENTER_LABEL ?? "Brembate",
    /** Brembate di Sopra (BG), centro abitato — aggiorna se usi un altro punto. */
    latitude: Number(process.env.NEXT_PUBLIC_COVERAGE_CENTER_LAT ?? 45.71639),
    longitude: Number(process.env.NEXT_PUBLIC_COVERAGE_CENTER_LNG ?? 9.57134),
    radiusKm,
    geoRadiusMeters: Math.round(radiusKm * 1000),
  },
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alaimomarziadev@gmail.com",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "393518555469",
  linkedInUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/marzia-alaimo-full-stack-developer/",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export function getWhatsAppLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
