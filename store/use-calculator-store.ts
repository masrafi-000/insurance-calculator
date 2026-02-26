import { create } from "zustand";

export type CalculationResult = {
  annualPremium: number;
  outOfPocket: number;
  reimbursement: number;
  insuranceBalance: number;
  insuranceGains: boolean;
  insuranceLoses: boolean;
  ratio: number;
};

interface CalculatorState {
  result: CalculationResult | null;
  setResult: (result: CalculationResult | null) => void;
  resetCalculator: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  result: null,
  setResult: (result) => set({ result }),
  resetCalculator: () => set({ result: null }),
}));
