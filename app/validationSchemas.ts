import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character." })
    .max(255, { message: "Title cannot be more then 255 characters." }),
  description: z
    .string()
    .min(1, { message: "Description must be at least 1 character." })
    .max(65535, {
      message: "Description cannot be more then 655355 characters.",
    }),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(255, { message: "Title cannot be more then 255 characters." })
    .optional(),
  description: z
    .string()
    .min(1, { message: "Description is required." })
    .max(65535, {
      message: "Description cannot be more then 655355 characters.",
    })
    .optional(),
  status: z.enum(["OPEN", "CLOSED", "IN_PROGRESS"]).optional(),
  assignedToUserId: z
    .string()
    .min(1, { message: "AssignedToUserId is required." })
    .max(255)
    .optional()
    .nullable(),
});
