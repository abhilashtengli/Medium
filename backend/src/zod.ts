import z from "zod";

export const singupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
});
export const singinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
