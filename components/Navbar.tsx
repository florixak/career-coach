import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Newspaper, User as UserIcon, Menu } from "lucide-react";
import React from "react";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { createClient } from "@/utils/supabase/server";

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user?.user_metadata;

  return (
    <nav>
      <div className="flex gap-5">
        {user ? (
          <NavBarLink href="/resumes" icon={<Newspaper />} variant="outline">
            Resumes
          </NavBarLink>
        ) : null}

        {}

        {user ? (
          <NavBarLink href="/profile" icon={<UserIcon />} variant="outline">
            {metadata?.first_name + " " + metadata?.last_name || "Profile"}
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
          <DropdownMenuContent className="rounded-md p-4 space-y-3 bg-background w-[14rem]">
            <DropdownMenuItem>
              <Link
                href={user ? "/profile" : "/sign-in"}
                className="flex gap-2"
              >
                {user ? "Profile" : "Login"} <UserIcon />
              </Link>
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem>
              <Link
                href={user ? "/resumes" : "/sign-in"}
                className="flex gap-2"
              >
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
