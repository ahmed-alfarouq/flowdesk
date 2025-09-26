import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-5 sm:px-9 whitespace-nowrap rounded-[10px] text-sm font-semibold transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-primary-foreground hover:bg-secondary/90",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/30",
        accent: "bg-accent text-white hover:bg-accent-foreground",
        outline:
          "border border-primary text-primary hover:text-white hover:bg-primary",
        ghost: "text-accent-foreground/90",
        link: "text-primary !p-0",
      },
      size: {
        default: "h-10",
        sm: "h-8 gap-1.5",
        lg: "h-13 min-w-38 text-base sm:text-lg",
        icon: "size-9 px-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
