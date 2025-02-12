"use client";

import { logout } from "@/action/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ButtonLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout()
      .then(() => {
        toast.success("Logged out successfully");
        router.push("/login");
      })
      .catch(() => {
        toast.error("An error occurred while logging out");
      });
  };
  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center"
    >
      <span className="hidden sm:block">Logout</span>
      <LogOut />
    </Button>
  );
};

export default ButtonLogout;
