import { z } from "zod";

export const userDataSchema = z.object({
  id: z.coerce.number().min(2).max(100, "Id must be less than 100"),
  name: z.string().min(5).max(100, "Name must be less than 100"),
  email: z.string().email(),
  age: z.coerce.number().positive().max(100),
});

export type UserData = z.infer<typeof userDataSchema>;
