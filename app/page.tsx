import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container flex flex-col items-center justify-center space-x-10 h-screen md:flex-row">
        <Image
          src="/logo.webp"
          alt="Career Coach"
          width={430}
          height={430}
          layout="responsive"
          className="rounded-full border w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
        <article className="flex flex-col space-y-10 items-start">
          <Title />
          <Button variant="outline" className="text-xl p-5">
            Get Started
          </Button>
        </article>
      </section>
      <section className="flex flex-col items-center justify-center h-screen bg-muted/50">
        <h2>
          Career Coach is a resume builder that helps you create a professional
          resume in minutes.
        </h2>
      </section>
    </>
  );
}
