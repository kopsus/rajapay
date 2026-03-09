import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "rayaku-secret-key",
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("session")?.value;

  if (pathname === "/login") {
    if (session) {
      try {
        await jwtVerify(session, SECRET_KEY);
        return NextResponse.redirect(new URL("/admin/blog", request.url));
      } catch {
        const response = NextResponse.next();
        response.cookies.delete("session");
        return response;
      }
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(session, SECRET_KEY);
      return NextResponse.next();
    } catch {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
