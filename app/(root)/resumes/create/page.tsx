import ResumeCreateForm from "@/components/forms/ResumeCreateForm";
import Section from "@/components/Section";
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
    <Section
      className="flex-center flex-col gap-5 md:mt-20"
      title="Create Resume"
      description="Create a new resume"
    >
      <ResumeCreateForm />
    </Section>
  );
};

export default Page;
