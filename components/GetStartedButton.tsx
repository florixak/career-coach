"use client";

import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { useRouter } from "next/navigation";

const GetStartedButton = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/resumes");
  };

  return (
    <InteractiveHoverButton className="rounded-md" onClick={handleGetStarted}>
      Get Started
    </InteractiveHoverButton>
  );
};

export default GetStartedButton;
