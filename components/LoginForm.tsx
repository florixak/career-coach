"use client";

import { login } from "@/action/auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { status, error } = await login(formData);

    if (status === "SUCCESS") {
      toast.success("Logged in successfully");
      router.push("/");
    }

    if (status === "ERROR") {
      toast.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xs"
    >
      <Input type="text" placeholder="Email" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <Button variant="outline" type="submit" className="h-9">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
