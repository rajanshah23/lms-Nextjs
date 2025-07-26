import Sidebar from "../sidebar/Admin-Sidebar";

function DashBoard({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 p-6 bg-white">{children}</div>
      </div>
    </>
  );
}

export default DashBoard;
