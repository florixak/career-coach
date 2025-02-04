import React from "react";
import Resume from "./Resume";
import Link from "next/link";

type ResumeCardProps = {
  resume: Resume;
};

const ResumeCard = ({ resume }: ResumeCardProps) => {
  const formatDay = new Date(resume.created_at).toLocaleDateString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/resume/${resume.id}`}>
      <article className="relative border p-4 rounded-md w-full md:w-[26rem] h-[20rem] object-fill overflow-hidden cursor-pointer">
        <div className="absolute w-full h-full hover:bg-black hover:bg-opacity-50 flex transition-all duration-500 items-center justify-center group top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-white hidden group-hover:flex transition-all">
            {formatDay}
          </p>
        </div>
        <Resume resumeId={resume.id} />
      </article>
    </Link>
  );
};

export default ResumeCard;
