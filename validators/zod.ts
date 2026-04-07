import z from "zod";

export const ZCFooter = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export type ZTFooter = z.infer<typeof ZCFooter>;

export const calculatorSchema = z.object({
  firstName: z.string().min(1, "Field required"),
  lastName: z.string().min(1, "Field required"),
  privacyPolicy: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
  dateOfBirth: z.string().regex(/^\d{4}$/, "Must be a 4-digit year"),
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
  model: z.enum(["Standard", "Family Doctor", "Telmod", "HMO/Network"], {
    message: "Invalid model",
  }),
  adults: z.string().min(1, "Field required"),
  children: z.string().min(1, "Field required"),
  accident: z.boolean(),
});

export type CalculatorSchema = z.infer<typeof calculatorSchema>;
