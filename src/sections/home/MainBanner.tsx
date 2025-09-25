import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

const MainBanner = () => {
  return (
    <section className="flex flex-wrap-reverse md:flex-nowrap gap-5 lg:justify-between pt-10">
      <div className="">
        <h1 className="text-nowrap text-primary-foreground leading-tight text-[40px] lg:text-6xl xl:text-7xl font-bold">
          Build Smarter,
          <span className="block text-primary">Manage Faster,</span>
          <span className="block">Grow Without Limits.</span>
        </h1>
        <p className="text-primary-foreground text-base lg:text-lg font-medium mt-2">
          All-in-one project management designed to scale your business with
          less chaos.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>

      <Image
        src="/images/main-banner.svg"
        alt=""
        width={600}
        height={600}
        priority
        className="w-full lg:w-5/12"
      />
    </section>
  );
};

export default MainBanner;
