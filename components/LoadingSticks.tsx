import { cn } from "@/lib/utils";

type LoadingSticksProps = {
  className?: string;
};

const LoadingSticks = ({ className }: LoadingSticksProps) => {
  return (
    <div className={cn(`flex flex-row gap-2`, className)}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`bg-gray-300 h-5 w-[2px] rounded-full animate-bounce-stick`}
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default LoadingSticks;
