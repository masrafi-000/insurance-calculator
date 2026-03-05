"use client";

import { FRANCHISES } from "@/data/shared";
import { useCalculatorStore } from "@/store/use-calculator-store";
import { PrimeCalculatorForm } from "./calcForm";
import { EmptyResponse } from "./emptyResponse";
import { ResultDisplay } from "./ResultDisplay";

export default function InsuranceCalculator() {
  const result = useCalculatorStore((state) => state.result);

  return (
    <div id="calculator" className="w-full relative rounded-2xl">
      <div className="relative z-10 w-full mb-8">
        <PrimeCalculatorForm FRANCHISES={FRANCHISES} />
      </div>
      <div className="relative z-10 w-full rounded-2xl ">
        {result ? <ResultDisplay result={result} /> : <EmptyResponse />}
      </div>
    </div>
  );
}
