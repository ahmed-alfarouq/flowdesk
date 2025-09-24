import { auth } from "@/auth";

import Navbar from "@/components/sections/Navbar";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navbar loggedin={!!session?.user} />
      <main className="container min-h-screen  flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </>
  );
}
