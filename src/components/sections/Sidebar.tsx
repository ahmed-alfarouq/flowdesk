"use client";
import Image from "next/image";
import { useRef } from "react";
import { signOut, useSession } from "@/auth-client";
import { usePathname, useRouter } from "next/navigation";

import { LogOut } from "lucide-react";
import Logo from "@/components/icons/Logo";
import NavLink from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";

import useActiveLinkIndicator from "@/hooks/useActiveLinkIndicator";

import { mainSidebarLinks } from "@/constants";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const session = useSession();

  const navLinksRef = useRef<HTMLAnchorElement[]>([]);
  const underElRef = useRef<HTMLLIElement | null>(null);

  useActiveLinkIndicator(path, underElRef, navLinksRef);

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <aside
      role="complementary"
      aria-label="Sidebar navigation"
      className="lg:min-h-svh min-w-svw lg:min-w-10 lg:w-50 bg-white py-1 lg:py-5 fixed left-0 bottom-0 lg:top-0 flex lg:flex-col justify-between items-center"
    >
      <section className="w-full flex flex-col gap-12 justify-between items-center">
        <Logo className="w-40 hidden lg:block" />
        <nav
          role="navigation"
          aria-label="Main menu"
          className="relative w-full flex lg:block"
        >
          <span
            ref={underElRef}
            className="lg:hidden absolute -left-2 -top-7 sm:-left-1.5 sm:-top-6.5 bg-body p-4 rounded-full size-18 transition-all duration-300"
            style={{
              transform: "translateX(var(--sidebar-nav-indicator-x, 0))",
            }}
            aria-hidden="true"
          ></span>
          <ul className="flex gap-5 sm:gap-12 lg:gap-4 lg:flex-col mx-auto">
            {mainSidebarLinks.map((l, i) => (
              <li key={l.text}>
                <NavLink
                  href={l.link}
                  text={l.text}
                  icon={l.icon}
                  isActive={path === l.link}
                  ref={(el: HTMLAnchorElement) => (navLinksRef.current[i] = el)}
                />
              </li>
            ))}
            <li className="block lg:hidden">
              <Button
                size="icon"
                variant="link"
                onClick={handleLogout}
                className="group relative text-primary-foreground/50 hover:text-primary size-full"
              >
                <LogOut className="size-6 sm:size-7 lg:size-6" />
                <span
                  id="toolbar-logout"
                  className="opacity-0 group-hover:opacity-100 select-none absolute -top-7 left-1/2 -translate-x-1/2 bg-primary text-white text-sm rounded-md p-3 py-1 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-primary before:border-b-transparent before:border-r-transparent before:border-l-transparent transition-all duration-150"
                >
                  Logout
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </section>

      <section className="hidden lg:flex gap-2 w-11/12">
        <Image
          src="/images/avatar.jpg"
          alt="user name"
          width={40}
          height={40}
          className="rounded-primary"
        />
        <div className="flex flex-col w-6/12">
          <h2 className="capitalize font-semibold text-xs">
            {session.data?.user.name}
          </h2>
          <span className="text-black/50 text-[10px] truncate">
            {session.data?.user.email}
          </span>
        </div>
        <Button size="icon" variant="link" onClick={handleLogout}>
          <LogOut />
        </Button>
      </section>
    </aside>
  );
};

export default Sidebar;
