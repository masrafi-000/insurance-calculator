import { Card } from "@/components/ui/card";
import GoogleAd from "@/components/ui/google-ad";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AdSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest pl-1">
        Sponsored Partners
      </div>

      {/* Dynamic Google Ad 1 */}
      <GoogleAd
        client="ca-pub-XXXXXXXXXXXXXXXX"
        slot="1234567890"
        className="min-h-[300px]"
      />

      {/* Dynamic Google Ad 2 */}
      <GoogleAd
        client="ca-pub-XXXXXXXXXXXXXXXX"
        slot="0987654321"
        className="min-h-[280px]"
      />

      {/* Internal Banner (Fallback/Promo) */}
      <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all bg-primary/5 shadow-sm hover:shadow-md group relative">
        <Link
          href="/calculate"
          className="absolute inset-0 z-10"
          aria-label="Calculate Now"
        />
        <div className="p-6 flex flex-col items-center text-center gap-3">
          <ShieldAlert className="w-10 h-10 text-primary mb-2" />
          <h4 className="font-bold text-lg leading-tight">
            Are you overpaying?
          </h4>
          <p className="text-sm text-balance text-muted-foreground">
            Run our free impartial analyzer to see if your current policy is
            competitive.
          </p>
          <div className="mt-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Calculate Now
          </div>
        </div>
      </Card>
    </div>
  );
}
