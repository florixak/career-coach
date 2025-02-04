import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/login">
            <Button variant="outline" className="text-xl p-5 font-normal">
              Get Started
            </Button>
          </Link>
        </article>
      </section>
      <section className="flex flex-col items-center justify-center h-screen bg-muted/50 px-10">
        <h2>
          Career Coach is a resume builder that helps you create a professional
          resume in minutes.
        </h2>
      </section>
    </>
  );
}
