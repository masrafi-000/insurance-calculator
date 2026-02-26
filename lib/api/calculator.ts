import { apiClient } from "@/lib/api-client";
import { CalculationResult } from "@/store/use-calculator-store";
import { CalculatorSchema } from "@/validators/zod";

interface CalculateResponse {
  success: boolean;
  data: CalculationResult;
}

export const calculatorApi = {
  calculatePremium: async (
    data: CalculatorSchema,
  ): Promise<CalculationResult> => {
    const response = await apiClient.post<unknown, CalculateResponse>(
      "/calculate",
      data,
    );
    return response.data;
  },
};
