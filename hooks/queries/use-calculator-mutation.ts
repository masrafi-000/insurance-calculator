import { calculatorApi } from "@/lib/api/calculator";
import { AppError } from "@/lib/errors/app-error";
import { CalculationResult, useCalculatorStore } from "@/store/use-calculator-store";
import { CalculatorSchema } from "@/validators/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCalculatorMutation = () => {
  const setResult = useCalculatorStore((state) => state.setResult);

  return useMutation({
    mutationFn: (data: CalculatorSchema) =>
      calculatorApi.calculatePremium(data),
    onSuccess: (data: CalculationResult) => {
      setResult(data);
      toast.success("Calculation complete!", {
        description: "Your insurance results have been generated.",
      });

      if (data.redirectUrl && data.redirectUrl !== "/") {
        window.location.href = data.redirectUrl;
      }
    },
    onError: (error: AppError) => {
      console.error("Calculation failed:", error);
      toast.error("Calculation failed", {
        description: error.message || "Please check your inputs and try again.",
      });
    },
  });
};
