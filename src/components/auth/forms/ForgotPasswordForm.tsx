"use client";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { ForgotPasswordSchema, forgotPasswordSchema } from "@/schemas/auth";

const ForgotPasswordForm = () => {
  const [stage, setStage] = useState("email");
  const [email, setEmail] = useState<null | string>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    if (data.code) {
      if (email) {
        // Which means user refreshed the page
        console.log(email);
      }
      console.log("code: ", data.code);
      return;
    }

    console.log("email: ", data.email);
    localStorage.setItem("email", data.email);
    localStorage.setItem("reset-password-stage", "code");
  };

  useEffect(() => {
    const currentStage = localStorage.getItem("reset-password-stage");
    const currentEmail = localStorage.getItem("email");

    if (!currentStage) return;
    setStage(currentStage);
    setEmail(currentEmail);
  }, []);

  return stage === "email" ? (
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
      <Button size="lg" className="w-full">
        Send Code
      </Button>
    </form>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        label="Code"
        type="text"
        name="code"
        placeholder="6 digits"
        register={register}
        error={errors.code?.message}
      />
      <Button size="lg" className="w-full">
        Submit Code
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
