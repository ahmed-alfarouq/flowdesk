import z, { codec, email } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required."),
    username: z
      .string()
      .min(1, "Username is required.")
      .max(10, "Username must be at most 10 characters.")
      .regex(/^[a-z0-9_]+$/, {
        error: "Use only lowercase letters, numbers, or underscores.",
      })
      .refine((val) => !val.startsWith("_"), {
        message: "Username cannot start with an underscore.",
      })
      .refine((val) => !val.endsWith("_"), {
        message: "Username cannot end with an underscore.",
      }),
    email: z.email(),
    confirmEmail: z.email(),
    password: z
      .string()
      .min(1, "Password is required.")
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/, {
        error:
          "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    error: "Emails must match",
    path: ["confirmEmail"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords must match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required!"),
  rememberMe: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email(),
  code: z.string(),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetSchema = z
  .object({
    password: z.string().min(1, "Password is required."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords must match.",
    path: ["confirmPassword"],
  });

export type ResetSchema = z.infer<typeof resetSchema>;
