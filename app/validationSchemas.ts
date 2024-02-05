import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character." })
    .max(255, { message: "Title cannot be more then 255 characters." }),
  description: z
    .string()
    .min(1, { message: "Description must be at least 1 character." }),
  status: z.enum(['OPEN', "CLOSED", 'IN_PROGRESS']).optional()
});

