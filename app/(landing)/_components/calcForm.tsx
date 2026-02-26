"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CantonOption, FranchiseOption } from "@/types/shared";
import { calculatorSchema, CalculatorSchema } from "@/validators/zod";

export function PrimeCalculatorForm({
  CANTONS,
  FRANCHISES,
}: {
  CANTONS: CantonOption[];
  FRANCHISES: FranchiseOption[];
}) {
  const form = useForm<CalculatorSchema>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      email: "",
      canton: "",
      primeMensuelle: "",
      franchise: "",
      fraisMedicauxAnnuels: "",
      plafondQuotePart: "",
    },
  });

  const onSubmit = (data: CalculatorSchema) => {
    console.log("Validated Data:", data);
    // API call, email trigger, calculation logic
  };

  return (
    <div className="bg-[#fcfdfd] border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm max-w-5xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-extrabold text-slate-900 tracking-tight mb-1.5">
                Calculateur “Prime vs Rentabilité”
              </h1>
              <p className="text-[15px] text-slate-500">
                {`Tu reçois aussi le résultat par email, et il s'affiche immédiatement ici.`}
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-slate-700 shadow-sm whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Leads + Résultats
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              1) Infos pour recevoir le résultat par email
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Email *
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="test@email.ch"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="canton"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Canton *
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue placeholder="Jura (JU)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl">
                        {CANTONS.map((c: CantonOption) => (
                          <SelectItem
                            key={c.value}
                            value={c.value}
                            className="rounded-lg cursor-pointer"
                          >
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="h-px bg-slate-100 w-full" />

          {/* Section 2 */}
          <div>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              2) Tes chiffres (calcul immédiat + envoi email)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="primeMensuelle"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Prime mensuelle (CHF)
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="380"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="franchise"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Franchise (CHF)
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue placeholder="2'500" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl">
                        {FRANCHISES.map((f: FranchiseOption) => (
                          <SelectItem
                            key={f.value}
                            value={f.value}
                            className="rounded-lg cursor-pointer"
                          >
                            {f.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fraisMedicauxAnnuels"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Total frais médicaux annuels (CHF)
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="1200"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="plafondQuotePart"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Plafond quote-part (CHF)
                      </FormLabel>
                      <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="700"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <div className="mt-2 text-[13px] text-slate-500">
                      {`Astuce : laisse 700 si tu n'es pas sûr (adulte).`}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              type="submit"
              className="bg-[#4182F9] hover:bg-[#3471e4] text-white rounded-full px-8 py-6 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
            >
              Calculer + Envoyer
            </Button>

            <Button
              type="button"
              variant="outline"
              className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 rounded-full px-6 py-6 text-[15px] font-bold shadow-sm transition-colors"
            >
              Exemple
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                form.reset({
                  email: "",
                  canton: "",
                  primeMensuelle: "",
                  franchise: "",
                  fraisMedicauxAnnuels: "",
                  plafondQuotePart: "",
                })
              }
              className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 rounded-full px-6 py-6 text-[15px] font-bold shadow-sm transition-colors"
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
