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

const ResumePattern = () => {
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
            <p className="max-w-[18rem]">
              I am a software engineer with 5 years of experience in building
              web applications.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Star /> Skills
            </h2>
            <ul className="max-w-[18rem]">
              <li className="list-disc ml-7">React</li>
              <li className="list-disc ml-7">Node.js</li>
              <li className="list-disc ml-7">Express</li>
              <li className="list-disc ml-7">PostgreSQL</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <MessageCircle /> Languages
            </h2>
            <ul className="max-w-[18rem]">
              <li className="list-disc ml-7">English - C1</li>
              <li className="list-disc ml-7">Czech - C2</li>
              <li className="list-disc ml-7">German - B2</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <BookUser /> Contact
            </h2>
            <ul className="max-w-[20rem] flex flex-col gap-1">
              <li className="ml-1 flex items-center gap-2">
                <Phone size={18} /> +420 556 646 321
              </li>
              <li className="ml-1 flex items-center gap-2">
                <Mail size={18} /> example@example.com
              </li>
              <li className="ml-1 flex items-start gap-2">
                <MapPin size={25} />
                1234 Main St, Prague, Czech Republic
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-muted text-muted p-5 bg-white w-full">
        <div className="flex flex-col gap-2 bg-muted-foreground p-5 rounded-md">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p>Software Engineer</p>
        </div>
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <GraduationCap />
            Education
          </h2>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-1 list-disc">
                <h3 className="text-lg font-bold">
                  Bachelor&apos;s in Computer Science
                </h3>
                <div>
                  <p>University of Prague, Czech Republic</p>
                  <p>2015 - 2019</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePattern;
