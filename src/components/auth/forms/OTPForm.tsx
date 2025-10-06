"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { emailOtp, twoFactor } from "@/auth-client";
import { removeEmailCookie } from "@/actions/auth/emailCookie";

import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

import { OTPSchema, otpSchema } from "@/schemas/auth";

import { OTPFormProps } from "@/types";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { removeOtpTrackingCookie } from "@/actions/auth/otpCookie";

const OTPForm = ({ email }: OTPFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<undefined | string>();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<OTPSchema>({
    resolver: zodResolver(otpSchema),
  });

  const verifyOtpHandler = async ({
    otp,
    type,
  }: {
    otp: string;
    type: "email" | "2fa";
  }) => {
    const removeCookie =
      type === "email" ? removeEmailCookie : removeOtpTrackingCookie;

    const { error } =
      type === "email"
        ? await emailOtp.verifyEmail({ email: email!, otp })
        : await twoFactor.verifyOtp({ code: otp });

    if (error) {
      reset();
      if (error.message === "Too many attempts") {
        setFormError("Too many tries — please request a new OTP.");
        setTimeout(async () => {
          await removeCookie();
          router.push("/login");
        }, 2000);
        return;
      }
      return setFormError(error.message);
    }
    router.push(DEFAULT_LOGIN_REDIRECT);
  };

  const onSubmit = ({ otp }: OTPSchema) => {
    setFormError("");
    startTransition(async () => {
      if (email) await verifyOtpHandler({ otp, type: "email" });
      else await verifyOtpHandler({ otp, type: "2fa" });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        label="OTP Code"
        type="string"
        name="otp"
        register={register}
        error={errors.otp?.message}
      />
      <Alert message={formError} variant="danger" />
      <Button size="lg" className="w-full" disabled={isPending}>
      {isPending ? "Verifying..." : "Check OTP"}
      </Button>
    </form>
  );
};

export default OTPForm;
