import { getResume } from "@/action/resume";
import { type Resume } from "@/utils/types";
import Image from "next/image";

type ResumeProps = {
  resumeId: Resume["id"];
};

const Resume = async ({ resumeId }: ResumeProps) => {
  const resume = await getResume(resumeId);

  if (resume.status === "ERROR") {
    return <p>{resume.error}</p>;
  }

  const resumeData = resume?.resume;
  if (!resumeData) {
    return <p>Resume data is not available</p>;
  }

  const {
    full_name,
    description,
    education,
    experience,
    skills,
    contact,
    languages,
    image_url,
  } = resumeData as Resume;

  return (
    <section className="h-full p-4 rounded-md bg-white text-black">
      <div className="flex flex-row items-center gap-5">
        <Image
          src={image_url}
          alt={full_name}
          className="size-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl">{full_name}</h2>
          <p className="text-base">{description} dsafs</p>
        </div>
      </div>

      <ul>
        {education?.map((item, index) => (
          <li key={index}>
            {item.degree} - {item.school} ({item.start_date} - {item.end_date})
          </li>
        ))}
      </ul>
      <ul>
        {experience?.map((item, index) => (
          <li key={index}>
            {item.position} at {item.company} ({item.start_date} -{" "}
            {item.end_date})
          </li>
        ))}
      </ul>
      <ul>
        {skills?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {contact?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {languages?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
