"use server";
import { cookies } from "next/headers";

export const setOtpTrackingCookie = async () => {
  const cookiesStore = await cookies();

  cookiesStore.set("otp_sent", "true");

  return { success: true };
};

export const removeOtpTrackingCookie = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("otp_sent");
  return { success: true };
};

export const getOtpTrackingCookie = async () => {
  const cookiesStore = await cookies();
  const otpCookie = cookiesStore.get("otp_sent");

  if (!otpCookie) {
    return { success: false, message: "There's no saved OTP tracking." };
  }

  return { success: true, value: otpCookie.value };
};
