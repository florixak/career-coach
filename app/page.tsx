import GetStartedButton from "@/components/GetStartedButton";
import ReviewSection from "@/components/reviews/ReviewSection";
import Title from "@/components/Title";
import ErrorBoundary from "next/dist/client/components/error-boundary";
import Image from "next/image";
import Error from "./resumes/error";

export default function Home() {
  return (
    <>
      <section className="container flex-center flex-col space-x-10 md:flex-row">
        <Image
          src="/logo.webp"
          alt="Career Coach"
          width={430}
          height={430}
          layout="responsive"
          className="rounded-full border w-full max-w-[21rem] md:max-w-md"
        />
        <article className="flex flex-col space-y-10 items-start">
          <Title />

          <GetStartedButton />
        </article>
      </section>
      <section className="flex-center flex-col bg-muted/50 px-10 gap-5">
        <h2 className="text-2xl font-bold">About Career Coach</h2>
        <p className="text-lg max-w-[40rem]">
          Career Coach is a platform to create professional resumes. You can
          choose from multiple templates and download your resume in PDF format.
          You can also share your resume with a link.
        </p>
      </section>

      <ReviewSection />
    </>
  );
}
