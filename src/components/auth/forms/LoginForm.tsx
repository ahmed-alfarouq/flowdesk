"use client";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

import { LoginSchema, loginSchema } from "@/schemas/auth";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
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
      <div className="flex justify-between items-center">
        <Checkbox name="rememberMe" label="Remember me" register={register} />
        <Button variant="link">
          <Link href="/reset-password">Reset Password?</Link>
        </Button>
      </div>
      <Button size="lg" className="w-full">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
