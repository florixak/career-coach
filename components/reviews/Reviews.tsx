import { getReviews } from "@/action/reviews";
import React from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { Marquee } from "../magicui/marquee";

type ReviewsProps = {
  className?: string;
};

const Reviews = async ({ className }: ReviewsProps) => {
  //await delay(5000);

  const { reviews, error } = await getReviews();

  if (error) {
    return <p>error</p>;
  }

  const firstReviews = reviews?.slice(0, reviews.length / 2);
  const secondReviews = reviews?.slice(reviews.length / 2, reviews.length);

  return (
    <section className="flex items-center flex-col gap-5">
      <ul className={`relative flex flex-wrap ${className}`}>
        <Marquee pauseOnHover className="duration-[40s]">
          {firstReviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="duration-[40s]">
          {secondReviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-background"></div>
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
