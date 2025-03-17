import GetStartedButton from "@/components/GetStartedButton";
import ReviewSection from "@/components/reviews/ReviewSection";
import Title from "@/components/Title";
import Image from "next/image";
import PricingSection from "@/components/pricing/PricingSection";
import { Particles } from "@/components/magicui/particles";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <section className="relative container flex-center flex-col space-x-10 md:flex-row">
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
      <ToolsSection />
      <ReviewSection />
      <PricingSection />
    </>
  );
}
