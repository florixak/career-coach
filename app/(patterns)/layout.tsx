import BackToResumes from "@/components/resumes/BackToResumes";

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
