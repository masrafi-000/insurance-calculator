import z from "zod";

export const ZCFooter = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export type ZTFooter = z.infer<typeof ZCFooter>;

export const calculatorSchema = z.object({
  email: z.string().email("Invalid email"),
  canton: z.string().min(1, "Select a canton"),
  monthlyPremium: z
    .string()
    .min(1, "Field required")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
  deductible: z.string().min(1, "Choose a deductible"),
  medicalExpenses: z
    .string()
    .min(1, "Field required")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
  copayCap: z
    .string()
    .min(1, "Field required")
    .refine((val) => !isNaN(Number(val)), "Must be a number"),
});

export type CalculatorSchema = z.infer<typeof calculatorSchema>;
