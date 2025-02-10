import ButtonLogout from "@/components/ButtonLogout";
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
    <section className="flex-center flex-row">
      <aside>
        <h1 className="text-4xl font-bold">Profile</h1>
        <p>Welcome, {user.email?.split("@")[0]}</p>
        <ButtonLogout />
      </aside>
      <section>
        <h2 className="text-2xl font-bold">User Information</h2>
        <code>{JSON.stringify(user, null, 2)}</code>
      </section>
    </section>
  );
};

export default Page;
