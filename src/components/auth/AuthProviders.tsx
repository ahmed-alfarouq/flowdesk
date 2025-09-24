import AuthProvider from "./AuthProvider";

import { authWithGoogle, authWithGithub } from "@/actions/auth/providers";

const AuthProviders = () => {
  return (
    <div className="flex justify-between items-center gap-3 mt-3">
      <AuthProvider
        image="/images/google.svg"
        text="Google"
        handleClick={authWithGoogle}
      />

      <AuthProvider
        image="/images/github.svg"
        text="Github"
        handleClick={authWithGithub}
      />
    </div>
  );
};

export default AuthProviders;
