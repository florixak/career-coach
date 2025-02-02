"use client";

import { logout } from "@/action/auth";
import { Button } from "./ui/button";

const ButtonLogout = () => {
  const handleLogout = async () => {
    await logout();
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default ButtonLogout;
