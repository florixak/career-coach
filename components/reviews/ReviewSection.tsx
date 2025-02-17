import { Suspense } from "react";
import LoadingSticks from "../LoadingSticks";
import Reviews from "./Reviews";
import Section from "../Section";

const ReviewSection = () => {
  return (
    <Section
      title="Reviews"
      description="What our customers are saying about us"
    >
      <div className="min-h-[31rem]">
        <Suspense fallback={<LoadingSticks />}>
          <Reviews className="max-w-[50rem]" />
        </Suspense>
      </div>
    </Section>
  );
};

export default ReviewSection;
