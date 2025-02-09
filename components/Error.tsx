"use client";

import { TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <section className="flex-center flex-col gap-5">
      <TriangleAlert size={64} />
      <h2>Something went wrong!</h2>
      <Button variant="outline" onClick={() => reset()}>
        Try again
      </Button>
    </section>
  );
};

export default Error;
