import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex-center flex-col space-y-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" passHref>
        <Button variant={"outline"}>Return Home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
