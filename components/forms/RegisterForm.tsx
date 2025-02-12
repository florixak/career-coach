"use client";

import React, { useActionState, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { registerFormSchema } from "@/utils/validation";
import { register } from "@/action/auth";
import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = async (
    prevState: { status: string; error: string },
    formData: FormData
  ) => {
    try {
      const formValues = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      };

      await registerFormSchema.parseAsync(formValues);

      const { status, error } = await register(formData);

      console.log(status);

      if (status === "SUCCESS") {
        toast.success("Registered successfully");
        router.push("/login");
      }

      if (status === "ERROR") {
        toast.error(error);
      }

      return { ...prevState, status: "SUCCESS" };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        return { ...prevState, status: "ERROR" };
      }
      return { ...prevState, status: "ERROR" };
    }
  };

  const [, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full max-w-xs">
      <div>
        <Input type="text" placeholder="Name" name="fullName" required />
        {errors.fullName && (
          <span className="text-red-500 text-sm">{errors.fullName}</span>
        )}
      </div>
      <div>
        <Input type="email" placeholder="Email" name="email" required />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
        )}
      </div>

      <Button
        variant="outline"
        type="submit"
        disabled={isPending}
        className="h-9"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
