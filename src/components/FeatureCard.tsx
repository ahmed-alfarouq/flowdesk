import { FeatureCardProps } from "@/types";

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => {
  const Icon = icon;
  return (
    <div className="bg-white min-h-60 md:min-h-74 flex flex-col items-center gap-3 py-6 px-7 text-center rounded-primary shadow-primary/10 shadow-md">
      <div className="flex items-center justify-center bg-primary/10 rounded-tl-3xl rounded-br-3xl sm:size-21 p-7">
        <Icon className="size-full text-primary-foreground" />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-3">
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="text-sm font-medium">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
