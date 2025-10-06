"use server";
import { cookies } from "next/headers";

export const setEmailCookie = async (email: string) => {
  const cookiesStore = await cookies();

  cookiesStore.set("pending_email", email);

  return { success: true };
};

export const removeEmailCookie = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("pending_email");
};

export const getEmailCookie = async () => {
  const cookiesStore = await cookies();
  const email = cookiesStore.get("pending_email");

  if (!email) {
    return { success: false, message: "There's no saved email." };
  }

  return { success: true, value: email.value };
};
