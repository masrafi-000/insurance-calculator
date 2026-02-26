"use client";

import Section from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Container from "../../../components/ui/container";

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const wordVars = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const renderAnimatedText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVars}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <Section className="relative overflow-hidden bg-background pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-base mb-8 shadow-sm"
          >
            <ShieldCheck className="size-6" />
            <span>Swiss Standard Insurance Checking</span>
          </motion.div>

          {/* Heading Word-by-Word */}
          <motion.h1
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight"
          >
            {renderAnimatedText("Are You Optimizing the Value of Your")}
            <motion.span
              variants={wordVars}
              className="text-primary inline-block mr-2"
            >
              Insurance
            </motion.span>
            {renderAnimatedText("Strategy")}
          </motion.h1>

          <motion.p
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl leading-relaxed"
          >
            {renderAnimatedText(
              "Transform your insurance from a fixed expense into a strategic financial advantage.",
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Share your current insurance details and let our advanced calculator
            analyze if you are getting the best value.
          </motion.p>

          {/* Buttons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12"
          >
            <Link href="/#calculator" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-6 rounded-full group shadow-md"
              >
                Calculate Your Policy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/#how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-6 rounded-full"
              >
                How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm md:text-base font-medium text-muted-foreground"
          >
            {[
              "100% Secure & Confidential",
              "Instant Free Analysis",
              "No Obligation Suggestions",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
