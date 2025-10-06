import z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required."),
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
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
    .string()
    .min(1, "Password is required.")
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/, {
      error:
        "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords must match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const otpSchema = z.object({
  otp: z.string().length(6, "Code must be 6 digits."),
});

export type OTPSchema = z.infer<typeof otpSchema>;
