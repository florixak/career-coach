import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

const Header = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex z-[100] justify-between items-center py-1 md:py-4 px-5 md:px-10 border-b fixed w-full backdrop-blur-sm">
      <Link href="/">
        <Image
          src="/logo-text.webp"
          alt="Career Coach"
          width={100}
          height={100}
        />
      </Link>

      <div className="text-lg">
        {user ? (
          <Link href="/profile">
            <Button variant="outline">Profile</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
