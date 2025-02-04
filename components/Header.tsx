import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { Newspaper, User } from "lucide-react";

const Header = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex z-[100] justify-between items-center py-1 md:py-2 px-5 md:px-10 border-b fixed w-full backdrop-blur-sm">
      <Link href="/">
        <Image
          src="/logo-text.webp"
          alt="Career Coach"
          width={128}
          height={128}
        />
      </Link>
      <nav className="flex gap-5">
        {user ? (
          <Link href="/resumes">
            <Button variant="outline">
              <span className="hidden sm:block">Resumes</span>
              <Newspaper />
            </Button>
          </Link>
        ) : null}
        {user ? (
          <Link href="/profile">
            <Button variant="outline" className="sm:w-auto">
              <span className="hidden sm:block">Profile</span>
              <User />
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button variant="outline" className="sm:w-auto">
              <span className="hidden sm:block">Login</span>
              <User />
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
