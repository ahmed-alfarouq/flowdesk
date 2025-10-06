import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

import { InputProps } from "@/types";

const Input = <T extends FieldValues>({
  label,
  type,
  name,
  placeholder,
  error,
  register,
  className,
  disabled,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="capitalize text-primary-foreground">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={cn(
          "bg-third px-2 min-h-12 rounded-lg text-primary-foreground focus:outline-0 placeholder:text-primary-foreground/70 disabled:opacity-50",
          className
        )}
        disabled={disabled}
        {...register(name)}
      />
      {error && <span className="text-destructive font-medium">{error}</span>}
    </div>
  );
};

export default Input;
