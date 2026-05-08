import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";
const MAINTENANCE_PATH = "/maintenance";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si le mode maintenance est actif...
  if (MAINTENANCE_MODE) {
    // ...laisser passer les assets statiques et la page maintenance elle-même
    const isStaticAsset =
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.startsWith("/icons") ||
      pathname.startsWith("/images") ||
      pathname.startsWith("/fonts") ||
      pathname === MAINTENANCE_PATH;

    if (!isStaticAsset) {
      const url = request.nextUrl.clone();
      url.pathname = MAINTENANCE_PATH;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// Appliquer le middleware à toutes les routes
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
