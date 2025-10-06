import { createAuthClient } from "better-auth/react";
import { emailOTPClient, twoFactorClient } from "better-auth/client/plugins";

export const { signIn, signUp, useSession, emailOtp, twoFactor } =
  createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [emailOTPClient(), twoFactorClient()],
  });
