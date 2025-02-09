"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex-center flex-col gap-5">
        <TriangleAlert size={64} />
        <h2>Something went wrong!</h2>
        <Button variant="outline" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
