import { Suspense } from "react";
import Reviews from "./Reviews";
import ReviewListSkeleton from "./ReviewListSkeleton";

type ReviewListProps = {
  limit: number;
  className: string;
  isMobile?: boolean;
};

const ReviewList = ({ limit, className, isMobile }: ReviewListProps) => {
  return (
    <Suspense fallback={<ReviewListSkeleton count={isMobile ? 4 : 8} />}>
      <Reviews limit={limit} className={className} />
    </Suspense>
  );
};

export default ReviewList;
