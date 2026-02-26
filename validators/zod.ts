import z from "zod";

export const ZCFooter = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export type ZTFooter = z.infer<typeof ZCFooter>;

export const calculatorSchema = z.object({
  email: z.string().email("Email invalide"),
  canton: z.string().min(1, "Sélectionne un canton"),
  primeMensuelle: z
    .string()
    .min(1, "Champ requis")
    .refine((val) => !isNaN(Number(val)), "Doit être un nombre"),
  franchise: z.string().min(1, "Choisis une franchise"),
  fraisMedicauxAnnuels: z
    .string()
    .min(1, "Champ requis")
    .refine((val) => !isNaN(Number(val)), "Doit être un nombre"),
  plafondQuotePart: z
    .string()
    .min(1, "Champ requis")
    .refine((val) => !isNaN(Number(val)), "Doit être un nombre"),
});

export type CalculatorSchema = z.infer<typeof calculatorSchema>;
