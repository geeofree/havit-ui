import { z } from "zod";

export const user = z.object({
  uuid: z.string(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  username: z.string().nullable(),
  first_name: z.string().min(2).max(64),
  last_name: z.string().min(2).max(64),
  date_of_birth: z.string().date().nonempty(),
});

export const userSignIn = user.pick({
  email: true,
  password: true,
});

export type UserSignIn = z.infer<typeof userSignIn>;

export const userSignUp = user.omit({
  uuid: true,
});

export type UserSignUp = z.infer<typeof userSignUp>;

export const userDetails = user.omit({
  password: true,
});

export type UserDetails = z.infer<typeof userDetails>;
