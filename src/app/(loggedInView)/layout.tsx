import Header from "@/app/_components/ui/Header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex-grow">{children}</div>
    </>
  );
}
