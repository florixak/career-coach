import { getResumes } from "@/action/resume";
import React from "react";

const ResumesList = async () => {
  const resumes = await getResumes();

  console.log(resumes);

  return (
    <div className="grid grid-cols-3">
      {resumes.resumes?.map((resume) => (
        <div key={resume.id}>
          <h2>{resume.full_name}</h2>
          <p>{resume.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumesList;
