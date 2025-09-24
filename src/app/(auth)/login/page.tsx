import Image from "next/image";

import LoginForm from "@/components/auth/forms/LoginForm";
import AuthContainer from "@/components/auth/AuthContainer";

const LoginPage = () => {
  return (
    <section className="flex justify-between items-stretch min-h-svh">
      <AuthContainer
        title="Log in"
        showProviders
        bottomLinks={[
          {
            beforeText: "Don't have account yet? ",
            link: "/register",
            text: "New Account",
          },
        ]}
        className="w-full md:w-4/12"
      >
        <LoginForm />
      </AuthContainer>
      <Image
        src="/images/login.svg"
        alt=""
        width={500}
        height={500}
        className="hidden md:block w-7/12 max-w-4xl mx-auto"
      />
    </section>
  );
};

export default LoginPage;
