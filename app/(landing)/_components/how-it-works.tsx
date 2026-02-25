import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { steps } from "@/data/shared";
import { ITSteps } from "@/types/shared";
import { ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/30 border-t border-b">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Simple & Transparent</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            How the Calculator Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uncover the true value of your insurance in three simple steps. No
            hidden fees, no commitments. Just pure calculation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-border/80 border-dashed border-t-2" />

          {steps.map((step: ITSteps) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 text-6xl font-black text-primary/5 opacity-50 group-hover:text-primary/10 transition-colors pointer-events-none">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/20 shadow-sm flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
