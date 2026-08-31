import { NextResponse } from "next/server";

/**
 * URL stable utilisée par le QR code de l'événement.
 * La destination est définie dans Vercel via la variable EVENT_YOUTUBE_URL,
 * ce qui permet de changer de vidéo sans modifier le QR code imprimé.
 */
export function GET() {
  const youtubeUrl = process.env.EVENT_YOUTUBE_URL;

  if (!youtubeUrl) {
    return new NextResponse(
      "La vidéo de l'événement n'est pas encore configurée.",
      { status: 503 },
    );
  }

  return NextResponse.redirect(youtubeUrl, 302);
}
