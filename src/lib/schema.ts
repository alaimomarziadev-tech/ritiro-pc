import { siteConfig } from "./constants";

export function buildLocalBusinessJsonLd() {
  const { coverage } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brembate di Sopra",
      addressRegion: "Lombardia",
      postalCode: "24030",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: String(coverage.latitude),
      longitude: String(coverage.longitude),
    },
    description: `Ritiro gratuito di PC desktop, laptop, monitor, server e materiale informatico dismesso per aziende e uffici; gestione dello smaltimento RAEE tramite percorsi e soggetti abilitati, ove applicabile. Servizio nell’area compresa circa entro ${coverage.radiusKm} km in linea d’aria dal punto di riferimento a ${coverage.centerLabel}. Possibili tragitti più lunghi solo se concordati. Recupero e smaltimento responsabile.`,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    telephone: `+${siteConfig.whatsappNumber.replace(/^\+/, "")}`,
    priceRange: "Gratuito",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: coverage.latitude,
          longitude: coverage.longitude,
        },
        geoRadius: coverage.geoRadiusMeters,
      },
      { "@type": "AdministrativeArea", name: "Lombardia" },
    ],
    serviceType: [
      "Ritiro hardware aziendale",
      "Recupero PC usati",
      "Smaltimento RAEE apparecchiature elettroniche",
      "Smaltimento informatico responsabile",
    ],
    slogan: siteConfig.tagline,
  };
}
