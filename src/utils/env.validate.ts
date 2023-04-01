import * as z from "zod";

export const envSchema = z.object({
  PORT: z.string().nonempty(),
  MONGO_CONNECTION_STRING: z.string().url(),
});
