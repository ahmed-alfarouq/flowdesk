import { LucideIcon } from "lucide-react";
import { Ref, SyntheticEvent } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type BottomLink = {
  beforeText?: string;
  text: string;
  link: string;
};

/* --- Auth Components --- */
declare interface OTPFormProps {
  email?: string;
}

declare interface InputProps<T extends FieldValues> {
  type: string;
  label: string;
  name: Path<T>;
  error?: string;
  className?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  disabled?: boolean;
}

declare interface AuthContainerProps {
  title: string;
  showProviders?: boolean;
  bottomLinks?: BottomLink[];
  children: React.ReactNode;
  className?: string;
}

declare interface AuthProviderProps {
  image: string;
  text: string;
  handleClick: () => void;
}

/* --- Components --- */
declare interface NavLinkProps {
  href: string;
  text: string;
  icon: LucideIcon;
  isActive: boolean;
  className?: string;
  ref: RefObject<HTMLDivElement | void | null>;
}

declare interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

declare interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

// Utils
declare interface SendEmailProps {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
