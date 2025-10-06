import { auth } from "@/auth";
import { headers } from "next/headers";

import Features from "@/sections/home/Features";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MainBanner from "@/sections/home/MainBanner";
import OurClients from "@/sections/home/OurClients";
import StatsSection from "@/sections/home/StatsSection";
import PlatformInsight from "@/sections/home/PlatformInsight";
import FeatureHighlight from "@/sections/home/FeatureHighlight";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <Navbar loggedin={!!session} />
      <main className="container space-y-18 pb-20">
        <MainBanner />
        <OurClients />
        <Features />
        <FeatureHighlight />
        <StatsSection />
        <PlatformInsight />
      </main>
      <Footer loggedin={!!session} />
    </>
  );
}
