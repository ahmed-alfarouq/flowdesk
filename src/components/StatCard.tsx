import { StatCardProps } from "@/types";

const StatCard = ({ title, icon, value }: StatCardProps) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-13 text-primary" />
      <div className="flex flex-col">
        <strong className="text-2xl">{value}</strong>
        <span className="font-light">{title}</span>
      </div>
    </div>
  );
};

export default StatCard;
