import { z } from "zod";

export const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Name must be at least 3 characters" })
      .max(16, { message: "Name must be at most 16 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const createResumeSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  education: z.array(z.string()),
  workExperience: z.array(z.string()),
  skills: z.array(z.string()),
  contact: z.array(z.string()),
  languages: z.array(z.string()),
  bgColor: z.string().includes("#", {
    message: "Background color must be a valid hex color",
  }),
  textColor: z.string().includes("#", {
    message: "Text color must be a valid hex color",
  }),
});
