import Link from "next/link";

import { cn } from "@/lib/utils";

import { NavLinkProps } from "@/types";

const NavLink = ({
  ref,
  href,
  text,
  icon,
  isActive,
  className,
}: NavLinkProps) => {
  const Icon = icon;
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "relative group flex items-center gap-3 p-4 lg:py-2 text-primary-foreground/50 font-semibold hover:text-primary transition-all duration-300",
        isActive &&
          "-translate-y-5 bg-primary text-white hover:text-white rounded-full lg:translate-y-0 lg:hover:text-primary lg:bg-white lg:text-primary lg:rounded-none lg:before-shadow",
        className
      )}
      aria-label={text}
    >
      <Icon className="size-6 sm:size-7 lg:size-6" aria-hidden="true" />
      <span className="hidden lg:block">{text}</span>
    </Link>
  );
};

export default NavLink;
