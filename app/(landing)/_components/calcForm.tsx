"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
      loyerMensuel: "",
      revenuMensuel: "",
    },
  });

  const onSubmit = (data: CalculatorSchema) => {
    console.log("Validated Data:", data);

    // এখানে API call, email trigger, calculation logic যাবে
  };

  return (
    <div className="bg-white/60 border border-white/70 rounded-[26px] p-8 shadow-[0_20px_50px_rgba(59,130,246,0.12)] backdrop-blur-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight leading-tight">
                Calculateur « Prime vs Rentabilité »
              </h1>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                {`  Tu reçois aussi le résultat par email, et il s'affiche immédiatement ici.`}
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="w-full h-auto">
            <p className="text-[12px] font-black uppercase tracking-widest text-blue-400 mb-3.5">
              1) Infos pour recevoir le résultat par email
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: nom@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="canton"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Canton</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-auto">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CANTONS.map((c: CantonOption) => (
                          <SelectItem key={c.value} value={c.value}>
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

          {/* Section 2 */}
          <div>
            <p className="text-[12px] font-black uppercase tracking-widest text-blue-400 mb-3.5">
              2) Tes chiffres (calcul immédiat + envoi email)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="primeMensuelle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prime mensuelle</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 380" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="franchise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Franchise</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-auto">
                          <SelectValue placeholder="Choisir" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {FRANCHISES.map((f: FranchiseOption) => (
                          <SelectItem key={f.value} value={f.value}>
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
                name="loyerMensuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loyer mensuel</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 1200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="revenuMensuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Revenu mensuel</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 4500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Calculer</Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                form.reset({
                  email: "",
                  canton: "",
                  primeMensuelle: "",
                  franchise: "",
                  loyerMensuel: "",
                  revenuMensuel: "",
                })
              }
            >
              Reset
            </Button>
          </div>

          <p className="text-center text-xs text-slate-400">
            {`Outil informatif – ne constitue pas un conseil en assurance.`}
          </p>
        </form>
      </Form>
    </div>
  );
}
