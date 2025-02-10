import BackToResumes from "@/components/BackToResumes";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative font-work-sans">
      <BackToResumes />
      {children}
    </main>
  );
}
