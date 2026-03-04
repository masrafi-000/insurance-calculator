import { create } from "zustand";

export type CalculationResult = {
  // Outcome Engine
  annualPremium: number;
  outOfPocket: number;
  reimbursement: number;
  insuranceBalance: number;
  insuranceGains: boolean;
  insuranceLoses: boolean;
  ratio: number;

  // Premium Engine
  age?: number | null;
  ageGroup?: string;
  baseMonthlyTotal?: number;
  lowestMonthly?: number;
  lowestYearly?: number;
  currentMonthly?: number;
  currentYearly?: number;
  diffMonthly?: number;
  diffYearly?: number;

  redirectUrl?: string;
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
