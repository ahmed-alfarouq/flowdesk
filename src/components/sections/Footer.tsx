import Link from "next/link";
import Image from "next/image";

import Logo from "../icons/Logo";

import { Button } from "../ui/Button";

const Footer = async ({ loggedin }: { loggedin: boolean }) => {
  return (
    <footer className="bg-white shadow-xs text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6 md:gap-0">
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-45" aria-label="Go to homepage">
              <Logo className="w-full" />
            </Link>

            <div className="flex gap-4" aria-label="Social links">
              <a
                href="https://github.com/ahmed-alfarouq"
                target="_blank"
                className="size-10 hover:-translate-y-1 hover:drop-shadow-sm transition-all duration-200"
              >
                <Image
                  src="/images/github.svg"
                  width={20}
                  height={20}
                  alt="Github"
                  className="size-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alfarouq"
                target="_blank"
                className="size-10 hover:-translate-y-1 hover:drop-shadow-sm transition-all duration-200"
              >
                <Image
                  src="/images/linkedin.svg"
                  width={20}
                  height={20}
                  alt="Linkedin"
                  className="size-full"
                />
              </a>
              <a
                href="https://www.youtube.com/@ahmed-alfarouq"
                target="_blank"
                className="size-10 hover:-translate-y-1 hover:drop-shadow-sm transition-all duration-200"
              >
                <Image
                  src="/images/youtube.svg"
                  width={20}
                  height={20}
                  alt="Youtube"
                  className="size-full"
                />
              </a>
            </div>
          </div>

          <ul className="flex flex-col">
            {loggedin ? (
              <li>
                <Button variant="link" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </li>
            ) : (
              <>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/login">Log in</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/register">Register</Link>
                  </Button>
                </li>
              </>
            )}
          </ul>

          <form className="w-full col-span-2 md:col-span-1 justify-self-start flex flex-col gap-2 mx-auto overflow-hidden">
            <h3 className="text-base font-semibold">Stay updated</h3>
            <div className="w-full flex gap-0">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="footer-email"
                name="email"
                placeholder="Your email"
                required
                className="bg-third w-8/12 px-2 h-10 rounded-lg rounded-tr-none rounded-br-none text-primary-foreground focus:outline-0 placeholder:text-primary-foreground/70"
              />
              <Button
                type="submit"
                className="h-10 w-4/12 rounded-tl-none rounded-bl-none"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam — unsubscribe anytime.
            </p>
          </form>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Flow Desk — Built by{" "}
            <a
              href="https://www.linkedin.com/in/ahmed-alfarouq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Ahmed Al-Farouq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
