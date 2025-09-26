import { LucideIcon } from "lucide-react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type BottomLink = {
  beforeText?: string;
  text: string;
  link: string;
};

/* --- Components --- */
declare interface InputProps<T extends FieldValues> {
  type: string;
  label: string;
  name: Path<T>;
  error?: string;
  className?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
}

declare interface AuthContainerProps {
  title: string;
  showProviders?: boolean;
  bottomLinks: BottomLink[];
  children: React.ReactNode;
  className?: string;
}

declare interface AuthProviderProps {
  image: string;
  text: string;
  handleClick: () => void;
}

declare interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}
