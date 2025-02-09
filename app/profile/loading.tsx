import { TextShimmer } from "@/components/ui/text-shimmer";

const Loading = () => {
  return (
    <TextShimmer className="flex-center text-5xl font-bold" duration={0}>
      Loading
    </TextShimmer>
  );
};

export default Loading;
