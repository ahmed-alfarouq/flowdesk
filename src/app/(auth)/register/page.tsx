import Image from "next/image";

import RegisterForm from "@/components/auth/forms/RegisterForm";
import AuthContainer from "@/components/auth/AuthContainer";

const RegisterPage = () => {
  return (
    <section className="flex justify-between items-stretch min-h-svh">
      <AuthContainer
        title="Sign Up"
        showProviders
        bottomLinks={[
          {
            beforeText: "Already have an account? ",
            link: "/login",
            text: "Log in",
          },
        ]}
        className="w-full md:w-4/12"
      >
        <RegisterForm />
      </AuthContainer>
      <Image
        src="/images/register.svg"
        alt=""
        width={500}
        height={500}
        className="hidden md:block w-7/12 max-w-4xl mx-auto"
      />
    </section>
  );
};

export default RegisterPage;
