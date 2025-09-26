import FeatureCard from "@/components/FeatureCard";

import { featureCards } from "@/constants";

const Features = () => {
  return (
    <section className="space-y-8">
      <header className="text-center space-y-2">
        <h2 className="text-primary-foreground leading-tight text-4xl font-bold">
          Manage your entire projects and teams <br />
          in one platform
        </h2>
        <p className="font-medium">Who is Flow Desk built for?</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureCards.map((card, i) => (
          <FeatureCard
            key={`${card.title}-${i}`}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
