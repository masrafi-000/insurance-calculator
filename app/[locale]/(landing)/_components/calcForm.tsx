"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, Variants } from "framer-motion";
import { HelpCircle, Loader2, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import { useCalculatorStore } from "@/store/use-calculator-store";
import { FranchiseOption } from "@/types/shared";
import { calculatorSchema, CalculatorSchema } from "@/validators/zod";

import { useTranslations } from "next-intl";

export function PrimeCalculatorForm({
  FRANCHISES,
}: {
  FRANCHISES: FranchiseOption[];
}) {
  const t = useTranslations("Calculator.Form");
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
      className="bg-[#fcfdfd] border border-slate-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm max-w-5xl mx-auto w-full overflow-hidden"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Header */}
          <motion.div
            variants={formItemVariants}
            className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight mb-1.5 leading-tight">
                {t("title")}
              </h1>
              <p className="text-[14px] sm:text-[15px] text-slate-500">
                {t("subtitle")}
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-slate-700 shadow-sm whitespace-nowrap shrink-0">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              {t("badge")}
            </div>
          </motion.div>

          {/* Section 1 */}
          <motion.div variants={formItemVariants}>
            <p className="text-[15px] font-bold text-slate-800 mb-4">
              {t("section1Title")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields.firstName.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields.firstName.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields.firstName.placeholder")}
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
                        {t("fields.lastName.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields.lastName.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields.lastName.placeholder")}
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
                        {t("fields.email.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields.email.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields.email.placeholder")}
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
                        {t("fields.phoneNumber.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields.phoneNumber.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields.phoneNumber.placeholder")}
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
                        {t("fields.dateOfBirth.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields.dateOfBirth.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields.dateOfBirth.placeholder")}
                        maxLength={4}
                        className="rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base"
                        {...field}
                      />
                    </FormControl>
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
              {t("section2Title")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Canton */}
              <FormField
                control={form.control}
                name="canton"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.canton.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.canton.tooltip")}
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
                          {(
                            t.raw("fields2.canton.options") as {
                              value: string;
                              label: string;
                            }[]
                          ).map((c) => (
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.monthlyPremium.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.monthlyPremium.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields2.monthlyPremium.placeholder")}
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.deductible.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.deductible.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.medicalExpenses.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.medicalExpenses.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields2.medicalExpenses.placeholder")}
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.copayCap.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.copayCap.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        placeholder={t("fields2.copayCap.placeholder")}
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.model.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.model.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-11 px-4 shadow-none focus-visible:ring-1 focus-visible:ring-blue-500 text-base bg-white">
                          <SelectValue
                            placeholder={t("fields2.model.placeholder")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl">
                        {([0, 1, 2, 3] as const).map((i) => (
                          <SelectItem
                            key={i}
                            value={
                              [
                                "Standard",
                                "Family Doctor",
                                "Telmod",
                                "HMO/Network",
                              ][i]
                            }
                            className="rounded-lg cursor-pointer"
                          >
                            {t(`fields2.model.options.${i}`)}
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.adults.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.adults.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder={t("fields2.adults.placeholder")}
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
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                        {t("fields2.children.label")}
                      </FormLabel>
                      <div className="relative group flex items-center">
                        <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                          {t("fields2.children.tooltip")}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder={t("fields2.children.placeholder")}
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
                  <FormItem className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-sm hover:border-slate-300 transition-colors flex flex-row items-center justify-between gap-4 space-y-0">
                    <div className="space-y-1 leading-none min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <FormLabel className="text-[15px] font-bold text-slate-800 m-0">
                          {t("fields2.accident.label")}
                        </FormLabel>
                        <div className="relative group flex items-center shrink-0">
                          <HelpCircle className="w-[18px] h-[18px] text-blue-400 fill-blue-50/50 cursor-help" />
                          <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3.5 bg-[#1e2329] text-white text-[13.5px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none">
                            {t("fields2.accident.tooltip")}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[13px] text-slate-500 leading-relaxed">
                        {t("fields2.accident.description")}
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="shrink-0"
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
              {t("buttons.calculate")}
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
                  dateOfBirth: "1990",
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
              {t("buttons.example")}
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
              {t("buttons.reset")}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
