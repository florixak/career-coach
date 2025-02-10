import { getReviews } from "@/action/reviews";

import { Button } from "../ui/button";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

const ReviewSection = async () => {
  const { reviews } = await getReviews();

  const spliceReviews = (end: number) => reviews?.slice(0, end);

  return (
    <section className="flex justify-center flex-col items-center px-10 gap-5 md:h-screen my-10">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <ul className="md:flex gap-5 flex-wrap max-w-[50rem] hidden">
        {spliceReviews(8)?.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </ul>
      <ul className="md:hidden flex flex-col gap-5">
        {spliceReviews(4)?.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </ul>
      <Button variant="outline" className="p-5 font-normal">
        <Link href="/reviews">Read More</Link>
      </Button>
    </section>
  );
};

export default ReviewSection;
