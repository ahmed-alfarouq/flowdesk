import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

const FeatureHighlight = () => {
  return (
    <section className="flex flex-wrap items-center md:items-start md:flex-nowrap justify-between gap-10">
      <Image
        src="/images/feature-highlight.svg"
        alt=""
        width={400}
        height={500}
        className="w-full md:w-5/12"
      />
      <div className="space-y-2 md:w-1/2 mt-2">
        <h2 className="text-primary-foreground leading-tight text-4xl font-bold">
          The hidden costs of managing projects the old way
        </h2>
        <p className="font-medium">
          Spreadsheets, endless emails, and scattered tools slow teams down.
          With Flow Desk, you bring tasks, files, and collaboration into one
          platform — giving your team more time to focus on work that matters.
        </p>
        <Button size="lg" className="mt-5">
          <Link href="/register"> Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeatureHighlight;
