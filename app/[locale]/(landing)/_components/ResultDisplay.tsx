import { CalculationResult } from "@/store/use-calculator-store";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartPulse,
  HelpCircle,
  PiggyBank,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {/* Metric 0: Monthly Simulation */}
        {result.lowestMonthly !== undefined && (
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100">
                  <Wallet className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Simulated Premium
                    </p>
                    <div className="relative group flex items-center">
                      <HelpCircle className="w-[14px] h-[14px] text-blue-400 fill-blue-50/50 cursor-help" />
                      <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none text-center">
                        The estimated optimal premium based on your selected
                        canton and model.
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {result.lowestMonthly}{" "}
                      <span className="text-lg font-bold opacity-70">
                        CHF/mo
                      </span>
                    </span>
                    <span className="text-sm font-medium text-slate-400 line-through">
                      ({result.currentMonthly} CHF)
                    </span>
                  </div>
                </div>
              </div>

              {result.diffMonthly !== undefined && (
                <div
                  className={`px-4 py-3 rounded-xl flex items-center gap-2 border ${result.diffMonthly > 0 ? "bg-emerald-50 border-emerald-100 text-emerald-700" : "bg-red-50 border-red-100 text-red-700"}`}
                >
                  {result.diffMonthly > 0 ? (
                    <TrendingDown className="w-5 h-5" />
                  ) : (
                    <TrendingUp className="w-5 h-5" />
                  )}
                  <div>
                    <div className="font-bold whitespace-nowrap">
                      {Math.abs(result.diffMonthly)} CHF/month{" "}
                      {result.diffMonthly > 0 ? "Cheaper" : "More Expensive"}
                    </div>
                    <div className="text-md opacity-80 mt-0.5">
                      {result.diffMonthly > 0
                        ? `You could save ${Math.abs(result.diffYearly || 0)} CHF per year`
                        : `${Math.abs(result.diffYearly || 0)} CHF/year`}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Metric 1 */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <PiggyBank className="w-4 h-4 text-blue-500" />
            </div>
            <span className="font-semibold text-[14px]">Annual Premium</span>
            <div className="relative group flex items-center">
              <HelpCircle className="w-[16px] h-[16px] text-blue-400 fill-blue-50/50 cursor-help" />
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none text-center">
                Total premiums paid over 12 months.
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
              </div>
            </div>
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
            <span className="font-semibold text-[14px]">
              Total participation
            </span>
            <div className="relative group flex items-center">
              <HelpCircle className="w-[16px] h-[16px] text-blue-400 fill-blue-50/50 cursor-help" />
              <div className="absolute bottom-full mb-2.5 right-0 translate-x-1/4 sm:left-1/2 sm:-translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none text-center">
                Amount paid by you: deductible + 10% of the costs (max 700 CHF).
                <div className="absolute -bottom-1.5 right-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
              </div>
            </div>
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
            <span className="font-semibold text-[14px]">Refund</span>
            <div className="relative group flex items-center">
              <HelpCircle className="w-[16px] h-[16px] text-blue-400 fill-blue-50/50 cursor-help" />
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none text-center">
                Rebustment Amount by the insurance after participation
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
              </div>
            </div>
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
            <span className="font-semibold text-[14px]">
              Reimbursement/premium ratio
            </span>
            <div className="relative group flex items-center">
              <HelpCircle className="w-[16px] h-[16px] text-blue-400 fill-blue-50/50 cursor-help" />
              <div className="absolute bottom-full mb-2.5 right-0 translate-x-1/4 sm:left-1/2 sm:-translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 p-3 bg-[#1e2329] text-white text-[13px] rounded-xl shadow-xl z-50 font-medium leading-relaxed pointer-events-none text-center">
                Percentage of your bonus actually recovered through refunds
                <div className="absolute -bottom-1.5 right-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-[#1e2329] rotate-45 rounded-sm"></div>
              </div>
            </div>
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
