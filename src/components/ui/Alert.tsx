import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const alertVarients = cva("rounded-md border-l-6 py-2 px-2 my-2 font-medium", {
  variants: {
    variant: {
      success: "border-l-green-600 bg-green-200 text-green-600",
      danger: "border-l-destructive bg-red-200 text-destructive",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

const Alert = ({
  message,
  variant,
  className,
}: {
  message: undefined | string;
  className?: string;
} & VariantProps<typeof alertVarients>) => {
  if (!message) return;
  return (
    <span role="alert" className={cn(alertVarients({ variant, className }))}>
      {message}
    </span>
  );
};

export { Alert, alertVarients };
