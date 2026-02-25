import z from "zod";

export const ZCFooter = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export type ZTFooter = z.infer<typeof ZCFooter>;