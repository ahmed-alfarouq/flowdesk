import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "@/actions/user/getUser";
import { loginSchema } from "@/schemas/auth";

import verifyPassword from "@/lib/auth/verifyPassword";

import { type NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { email, password } = await loginSchema.parseAsync(credentials);

        const user = await getUserByEmail(email);

        if (!user || !user.password) return null;

        const passwordMatch = verifyPassword(password, user.password);

        if (!passwordMatch) return null;

        return user;
      },
    }),
    GitHub,
    Google,
  ],
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
