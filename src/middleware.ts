import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "./auth.config";

import { AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PUBLIC_ROUTES } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const session = await auth();
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

  return response;
});

export const config = {
  runtime: "nodejs",
  matcher: ["/((?!_next|static|api|.*\\..*).*)"],
};
