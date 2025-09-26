import StatCard from "@/components/StatCard";
import { statsCards } from "@/constants";

const StatsSection = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-between gap-10">
      <header className="space-y-2">
        <h2 className="text-primary-foreground leading-tight text-4xl font-bold">
          Empowering teams <span className="block text-primary">to work smarter</span>
        </h2>
        <p className="font-medium">
          Our journey so far, built with dedication and teamwork.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-x-15 gap-y-10">
        {statsCards.map((card, i) => (
          <StatCard
            key={`${card.title}-${i}`}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
