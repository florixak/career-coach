import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="flex-center flex-col gap-5">
      <RegisterForm />
      <div className="w-1/5 border-t rounded-full text-center"></div>
      <p>
        {"Don't have an account? "}
        <Link href="/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </section>
  );
};

export default Page;
