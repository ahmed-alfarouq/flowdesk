"use server";
import bcrypt from "bcrypt";

const verifyPassword = async (plain: string, hash: string) =>
  bcrypt.compare(plain, hash);

export default verifyPassword;
