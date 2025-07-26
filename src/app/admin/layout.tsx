import DashBoard from "@/components/dashboard/Dashboard";
 

function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashBoard>{children}</DashBoard>;
}
export default AdminLayout;
