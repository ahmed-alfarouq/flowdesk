import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

import { AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PUBLIC_ROUTES } from "./routes";

const middleware = async (req: NextRequest) => {
  const session = getSessionCookie(req);
  const { pathname } = req.nextUrl;
  const response = NextResponse.next();

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
  }

  if (!isPublicRoute && !isAuthRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Clearing cookies after successfull login
  const emailCookie = req.cookies.get("pending_email");
  const otpCookie = req.cookies.get("otp_sent");

  if (emailCookie) response.cookies.delete("pending_email");
  if (otpCookie) response.cookies.delete("otp_sent");

  return response;
};

export const config = {
  runtime: "nodejs",
  matcher: ["/((?!_next|static|api|.*\\..*).*)"],
};

export default middleware;
