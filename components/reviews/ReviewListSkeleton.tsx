import React from "react";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

type ReviewListSkeletonProps = {
  count: number;
  className?: string;
};

const ReviewListSkeleton = ({ count, className }: ReviewListSkeletonProps) => {
  return (
    <div className={`flex gap-5 flex-wrap max-w-[50rem] ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <ReviewCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ReviewListSkeleton;
