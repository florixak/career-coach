import { Review } from "@/utils/types";
import ReviewText from "./ReviewText";
import AnimationWrapper from "../AnimationWrapper";
import { scaleUp } from "@/utils/animations";
import { Star, StarOff } from "lucide-react";

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <AnimationWrapper
      className="flex flex-col gap-2 border rounded-md p-5 flex-1"
      animation={scaleUp}
    >
      <div className="flex flex-row gap-2 items-center">
        <h3 className="font-semibold">{review.name}</h3>
        <div className="rounded-md bg-muted p-1 flex">
          {Array.from({ length: review.stars }).map((_, index) => (
            <span key={index}>
              <Star className="text-yellow-300" />
            </span>
          ))}
          {Array.from({ length: 5 - review.stars }).map((_, index) => (
            <span key={index}>
              <StarOff />
            </span>
          ))}
        </div>
      </div>
      <ReviewText review={review.review} />
    </AnimationWrapper>
  );
};

export default ReviewCard;
