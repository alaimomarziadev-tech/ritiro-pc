import { siteConfig } from "@/lib/constants";
import { ImageResponse } from "next/og";

const rk = siteConfig.coverage.radiusKm;
const ck = siteConfig.coverage.centerLabel;

export const alt = `Ritiro gratuito PC — circa ${rk} km da ${ck}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const line2 = `Raggio ~${rk} km (${ck}) · recupero ICT e percorsi RAEE conformi`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(125deg, #022c22 0%, #047857 46%, #0f172a 100%)",
          color: "white",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 650,
            letterSpacing: -1.2,
            maxWidth: 920,
            lineHeight: 1.08,
          }}
        >
          Ritiro gratuito PC e materiale informatico dismesso
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            opacity: 0.92,
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          {line2}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 18,
            opacity: 0.78,
            letterSpacing: 3,
            textTransform: "uppercase" as const,
          }}
        >
          Servizio locale · contatto diretto
        </div>
      </div>
    ),
    { ...size },
  );
}
