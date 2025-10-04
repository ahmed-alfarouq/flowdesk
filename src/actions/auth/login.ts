"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import { getUserByEmail } from "@/actions/user/getUser";

import verifyPassword from "@/lib/auth/verifyPassword";

import { loginSchema, LoginSchema } from "@/schemas/auth";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const login = async (data: LoginSchema) => {
  const validatedFields = loginSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "Email doesn't exist!" };

  if (existingUser.password) {
    const validCredentials = await verifyPassword(
      password,
      existingUser.password
    );
    if (!validCredentials) return { error: "Invalid credentials!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true, redirectTo: DEFAULT_LOGIN_REDIRECT };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    return { error: "Something went wrong" };
  }
};

export default login;
