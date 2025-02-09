"use client";

import { Review } from "@/utils/types";
import { useState, useRef, useEffect } from "react";

type ReviewTextProps = {
  review: Review["review"];
};

const ReviewText = ({ review }: ReviewTextProps) => {
  const [showFull, setShowFull] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const reviewRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (reviewRef.current) {
      setIsOverflowing(
        reviewRef.current.scrollHeight > reviewRef.current.clientHeight
      );
    }
  }, [review]);

  return (
    <div className="flex flex-col gap-2 text-muted-foreground">
      <p
        ref={reviewRef}
        className={`${
          showFull ? "block" : "line-clamp-3"
        } transition-all duration-300`}
      >
        {review}
      </p>
      {isOverflowing && (
        <span
          onClick={() => setShowFull(!showFull)}
          className="text-blue-500 hover:text-blue-400 cursor-pointer"
        >
          {showFull ? "Read Less" : "Read More"}
        </span>
      )}
    </div>
  );
};

export default ReviewText;
