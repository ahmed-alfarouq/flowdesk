"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn, twoFactor } from "@/auth-client";

import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

import { setEmailCookie } from "@/actions/auth/emailCookie";
import { setOtpTrackingCookie } from "@/actions/auth/otpCookie";

import { LoginSchema, loginSchema } from "@/schemas/auth";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<undefined | string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = ({ email, password, rememberMe }: LoginSchema) => {
    setFormError("");
    startTransition(async () => {
      const { error } = await signIn.email(
        {
          email,
          password,
          rememberMe,
          callbackURL: DEFAULT_LOGIN_REDIRECT,
        },
        {
          async onSuccess(ctx) {
            if (ctx.data.twoFactorRedirect) {
              twoFactor.sendOtp();
              setOtpTrackingCookie();
              return redirect("/verify-otp");
            }
          },
        }
      );
      if (error) {
        if (error.message === "Email not verified") {
          setEmailCookie(email);
          return redirect("/verify-email");
        }
        setFormError(error.message);
        reset({ password: "" });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="ahmed.omar.alfarouq@gmail.com"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        register={register}
        error={errors.password?.message}
      />
      <Alert message={formError} variant="danger" />
      <div className="w-full flex justify-between items-center">
        <Checkbox name="rememberMe" label="Remember me" register={register} />
        <Button variant="link">
          <Link href="/forgot-password">Forgot Password?</Link>
        </Button>
      </div>

      <Button size="lg" className="w-full" disabled={isPending}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
