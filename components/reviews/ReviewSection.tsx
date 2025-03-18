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
          <Reviews className="w-[calc(100% - 80px)]" />
        </Suspense>
      </div>
    </Section>
  );
};

export default ReviewSection;
