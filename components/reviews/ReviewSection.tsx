import { Suspense } from "react";
import LoadingSticks from "../LoadingSticks";
import Reviews from "./Reviews";

const ReviewSection = () => {
  return (
    <section className="flex justify-center flex-col items-center px-10 gap-5 md:h-screen my-10">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="min-h-[31rem]">
        <Suspense fallback={<LoadingSticks />}>
          <Reviews className="max-w-[50rem]" />
        </Suspense>
      </div>
    </section>
  );
};

export default ReviewSection;
