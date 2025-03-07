import React, { Suspense } from "react";
import { PricingPlan } from "./PricingSection";
import { scaleUp } from "@/utils/animations";
import AnimationWrapper from "../AnimationWrapper";
import PricingCardText from "./PricingCardText";
import PricingCardButton from "./PricingCardButton";
import LoadingSticks from "../LoadingSticks";

type PricingCardProps = PricingPlan & {
  index: number;
};

const PricingCard = ({
  name,
  price,
  features,
  cta,
  href,
  popular,
  index,
}: PricingCardProps) => {
  const cardAnimation =
    index === 1
      ? {
          ...scaleUp,
          initial: { scale: 0.8 },
          whileInView: { scale: 1.1 },
          whileHover: { scale: 1.2 },
        }
      : scaleUp;
  return (
    <AnimationWrapper
      animation={cardAnimation}
      className={`relative flex flex-col gap-5 z-10 p-5 border rounded-md w-[18rem] h-[20rem] justify-between ${
        index === 1 ? "bg-muted/50 z-10 scale-110" : "bg-primary-foreground"
      }`}
    >
      {popular && (
        <div className="absolute top-0 grid place-items-center -right-2 p-2 w-20 rounded-md border bg-primary transform -translate-y-1/4">
          <p className="text-black">Popular</p>
        </div>
      )}
      <PricingCardText name={name} price={price} features={features} />
      <Suspense fallback={<LoadingSticks />}>
        <PricingCardButton cta={cta} href={href} />
      </Suspense>
    </AnimationWrapper>
  );
};

export default PricingCard;
