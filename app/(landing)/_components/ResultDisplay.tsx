import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartPulse,
  PiggyBank,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { CalculationResult } from "./calcForm";

export function ResultDisplay({ result }: { result: CalculationResult }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm max-w-5xl mx-auto overflow-hidden relative"
    >
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[13px] mb-3 border border-emerald-100/50">
            <CheckCircle2 className="w-4 h-4" />
            <span>Calculation Complete</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Profitability Setup
          </h2>
          <p className="text-[15px] text-slate-500 mt-1">
            Based on the information provided, here is your breakdown.
          </p>
        </div>

        {/* Main Verdict Card */}
        <div
          className={`shrink-0 rounded-2xl p-5 border w-full md:w-auto text-center ${
            result.insuranceGains
              ? "bg-red-50 border-red-100 text-red-900"
              : "bg-emerald-50 border-emerald-100 text-emerald-900"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            {result.insuranceGains ? (
              <TrendingDown className="w-5 h-5 text-red-500" />
            ) : (
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            )}
            <span className="font-bold text-[14px] uppercase tracking-wider">
              {result.insuranceGains ? "You Lose" : "You Gain"}
            </span>
          </div>
          <div className="text-3xl font-extrabold">
            {Math.abs(result.insuranceBalance).toLocaleString("en-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            <span className="text-lg font-bold opacity-70">CHF</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <PiggyBank className="w-4 h-4 text-blue-500" />
            </div>
            <span className="font-semibold text-[14px]">Annual Premium</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {result.annualPremium.toLocaleString("en-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            <span className="text-sm text-slate-500 font-normal">CHF</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <ShieldAlert className="w-4 h-4 text-orange-500" />
            </div>
            <span className="font-semibold text-[14px]">Out of Pocket</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {result.outOfPocket.toLocaleString("en-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            <span className="text-sm text-slate-500 font-normal">CHF</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <HeartPulse className="w-4 h-4 text-rose-500" />
            </div>
            <span className="font-semibold text-[14px]">Reimbursement</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {result.reimbursement.toLocaleString("en-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            <span className="text-sm text-slate-500 font-normal">CHF</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <TrendingUp className="w-4 h-4 text-indigo-500" />
            </div>
            <span className="font-semibold text-[14px]">Ratio</span>
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {result.ratio.toFixed(1)}
            <span className="text-sm text-slate-500 font-normal">%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
