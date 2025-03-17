import ButtonLogout from "@/components/ButtonLogout";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Career Coach | Your Profile",
};

const Page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const metadata = user?.user_metadata;

  return (
    <section className="flex-center flex-row">
      <aside>
        <h1 className="text-4xl font-bold">Profile</h1>
        <p>Welcome, {metadata?.first_name}</p>
        <ButtonLogout />
      </aside>
      <section>
        <h2 className="text-2xl font-bold">User Information</h2>
        <p>Email: {user.email}</p>
        <p>Full Name: {metadata?.first_name + " " + metadata?.last_name}</p>
      </section>
    </section>
  );
};

export default Page;
