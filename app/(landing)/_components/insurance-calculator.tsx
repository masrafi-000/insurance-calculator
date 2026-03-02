"use client";

import { CANTONS, FRANCHISES } from "@/data/shared";
import { useCalculatorStore } from "@/store/use-calculator-store";
import { motion } from "framer-motion";
import { PrimeCalculatorForm } from "./calcForm";
import { EmptyResponse } from "./emptyResponse";
import { ResultDisplay } from "./ResultDisplay";

export default function InsuranceCalculator() {
  const result = useCalculatorStore((state) => state.result);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full relative rounded-2xl"
    >
      <div className="relative z-10 w-full mb-8">
        <PrimeCalculatorForm CANTONS={CANTONS} FRANCHISES={FRANCHISES} />
      </div>
      <div className="relative z-10 w-full rounded-2xl ">
        {result ? <ResultDisplay result={result} /> : <EmptyResponse />}
      </div>
    </motion.div>
  );
}
