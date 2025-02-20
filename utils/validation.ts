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
  education: z.array(z.string()).min(1, {
    message: "Education must have at least 1 item",
  }),
  workExperience: z.array(z.string()).min(1, {
    message: "Work experience must have at least 1 item",
  }),
  skills: z.array(z.string()).min(1, {
    message: "Skills must have at least 1 item",
  }),
  contact: z.array(z.string()).min(1, {
    message: "Contact must have at least 1 item",
  }),
  languages: z
    .array(z.string())
    .min(1, { message: "Languages must have at least 1 item" }),
  image: z.string().optional(),
});
