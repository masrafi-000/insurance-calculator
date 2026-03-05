"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { steps } from "@/data/shared";
import { ITSteps } from "@/types/shared";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/30 overflow-hidden">
      <Container>
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line Animation */}
          <motion.div
            className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-border/80 border-dashed border-t-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />

          {steps.map((step: ITSteps, index: number) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
              }} // Staggered delay
            >
              {/* Step Number Badge */}
              <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 text-6xl font-black text-primary/5 opacity-50 group-hover:text-primary/10 transition-colors pointer-events-none">
                {step.id}
              </div>

              {/* Icon Circle */}
              <motion.div
                className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/20 shadow-sm flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
