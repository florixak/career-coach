import GetStartedButton from "@/components/GetStartedButton";
import ReviewSection from "@/components/reviews/ReviewSection";
import Title from "@/components/Title";
import PatternCard from "@/components/PatternCard";
import Image from "next/image";
import PricingSection from "@/components/pricing/PricingSection";

export default function Home() {
  return (
    <>
      <section className="container flex-center flex-col space-x-10 md:flex-row">
        <Image
          src="/logo.webp"
          alt="Career Coach"
          width={430}
          height={430}
          className="rounded-full border w-full max-w-[21rem] md:max-w-md"
          priority
        />
        <article className="flex flex-col space-y-10 items-start">
          <Title />

          <GetStartedButton />
        </article>
      </section>
      <section className="flex-center flex-col bg-muted/50 px-10 gap-5">
        <h2 className="text-2xl font-bold">Resume patterns</h2>
        <p className="text-muted-foreground">
          Choose from a variety of resume patterns to make your resume stand out
          from the crowd.
        </p>
        <div className="flex flex-row gap-5">
          <PatternCard />
        </div>
      </section>
      <ReviewSection />
      <PricingSection />
    </>
  );
}
