"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { HelpCircle, Loader2 } from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCalculatorMutation } from "@/hooks/queries/use-calculator-mutation";
import { useCalculatorStore } from "@/store/use-calculator-store";
import { CantonOption, FranchiseOption } from "@/types/shared";
import { calculatorSchema, CalculatorSchema } from "@/validators/zod";

export function PrimeCalculatorForm({
  CANTONS,
  FRANCHISES,
}: {
  CANTONS: CantonOption[];
  FRANCHISES: FranchiseOption[];
}) {
  const resetCalculator = useCalculatorStore((state) => state.resetCalculator);
  const { mutate, isPending } = useCalculatorMutation();

  const form = useForm<CalculatorSchema>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      email: "",
      canton: "",
      monthlyPremium: "",
      deductible: "",
      medicalExpenses: "",
      copayCap: "",
    },
  });

  const onSubmit = (data: CalculatorSchema) => {
    mutate(data);
  };

  return (
    <div className="bg-[#fcfdfd] border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm max-w-5xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-extrabold text-slate-900 tracking-tight mb-1.5">
                Premium vs. Profitability Calculator
              </h1>
              <p className="text-[15px] text-slate-500">
                You will receive the result by email, and it will also appear
                immediately here.
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-slate-700 shadow-sm whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Leads + Results
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              1) Info to receive your results via email
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
                        <ScrollArea className="h-72 w-full">
                          {CANTONS.map((c: CantonOption) => (
                            <SelectItem
                              key={c.value}
                              value={c.value}
                              className="rounded-lg cursor-pointer"
                            >
                              {c.label}
                            </SelectItem>
                          ))}
                        </ScrollArea>
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
              2) Your numbers (instant calculation + email)
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="monthlyPremium"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Monthly Premium (CHF)
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
                name="deductible"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Deductible (CHF)
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
                        <ScrollArea className="h-auto w-full">
                          {FRANCHISES.map((f: FranchiseOption) => (
                            <SelectItem
                              key={f.value}
                              value={f.value}
                              className="rounded-lg cursor-pointer"
                            >
                              {f.label}
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="medicalExpenses"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Total Annual Medical Expenses (CHF)
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
                name="copayCap"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Copay Cap (CHF)
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
                      Tip: leave 700 if you are not sure (adult).
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
              disabled={isPending}
              className="bg-[#4182F9] hover:bg-[#3471e4] text-white rounded-full px-8 py-6 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Calculate + Send
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.setValue("canton", "GE");
                form.setValue("monthlyPremium", "380");
                form.setValue("deductible", "2500");
                form.setValue("medicalExpenses", "1200");
                form.setValue("copayCap", "700");
              }}
              className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 rounded-full px-6 py-6 text-[15px] font-bold shadow-sm transition-colors"
            >
              Example
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetCalculator();
                form.reset({
                  email: "",
                  canton: "",
                  monthlyPremium: "",
                  deductible: "",
                  medicalExpenses: "",
                  copayCap: "",
                });
              }}
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
