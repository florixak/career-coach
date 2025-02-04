import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { Home, Menu, Newspaper, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

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
          <Link href="/resumes" className="hidden sm:block">
            <Button variant="outline">
              <span className="hidden sm:block">Resumes</span>
              <Newspaper />
            </Button>
          </Link>
        ) : null}

        {user ? (
          <Link href="/profile" className="hidden sm:block">
            <Button variant="outline" className="sm:w-auto">
              <span className="hidden sm:block">
                {user?.email || "Profile"}
              </span>
              <User />
            </Button>
          </Link>
        ) : (
          <Link href="/login" className="hidden sm:block">
            <Button variant="outline" className="sm:w-auto">
              <span className="hidden sm:block">Login</span>
              <User />
            </Button>
          </Link>
        )}

        <div className="block sm:hidden text-lg z-[110]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu size={54} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-md p-2 space-y-3 bg-background w-[10rem]">
              <DropdownMenuItem>
                <Link href="/" className="flex gap-2">
                  Home <Home />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={user ? "/profile" : "/login"}
                  className="flex gap-2"
                >
                  {user ? "Profile" : "Login"} <User />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={user ? "/resumes" : "/login"}
                  className="flex gap-2"
                >
                  Resumes <Newspaper />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
