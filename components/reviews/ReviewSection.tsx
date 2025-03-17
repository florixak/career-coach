import { Suspense } from "react";
import LoadingSticks from "../LoadingSticks";
import Reviews from "./Reviews";
import Section from "../Section";

const ReviewSection = () => {
  return (
    <Section
      title="Reviews"
      description="Read what our customers have to say about us."
    >
      <div className="min-h-[31rem]">
        <Suspense fallback={<LoadingSticks />}>
          <Reviews className="w-full md:max-w-[50rem] xl:max-w-[80rem] transition-all duration-1000" />
        </Suspense>
      </div>
    </Section>
  );
};

export default ReviewSection;
