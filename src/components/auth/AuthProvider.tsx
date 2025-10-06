import Image from "next/image";

import { AuthProviderProps } from "@/types";

const AuthProvider = ({ image, text, handleClick }: AuthProviderProps) => {
  return (
    <button
      className="bg-third/70 flex justify-center items-center gap-2 font-medium rounded-md px-5 lg:px-8 lg:min-w-40 xl:min-w-50 min-h-12 cursor-pointer hover:bg-third transition-all"
      onClick={handleClick}
    >
      <Image src={image} alt={`auth with ${text}`} width={15} height={15} />
      {text}
    </button>
  );
};

export default AuthProvider;
