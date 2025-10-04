"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

import login from "@/actions/auth/login";

import { LoginSchema, loginSchema } from "@/schemas/auth";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<undefined | string>();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    setFormError("");
    startTransition(async () => {
      try {
        const res = await login(data);
        if (res?.error) {
          reset();
          setFormError(res.error);
        }

        if (res.success) {
          router.push(res.redirectTo);
        }
      } catch (error) {
        setFormError((error as Error).message);
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
      <div className="w-full flex justify-end">
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
