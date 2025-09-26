import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

const PlatformInsight = () => {
  return (
    <section className="flex flex-wrap items-center md:items-start md:flex-nowrap justify-between gap-10">
      <Image
        src="/images/platform-insight.svg"
        alt=""
        width={400}
        height={500}
        className="w-full md:w-5/12"
      />
      <div className="space-y-2 md:w-1/2 mt-2">
        <h2 className="text-primary-foreground leading-tight text-4xl font-bold">
          Simplify how teams collaborate and deliver
        </h2>
        <p className="font-medium">
          No more juggling multiple tools or losing track of progress. Our
          platform brings projects, tasks, and communication together in one
          place — giving your team clarity, focus, and speed. From planning to
          delivery, everything stays organized and transparent.
        </p>
        <Button size="lg" className="mt-5">
          <Link href="/register">Learn more</Link>
        </Button>
      </div>
    </section>
  );
};

export default PlatformInsight;
