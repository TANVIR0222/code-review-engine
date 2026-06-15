export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className=" flex-1 items-center justify-center bg-black  px-4 min-h-screen flex flex-col">
      <main>{children}</main>
    </body>
  );
}
