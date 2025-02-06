import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Newspaper, User as UserIcon, Menu, Home } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

type NavbarProps = {
  user: User | null;
};
const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav>
      <div className="flex gap-5">
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
              <UserIcon />
            </Button>
          </Link>
        ) : (
          <Link href="/login" className="hidden sm:block">
            <Button variant="outline" className="sm:w-auto">
              <span className="hidden sm:block">Login</span>
              <UserIcon />
            </Button>
          </Link>
        )}
      </div>

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
              <Link href={user ? "/profile" : "/login"} className="flex gap-2">
                {user ? "Profile" : "Login"} <UserIcon />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={user ? "/resumes" : "/login"} className="flex gap-2">
                Resumes <Newspaper />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
