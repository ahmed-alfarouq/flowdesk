import Image from "next/image";

import { clientLogos } from "@/constants";

import { cn } from "@/lib/utils";

const OurClients = () => {
  return (
    <section className="space-y-8">
      <header className="text-center space-y-2">
        <h2 className="text-primary-foreground text-4xl font-bold">
          Our Clients
        </h2>
        <p className="font-medium">
          We have been working with some Fortune 500+ clients
        </p>
      </header>

      <div className="group relative flex items-center gap-x-[96px] py-5 rounded-sm overflow-hidden mask-l-from-transparent mask-l-to-black mask-l-from-0 mask-l-to-10% mask-r-from-transparent mask-r-to-black mask-r-from-0 mask-r-to-10%">
        <div className="group-hover:[animation-play-state:paused] flex items-center shrink-0 animate-[scrollLeft_15s_linear_infinite] gap-x-[96px]">
          {clientLogos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={100}
              className={cn(
                logo.size || "h-19 md:h-20",
                "w-auto grayscale hover:grayscale-0 transition-all duration-300"
              )}
            />
          ))}
        </div>
        <div
          className="group-hover:[animation-play-state:paused] flex items-center shrink-0 animate-[scrollLeft_15s_linear_infinite] gap-x-[96px]"
          aria-hidden={true}
        >
          {clientLogos.map((logo) => (
            <Image
              key={`${logo.alt}-dup`}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={100}
              className={cn(
                logo.size || "h-19 md:h-20",
                "w-auto grayscale hover:grayscale-0 transition-all duration-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
