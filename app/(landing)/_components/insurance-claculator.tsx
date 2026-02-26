"use client";

import { CANTONS, FRANCHISES } from "@/data/shared";
import { PrimeCalculatorForm } from "./calcForm";

export default function InsuranceClaculator() {
  return (
    <div className=" text-[#2C2C2E] text-3xl bg-linear-to-br from-slate-50 via-blue-50/30 rounded-2xl to-slate-100 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[400px] rounded-full bg-blue-300/10 blur-[90px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-200/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl  mx-auto px-4 py-6">
        <PrimeCalculatorForm CANTONS={CANTONS} FRANCHISES={FRANCHISES} />
      </div>
    </div>
  );
}
