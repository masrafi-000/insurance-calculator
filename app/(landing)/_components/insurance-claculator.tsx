import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Calculator } from "lucide-react";
import AdSidebar from "./ad-sidebar";

export default function InsuranceCalculator() {
  return (
    <Section
      id="calculator"
      className="bg-background border-t border-border/50"
    >
      <Container className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Main Content Area: Calculator */}
        <main className="flex-1 w-full flex flex-col border border-border/50 shadow-sm rounded-[2rem] overflow-hidden bg-muted/20 md:p-10 p-6 min-h-[600px] relative">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto relative z-10 w-full flex-1">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-inner">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
              Smart Premium Analyzer
            </h2>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed mb-10">
              Input your current policy details below to receive an instant,
              unbiased analysis of your insurance profitability.
            </p>

            {/* Placeholder form / interface */}
            <div className="w-full bg-background border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="h-12 bg-muted/40 rounded-lg animate-pulse w-full"></div>
                  <div className="h-12 bg-muted/40 rounded-lg animate-pulse w-full"></div>
                </div>
                <div className="h-12 bg-muted/40 rounded-lg animate-pulse w-full"></div>
                <div className="h-24 bg-muted/40 rounded-lg animate-pulse w-full"></div>
                <div className="h-14 bg-primary/20 rounded-xl animate-pulse w-full mt-4"></div>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar Area: Google Ads */}
        <aside className="w-full lg:w-[320px] xl:w-[350px] shrink-0 lg:sticky lg:top-24">
          <AdSidebar />
        </aside>
      </Container>
    </Section>
  );
}
