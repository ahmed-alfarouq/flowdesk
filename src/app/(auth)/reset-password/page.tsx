import AuthContainer from "@/components/auth/AuthContainer";
import ResetPasswordForm from "@/components/auth/forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <section className="min-h-svh flex justify-center items-center">
      <AuthContainer
        title="Reset Password"
        className="rounded-primary mx-3 sm:mx-0 py-10 sm:py-0 min-w-90 min-h-90 sm:min-w-120 sm:min-h-120 md:min-w-150 md:min-h-150 gap-8"
      >
        <ResetPasswordForm />
      </AuthContainer>
    </section>
  );
};

export default ResetPassword;
