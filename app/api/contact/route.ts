import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 120;
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5_000;
const MAX_PHONE_LENGTH = 30;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isValidString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Données de formulaire invalides." }, { status: 400 });
  }

  // Champ invisible : les robots le remplissent généralement, contrairement aux visiteurs.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ ok: true });
  }

  if (
    !isValidString(payload.name, MAX_NAME_LENGTH) ||
    !isValidString(payload.email, 254) ||
    !isValidString(payload.subject, MAX_SUBJECT_LENGTH) ||
    !isValidString(payload.message, MAX_MESSAGE_LENGTH) ||
    !emailPattern.test(payload.email.trim()) ||
    (payload.phone !== undefined &&
      payload.phone !== "" &&
      !isValidString(payload.phone, MAX_PHONE_LENGTH))
  ) {
    return Response.json(
      { error: "Veuillez renseigner tous les champs avec des informations valides." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "famillesdicietdailleurs@gmail.com";

  if (!apiKey || !from) {
    console.error("Configuration Resend manquante.");
    return Response.json(
      { error: "Le formulaire est temporairement indisponible. Réessayez plus tard." },
      { status: 503 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const subject = payload.subject.trim();
  const message = payload.message.trim();
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Site AFIA] ${subject} — ${name}`,
      text: [
        "Nouveau message envoyé depuis le formulaire de contact du site AFIA.",
        "",
        `Nom / Prénom : ${name}`,
        `Email : ${email}`,
        `Téléphone : ${phone || "non renseigné"}`,
        `Sujet : ${subject}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend a refusé l’envoi du formulaire de contact.", error);
      const isUnverifiedDomain =
        error.name === "validation_error" && error.message.includes("domain is not verified");

      return Response.json(
        {
          error: isUnverifiedDomain
            ? "Le domaine d’envoi n’est pas encore vérifié dans Resend."
            : "L’envoi a échoué. Veuillez réessayer ou nous écrire directement.",
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Erreur lors de l’envoi du formulaire de contact.", error);
    return Response.json(
      { error: "L’envoi a échoué. Veuillez réessayer ou nous écrire directement." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
