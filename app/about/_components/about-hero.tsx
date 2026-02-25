import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Info } from "lucide-react";

export default function AboutHero() {
  return (
    <Section className="relative overflow-hidden bg-background pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 translate-y-12 -translate-x-1/3 opacity-[0.03] pointer-events-none">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="about-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#about-pattern)"></rect>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Info className="w-4 h-4" />
            <span>Who We Are</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            Empowering You Through{" "}
            <span className="text-primary">Transparent</span> Insurance
            Comparisons
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            We are dedicated to bringing clarity to the Swiss insurance market,
            making sure you never overpay for your coverage.
          </p>
        </div>
      </Container>
    </Section>
  );
}
