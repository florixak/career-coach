import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="flex-center flex-col gap-5">
      <h1 className="text-4xl font-bold">Login</h1>
      <LoginForm />
      <div className=" w-1/5 border-t rounded-full text-center"></div>
      <p>
        {"Don't have an account? "}
        <Link href="/register" className="text-blue-400">
          Register
        </Link>
      </p>
    </section>
  );
};

export default Page;
