import ResumesList from "@/components/ResumesList";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return notFound();
  }

  return (
    <section className="flex-center flex-col gap-5">
      <h1 className="text-2xl font-bold">Your resumes</h1>

      <Link href="/resumes/create">
        <Button variant="outline">Create new resume</Button>
      </Link>

      <ResumesList />
    </section>
  );
};

export default Page;
