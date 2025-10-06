import { betterAuth } from "better-auth";
import { emailOTP, twoFactor } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

import { prisma } from "@/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";

import sendEmail from "@/lib/sendEmail";

export const auth = betterAuth({
  appName: "Flow Desk",
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
  },
  emailVerification: {
    sendOnSignIn: true,
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  account: {
    accountLinking: {
      trustedProviders: ["google", "github"],
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",
      prompt: "select_account consent",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [
    nextCookies(),
    emailOTP({
      overrideDefaultEmailVerification: true,
      sendVerificationOnSignUp: true,
      async sendVerificationOTP({ email, otp, type }) {
        const subject =
          type === "forget-password"
            ? "Reset your password"
            : "Your verification code";

        const text = `Your OTP code is: ${otp}`;
        const html = `
        <div style="font-family: sans-serif;">
          <h2>${subject}</h2>
          <p>Your one-time code is:</p>
          <h3>${otp}</h3>
          <p>This code expires in 5 minutes.</p>
        </div>
      `;
        await sendEmail({
          to: email,
          subject,
          text,
          html,
        });
      },
    }),
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }) {
          const subject = "Login Request";
          const text = `Your OTP code is: ${otp}`;
          const html = `
          <div style="font-family: sans-serif;">
            <h2>${subject}</h2>
            <p>Your one-time code is:</p>
            <h3>${otp}</h3>
            <p>This code expires in 5 minutes.</p>
          </div>
        `;
          await sendEmail({
            to: user.email,
            subject,
            text,
            html,
          });
        },
      },
    }),
  ],
  advanced: {
    cookies: {
      pending_email: {
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 60 * 60,
        },
      },
    },
  },
});
