import nodemailer from "nodemailer";

import { SendEmailProps } from "@/types";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === "production",
  },
});

const sendEmail = async ({ to, subject, text, html }: SendEmailProps) => {
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to,
      subject,
      text,
      html,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export default sendEmail;
