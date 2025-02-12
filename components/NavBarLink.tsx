"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

type NavBarLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

const NavBarLink = ({
  href,
  children,
  icon: Icon,
  variant = "outline",
  className = "",
}: NavBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`hidden sm:block ${className}`}>
      <Button variant={variant} className={`${isActive ? "bg-secondary" : ""}`}>
        <span className="hidden sm:block">{children}</span>
        {Icon && Icon}
      </Button>
    </Link>
  );
};

export default NavBarLink;
