import { redirect } from "next/navigation";

import AuthContainer from "@/components/auth/AuthContainer";
import ResetPasswordForm from "@/components/auth/forms/ResetPasswordForm";

const ResetPassword = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { token } = await searchParams;

  if (!token) {
    redirect("login");
  }

  return (
    <section className="min-h-svh flex justify-center items-center">
      <AuthContainer
        title="Reset Password"
        className="rounded-primary mx-3 sm:mx-0 py-10 sm:py-0 min-w-90 min-h-90 sm:-120 sm:h-120 md:w-150 md:h-150 gap-8"
      >
        <ResetPasswordForm token={token} />
      </AuthContainer>
    </section>
  );
};

export default ResetPassword;
