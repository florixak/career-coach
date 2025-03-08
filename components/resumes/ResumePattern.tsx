import {
  BookUser,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";

type ResumePatternProps = {
  name?: string;
  position?: string;
  description?: string;
  skills?: string[];
  languages?: string[];
  contact?: {
    phone: string;
    email: string;
    address: string;
  };
  education?: {
    degree: string;
    institution: string;
    date: string;
  }[];
};

const ResumePattern = ({
  name = "John Doe",
  position = "Software Engineer",
  description = "I am a software engineer with 5 years of experience in building web applications.",
  skills = ["React", "Node.js", "Express", "PostgreSQL"],
  languages = ["English - C1", "Czech - C2", "German - B2"],
  contact = {
    phone: "+420 556 646 321",
    email: "example@mail.com",
    address: "1234 Main St, Prague, Czech Republic",
  },
  education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Prague, Czech Republic",
      date: "2015 - 2019",
    },
    {
      degree: "Master's in Computer Science",
      institution: "University of Prague, Czech Republic",
      date: "2019 - 2021",
    },
  ],
}: ResumePatternProps) => {
  return (
    <div className="h-full w-[50rem] mx-auto text-muted-foreground flex flex-row my-10 font-sans">
      <div className="flex flex-col w-[28rem] gap-5 bg-muted text-white p-5 border-r border-black">
        <Image
          src="/logo.webp"
          width={250}
          height={250}
          alt="Avatar"
          className="rounded-full"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <User /> Profile
            </h2>
            <p className="max-w-[18rem]">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Star /> Skills
            </h2>
            <ul className="max-w-[18rem]">
              {skills.map((skill) => (
                <li key={skill} className="list-disc ml-7">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <MessageCircle /> Languages
            </h2>
            <ul className="max-w-[18rem]">
              {languages.map((language) => (
                <li key={language} className="list-disc ml-7">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <BookUser /> Contact
            </h2>
            <ul className="max-w-[20rem] flex flex-col gap-1">
              <li className="ml-1 flex items-center gap-2">
                <Phone size={18} /> {contact.phone}
              </li>
              <li className="ml-1 flex items-center gap-2">
                <Mail size={18} /> {contact.email}
              </li>
              <li className="ml-1 flex items-start gap-2">
                <MapPin size={25} />
                {contact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-muted text-muted p-5 bg-white w-full">
        <div className="flex flex-col gap-2 bg-muted-foreground p-5 rounded-md">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p>{position}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <GraduationCap />
            Education
          </h2>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-5">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="flex flex-col gap-1 ml-7 relative before:content-['•'] before:absolute before:-left-4 before:scale-[1.4] before:top-[2px]"
                >
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                  <div>
                    <p>{item.institution}</p>
                    <p>{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePattern;
