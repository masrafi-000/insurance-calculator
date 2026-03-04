"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion, Variants } from "framer-motion";
import { CalendarIcon, HelpCircle, Loader2, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useCalculatorMutation } from "@/hooks/queries/use-calculator-mutation";
import { cn } from "@/lib/utils";
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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dateOfBirth: "",
      email: "",
      canton: "",
      monthlyPremium: "",
      deductible: "",
      medicalExpenses: "",
      copayCap: "",
      model: "Standard",
      adults: "1",
      children: "0",
      accident: false,
    },
  });

  const onSubmit = (data: CalculatorSchema) => {
    mutate(data);
  };

  const formContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <motion.div
      variants={formContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#fcfdfd] border border-slate-100 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm max-w-5xl mx-auto w-full"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Header */}
          <motion.div
            variants={formItemVariants}
            className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div>
              <h1 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-1.5 leading-tight">
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
          </motion.div>

          {/* Section 1 */}
          <motion.div variants={formItemVariants}>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              1) Info to receive your results via email
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        First Name *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-xs sm:w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          Just for personalized summary.
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="John"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Last Name *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-xs sm:w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          Just for personalized summary
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Doe"
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
                name="email"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Email *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-xs sm:w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          We need your email to send your customized calculation
                          results.
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Phone Number *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-xs sm:w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          Just for personalized summary.
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="123456789"
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
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Date of Birth *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-xs sm:w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          Your birth date helps estimate age-related premiums.
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base font-normal bg-white justify-start text-left",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 rounded-xl"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) =>
                            field.onChange(date ? date.toISOString() : "")
                          }
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          captionLayout="dropdown"
                          className="bg-white rounded-xl w-full"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          <motion.div
            variants={formItemVariants}
            className="h-px bg-slate-100 w-full"
          />

          {/* Section 2 */}
          <motion.div variants={formItemVariants}>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              2) Your numbers (instant calculation + email)
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {/* Other fields unchanged except tooltip width adjustments */}

              <FormField
                control={form.control}
                name="canton"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Canton *
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[90vw] max-w-sm sm:w-64 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          Allows for customization of offers and comparisons
                          (premiums vary by canton).
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue placeholder="Jura (JU)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl max-h-[300px]">
                        <ScrollArea className="h-60 sm:h-72 w-full">
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

              {/* Monthly Premium */}

              <FormField
                control={form.control}
                name="monthlyPremium"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Monthly Payment (CHF)
                    </FormLabel>
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

              {/* Deductible */}
              <FormField
                control={form.control}
                name="deductible"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Annual Deductible (CHF)
                    </FormLabel>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue placeholder="2'500" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl max-h-[300px]">
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

              {/* Medical Expenses */}
              <FormField
                control={form.control}
                name="medicalExpenses"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Total Medical Expenses (CHF)
                    </FormLabel>
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

              {/* Copay */}
              <FormField
                control={form.control}
                name="copayCap"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Co-insurance (CHF)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="700"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Model Select */}
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Insurance Model *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue placeholder="Standard" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl">
                        {[
                          "Standard",
                          "Family Doctor",
                          "Telmod",
                          "HMO/Network",
                        ].map((m) => (
                          <SelectItem
                            key={m}
                            value={m}
                            className="rounded-lg cursor-pointer"
                          >
                            {m}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Number of Adults */}
              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Number of Adults (18+) *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="1"
                        min="0"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Number of Children */}
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <FormLabel className="text-[15px] font-bold text-slate-800 mb-2.5 block">
                      Number of Children (0-18) *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        min="0"
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Accident Coverage */}
              <FormField
                control={form.control}
                name="accident"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-row items-center justify-between space-x-3 space-y-0">
                    <div className="space-y-1 leading-none mr-2">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        Include Accident Coverage?
                      </FormLabel>
                      <p className="text-[13px] text-slate-500 leading-relaxed max-w-[200px] sm:max-w-xs">
                        Usually covered by employer if you work more than
                        8h/week.
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={formItemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2"
          >
            <Button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Calculate + Send
              {isPending ? (
                <Loader2 className="ml-2 size-5 animate-spin" />
              ) : (
                <SendHorizonal className="ml-2 size-5" />
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-slate-200 rounded-full px-6 py-6 text-[15px] font-bold shadow-sm transition-colors"
              onClick={() => {
                const exampleData = {
                  email: "example@health.ch",
                  canton: "GE",
                  monthlyPremium: "380",
                  deductible: "2500",
                  medicalExpenses: "1200",
                  copayCap: "700",
                  firstName: "John",
                  lastName: "Doe",
                  phoneNumber: "123456789",
                  dateOfBirth: "1990-01-01T00:00:00.000Z",
                  model: "Standard" as const,
                  adults: "1",
                  children: "0",
                  accident: false,
                };

                // Fill the form visually
                Object.entries(exampleData).forEach(([key, value]) => {
                  form.setValue(key as keyof CalculatorSchema, value);
                });

                // Trigger the API call immediately
                onSubmit(exampleData);
              }}
            >
              Example
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-6 text-[15px] font-bold shadow-sm transition-colors"
              onClick={() => {
                resetCalculator();
                form.reset({
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  dateOfBirth: "",
                  email: "",
                  canton: "",
                  monthlyPremium: "",
                  deductible: "",
                  medicalExpenses: "",
                  copayCap: "",
                  model: "Standard",
                  adults: "1",
                  children: "0",
                  accident: false,
                });
              }}
            >
              Reset
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
