import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Calculator } from "lucide-react";

export function EmptyResponse() {
  return (
    <Empty className="min-h-[300px] my-4 bg-[#fcfdfd] border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm max-w-5xl mx-auto">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="bg-blue-50 text-blue-500 w-16 h-16 rounded-2xl mb-4 shadow-sm border border-blue-100/50"
        >
          <Calculator className="w-8 h-8" />
        </EmptyMedia>
        <EmptyTitle className="text-[22px] font-extrabold text-slate-900 mt-2">
          No results yet
        </EmptyTitle>
        <EmptyDescription className="text-[15px] text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
          Fill out the form above and click &quot;Calculate + Send&quot; to
          discover your profitability and see the detailed analysis.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
