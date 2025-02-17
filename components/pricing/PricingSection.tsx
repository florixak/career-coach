import Section from "../Section";
import PricingCard from "./PricingCard";

export type PricingPlan = {
  name: string;
  price: number;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 0,
    features: ["2 resume template", "Basic formatting", "PDF export"],
    cta: "Start Free",
    href: "?to=subscriptions",
  },
  {
    name: "Pro",
    price: 4.99,
    features: [
      "All Basic features",
      "5 resume templates",
      "AI suggestions",
      "Cover letter builder",
    ],
    cta: "Get Pro",
    href: "?to=subscribtions",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 9.99,
    features: [
      "All Pro features",
      "Unlimited templates",
      "Priority support",
      "Custom branding",
    ],
    cta: "Contact Sales",
    href: "?to=subscriptions",
  },
];

const PricingSection = () => {
  return (
    <Section
      title="Pricing"
      description="Choose a plan that works for you"
      className="bg-muted/50"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={plan.name} {...plan} index={index + 1} />
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
