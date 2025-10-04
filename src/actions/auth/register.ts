"use server";
import bcrypt from "bcrypt";
import { ZodError } from "zod";

import { prisma } from "@/prisma";

import { getUserByEmail } from "@/actions/user/getUser";

import { registerSchema, RegisterSchema } from "@/schemas/auth";

const registerNewUser = async (data: RegisterSchema) => {
  try {
    const { fullName, email, password } = await registerSchema.parseAsync(data);

    const user = await getUserByEmail(email);

    if (!!user) {
      return { success: false, message: "User already exists." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, email: newUser.email, password: newUser.password };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    return { success: false, message: (error as Error).message };
  }
};

export default registerNewUser;
