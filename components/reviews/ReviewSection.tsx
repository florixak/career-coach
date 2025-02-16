import { Button } from "../ui/button";

import Link from "next/link";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  return (
    <section className="flex justify-center flex-col items-center px-10 gap-5 md:h-screen my-10">
      <h2 className="text-2xl font-bold">Reviews</h2>

      <ReviewList limit={8} className="max-w-[50rem] hidden md:flex" />
      <ReviewList
        isMobile
        limit={4}
        className="flex flex-col gap-5 md:hidden"
      />

      <Button variant="outline" className="p-5 font-normal">
        <Link href="/reviews">Read More</Link>
      </Button>
    </section>
  );
};

export default ReviewSection;
