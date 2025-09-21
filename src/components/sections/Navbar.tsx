import Link from "next/link";

import Logo from "../Logo";

import { Button } from "../ui/Button";



const Navbar = () => {
  return (
    <section className="relative bg-white">
      <div className="container flex justify-between items-center">
        <Logo className="sm:shrink-0" />
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="accent" size="lg" asChild>
            <Link href="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
