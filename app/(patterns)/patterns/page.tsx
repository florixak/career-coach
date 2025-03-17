import ResumePattern from "@/components/resumes/ResumePattern";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Coach | Your Resume",
};

const Page = () => {
  return <ResumePattern />;
};

export default Page;
