import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required!"),
  rememberMe: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
