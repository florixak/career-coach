import { formatCurrency } from "@/lib/utils";
import { PricingPlan } from "./Pricing";

type PricingCardTextProps = {
  name: PricingPlan["name"];
  price: PricingPlan["price"];
  features: PricingPlan["features"];
};

const PricingCardText = ({ name, price, features }: PricingCardTextProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-xl">{name}</h3>
      <p>
        <span className="text-2xl font-bold">
          {price === 0 ? "FREE" : `${formatCurrency(price)}`}
        </span>{" "}
        / month
      </p>
      <ul className="list-disc ml-5 text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="list-disc">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCardText;
