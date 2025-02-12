import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = async () => {
  return (
    <header className="flex z-[100] justify-between items-center py-1 md:py-2 px-5 md:px-10 border-b fixed w-full backdrop-blur-sm transition-all duration-1000">
      <Link href="/">
        <Image
          src="/logo-text.webp"
          alt="Career Coach"
          width={128}
          height={128}
        />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
