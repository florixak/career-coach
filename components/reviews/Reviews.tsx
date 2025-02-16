import { getReviews } from "@/action/reviews";
import React from "react";
import ReviewCard from "./ReviewCard";

type ReviewsProps = {
  limit: number;
  className: string;
};

const Reviews = async ({ limit, className }: ReviewsProps) => {
  const { reviews, error } = await getReviews();

  if (error) {
    return <p>error</p>;
  }

  return (
    <ul className={`flex gap-5 flex-wrap ${className}`}>
      {reviews?.slice(0, limit).map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default Reviews;
