import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PRIVATE_ROUTES } from "@/lib/constants";
import { decrypt } from "@/lib/session";

export default async function middleware(req: NextRequest) {
  // check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute =
    PRIVATE_ROUTES.includes(path) ||
    /^\/admin\/projects\/edit\/[^/]+$/.test(path);

  // decrypt the session from the cookie
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  // redirect to /admin/login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  // redirect to /admin if the user is authenticated and trying to access login page
  if (session?.userId && req.nextUrl.pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  return NextResponse.next();
}

// middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
