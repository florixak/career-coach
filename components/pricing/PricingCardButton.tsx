import Link from "next/link";
import { Button } from "../ui/button";
import { PricingPlan } from "./PricingSection";
import { createClient } from "@/utils/supabase/server";

type PricingCardButtonProps = {
  cta: PricingPlan["cta"];
  href: PricingPlan["href"];
};
const PricingCardButton = async ({ cta, href }: PricingCardButtonProps) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <Link
      href={user ? "/subscriptions" : "/login" + href}
      className="flex justify-center"
    >
      <Button>{cta}</Button>
    </Link>
  );
};

export default PricingCardButton;
