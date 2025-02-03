import { getResume } from "@/action/resume";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const resume = await getResume(id);

  if (resume.status === "ERROR") {
    return notFound();
  }

  return (
    <div className="flex-center text-white">
      {resume ? resume?.resume?.full_name : "No resume found"}
    </div>
  );
};

export default Page;
