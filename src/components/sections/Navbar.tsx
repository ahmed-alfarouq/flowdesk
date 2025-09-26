import Link from "next/link";

import Logo from "../icons/Logo";

import { Button } from "../ui/Button";

const Navbar = ({ loggedin }: { loggedin: boolean }) => {
  return (
    <section className="relative bg-white py-2">
      <div className="container flex justify-between items-center">
        <Logo className="sm:shrink-0 w-48" />
        <div className="flex items-center gap-3">
          {loggedin ? (
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="accent" asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
