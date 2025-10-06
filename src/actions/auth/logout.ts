"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const logout = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/login");
};

export default logout;
