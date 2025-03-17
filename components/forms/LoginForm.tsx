"use client";

import { login } from "@/action/auth";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { MagicCard } from "../magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";

const LoginForm = () => {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const { status, error } = await login(formData);

      if (status === "SUCCESS") {
        toast.success("Logged in successfully");
        const to = searchParams.get("to");
        router.push(to ? decodeURIComponent(to) : "/resumes");
      }

      if (status === "ERROR") {
        toast.error(error);
      }
    } catch (error) {
      console.log("Error logging in", error);
      toast.error("Unexpected error occurred");
    }
  };
  return (
    <Card className="w-full max-w-sm">
      <MagicCard
        gradientColor={theme.systemTheme === "dark" ? "#262626" : "#D9D9D955"}
        gradientFrom="#ffffff"
        gradientTo="#ffffff"
        gradientOpacity={0.4}
      >
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input type="text" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button variant="outline" type="submit" className="h-9">
              Login
            </Button>
          </form>
        </CardContent>
      </MagicCard>
    </Card>
  );
};

export default LoginForm;
