import { z } from "zod";

const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;

export const SignupFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email." })
    .trim(),
  password: z.string().min(1, { message: "Password is required." }).trim(),
});

export const ProjectFormSchema = z.object({
  name: z.string().min(1, { message: "Project name is required." }).trim(),
  startDate: z.string().regex(monthPattern, {
    message: "Project start date is required.",
  }),
  endDate: z.string().regex(monthPattern, {
    message: "Project end date is required.",
  }),
  description: z
    .string()
    .min(1, { message: "Project description is required." })
    .trim(),
  projectLink: z
    .string()
    .min(1, {
      message:
        "Project link is required. If unavailable, please enter the reason.",
    })
    .trim(),
  githubLink: z
    .string()
    .min(1, {
      message:
        "Github link is required. If unavailable, please enter the reason.",
    })
    .trim(),
  image: z
    .any()
    .optional()
    .refine((data) => data.length === 0 || data[0].size <= 5000000, {
      message: "Max image size is 5MB.",
    })
    .refine(
      (data) =>
        data.length === 0 ||
        ["image/jpg", "image/jpeg", "image/png"].includes(data[0].type),
      {
        message: "Only .jpg, .jpeg, and .png formats are supported.",
      }
    ),
});
