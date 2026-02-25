import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Container from "../../../components/ui/container";
import Section from "../../../components/ui/section";

const Hero = () => {
  return (
    <Section className="relative overflow-hidden bg-background pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28">
      {/* Subtle Background Decoration for a Classic, Reliable Swiss Feel */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-[0.03] pointer-events-none">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#hero-pattern)"></rect>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-base mb-8 shadow-sm">
            <ShieldCheck className="size-6" />
            <span>Swiss Standard Insurance Checking</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            Are You Optimizing the Value of Your{" "}
            <span className="text-primary">Insurance</span> Strategy
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl leading-relaxed">
            Transform your insurance from a fixed expense into a strategic
            financial advantage.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Share your current insurance details and let our advanced calculator
            analyze if you are getting the best value. Discover smarter, more
            profitable alternatives instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12">
            <Link href="/calculate" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-6 rounded-full group shadow-md shadow-primary/20"
              >
                Calculate Your Policy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-6 rounded-full bg-background border-border hover:bg-muted"
              >
                How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm md:text-base font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>100% Secure & Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Instant Free Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No Obligation Suggestions</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
