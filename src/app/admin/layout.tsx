import DashBoard from "@/components/dashboard/Dashboard";
import StoreProvider from "../StoreProvider";

function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <StoreProvider><DashBoard> {children}</DashBoard></StoreProvider>;
}
export default AdminLayout;
