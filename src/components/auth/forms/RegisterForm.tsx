"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { RegisterSchema, registerSchema } from "@/schemas/auth";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <Input
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="Ahmed Al-Farouq"
        register={register}
        error={errors.fullName?.message}
      />
      <Input
        label="Username"
        type="text"
        name="username"
        placeholder="ahmed_alfarouq"
        register={register}
        error={errors.username?.message}
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="ahmed.omar.alfarouq@gmail.com"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Confirm Email Address"
        type="email"
        name="confirmEmail"
        placeholder="ahmed.omar.alfarouq@gmail.com"
        register={register}
        error={errors.confirmEmail?.message}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        register={register}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
        register={register}
        error={errors.confirmPassword?.message}
      />

      <Button size="lg" className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
