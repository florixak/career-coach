import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex z-[100] justify-between items-center py-1 md:py-4 px-5 md:px-10 border-b fixed w-full backdrop-blur-md">
      <Link href="/">
        <Image
          src="/logo-text.webp"
          alt="Career Coach"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

      <div className="text-lg">
        <Button variant="outline">Login</Button>
      </div>
    </header>
  );
};

export default Header;
