import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(1, { message: "Please enter a valid password" })
    .trim(),
});

export const ProjectFormSchema = z.object({
  name: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().trim(),
});
