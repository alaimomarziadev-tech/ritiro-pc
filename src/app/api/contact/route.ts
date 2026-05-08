import { siteConfig } from "@/lib/constants";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Payload non valido." }, { status: 400 });
  }

  const email = body.email?.trim();
  const message = body.message?.trim();
  const name = body.name?.trim();
  const company = body.company?.trim();
  const phone = body.phone?.trim();

  if (!email || !message) {
    return NextResponse.json(
      { ok: false, error: "Email e messaggio sono obbligatori." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;
  const host = process.env.SMTP_HOST;

  if (!host) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] modulo (SMTP non configurato):", {
        name,
        email,
        company,
        phone,
        message,
      });
    }
    return NextResponse.json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
    });

    const from =
      process.env.SMTP_FROM ||
      `"Sito ritiro PC" <${process.env.SMTP_USER || "noreply@localhost"}>`;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Richiesta ritiro hardware — ${company || name || email}`,
      text: [
        `Nome: ${name || "—"}`,
        `Email: ${email}`,
        `Telefono: ${phone || "—"}`,
        `Ragione sociale: ${company || "—"}`,
        "",
        "Messaggio:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Impossibile inviare l’email. Riprova o usa WhatsApp." },
      { status: 500 },
    );
  }
}
