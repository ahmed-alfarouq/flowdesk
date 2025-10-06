import { redirect } from "next/navigation";

import { getEmailCookie } from "@/actions/auth/emailCookie";

import AuthContainer from "@/components/auth/AuthContainer";
import OTPForm from "@/components/auth/forms/OTPForm";

const VerifyEmail = async () => {
  const email = await getEmailCookie();

  // No pending email? no code send, redirect to login
  if (!email.success || !email.value) {
    redirect("/login");
  }

  return (
    <section className="min-h-svh flex justify-center items-center">
      <AuthContainer
        title="Verify OTP"
        className="rounded-primary mx-3 sm:mx-0 w-95 h-95 sm:w-120 sm:h-120 md:w-150 md:h-150 gap-8"
      >
        <OTPForm email={email.value} />
      </AuthContainer>
    </section>
  );
};

export default VerifyEmail;
