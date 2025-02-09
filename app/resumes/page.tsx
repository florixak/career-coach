import { getResumes } from "@/action/resume";
import ResumesList from "@/components/ResumesList";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const resumes = await getResumes();

  if (!user) {
    redirect("/login");
  }

  if (resumes.status === "ERROR") {
    return <h1>{resumes.error}</h1>;
  }

  return (
    <section className="flex-center flex-col gap-5">
      <h1 className="text-2xl font-bold">Your resumes</h1>

      <Button
        variant="outline"
        disabled={resumes.resumes ? resumes.resumes?.length > 5 : false}
      >
        <Link href="/resumes/create">Create new resume</Link>
      </Button>

      <ResumesList resumes={resumes.resumes} />
    </section>
  );
};

export default Page;
