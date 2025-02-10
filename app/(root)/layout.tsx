import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden font-work-sans">
        {children}
      </main>
      <Footer />
    </>
  );
}
