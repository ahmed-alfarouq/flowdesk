"use client";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { resetPassword } from "@/auth-client";

import Input from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

import { ResetPasswordSchema, resetPasswordSchema } from "@/schemas/auth";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<undefined | string>();
  const [formSuccess, setFormSuccess] = useState<undefined | string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = ({ password }: ResetPasswordSchema) => {
    startTransition(async () => {
      const { error } = await resetPassword({
        token,
        newPassword: password,
      });
      if (error) {
        return setFormError(error.message);
      }

      setFormSuccess("Password updated successfully. Try to login now!");
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        label="New Password"
        type="password"
        name="password"
        placeholder="*******"
        register={register}
        error={errors.password?.message}
        disabled={isPending || !!formSuccess}
      />
      <Input
        label="Confirm New Password"
        type="password"
        name="confirmPassword"
        placeholder="*******"
        register={register}
        error={errors.confirmPassword?.message}
        disabled={isPending || !!formSuccess}
      />
      <Alert message={formSuccess} variant="success" />
      <Alert message={formError} variant="danger" />
      <Button
        size="lg"
        className="w-full"
        disabled={isPending || !!formSuccess}
      >
        {isPending ? "Checking token..." : "Reset Password"}
      </Button>

      <Button variant="link">Go to login</Button>
    </form>
  );
};

export default ResetPasswordForm;
