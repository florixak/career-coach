import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createClient } from "@/utils/supabase/server";
import Navbar from "./Navbar";

const Header = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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
      <Navbar user={user} />
    </header>
  );
};

export default Header;
