import ButtonLogout from "@/components/ButtonLogout";
import ResumesList from "@/components/ResumesList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Profile</h1>
      <p>Welcome back, {user.email}</p>
      <ResumesList />
      <ButtonLogout />
    </section>
  );
};

export default Page;
