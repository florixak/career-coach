"use client";

import { login } from "@/action/auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      await login(formData);
    } catch (error) {
      console.error(error);
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
