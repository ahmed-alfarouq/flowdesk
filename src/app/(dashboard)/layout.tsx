import Sidebar from "@/components/sections/Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-51">{children}</main>
    </>
  );
};

export default DashboardLayout;
