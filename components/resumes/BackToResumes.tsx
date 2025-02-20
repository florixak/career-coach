"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const BackToResumes = () => {
  return (
    <Button variant="outline" className="absolute -top-3 left-5">
      <Link href="/resumes">Back to resumes</Link>
    </Button>
  );
};

export default BackToResumes;
