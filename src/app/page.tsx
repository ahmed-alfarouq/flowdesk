import { auth } from "@/auth";

import Navbar from "@/components/sections/Navbar";
import MainBanner from "@/sections/home/MainBanner";


export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navbar loggedin={!!session?.user} />
      <main className="container">
        <MainBanner />
      </main>
    </>
  );
}
