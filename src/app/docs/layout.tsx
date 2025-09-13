import Sidebar from "@/app/docs/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-14 divide-x">
      <div className="py-5 mx-2 col-span-2 hidden md:block">
        <Sidebar />
      </div>
      <main className="py-5 mx-2 col-span-12 min-h-screen">{children}</main>
    </div>
  );
}
