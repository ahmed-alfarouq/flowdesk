import ForgotPasswordForm from "@/components/auth/forms/ForgotPasswordForm";
import AuthContainer from "@/components/auth/AuthContainer";

const ForgotPassword = () => {
  return (
    <section className="min-h-svh flex justify-center items-center">
      <AuthContainer title="Recover" className="rounded-primary mx-3 sm:mx-0 w-95 h-95 sm:w-120 sm:h-120 md:w-150 md:h-150 gap-8">
        <ForgotPasswordForm />
      </AuthContainer>
    </section>
  );
};

export default ForgotPassword;
