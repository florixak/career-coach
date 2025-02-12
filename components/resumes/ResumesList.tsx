import { type Resume } from "@/utils/types";
import ResumeCard from "./ResumeCard";

type ResumesListProps = {
  resumes: Resume[] | undefined;
};

const ResumesList = ({ resumes }: ResumesListProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {resumes?.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  );
};

export default ResumesList;
