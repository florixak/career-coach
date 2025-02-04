import { getResumes } from "@/action/resume";
import ResumeCard from "./ResumeCard";

const ResumesList = async () => {
  const resumes = await getResumes();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {resumes.resumes?.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  );
};

export default ResumesList;
