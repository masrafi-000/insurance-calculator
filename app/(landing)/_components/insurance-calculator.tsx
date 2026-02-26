"use client";

import { CANTONS, FRANCHISES } from "@/data/shared";
import { motion } from "framer-motion";
import { useState } from "react";
import { CalculationResult, PrimeCalculatorForm } from "./calcForm";
import { EmptyResponse } from "./emptyResponse";
import { ResultDisplay } from "./ResultDisplay";

export default function InsuranceCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full relative rounded-full p-4 "
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[500px] rounded-full bg-blue-400/20 blur-[100px]" />
        <div className="absolute -bottom-24 -right-20 w-[700px] h-[400px] rounded-full bg-blue-300/20 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full mb-8">
        <PrimeCalculatorForm
          CANTONS={CANTONS}
          FRANCHISES={FRANCHISES}
          onResult={setResult}
        />
      </div>
      <div className="relative z-10 w-full rounded-2xl ">
        {result ? <ResultDisplay result={result} /> : <EmptyResponse />}
      </div>
    </motion.div>
  );
}
