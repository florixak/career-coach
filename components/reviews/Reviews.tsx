import { getReviews } from "@/action/reviews";
import React from "react";
import ReviewCard from "./ReviewCard";
import { delay } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

type ReviewsProps = {
  className?: string;
};

const Reviews = async ({ className }: ReviewsProps) => {
  await delay(5000);

  const { reviews, error } = await getReviews();

  if (error) {
    return <p>error</p>;
  }

  return (
    <section className="flex items-center flex-col gap-5">
      <ul className={`flex gap-5 flex-wrap ${className}`}>
        {reviews?.slice(0, 8).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
      <Link href="/reviews">
        <Button variant="outline" className="p-5 font-normal">
          Read More
        </Button>
      </Link>
    </section>
  );
};

export default Reviews;
