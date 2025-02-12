import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Newspaper, User as UserIcon, Menu, Home } from "lucide-react";
import React from "react";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { auth, currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <nav>
      <div className="flex gap-5">
        {userId ? (
          <NavBarLink href="/resumes" icon={<Newspaper />} variant="outline">
            Resumes
          </NavBarLink>
        ) : null}

        {}

        {userId ? (
          <NavBarLink href="/profile" icon={<UserIcon />} variant="outline">
            {user?.fullName || "Profile"}
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
              <Link href="/" className="flex gap-2">
                Home <Home />
              </Link>
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem>
              <Link
                href={userId ? "/profile" : "/login"}
                className="flex gap-2"
              >
                {userId ? "Profile" : "Login"} <UserIcon />
              </Link>
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem>
              <Link
                href={userId ? "/resumes" : "/login"}
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
