import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="h-screen flex items-center justify-center flex-col gap-5">
      <h1 className="text-4xl font-bold">Register</h1>
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
