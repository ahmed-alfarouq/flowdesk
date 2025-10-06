import { redirect } from "next/navigation";

import OTPForm from "@/components/auth/forms/OTPForm";
import AuthContainer from "@/components/auth/AuthContainer";

import { getOtpTrackingCookie } from "@/actions/auth/otpCookie";

const VerifyOTP = async () => {
  const otpSent = await getOtpTrackingCookie();

  if (!otpSent.success || !otpSent.value) {
    redirect("/login");
  }

  return (
    <section className="min-h-svh flex justify-center items-center">
      <AuthContainer
        title="Verify OTP"
        className="rounded-primary mx-3 sm:mx-0 w-95 h-95 sm:w-120 sm:h-120 md:w-150 md:h-150 gap-8"
      >
        <OTPForm />
      </AuthContainer>
    </section>
  );
};

export default VerifyOTP;
