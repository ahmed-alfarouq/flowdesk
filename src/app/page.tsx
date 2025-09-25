import { auth } from "@/auth";

import Navbar from "@/components/sections/Navbar";
import MainBanner from "@/sections/home/MainBanner";
import OurClients from "@/sections/home/OurClients";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navbar loggedin={!!session?.user} />
      <main className="container space-y-18 pb-20">
        <MainBanner />
        <OurClients />
      </main>
    </>
  );
}
