"use client";
import { useState } from "react";
import { signIn } from "@/auth-client";

import AuthProvider from "./AuthProvider";
import { Alert } from "@/components/ui/Alert";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const AuthProviders = () => {
  const [errorMessage, setErrorMesage] = useState<string | undefined>();

  const handleGoogle = async () => {
    const { error } = await signIn.social({
      provider: "google",
      callbackURL: DEFAULT_LOGIN_REDIRECT,
    });

    if (error) {
      setErrorMesage(error.message);
    }
  };

  const handleGithub = async () => {
    const { error } = await signIn.social({
      provider: "github",
      callbackURL: DEFAULT_LOGIN_REDIRECT,
    });

    if (error) {
      setErrorMesage(error.message);
    }
  };

  return (
    <div className="flex justify-between items-center gap-3 mt-3">
      <AuthProvider
        image="/images/google.svg"
        text="Google"
        handleClick={handleGoogle}
      />

      <AuthProvider
        image="/images/github.svg"
        text="Github"
        handleClick={handleGithub}
      />

      <Alert message={errorMessage} variant="danger" />
    </div>
  );
};

export default AuthProviders;
