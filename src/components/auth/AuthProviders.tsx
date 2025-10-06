"use client"; /// Don't forget to remove
import AuthProvider from "./AuthProvider";

const AuthProviders = () => {
  return (
    <div className="flex justify-between items-center gap-3 mt-3">
      <AuthProvider
        image="/images/google.svg"
        text="Google"
        handleClick={() => {}}
      />

      <AuthProvider
        image="/images/github.svg"
        text="Github"
        handleClick={() => {}}
      />
    </div>
  );
};

export default AuthProviders;
