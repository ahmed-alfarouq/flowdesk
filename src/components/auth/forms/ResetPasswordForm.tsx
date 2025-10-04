"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { ResetSchema, resetSchema } from "@/schemas/auth";

const ResetPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetSchema>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: ResetSchema) => {
    console.log(data);
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
      />
      <Input
        label="Confirm New Password"
        type="password"
        name="confirmPassword"
        placeholder="*******"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Button size="lg" className="w-full">
        Reset Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
