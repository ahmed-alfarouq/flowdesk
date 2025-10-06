"use client";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { requestPasswordReset } from "@/auth-client";

import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

import { ForgotPasswordSchema, forgotPasswordSchema } from "@/schemas/auth";

const ForgotPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<undefined | string>();
  const [formSuccess, setFormSuccess] = useState<undefined | string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = ({ email }: ForgotPasswordSchema) => {
    startTransition(async () => {
      const { data, error } = await requestPasswordReset({
        email,
        redirectTo: "/reset-password",
      });
      if (error) {
        return setFormError(error.message);
      }
      setFormSuccess(data.message);
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
        disabled={!!formSuccess}
      />
      <Alert message={formSuccess} variant="success" />
      <Alert message={formError} variant="danger" />
      <Button
        size="lg"
        className="w-full"
        disabled={isPending || !!formSuccess}
      >
        {isPending ? "Seding Email..." : "Send Email"}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
