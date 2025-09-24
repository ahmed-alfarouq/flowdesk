import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

import { InputProps } from "@/types";

const Checkbox = <T extends FieldValues>({
  name,
  label,
  register,
  className,
}: Omit<InputProps<T>, "type" | "placeholder">) => {
  return (
    <div className={cn("space-x-2", className)}>
      <input type="checkbox" id={name} {...register(name)} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
