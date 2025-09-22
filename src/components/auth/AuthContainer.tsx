import Link from "next/link";

import Logo from "../icons/Logo";

import { Button } from "../ui/Button";
import AuthProviders from "./AuthProviders";

import { cn } from "@/lib/utils";

const AuthContainer = ({
  title,
  showProviders = false,
  children,
  bottomLinks,
  className,
}: AuthContainerProps) => {
  return (
    <main
      className={cn(
        "bg-white flex flex-col justify-center items-center gap-4 px-7",
        className
      )}
    >
      <Logo />
      <h1 className="font-semibold text-2xl mt-2">{title}</h1>
      {showProviders && (
        <>
          <AuthProviders />
          <span className="w-full text-primary-foreground font-semibold text-base flex justify-center items-center gap-3 before:w-6/12  before:border before:border-primary-foreground/10 before:rounded-sm after:w-6/12 after:border after:border-primary-foreground/10 after:rounded-sm">
            Or
          </span>
        </>
      )}
      {children}
      <div className="mt-2 space-y-1">
        {bottomLinks.map((l, i) =>
          l.beforeText ? (
            <Button key={`${l.text}-${i}`} variant="link" asChild>
              <Link href={l.link}>{l.text}</Link>
            </Button>
          ) : (
            <div key={`${l.text}-${i}`} className="space-x-1">
              {l.beforeText}
              <Button variant="link" asChild>
                <Link href={l.link}>{l.text}</Link>
              </Button>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default AuthContainer;
