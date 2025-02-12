import ResumeCreateForm from "@/components/forms/ResumeCreateForm";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

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
      <div className="text-center">
        <h1 className="text-4xl font-bold">Create Resume</h1>
        <p>Fill out the form below to create a new resume</p>
      </div>

      <ResumeCreateForm />
    </section>
  );
};

export default Page;
