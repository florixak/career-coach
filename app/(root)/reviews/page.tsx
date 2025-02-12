import { getReviews } from "@/action/reviews";
import ReviewCard from "@/components/reviews/ReviewCard";

const Page = async () => {
  const { reviews } = await getReviews();

  return (
    <section className="flex items-center justify-center flex-col gap-5 text-white mt-48 mb-20">
      <h1>Reviews</h1>
      <div className="flex flex-wrap gap-5 max-w-[60rem]">
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Page;
