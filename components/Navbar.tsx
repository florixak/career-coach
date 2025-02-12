import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Newspaper, User as UserIcon, Menu, Home } from "lucide-react";
import React from "react";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import NavBarLink from "./NavBarLink";

type NavbarProps = {
  user: User | null;
};
const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav>
      <div className="flex gap-5">
        {user ? (
          <NavBarLink href="/resumes" icon={<Newspaper />} variant="outline">
            Resumes
          </NavBarLink>
        ) : null}

        {user ? (
          <NavBarLink href="/profile" icon={<UserIcon />} variant="outline">
            {user?.email || "Profile"}
          </NavBarLink>
        ) : (
          <NavBarLink href="/login" icon={<UserIcon />} variant="outline">
            Login
          </NavBarLink>
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
