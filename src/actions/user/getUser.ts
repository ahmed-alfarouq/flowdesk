"use server";
import { prisma } from "@/prisma";

export const getUserByEmail = async (email: string) =>
  await prisma.user.findUnique({ where: { email } });
